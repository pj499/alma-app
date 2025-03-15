"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Home() {
    const auth = useAuth();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-6 text-slate-800">Welcome to Alma!</h1>
            <div className="space-x-4">
                <Link href="/lead_form">
                    <button className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition cursor-pointer">
                        Lead Form
                    </button>
                </Link>

                {auth.user ? (
                    <Link href="/leads">
                        <button className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition cursor-pointer">
                            View Leads
                        </button>
                    </Link>
                ) : (
                    <button
                        onClick={auth.login}
                        className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bbg-gray-700 transition cursor-pointer">
                        View Leads
                    </button>
                )}
            </div>
        </div>
    );
}
