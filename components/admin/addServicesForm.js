"use client";

import Button from "@/components/shared/button";
import { Input } from "@/components/shared/input";
import { auth } from "@/configs/firebase";
import { useState } from "react";
import { toast } from "sonner";

export default function AddServicesForm() {
    const [form, setForm] = useState({
        title: "",
        iconCode: "",
    });

    const [highlights, setHighlights] = useState([
        "",
    ]);

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleHighlightChange = (index, value) => {
        setHighlights((prev) =>
            prev.map((item, i) =>
                i === index ? value : item
            )
        );
    };

    const addHighlight = () => {
        setHighlights((prev) => [
            ...prev,
            "",
        ]);
    };

    const removeHighlight = (index) => {
        setHighlights((prev) =>
            prev.filter((_, i) => i !== index)
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const cleanHighlights = highlights
            .map((item) => item.trim())
            .filter((item) => item !== "");

        if (cleanHighlights.length === 0) {
            toast.error("Please add at least one highlight");
            return;
        }

        try {
            setLoading(true);

            const user = auth.currentUser;

            if (!user) {
                throw new Error("Not authenticated");
            }

            const token = await user.getIdToken();

            const formData = new FormData();

            formData.append("title", form.title);
            formData.append("iconCode", form.iconCode);

            formData.append(
                "highlights",
                JSON.stringify(cleanHighlights)
            );

            const response = await fetch(
                process.env.NEXT_PUBLIC_API_URL+"/admin/addService.php",
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
                    data.error || "Failed to add service"
                );
            }

            toast.success("Service added successfully");

            setForm({
                title: "",
                iconCode: "",
            });

            setHighlights([""]);

            e.target.reset();

        } catch (error) {
            console.error(error);

            toast.error(
                error.message || "Something went wrong"
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
            <div className="grid grid-cols-2 gap-5">

                {/* Title */}
                <div>
                    <label className="mb-2 block">
                        Service Title
                    </label>

                    <Input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        required
                        className="w-full border p-2"
                        placeholder="Enter service title"
                    />
                </div>

                {/* Icon Code */}
                <div>
                    <label className="mb-2 block">
                        Icon Code
                    </label>

                    <Input
                        type="text"
                        name="iconCode"
                        value={form.iconCode}
                        onChange={handleChange}
                        className="w-full border p-2"
                        placeholder="Optional icon code"
                    />
                </div>

            </div>

            {/* Highlights */}
            <div className="space-y-5">

                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-semibold">
                            Highlights
                        </h2>

                        <p className="text-sm text-gray-500">
                            Add service highlights.
                        </p>
                    </div>

                    <Button
                        type="button"
                        onClick={addHighlight}
                        className="px-4 py-2 text-primary-dark"
                    >
                        + Add Highlight
                    </Button>
                </div>

                <div className="space-y-4">

                    {highlights.map((highlight, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3"
                        >
                            <Input
                                type="text"
                                value={highlight}
                                onChange={(e) =>
                                    handleHighlightChange(
                                        index,
                                        e.target.value
                                    )
                                }
                                required
                                className="w-full"
                                placeholder={`Highlight ${index + 1}`}
                            />

                            {highlights.length > 1 && (
                                <Button
                                    type="button"
                                    onClick={() =>
                                        removeHighlight(index)
                                    }
                                    className="shrink-0 px-4 py-2"
                                >
                                    Remove
                                </Button>
                            )}
                        </div>
                    ))}

                </div>
            </div>

            <Button
                type="submit"
                disabled={loading}
                className="px-6 py-3 text-primary-dark"
            >
                {loading
                    ? "Adding..."
                    : "Add Service"}
            </Button>
        </form>
    );
}