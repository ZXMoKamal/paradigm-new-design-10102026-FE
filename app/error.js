"use client";

export default function Error({ error }) {
  return (
    <div className="text-center py-20 flex justify-center items-center h-[100vh]">
      <h2 className="text-red-600 text-2xl mb-4">
        Something went wrong
      </h2>
    </div>
  );
}