"use client";

import Button from "@/components/shared/button";
import { Input } from "@/components/shared/input";
import { Textarea } from "@/components/shared/textarea";
import { auth } from "@/configs/firebase";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function EditArticleForm({
requestTitle,
open,
onClose,
onSuccess,
allowEdit
}) {
const [form, setForm] = useState({
name: "",
});


const [paragraphs, setParagraphs] = useState([
    {
        title: "",
        paragraph: "",
    },
]);

const [blogId, setBlogId] = useState(null);

const [currentThumb, setCurrentThumb] = useState(null);
const [newThumb, setNewThumb] = useState(null);

const [loading, setLoading] = useState(false);
const [saving, setSaving] = useState(false);

// ---------------------------------------------------------
// Load selected blog
// ---------------------------------------------------------

useEffect(() => {
    if (!open || !requestTitle) return;

    const loadBlog = async () => {
        try {
            setLoading(true);

            const user = auth.currentUser;

            if (!user) {
                throw new Error("Not authenticated");
            }

            const token = await user.getIdToken();

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/blog.php?requestTitle=${encodeURIComponent(
                    requestTitle
                )}`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    cache: "no-store",
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.error || "Failed to load article"
                );
            }

            const blog = data;
            setBlogId(blog.id);
            // -------------------------------------------------
            // Article information
            // -------------------------------------------------

            setForm({
                name: blog.name || "",
            });

            // -------------------------------------------------
            // Thumbnail
            // -------------------------------------------------

            setCurrentThumb(blog.thumb || null);

            setNewThumb(null);

            // -------------------------------------------------
            // Paragraphs
            // -------------------------------------------------


let parsedContent = [];
try {
    parsedContent =
        typeof blog.content === "string"
            ? JSON.parse(blog.content)
            : blog.content;

    if (!Array.isArray(parsedContent)) {
        parsedContent = [];
    }
} catch (error) {
    console.error("Failed to parse blog content:", error);
    parsedContent = [];
}
            if (
                Array.isArray(parsedContent) &&
                parsedContent.length > 0
            ) {

                setParagraphs(
                    parsedContent.map((item) => ({
                        title: item.title || "",
                        paragraph: item.paragraph || "",
                    }))
                );
            } else {
                setParagraphs([
                    {
                        title: "",
                        paragraph: "",
                    },
                ]);
            }
        } catch (error) {
            console.error(error);

            toast.error(
                error.message || "Failed to load article"
            );

            onClose();
        } finally {
            setLoading(false);
        }
    };

    loadBlog();
}, [open, requestTitle, onClose]);

// ---------------------------------------------------------
// Main form fields
// ---------------------------------------------------------

const handleChange = (e) => {
    setForm((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
    }));
};

// ---------------------------------------------------------
// Paragraph fields
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
// Save
// ---------------------------------------------------------

const handleSubmit = async (e) => {
    if(allowEdit){
    e.preventDefault();

    // -----------------------------------------------------
    // Validate paragraphs
    // -----------------------------------------------------

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
        setSaving(true);

        // -------------------------------------------------
        // 1. Firebase user
        // -------------------------------------------------

        const user = auth.currentUser;

        if (!user) {
            throw new Error("Not authenticated");
        }

        const token = await user.getIdToken();

        // -------------------------------------------------
        // 2. FormData
        // -------------------------------------------------

        const formData = new FormData();

        // IMPORTANT:
        // The edit operation uses the numeric blog ID.
        //
        // We need the ID returned by blogs.php.
        formData.append("id", blogId);

        // Article name
        formData.append("name", form.name);

        // -------------------------------------------------
        // Thumbnail
        // -------------------------------------------------

        if (newThumb) {
            formData.append("thumb", newThumb);
        }

        // -------------------------------------------------
        // Paragraphs
        // -------------------------------------------------

        formData.append(
            "content",
            JSON.stringify(paragraphs)
        );

        // -------------------------------------------------
        // 3. Send request
        // -------------------------------------------------

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/admin/editArticle.php`,
            {
                method: "POST",

                headers: {
                    Authorization: `Bearer ${token}`,
                },

                body: formData,
            }
        );

        const data = await response.json();

        if (!response.ok || !data.success) {
            throw new Error(
                data.error || "Failed to update article"
            );
        }

        // -------------------------------------------------
        // 4. Success
        // -------------------------------------------------

        toast.success(
            "Article updated successfully"
        );

        onClose();

        if (onSuccess) {
            onSuccess(data.blog);
        }
    } catch (error) {
        console.error(error);

        toast.error(
            error.message ||
                "Something went wrong"
        );
    } finally {
        setSaving(false);
    }
}else{
    toast.error( "you don't have access to Edit article");
}
}

// ---------------------------------------------------------
// Don't render when closed
// ---------------------------------------------------------

if (!open) {
    return null;
}

return (
    <div
        className="fixed inset-0 z-1050 flex items-center justify-center bg-black/60 p-5"
        onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
                onClose();
            }
        }}
    >
        <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-xl bg-primary p-6 shadow-2xl">

            {/* ------------------------------------------------ */}
            {/* Header */}
            {/* ------------------------------------------------ */}

            <div className="mb-6 flex items-center justify-between">

                <div>
                    <h2 className="text-2xl font-semibold text-text-primary">
                        Edit Blog
                    </h2>

                    <p className="mt-1 text-sm text-text-primary">
                        Update article information and content
                    </p>
                </div>

                <button
                    type="button"
                    onClick={onClose}
                    className="text-2xl text-gray-500 hover:text-black"
                >
                    ×
                </button>

            </div>

            {loading ? (
                <div className="flex min-h-[300px] items-center justify-center">
                    <p className="text-gray-500">
                        Loading article...
                    </p>
                </div>
            ) : (
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

                            {currentThumb && (
                                <div className="mb-3">
                                    <p className="mb-2 text-sm text-gray-500">
                                        Current thumbnail
                                    </p>

                                    <img
                                        src={currentThumb}
                                        alt={form.name}
                                        className="h-32 w-52 rounded-lg object-cover"
                                    />
                                </div>
                            )}

                            <Input
                                type="file"
                                accept="image/jpeg,image/png,image/webp"
                                onChange={(e) =>
                                    setNewThumb(
                                        e.target.files?.[0] ||
                                            null
                                    )
                                }
                                className="w-full"
                            />

                            {newThumb && (
                                <p className="mt-2 text-sm text-gray-500">
                                    New image: {newThumb.name}
                                </p>
                            )}
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
                                    Edit or add the content
                                    sections for this blog.
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
                                                    onChange={(
                                                        e
                                                    ) =>
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
                                                    onChange={(
                                                        e
                                                    ) =>
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
                    {/* Footer */}
                    {/* ------------------------------------------------ */}

                    <div className="flex justify-end gap-3 border-t pt-5">

                        <Button
                            type="button"
                            onClick={onClose}
                            disabled={saving}
                            className="px-6 py-3"
                        >
                            Cancel
                        </Button>

                        <Button
                            type="submit"
                            disabled={saving}
                            className="px-6 py-3 text-primary-dark"
                        >
                            {saving
                                ? "Saving..."
                                : "Save Changes"}
                        </Button>

                    </div>

                </form>
            )}

        </div>
    </div>
);

}
