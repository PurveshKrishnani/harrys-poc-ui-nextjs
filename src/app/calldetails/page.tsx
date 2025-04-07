"use client";

import { fetchCallDetails } from "@/lib/api";
import { useEffect, useState } from "react";


export default function CallDetails() {

    const [callDetails, setCallDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const data = await fetchCallDetails();
            setCallDetails(data);
            setLoading(false);
        }
        fetchData();
    }, [])

    if (loading) return <p className="text-center text-gray-500">Loading call details...</p>;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Call Details</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead className="bg-gray-100 text-gray-600 text-left">
                        <tr>
                            <th className="px-4 py-2">Sl.no</th>
                            <th className="px-4 py-2">User Name</th>
                            <th className="px-4 py-2">Phone Number</th>
                            <th className="px-4 py-2">Call Status</th>
                            <th className="px-4 py-2">Date & Time</th>
                            {/* <th className="px-4 py-2">Action</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {callDetails.map((call: any, index: number) => (
                            <tr key={call?.customer_id} className="border-b">
                                <td className="px-4 py-3">{String(index + 1).padStart(2, "0")}</td>
                                <td className="px-4 py-3 font-medium">{call?.firstName + " " + call?.secondName}</td>
                                <td className="px-4 py-3">{call?.customer_id}</td>
                                <td className="px-4 py-3">
                                    <span className={`px-auth w-24 py-2 text-white rounded-full text-sm font-medium text-center inline-block 
                                        ${call.status === "Successful" ? "bg-green-500" : "bg-red-500"}`}>
                                            {call?.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3">{call?.callDate}</td>
                                {/* <td className="px-4 py-3">
                                    <Link href={`/pendingcalls/${call?.customer_id}`} className="text-blue-500 hover:underline">
                                        Initiate Call
                                    </Link>
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}