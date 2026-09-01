"use client";

import Button from "@/components/shared/button";
import { Input } from "@/components/shared/input";
import { Textarea } from "@/components/shared/textarea";
import { auth } from "@/configs/firebase";
import { useState } from "react";
import { toast } from "sonner";

export default function AddEventForm() {
    const [form, setForm] = useState({
        name: "",
    });

    const [paragraphs, setParagraphs] = useState([
        {
            title: "",
            paragraph: "",
        },
    ]);

    const [thumb, setThumb] = useState(null);
    const [loading, setLoading] = useState(false);

    // ---------------------------------------------------------
    // Handle main form fields
    // ---------------------------------------------------------

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    // ---------------------------------------------------------
    // Handle paragraph fields
    // ---------------------------------------------------------

    const handleParagraphChange = (index, e) => {
        const { name, value } = e.target;

        setParagraphs((prev) =>
            prev.map((paragraph, i) =>
                i === index
                    ? {
                          ...paragraph,
                          [name]: value,
                      }
                    : paragraph
            )
        );
    };

    // ---------------------------------------------------------
    // Add paragraph
    // ---------------------------------------------------------

    const addParagraph = () => {
        setParagraphs((prev) => [
            ...prev,
            {
                title: "",
                paragraph: "",
            },
        ]);
    };

    // ---------------------------------------------------------
    // Remove paragraph
    // ---------------------------------------------------------

    const removeParagraph = (index) => {
        setParagraphs((prev) =>
            prev.filter((_, i) => i !== index)
        );
    };

    // ---------------------------------------------------------
    // Submit
    // ---------------------------------------------------------

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!thumb) {
            toast.error("Please select a thumbnail image");
            return;
        }

        // Validate paragraphs
        const hasEmptyParagraph = paragraphs.some(
            (item) =>
                !item.title.trim() ||
                !item.paragraph.trim()
        );

        if (hasEmptyParagraph) {
            toast.error(
                "Please complete all paragraph fields"
            );
            return;
        }

        try {
            setLoading(true);

            // -------------------------------------------------
            // 1. Verify Firebase user
            // -------------------------------------------------

            const user = auth.currentUser;

            if (!user) {
                throw new Error("Not authenticated");
            }

            const token = await user.getIdToken();

            // -------------------------------------------------
            // 2. Create FormData
            // -------------------------------------------------

            const formData = new FormData();

            formData.append("name", form.name);

            // Thumbnail
            formData.append("thumb", thumb);

            // Paragraphs
            formData.append(
                "content",
                JSON.stringify(paragraphs)
            );

            // -------------------------------------------------
            // 3. Send request
            // -------------------------------------------------

            const response = await fetch(
                "http://localhost/paradigm/backend/paradigm-portfolio-backend/query/admin/addBlog.php",
                {
                    method: "POST",

                    headers: {
                        Authorization: `Bearer ${token}`,
                    },

                    body: formData,
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.error ||
                        "Failed to add article"
                );
            }

            // -------------------------------------------------
            // 4. Success
            // -------------------------------------------------

            toast.success(
                "Article added successfully"
            );

            // Reset
            setForm({
                name: "",
            });

            setParagraphs([
                {
                    title: "",
                    paragraph: "",
                },
            ]);

            setThumb(null);

            e.target.reset();

        } catch (error) {
            console.error(error);

            toast.error(
                error.message ||
                    "Something went wrong"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-8"
        >
            {/* ------------------------------------------------ */}
            {/* Article Information */}
            {/* ------------------------------------------------ */}

            <div className="grid grid-cols-2 gap-5">

                {/* Name */}
                <div>
                    <label className="mb-2 block">
                        Article Name
                    </label>

                    <Input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="Enter blog name"
                    />
                </div>

                {/* Thumbnail */}
                <div>
                    <label className="mb-2 block">
                        Thumbnail Image
                    </label>

                    <Input
                        type="file"
                        accept="image/jpeg,image/png,image/webp"
                        onChange={(e) =>
                            setThumb(
                                e.target.files?.[0] ||
                                    null
                            )
                        }
                        required
                        className="w-full"
                    />
                </div>
            </div>

            {/* ------------------------------------------------ */}
            {/* Paragraphs */}
            {/* ------------------------------------------------ */}

            <div className="space-y-5">

                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-semibold">
                            Paragraphs
                        </h2>

                        <p className="text-sm text-gray-500">
                            Add the content sections for
                            this Blog.
                        </p>
                    </div>

                    <Button
                        type="button"
                        onClick={addParagraph}
                        className="px-4 py-2 text-primary-dark"
                    >
                        + Add Paragraph
                    </Button>
                </div>

                {/* Paragraph list */}
                <div className="space-y-5">

                    {paragraphs.map(
                        (item, index) => (
                            <div
                                key={index}
                                className="rounded-lg border border-gray-200 p-5"
                            >
                                <div className="mb-5 flex items-center justify-between">

                                    <h3 className="font-medium">
                                        Paragraph{" "}
                                        {index + 1}
                                    </h3>

                                    {paragraphs.length >
                                        1 && (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                removeParagraph(
                                                    index
                                                )
                                            }
                                            className="text-sm text-red-500 hover:text-red-700"
                                        >
                                            Remove
                                        </button>
                                    )}
                                </div>

                                <div className="space-y-4">

                                    {/* Paragraph Title */}
                                    <div>
                                        <label className="mb-2 block">
                                            Paragraph Title
                                        </label>

                                        <Input
                                            type="text"
                                            name="title"
                                            value={
                                                item.title
                                            }
                                            onChange={(e) =>
                                                handleParagraphChange(
                                                    index,
                                                    e
                                                )
                                            }
                                            required
                                            className="w-full"
                                            placeholder="Enter paragraph title"
                                        />
                                    </div>

                                    {/* Paragraph Content */}
                                    <div>
                                        <label className="mb-2 block">
                                            Paragraph Content
                                        </label>

                                        <Textarea
                                            name="paragraph"
                                            value={
                                                item.paragraph
                                            }
                                            onChange={(e) =>
                                                handleParagraphChange(
                                                    index,
                                                    e
                                                )
                                            }
                                            required
                                            rows={6}
                                            className="w-full"
                                            placeholder="Enter paragraph content..."
                                        />
                                    </div>

                                </div>
                            </div>
                        )
                    )}

                </div>
            </div>

            {/* ------------------------------------------------ */}
            {/* Submit */}
            {/* ------------------------------------------------ */}

            <Button
                type="submit"
                disabled={loading}
                className="px-6 py-3 text-primary-dark"
            >
                {loading
                    ? "Adding..."
                    : "Add Blog"}
            </Button>
        </form>
    );
}