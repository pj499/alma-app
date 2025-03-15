"use client";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
    const { login } = useAuth();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-6">Login to View Leads</h1>
            <button
                className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
                onClick={login}
            >
                Fake Login
            </button>
        </div>
    );
}
