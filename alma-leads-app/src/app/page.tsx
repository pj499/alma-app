"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import React from "react";

export default function Home() {
    const auth = useAuth();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-b from-[#D9D9A0] via-white to-white">
            <img
                src="https://app.ashbyhq.com/api/images/org-theme-wordmark/7d6b6dba-6b28-4a48-b58b-7178236b4ba7/5d8e748d-c0cc-4a0e-b525-94fa977689a4/59d6773a-8a4a-4d31-806d-047f8cd7885c.png"
                alt="Logo"
                className="mb-32"/>
            <h1 className=" text-2xl font-bold mb-6 text-slate-800">Welcome to Alma!</h1>
            <div className="mt-8 space-x-4">
                <Link href="/lead_form">
                    <button className=" px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700
                transition cursor-pointer">
                        Submit Lead Form
                    </button>
                </Link>

                {auth.user ? (
                    <Link href="/leads">
                        <button className=" px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700
                transition cursor-pointer">
                            Internal Leads (Admin)
                        </button>
                    </Link>
                ) : (
                    <button
                        onClick={auth.login}
                        className=" px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition
                cursor-pointer">
                        Internal Leads (Admin)
                    </button>
                )}
            </div>
        </div>
    );
}
