"use client";

import Button from "../shared/button";

const permissionsConfig = [
    {
        key: "dashboard",
        label: "Dashboard",
        actions: ["view"],
    },
    {
        key: "events",
        label: "Events",
        actions: ["view", "create", "edit", "delete"],
    },
    {
        key: "blog",
        label: "Blog",
        actions: ["view", "create", "edit", "delete"],
    },
    {
        key: "services",
        label: "Services",
        actions: ["view", "create", "edit", "delete"],
    },
    {
        key: "contacts",
        label: "Contacts",
        actions: ["view","create"],
    },
    {
        key: "editPages",
        label: "Edit Pages",
        actions: ["view", "create", "edit", "delete"],
    },
    {
        key: "manageAdmins",
        label: "Manage Admins",
        actions: ["view", "create", "edit", "delete"],
    },
    {
        key: "googleCloude",
        label: "Google Cloud",
        actions: ["view"],
    }
];

const actionLabels = {
    view: "View",
    create: "Create",
    edit: "Edit",
    delete: "Delete",
};

export default function AdminPermissions({
    permissions,
    setPermissions,
}) {
    function isChecked(module, action) {
        return permissions?.[module]?.[action] === true;
    }

    function togglePermission(module, action) {
        setPermissions((current) => ({
            ...current,
            [module]: {
                ...(current[module] || {}),
                [action]: !isChecked(module, action),
            },
        }));
    }

    // function selectAll() {
    //     const result = {};

    //     permissionsConfig.forEach((module) => {
    //         result[module.key] = {};

    //         module.actions.forEach((action) => {
    //             result[module.key][action] = true;
    //         });
    //     });

    //     setPermissions(result);
    // }

    function clearAll() {
        const result = {};

        permissionsConfig.forEach((module) => {
            result[module.key] = {};

            module.actions.forEach((action) => {
                result[module.key][action] = false;
            });
        });

        setPermissions(result);
    }

    function toggleModule(module) {
        const allSelected = module.actions.every((action) =>
            isChecked(module.key, action)
        );

        setPermissions((current) => ({
            ...current,
            [module.key]: Object.fromEntries(
                module.actions.map((action) => [
                    action,
                    !allSelected,
                ])
            ),
        }));
    }

    return (
        <div className="mt-8">

            {/* Header */}
            <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                    <h2 className="text-lg font-semibold text-text-primary">
                        Access Permissions
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        Choose what this administrator can access.
                    </p>
                </div>

                <div className="flex gap-2">
                    {/* <Button
                        type="button"
                        onClick={selectAll}
                        className=""
                    >
                        Select All
                    </Button> */}

                    <Button
                        type="button"
                        onClick={clearAll}
                        className=""
                    >
                        Clear All
                    </Button>
                </div>
            </div>

            {/* Desktop table */}
            <div className="hidden overflow-hidden rounded-xl border border-secondary md:block">
                <table className="w-full border-collapse">

                    <thead>
                        <tr className="bg-secondary">
                            <th className="px-5 py-4 text-left text-sm font-semibold text-primary-dark">
                                Module
                            </th>

                            {["view", "create", "edit", "delete"].map(
                                (action) => (
                                    <th
                                        key={action}
                                        className="px-4 py-4 text-center text-sm font-semibold text-primary-dark"
                                    >
                                        {actionLabels[action]}
                                    </th>
                                )
                            )}
                        </tr>
                    </thead>

                    <tbody>
                        {permissionsConfig.map((module) => (
                            <tr
                                key={module.key}
                                className="border-t border-secondary"
                            >
                                <td className="px-5 py-4">
                                    <button
                                        type="button"
                                        onClick={() => toggleModule(module)}
                                        className="text-left"
                                    >
                                        <p className="font-medium text-secondary">
                                            {module.label}
                                        </p>
                                    </button>
                                </td>

                                {[
                                    "view",
                                    "create",
                                    "edit",
                                    "delete",
                                ].map((action) => (
                                    <td
                                        key={action}
                                        className="px-4 py-4 text-center"
                                    >
                                        {module.actions.includes(action) ? (
                                            <input
                                                type="checkbox"
                                                checked={isChecked(
                                                    module.key,
                                                    action
                                                )}
                                                onChange={() =>
                                                    togglePermission(
                                                        module.key,
                                                        action
                                                    )
                                                }
                                                className="h-4 w-4 cursor-pointer accent-secondary"
                                            />
                                        ) : (
                                            <span className="text-gray-300">
                                                —
                                            </span>
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile */}
            <div className="space-y-3 md:hidden">
                {permissionsConfig.map((module) => (
                    <div
                        key={module.key}
                        className="rounded-xl border border-gray-200 bg-white p-4"
                    >
                        <div className="mb-4">
                            <p className="font-semibold text-primary-dark">
                                {module.label}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            {module.actions.map((action) => (
                                <label
                                    key={action}
                                    className="flex cursor-pointer items-center gap-2 text-sm text-gray-600"
                                >
                                    <input
                                        type="checkbox"
                                        checked={isChecked(
                                            module.key,
                                            action
                                        )}
                                        onChange={() =>
                                            togglePermission(
                                                module.key,
                                                action
                                            )
                                        }
                                        className="h-4 w-4 accent-[#042a37]"
                                    />

                                    {actionLabels[action]}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}