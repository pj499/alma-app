"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LeadsList from "@/components/LeadsList";

export default function LeadsPage() {
    const auth = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!auth.user) {
            router.push("/");
        }
    }, [auth.user, router]);

    if (!auth.user) return <p className="text-center mt-10">Redirecting...</p>;

    return (
        <div className="p-4">
            <LeadsList />
        </div>
    );
}
