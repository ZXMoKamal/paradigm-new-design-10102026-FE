import LinkButton from "@/components/shared/linkButton";

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center">
                <h1 className="text-8xl font-bold">
                    404
                </h1>

                <h2 className="mt-4 text-3xl font-semibold">
                    Page Not Found
                </h2>

                <p className="mt-4 text-gray-500">
                    Sorry, the page you are looking for does not exist.
                </p>

                <LinkButton href="/" className={"inline-block mt-8 px-6 py-3 rounded-lg hover:opacity-80 transition"}>
                    Back to Home
                </LinkButton>
            </div>
        </main>
    );
}