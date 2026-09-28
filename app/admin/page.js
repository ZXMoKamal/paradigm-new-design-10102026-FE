import Link from "next/link";

export default function AdminDashboard() {
    return (
        <section className="pt-30 px-20">
            <h1 className="text-3xl font-bold">
                Dashboard
            </h1>

            <p className="mt-2 text-secondary">
                Welcome to Paradigm admin dashboard.
            </p>

            <Link
               
                href={ "/admin/dashboard/" }
                className={ `block rounded-lg px-4 py-3 transition text-text-primary hover:bg-secondary hover:text-primary-dark` }
            >
                Dashboard
            </Link>
        </section>
    );
}