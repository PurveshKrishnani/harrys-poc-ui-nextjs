"use client";

import { fetchPendingCalls, initiateCall } from "@/lib/api";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PendingCalls() {

    const [pendingCalls, setPendingCalls] = useState([]);
    const [loading, setLoading] = useState(true);
    const [callInitiated, setCallInitiated] = useState<{ [key: string]: boolean }>({});

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        const data = await fetchPendingCalls();
        setPendingCalls(data);
        setLoading(false);
    }

    const handleInitiateCall = async (call : any) => {
        setCallInitiated((prev) => ({ ...prev, [call.customer_id]: true }));

        const payload = {
            Name : call.firstName,
            customer_id : call.customer_id,
            status : call.status,
        };
        console.log(payload);
        try {
            const response = await initiateCall(payload);
            console.log(response);
            if(response && response.success) {
                await fetchData();
            } else {
                throw new Error("Call initiation failed");
            }
        } catch (error) {
            console.error("Error:", error);
        }
        setCallInitiated((prev) => ({ ...prev, [call.customer_id]: false }));
    }

    if (loading) return <p className="text-center text-gray-500">Loading pending calls...</p>;

    if (pendingCalls.length === 0) {
        return (
            <div className="container mx-auto p-6">
                <h1 className="text-2xl font-bold mb-4">Pending Calls</h1>
                <p className="text-start text-gray-500">No calls pending</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Pending Calls</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead className="bg-gray-100 text-gray-600 text-left">
                        <tr>
                            <th className="px-4 py-2">Sl.no</th>
                            <th className="px-4 py-2">User Name</th>
                            <th className="px-4 py-2">Phone Number</th>
                            <th className="px-4 py-2">Call Status</th>
                            <th className="px-4 py-2">Date & Time</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pendingCalls.map((call: any, index: number) => (
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
                                <td className="px-4 py-3">
                                    <button
                                        onClick={() => handleInitiateCall(call)}
                                        disabled={callInitiated[call.customer_id]}
                                        className={`text-blue-500 hover:underline ${
                                            callInitiated[call.customer_id] ? "opacity-50 cursor-not-allowed" : ""
                                        }`}
                                    >
                                        {callInitiated[call.customer_id] ? "Processing..." : "Initiate Call"}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}