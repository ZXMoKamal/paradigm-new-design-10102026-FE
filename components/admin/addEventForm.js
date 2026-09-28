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
        description: "",
        client: "",
        location: "",
        date: "",
    });

    const [thumb, setThumb] = useState(null);
    const [sliderImages, setSliderImages] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSliderImages = (e) => {
        setSliderImages(Array.from(e.target.files));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!thumb) {
            toast.error("Please select a thumbnail image");
            return;
        }

        try {
            setLoading(true);

            // ---------------------------------------------
            // 1. Verify Firebase user
            // ---------------------------------------------

            const user = auth.currentUser;

            if (!user) {
                throw new Error("Not authenticated");
            }

            // Get Firebase ID token
            const token = await user.getIdToken();

            // ---------------------------------------------
            // 2. Create FormData
            // ---------------------------------------------

            const formData = new FormData();

            formData.append("name", form.name);
            formData.append("description", form.description);
            formData.append("client", form.client);
            formData.append("location", form.location);
            formData.append("date", form.date);

            // Thumbnail
            formData.append("thumb", thumb);

            // Slider images
            sliderImages.forEach((image) => {
                formData.append("sliderImages[]", image);
            });

            // ---------------------------------------------
            // 3. Send request to PHP
            // ---------------------------------------------

            const response = await fetch(
                "http://localhost/paradigm/backend/paradigm-portfolio-backend/query/admin/addEvent.php",
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
                    data.error || "Failed to add event"
                );
            }

            // ---------------------------------------------
            // 4. Success
            // ---------------------------------------------

            toast.success("Event added successfully");

            // Reset form
            setForm({
                name: "",
                description: "",
                client: "",
                location: "",
                date: "",
            });

            setThumb(null);
            setSliderImages([]);

            e.target.reset();

        } catch (error) {
            console.error(error);
            toast.error(error.message || "Something went wrong");

        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 ">
<div className="grid grid-cols-3 gap-5">
            {/* Name */}
            <div>
                <label>Event Name</label>

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
                <label>Client</label>

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
                <label>Location</label>

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
                <label>Date</label>

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
            <div>
                <label>Thumbnail Image</label>

                <Input
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    onChange={(e) => setThumb(e.target.files[0])}
                    required
                />
            </div>

            {/* Slider Images */}
            <div>
                <label>Slider Images</label>

                <Input
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    multiple
                    onChange={handleSliderImages}
                />
            </div>

            {/* Description */}
            <div className="col-span-2">
                <label>Event Description</label>

                <Textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    rows={10}
                    className="w-full border p-2"
                    placeholder="Enter event description..."
                />
            </div>
</div>
            {/* Submit */}
            <Button
                type="submit"
                disabled={loading}
                className="px-6 py-3 text-primary-dark"
            >
                {loading ? "Adding..." : "Add Event"}
            </Button>

        </form>
    );
}