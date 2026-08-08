"use client";

export default function Error({ error, reset }) {
  return (
    <div className="text-center py-20">
      <h2 className="text-red-600 text-2xl mb-4">
        Something went wrong 😢
      </h2>

      <p className="mb-4">{error.message}</p>

      <button
        onClick={() => reset()}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Try again
      </button>
    </div>
  );
}