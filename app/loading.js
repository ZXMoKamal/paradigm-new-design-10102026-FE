export default function Loading() {
    return (
        <main className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin" />

                <p className="text-sm text-gray-500">
                    Loading...
                </p>
            </div>
        </main>
    );
}