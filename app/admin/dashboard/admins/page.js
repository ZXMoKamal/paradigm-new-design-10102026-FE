"use client";

import AddAdminForm from "@/components/admin/addAdminForm";
import TabNav from "@/components/shared/tabNav";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import { auth } from "@/configs/firebase";

import Trash from "@/components/icons/trash";
import Pencil from "@/components/icons/pencil";
import EditAdminForm from "@/components/admin/editAdminForm";
import { useAdminAuth } from "@/context/adminACLProvider";


export default function Admins() {

    const {
        permissions,
        loading
    } = useAdminAuth();
    
    function hasAccess(module, action) {
    
        if (loading || !permissions) {
            return false;
        }
    
        return permissions?.[module]?.[action] === true;
    }

    const [activeTab, setActiveTab] = useState("add");

    const tabs = [
        {
            label: "Add Admin",
            value: "add",
            content: <AddAdminForm />,
            hasAccess: hasAccess("ManageAdmins","create")
        },
        {
            label: "Admins",
            value: "admins",
            content: <AdminsTable allowEdit={hasAccess("ManageAdmins","edit")} allowDelete={hasAccess("ManageAdmins","delete")}/>,
            hasAccess: hasAccess("ManageAdmins","view")
        },
    ];

    return (
         loading?<span>Loading...</span>:
        <TabNav
            tabs={tabs}
            activeTab={activeTab}
            onChange={setActiveTab}
        />
    );
}






function AdminsTable({allowDelete,allowEdit}) {

    const [admins, setAdmins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deletingUid, setDeletingUid] = useState(null);

    const [selectedAdmin, setSelectedAdmin] = useState(null);
const [showEditAdmin, setShowEditAdmin] = useState(false);


    const getAdmins = async () => {

        try {

            const currentUser = auth.currentUser;

            if (!currentUser) {
                toast.error("You must be logged in");
                return;
            }

            const token = await currentUser.getIdToken();

            const response = await fetch(
                 `${process.env.NEXT_PUBLIC_API_URL}/admin/getAdmins.php`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                toast.error(data.error || "Failed to load admins");
                return;
            }

            setAdmins(data);

        } catch (error) {

            console.error(error);

            toast.error("Failed to load admins");

        } finally {

            setLoading(false);

        }
    };


    useEffect(() => {
        getAdmins();
    }, []);


    const removeAdmin = async (uid) => {

        const confirmed = window.confirm(
            "Are you sure you want to remove this admin?"
        );

        if (!confirmed) {
            return;
        }


        try {

            setDeletingUid(uid);

            const currentUser = auth.currentUser;

            if (!currentUser) {
                toast.error("You must be logged in");
                return;
            }

            const token = await currentUser.getIdToken();

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/admin/deleteAdmin.php?uid=${encodeURIComponent(uid)}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                toast.error(data.error || "Failed to remove admin");
                return;
            }

            toast.success("Admin removed successfully");

            // Remove from table immediately
            setAdmins((prev) =>
                prev.filter((admin) => admin.uid !== uid)
            );

        } catch (error) {

            console.error(error);

            toast.error("Failed to remove admin");

        } finally {

            setDeletingUid(null);

        }
    };


    if (loading) {
        return (
            <div>
                Loading admins...
            </div>
        );
    }


    return (
        <div className="w-full overflow-x-auto">

            <table className="w-full border-collapse">

                <thead>
                    <tr className="border-b">
                        <th className="px-4 py-3 text-left">
                            Name
                        </th>

                        <th className="px-4 py-3 text-left">
                            Email
                        </th>

                        <th className="px-4 py-3 text-left">
                            Action
                        </th>
                        <th className="px-4 py-3 text-left">
                            Created On
                        </th>
                        <th className="px-4 py-3 text-left">
                            Created By
                        </th>
                    </tr>
                </thead>


                <tbody>

                    {admins.length === 0 ? (

                        <tr>
                            <td
                                colSpan={3}
                                className="px-4 py-8 text-center"
                            >
                                No admins found
                            </td>
                        </tr>

                    ) : (

                        admins.map((admin) => (

                            <tr
                                key={admin.uid}
                                className="border-b"
                            >

                                <td className="px-4 py-3">
                                    {admin.name}
                                </td>

                                <td className="px-4 py-3">
                                    {admin.email || "No email"}
                                </td>

                                <td className="px-4 py-3">

                                    {admin.uid === auth.currentUser?.uid ? (

                                        <span className="text-sm">
                                            Current account
                                        </span>

                                    ) : (
<>
                                        {allowEdit && <button
                                        className="p-2 m-2 cursor-pointer"
                                            type="button"
                                            onClick={() =>{
                                                 if (allowEdit && deletingUid !== admin.uid){
                                                    setSelectedAdmin(admin);
                                                    setShowEditAdmin(true);
                                                 }
                                                // removeAdmin(admin.uid)
                                            }}
                                            disabled={
                                                deletingUid === admin.uid
                                            }
                                        >
                                            {<Pencil className={"w-6 h-6 fill-light-blue"}/>}
                                        </button>}
                                        {allowDelete && <button
                                        className="p-2 m-2 cursor-pointer"
                                            type="button"
                                            onClick={() =>{
                                                if(allowDelete && confirm("are you shure to delete")){
                                                    if (deletingUid !== admin.uid)
                                                    removeAdmin(admin.uid)
                                                }
                                            }}
                                            disabled={
                                                deletingUid === admin.uid
                                            }
                                        >
                                            {deletingUid === admin.uid
                                                ? "Removing..."
                                                : <Trash className={"w-6 h-6 fill-light-red"}/>}
                                        </button>}
</>
                                    )}

                                </td>

                                <td className="px-4 py-3">
                                    {admin.createdOn}
                                </td>

                                <td className="px-4 py-3">
                                    {admin.createdBy}
                                </td>

                            </tr>

                        ))

                    )}

                </tbody>

            </table>
                {showEditAdmin && selectedAdmin && (
                    <EditAdminForm
                    allowEdit={allowEdit}
                        admin={selectedAdmin}
                        onClose={() => {
                            setShowEditAdmin(false);
                            setSelectedAdmin(null);
                        }}
                        onUpdated={(updatedAdmin) => {

                            // Refresh your admins list here
                            getAdmins();

                        }}
                    />
                )}
        </div>
    );
}