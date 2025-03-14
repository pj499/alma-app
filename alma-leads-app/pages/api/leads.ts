import type { NextApiRequest, NextApiResponse } from "next";

interface Lead {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    website?: string;
    visaCategories?: string[];
    additionalInfo?: string;
    resume?: string | null;
}

let leads: Lead[] = [];

export default function handler(req: NextApiRequest, res: any) {
    if (req.method === "POST") {
        const newLead: Lead = req.body;
        leads.push(newLead);
        return res.status(201).json({ message: "Lead added successfully", newLead });
    }

    if (req.method === "GET") {
        return res.status(200).json(leads);
    }

    return res.status(405).json({ message: "Method Not Allowed" });
}
