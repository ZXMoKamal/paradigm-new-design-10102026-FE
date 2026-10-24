"use client";

import Button from "@/components/shared/button";
import { Input } from "@/components/shared/input";
import { Textarea } from "@/components/shared/textarea";
import { auth } from "@/configs/firebase";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function EditEventForm({ allowEdit, requestTitle, open, onClose, onSuccess }) {
    const [form, setForm] = useState({
        name: "",
        description: "",
        client: "",
        location: "",
        date: "",
    });

    const [eventid, setEventId] = useState(null);

    const [currentThumb, setCurrentThumb] = useState(null);
    const [newThumb, setNewThumb] = useState(null);

    const [currentSliderImages, setCurrentSliderImages] = useState([]);
    const [newSliderImages, setNewSliderImages] = useState([]);

    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);

    // --------------------------------------------------
    // Load selected event
    // --------------------------------------------------

    useEffect(() => {
        if (!open || !requestTitle) return;

        const loadEvent = async () => {
            try {
                setLoading(true);

                const user = auth.currentUser;

                if (!user) {
                    throw new Error("Not authenticated");
                }

                const token = await user.getIdToken();

                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/events.php?requestTitle=${requestTitle}`,
                    {
                        method: "GET",
                        headers: {
                            "ngrok-skip-browser-warning": "true",
                            Authorization: `Bearer ${token}`,
                        },
                        cache: "no-store",
                    }
                );

                
                if (!response.ok) {
                    throw new Error(
                        data.error || "Failed to load event"
                    );
                }
                
                const event = await response.json();

                setEventId(event.id);

                

                setForm({
                    name: event.name || "",
                    description: event.description || "",
                    client: event.client || "",
                    location: event.location || "",
                    date: event.date || "",
                });

                setCurrentThumb(event.thumb || null);

                setCurrentSliderImages(
                    event.images || []
                );

                setNewThumb(null);
                setNewSliderImages([]);

            } catch (error) {
                console.error(error);
                toast.error(
                    error.message || "Failed to load event"
                );
                onClose();
            } finally {
                setLoading(false);
            }
        };

        loadEvent();
    }, [open, requestTitle, onClose]);

    // --------------------------------------------------
    // Form change
    // --------------------------------------------------

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    // --------------------------------------------------
    // New slider images
    // --------------------------------------------------

    const handleSliderImages = (e) => {
        const files = Array.from(e.target.files || []);

        setNewSliderImages((prev) => [
            ...prev,
            ...files,
        ]);

        // Allow selecting the same file again
        e.target.value = "";
    };

    // --------------------------------------------------
    // Remove existing slider image
    // --------------------------------------------------

    const removeCurrentSliderImage = (image) => {
        setCurrentSliderImages((prev) =>
            prev.filter((item) => item !== image)
        );
    };

    // --------------------------------------------------
    // Remove newly selected slider image
    // --------------------------------------------------

    const removeNewSliderImage = (index) => {
        setNewSliderImages((prev) =>
            prev.filter((_, i) => i !== index)
        );
    };

    // --------------------------------------------------
    // Save
    // --------------------------------------------------

    const handleSubmit = async (e) => {
        e.preventDefault();
if(allowEdit){
        try {
            setSaving(true);

            const user = auth.currentUser;

            if (!user) {
                throw new Error("Not authenticated");
            }

            const token = await user.getIdToken();

            const formData = new FormData();

            // Event ID
            formData.append("id", eventid);

            // Text data
            formData.append("name", form.name);
            formData.append("description", form.description);
            formData.append("client", form.client);
            formData.append("location", form.location);
            formData.append("date", form.date);

            // --------------------------------------------------
            // Thumbnail
            // --------------------------------------------------

            if (newThumb) {
                formData.append("thumb", newThumb);
            }

            // --------------------------------------------------
            // Existing slider images that were NOT deleted
            // --------------------------------------------------

            currentSliderImages.forEach((image) => {
                formData.append(
                    "existingSliderImages[]",
                    image
                );
            });

            // --------------------------------------------------
            // New slider images
            // --------------------------------------------------

            newSliderImages.forEach((image) => {
                formData.append(
                    "sliderImages[]",
                    image
                );
            });

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/admin/editEvent.php`,
                {
                    method: "POST",

                    headers: {
                        "ngrok-skip-browser-warning": "true",
                        Authorization: `Bearer ${token}`,
                    },

                    body: formData,
                }
            );

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(
                    data.error || "Failed to update event"
                );
            }

            toast.success("Event updated successfully");

            onClose();

            // Tell parent to reload events
            if (onSuccess) {
                onSuccess(data.event);
            }

        } catch (error) {
            console.error(error);

            toast.error(
                error.message || "Something went wrong"
            );
        } finally {
            setSaving(false);
        }
    }
    };

    // --------------------------------------------------
    // Don't render when closed
    // --------------------------------------------------

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

                {/* Header */}

                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-semibold text-text-primary">
                            Edit Event
                        </h2>

                        <p className="mt-1 text-sm text-text-primary">
                            Update event information and images
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
                            Loading event...
                        </p>
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >

                        {/* -------------------------------- */}
                        {/* Event information */}
                        {/* -------------------------------- */}

                        <div className="grid grid-cols-3 gap-5">

                            {/* Name */}

                            <div>
                                <label className="mb-1 block">
                                    Event Name
                                </label>

                                <Input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full border p-2"
                                />
                            </div>

                            {/* Client */}

                            <div>
                                <label className="mb-1 block">
                                    Client
                                </label>

                                <Input
                                    type="text"
                                    name="client"
                                    value={form.client}
                                    onChange={handleChange}
                                    className="w-full border p-2"
                                />
                            </div>

                            {/* Location */}

                            <div>
                                <label className="mb-1 block">
                                    Location
                                </label>

                                <Input
                                    type="text"
                                    name="location"
                                    value={form.location}
                                    onChange={handleChange}
                                    className="w-full border p-2"
                                />
                            </div>

                            {/* Date */}

                            <div>
                                <label className="mb-1 block">
                                    Date
                                </label>

                                <Input
                                    type="date"
                                    name="date"
                                    value={form.date}
                                    onChange={handleChange}
                                    required
                                    className="w-full border p-2"
                                />
                            </div>

                            {/* Thumbnail */}

                            <div className="col-span-2">
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
                                            e.target.files?.[0] || null
                                        )
                                    }
                                />

                                {newThumb && (
                                    <p className="mt-2 text-sm text-gray-500">
                                        New image: {newThumb.name}
                                    </p>
                                )}
                            </div>

                            {/* Description */}

                            <div className="col-span-3">
                                <label className="mb-1 block">
                                    Event Description
                                </label>

                                <Textarea
                                    name="description"
                                    value={form.description}
                                    onChange={handleChange}
                                    rows={8}
                                    className="w-full border p-2"
                                    placeholder="Enter event description..."
                                />
                            </div>

                        </div>

                        {/* -------------------------------- */}
                        {/* Existing slider images */}
                        {/* -------------------------------- */}

                        <div>
                            <label className="mb-3 block font-medium">
                                Current Slider Images
                            </label>

                            {currentSliderImages.length === 0 ? (
                                <p className="text-sm text-gray-500">
                                    No slider images.
                                </p>
                            ) : (
                                <div className="grid grid-cols-5 gap-4">

                                    {currentSliderImages.map(
                                        (image, index) => (
                                            <div
                                                key={image}
                                                className="relative overflow-hidden rounded-lg border"
                                            >
                                                <img
                                                    src={image}
                                                    alt={`Slider ${index + 1}`}
                                                    className="h-32 w-full object-cover"
                                                />

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        removeCurrentSliderImage(
                                                            image
                                                        )
                                                    }
                                                    className="absolute right-1 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-white"
                                                >
                                                    ×
                                                </button>
                                            </div>
                                        )
                                    )}

                                </div>
                            )}
                        </div>

                        {/* -------------------------------- */}
                        {/* Add slider images */}
                        {/* -------------------------------- */}

                        <div>
                            <label className="mb-2 block">
                                Add Slider Images
                            </label>

                            <Input
                                type="file"
                                accept="image/jpeg,image/png,image/webp"
                                multiple
                                onChange={handleSliderImages}
                            />

                            {newSliderImages.length > 0 && (
                                <div className="mt-4 grid grid-cols-5 gap-4">

                                    {newSliderImages.map(
                                        (image, index) => (
                                            <div
                                                key={`${image.name}-${index}`}
                                                className="relative rounded-lg border p-2 cursor-pointer"
                                            >
                                                <img
                                                    src={URL.createObjectURL(
                                                        image
                                                    )}
                                                    alt={image.name}
                                                    className="h-28 w-full rounded object-cover"
                                                />

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        removeNewSliderImage(
                                                            index
                                                        )
                                                    }
                                                    className="absolute right-1 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-white cursor-pointer"
                                                >
                                                    ×
                                                </button>
                                            </div>
                                        )
                                    )}

                                </div>
                            )}
                        </div>

                        {/* -------------------------------- */}
                        {/* Footer */}
                        {/* -------------------------------- */}

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
