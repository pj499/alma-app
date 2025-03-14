"use client";
import React, { useState, useEffect } from "react";
import {MaterialReactTable,  MRT_ColumnDef } from "material-react-table";
import { Button, Select, MenuItem, TextField } from "@mui/material";
import { styled } from "@mui/system";
import {useAuth} from "@/context/AuthContext";
import {useRouter} from "next/navigation";

interface Lead {
    id: number;
    name: string;
    submitted: string;
    status: string;
    country: string;
}

const GreenButton = styled(Button)({
    color: "#046135",
    "&:hover": "none",
    textTransform: "none",
    width: "70%"
});

export default function LeadsPage() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const auth = useAuth();
    const router = useRouter();

    useEffect(() => {
        fetch("/api/leads")
            .then(res => res.json())
            .then(data => {
                setLeads(data);
                setLoading(false);
            });
    }, []);



    useEffect(() => {
        if (!auth.user) {
            router.push("/");
        }
    }, [auth.user, router]);

    if (!auth.user) return <p className="text-center mt-10">Redirecting...</p>;

    const updateStatus = async (id: number) => {
        await fetch("/api/leads", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, status: "Reached Out" }),
        });
        setLeads(leads.map(lead => (lead.id === id ? { ...lead, status: "Reached Out" } : lead)));
    };

    const filteredLeads = leads.filter(
        lead =>
            lead.name.toLowerCase().includes(search.toLowerCase()) &&
            (statusFilter ? lead.status === statusFilter : true)
    );

    const columns: MRT_ColumnDef<Lead>[] = [
        { accessorKey: "name", header: "Name" },
        { accessorKey: "submitted", header: "Submitted" },
        { accessorKey: "status", header: "Status" },
        {
            accessorKey: "action",
            header: "Action",
            Cell: ({ row }) => (
                row.original.status === "Pending" ? (
                    <GreenButton  onClick={() => updateStatus(row.original.id)}>
                        Change Status
                    </GreenButton>
                ) : (
                    <GreenButton disabled fullWidth onClick={() => updateStatus(row.original.id)}>
                        Reached Out
                    </GreenButton>
                )
            ),
        },

        { accessorKey: "country", header: "Country" },
    ];

    if (loading) return <p className="text-center mt-10">Loading...</p>;

    return (
        <div className="flex flex-row min-h-screen bg-gray-100 h-full">
            <aside className="w-64 bg-gradient-to-b from-yellow-100 via-white to-transparent shadow-md p-5">

                <img
                    src="https://app.ashbyhq.com/api/images/org-theme-wordmark/7d6b6dba-6b28-4a48-b58b-7178236b4ba7/5d8e748d-c0cc-4a0e-b525-94fa977689a4/59d6773a-8a4a-4d31-806d-047f8cd7885c.png"
                    alt="Logo"
                    className="w-1/3 mt-4"                />
                <nav className="mt-8">
                    <ul>
                        <li className="mb-5 font-semibold text-gray-800 text-xl">Leads</li>
                        <li className="text-gray-600">Settings</li>
                    </ul>
                </nav>
                <div className="absolute bottom-4 flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-500 text-black flex items-center justify-center rounded-full">A</div>
                    <span className="text-gray-800 font-semibold">Admin</span>
                    <button
                        onClick={auth.logout}
                        className="cursor-pointer px-4 py-1 ml-7 text-gray-800 bg-gray-200 size-small rounded-md hover:bg-gray-200  font-bold">
                        Logout
                    </button>
                </div>
            </aside>
            <main className="flex-1 p-6 max-h-full">
                <h2 className="text-2xl font-bold mb-4 text-black">Leads</h2>
                <div className="flex space-x-4 mb-4">
                    <TextField
                        label="Search"
                        variant="outlined"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="w-1/3"
                        sx={{ mr: 3 }}
                        size="small"
                    />
                    <Select
                        value={statusFilter}
                        onChange={e => setStatusFilter(e.target.value)}
                        displayEmpty
                        className="w-40"
                        size="small"
                    >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="Pending">Pending</MenuItem>
                        <MenuItem value="Reached Out">Reached Out</MenuItem>
                    </Select>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <MaterialReactTable
                        columns={columns}
                        data={filteredLeads}
                        enablePagination
                        enableColumnFilters
                        enableSorting
                        muiTableContainerProps={{ sx: { maxHeight: "500px" } }}
                    />
                </div>
            </main>
        </div>
    );
}