"use client";

import Button from "@/components/shared/button";
import { Input } from "@/components/shared/input";
import { auth } from "@/configs/firebase";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function EditServicesForm({
requestTitle,
open,
onClose,
onSuccess,
allowDelete
}) {

const [form, setForm] = useState({
    title: "",
    icon_code: "",
});

const [serviceId, setServiceId] = useState(null);

const [highlights, setHighlights] = useState([""]);

const [loading, setLoading] = useState(false);
const [saving, setSaving] = useState(false);

// ---------------------------------------------------------
// Load selected service
// ---------------------------------------------------------

useEffect(() => {
    if (!open || !requestTitle) return;

    const loadService = async () => {
        try {
            setLoading(true);

            const user = auth.currentUser;

            if (!user) {
                throw new Error("Not authenticated");
            }

            const token = await user.getIdToken();

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/services.php?requestTitle=${encodeURIComponent(
                    requestTitle
                )}`,
                {
                    method: "GET",

                    headers: {
                        "ngrok-skip-browser-warning": "true",
                        Authorization: `Bearer ${token}`,
                    },

                    cache: "no-store",
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.error ||
                        "Failed to load service"
                );
            }

            const service = data;
console.log(data)

            // -------------------------------------------------
            // Service ID
            // -------------------------------------------------

            setServiceId(service.id);

            // -------------------------------------------------
            // Service information
            // -------------------------------------------------

            setForm({
                title: service.title || "",
                icon_code: service.icon_code || "",
            });

            // -------------------------------------------------
            // Highlights
            // -------------------------------------------------

            let parsedHighlights = [];

            try {
                parsedHighlights = service.points;

                if (
                    !Array.isArray(
                        parsedHighlights
                    )
                ) {
                    parsedHighlights = [];
                }
            } catch (error) {
                console.error(
                    "Failed to parse service highlights:",
                    error
                );

                parsedHighlights = [];
            }

            if (
                parsedHighlights.length > 0
            ) {
                setHighlights(
                    parsedHighlights.map(
                        (item) =>
                            typeof item.point ===
                            "string"
                                ? item.point
                                : ""
                    )
                );
            } else {
                setHighlights([""]);
            }

        } catch (error) {
            console.error(error);

            toast.error(
                error.message ||
                    "Failed to load service"
            );

            onClose();

        } finally {
            setLoading(false);
        }
    };

    loadService();

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
// Highlight change
// ---------------------------------------------------------

const handleHighlightChange = (
    index,
    value
) => {
    setHighlights((prev) =>
        prev.map((item, i) =>
            i === index
                ? value
                : item
        )
    );
};

// ---------------------------------------------------------
// Add highlight
// ---------------------------------------------------------

const addHighlight = () => {
    setHighlights((prev) => [
        ...prev,
        "",
    ]);
};

// ---------------------------------------------------------
// Remove highlight
// ---------------------------------------------------------

const removeHighlight = (index) => {
    setHighlights((prev) =>
        prev.filter(
            (_, i) => i !== index
        )
    );
};

// ---------------------------------------------------------
// Save
// ---------------------------------------------------------

const handleSubmit = async (e) => {
    if(allowDelete){
    e.preventDefault();

    // -----------------------------------------------------
    // Validate service ID
    // -----------------------------------------------------

    if (!serviceId) {
        toast.error(
            "Service ID is missing"
        );
        return;
    }

    // -----------------------------------------------------
    // Clean highlights
    // -----------------------------------------------------

    const cleanHighlights =
        highlights
            .map((item) =>
                item.trim()
            )
            .filter(
                (item) => item !== ""
            );

    // -----------------------------------------------------
    // Validate highlights
    // -----------------------------------------------------

    if (
        cleanHighlights.length ===
        0
    ) {
        toast.error(
            "Please add at least one highlight"
        );
        return;
    }

    try {
        setSaving(true);

        // -------------------------------------------------
        // 1. Firebase user
        // -------------------------------------------------

        const user =
            auth.currentUser;

        if (!user) {
            throw new Error(
                "Not authenticated"
            );
        }

        const token =
            await user.getIdToken();

        // -------------------------------------------------
        // 2. Create FormData
        // -------------------------------------------------

        const formData =
            new FormData();

        // Service ID
        formData.append(
            "id",
            serviceId
        );

        // Service information
        formData.append(
            "title",
            form.title
        );

        formData.append(
            "icon_code",
            form.icon_code
        );

        // Highlights
        formData.append(
            "highlights",
            JSON.stringify(
                cleanHighlights
            )
        );

        // -------------------------------------------------
        // 3. Send request
        // -------------------------------------------------

        const response =
            await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/admin/editService.php`,
                {
                    method: "POST",

                    headers: {
                        "ngrok-skip-browser-warning": "true",
                        Authorization: `Bearer ${token}`,
                    },

                    body: formData,
                }
            );

        const data =
            await response.json();

        if (
            !response.ok ||
            !data.success
        ) {
            throw new Error(
                data.error ||
                    "Failed to update service"
            );
        }

        // -------------------------------------------------
        // 4. Success
        // -------------------------------------------------

        toast.success(
            "Service updated successfully"
        );

        onClose();

        if (onSuccess) {
            onSuccess(
                data.service
            );
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
}
};

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
            if (
                e.target ===
                e.currentTarget
            ) {
                onClose();
            }
        }}
    >
        <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl bg-primary p-6 shadow-2xl">

            {/* ------------------------------------------------ */}
            {/* Header */}
            {/* ------------------------------------------------ */}

            <div className="mb-6 flex items-center justify-between">

                <div>
                    <h2 className="text-2xl font-semibold text-text-primary">
                        Edit Service
                    </h2>

                    <p className="mt-1 text-sm text-text-primary">
                        Update service information
                        and highlights
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
                        Loading service...
                    </p>
                </div>
            ) : (
                <form
                    onSubmit={handleSubmit}
                    className="space-y-8"
                >

                    {/* ------------------------------------------------ */}
                    {/* Service Information */}
                    {/* ------------------------------------------------ */}

                    <div className="grid grid-cols-2 gap-5">

                        {/* Title */}

                        <div>
                            <label className="mb-2 block">
                                Service Title
                            </label>

                            <Input
                                type="text"
                                name="title"
                                value={
                                    form.title
                                }
                                onChange={
                                    handleChange
                                }
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
                                name="icon_code"
                                value={
                                    form.icon_code
                                }
                                onChange={
                                    handleChange
                                }
                                className="w-full border p-2"
                                placeholder="Optional icon code"
                            />
                        </div>

                    </div>

                    {/* ------------------------------------------------ */}
                    {/* Highlights */}
                    {/* ------------------------------------------------ */}

                    <div className="space-y-5">

                        <div className="flex items-center justify-between">

                            <div>
                                <h2 className="text-lg font-semibold">
                                    Highlights
                                </h2>

                                <p className="text-sm text-gray-500">
                                    Edit or add service
                                    highlights.
                                </p>
                            </div>

                            <Button
                                type="button"
                                onClick={
                                    addHighlight
                                }
                                className="px-4 py-2 text-primary-dark"
                            >
                                + Add Highlight
                            </Button>

                        </div>

                        {/* Highlight list */}

                        <div className="space-y-4">

                            {highlights.map(
                                (
                                    highlight,
                                    index
                                ) => (
                                    <div
                                        key={
                                            index
                                        }
                                        className="flex items-center gap-3"
                                    >

                                        <Input
                                            type="text"
                                            value={
                                                highlight
                                            }
                                            onChange={(
                                                e
                                            ) =>
                                                handleHighlightChange(
                                                    index,
                                                    e
                                                        .target
                                                        .value
                                                )
                                            }
                                            required
                                            className="w-full"
                                            placeholder={`Highlight ${
                                                index +
                                                1
                                            }`}
                                        />

                                        {highlights.length >
                                            1 && (
                                            <Button
                                                type="button"
                                                onClick={() =>
                                                    removeHighlight(
                                                        index
                                                    )
                                                }
                                                className="shrink-0 px-4 py-2"
                                            >
                                                Remove
                                            </Button>
                                        )}

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
                            onClick={
                                onClose
                            }
                            disabled={
                                saving
                            }
                            className="px-6 py-3"
                        >
                            Cancel
                        </Button>

                        <Button
                            type="submit"
                            disabled={
                                saving
                            }
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
