import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminAuthProvider from "@/context/adminACLProvider";

export default function AdminLayout({ children }) {

    return (
        <AdminAuthProvider>

            {/* <div className=""> */}

                <div className="flex min-h-screen">

                    <AdminSidebar />

                    <main className="flex-1 pb-10 overflow-scroll h-[92vh] mt-[60px] ml-[30px] overflow-x-scroll overflow-y-hidden scrollbar">
                        <div className="min-w-[99%] w-fit flex-1 p-8 ml-[30px] mt-[35px] rounded-tl-2xl h-full overflow-y-scroll overflow-x-visible bg-priamry shadow scrollbar-hide">
                            {children}
                        </div>
                    </main>

                </div>

            {/* </div> */}

        </AdminAuthProvider>
    );
}