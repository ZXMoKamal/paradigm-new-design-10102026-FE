import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminAuthProvider from "@/context/adminACLProvider";

export default function AdminLayout({ children }) {

    return (
        <AdminAuthProvider>

            <div className="min-h-screen">

                <div className="flex">

                    <AdminSidebar />

                    <main className="min-h-screen flex-1 p-8 pt-30 overflow-x-scroll">
                        {children}
                    </main>

                </div>

            </div>

        </AdminAuthProvider>
    );
}