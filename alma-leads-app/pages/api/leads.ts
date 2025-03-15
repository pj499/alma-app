import { NextApiRequest, NextApiResponse } from "next";

let leads = [
    { id: 1, name: "Jorge Ruiz", submitted: "02/02/2024, 2:45 PM", status: "Pending", country: "Mexico" },
    { id: 2, name: "Bahar Zamir", submitted: "02/02/2024, 2:45 PM", status: "Pending", country: "Mexico" },
    { id: 3, name: "Mary Lopez", submitted: "02/02/2024, 2:45 PM", status: "Pending", country: "Brazil" },
    { id: 4, name: "Li Zijin", submitted: "02/02/2024, 2:45 PM", status: "Pending", country: "South Korea" },
    { id: 5, name: "Mark Antonov", submitted: "02/02/2024, 2:45 PM", status: "Pending", country: "Russia" },
    { id: 6, name: "Jane Ma", submitted: "02/02/2024, 2:45 PM", status: "Pending", country: "Mexico" },
    { id: 7, name: "Anand Jain", submitted: "02/02/2024, 2:45 PM", status: "Reached Out", country: "Mexico" },
    { id: 8, name: "Anna Voronova", submitted: "02/02/2024, 2:45 PM", status: "Pending", country: "France" },
    { id: 9, name: "Leo Gallo", submitted: "02/02/2024, 3:00 PM", status: "Pending", country: "Italy" },
    { id: 10, name: "Fatima Hussein", submitted: "02/02/2024, 3:10 PM", status: "Reached Out", country: "UAE" },
    { id: 11, name: "Carlos Mendoza", submitted: "02/02/2024, 3:15 PM", status: "Pending", country: "Argentina" },
    { id: 12, name: "Sofia Petrov", submitted: "02/02/2024, 3:30 PM", status: "Contacted", country: "Russia" },
    { id: 13, name: "Yuki Nakamura", submitted: "02/02/2024, 3:40 PM", status: "Pending", country: "Japan" },
    { id: 14, name: "Ahmed Al-Farsi", submitted: "02/02/2024, 3:45 PM", status: "Interested", country: "Oman" },
    { id: 15, name: "Ethan Williams", submitted: "02/02/2024, 4:00 PM", status: "Pending", country: "USA" },
    { id: 16, name: "Lisa Müller", submitted: "02/02/2024, 4:15 PM", status: "Pending", country: "Germany" },
    { id: 17, name: "Hassan Kabir", submitted: "02/02/2024, 4:30 PM", status: "Follow-up", country: "Pakistan" },
    { id: 18, name: "Nina Rossi", submitted: "02/02/2024, 4:45 PM", status: "Pending", country: "Italy" },
    { id: 19, name: "Elena Sidorova", submitted: "02/02/2024, 5:00 PM", status: "Reached Out", country: "Russia" },
    { id: 20, name: "Lucas Fernandez", submitted: "02/02/2024, 5:10 PM", status: "Pending", country: "Spain" },
    { id: 21, name: "Mia Chen", submitted: "02/02/2024, 5:20 PM", status: "Pending", country: "China" },
    { id: 22, name: "Rajiv Patel", submitted: "02/02/2024, 5:30 PM", status: "Interested", country: "India" },
    { id: 23, name: "Isabelle Laurent", submitted: "02/02/2024, 5:45 PM", status: "Pending", country: "France" },
    { id: 24, name: "Mohammed Salim", submitted: "02/02/2024, 6:00 PM", status: "Follow-up", country: "Saudi Arabia" },
    { id: 25, name: "Emily Johnson", submitted: "02/02/2024, 6:15 PM", status: "Pending", country: "Canada" },
    { id: 26, name: "Kenji Takahashi", submitted: "02/02/2024, 6:30 PM", status: "Pending", country: "Japan" },
    { id: 27, name: "Lina Berg", submitted: "02/02/2024, 6:45 PM", status: "Pending", country: "Sweden" },
    { id: 28, name: "Gabriel Costa", submitted: "02/02/2024, 7:00 PM", status: "Interested", country: "Brazil" },
    { id: 29, name: "Hannah Fischer", submitted: "02/02/2024, 7:15 PM", status: "Pending", country: "Germany" },
    { id: 30, name: "Omar Khalid", submitted: "02/02/2024, 7:30 PM", status: "Contacted", country: "Egypt" },
];


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        return res.status(200).json(leads);
    }

    if (req.method === "PUT") {
        const { id, status } = req.body;
        leads = leads.map(lead => (lead.id === id ? { ...lead, status } : lead));
        return res.status(200).json({ message: "Lead updated successfully" });
    }

    return res.status(405).json({ message: "Method Not Allowed" });
}