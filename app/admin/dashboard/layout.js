import AdminAuthProvider from "@/components/admin/AdminAuthProvider";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({ children }) {
    return (
        <>
            <AdminAuthProvider>
                <div className="min-h-screen">
                    <div className="flex">
                        <AdminSidebar />

                        <main className="min-h-screen flex-1 p-8 pt-30">
                            { children }
                        </main>
                    </div>
                </div>
            </AdminAuthProvider>
        </>
    );
}