export async function fetchPendingCalls() {
    try {
      const res = await fetch("https://358hopgakj.execute-api.us-east-1.amazonaws.com/test/getpendingcustomers", {
        cache: "no-store", // Ensures fresh data every request
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch pending calls");
      }
  
      return await res.json();
    } catch (error) {
      console.error("API Error:", error);
      return []; // Return empty array on error
    }
  }
  

  export async function fetchCallDetails() {
    try {
      const res = await fetch("https://358hopgakj.execute-api.us-east-1.amazonaws.com/test/FetchHarrysUserData", {
        cache: "no-store", // Ensures fresh data every request
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch call details");
      }
  
      return await res.json();
    } catch (error) {
      console.error("API Error:", error);
      return []; // Return empty array on error
    }
  }

  interface CallPayload {
    Name: string;
    customer_id: string;
    status: string;
    // callbackUrl : string;
}

  interface ApiResponse {
    // Define the expected structure of the response
    success: boolean;
    message?: string;
    data?: any; // Adjust this type based on your actual response structure
}

  export async function initiateCall(payload : CallPayload) : Promise<ApiResponse | null> {
    try {
      const res = await fetch("https://public.lindy.ai/api/v1/webhooks/lindy/3f4b718f-350f-4eb5-a772-7eb55ec97528", {
        method : "POST",
        headers : {
          "Content-Type" : "application/json",
        },
        body : JSON.stringify(payload),
        cache: "no-store",
        // callbackUrl : "http://localhost:3000", // Ensures fresh data every request
      });
  
      if (!res.ok) {
        const errorResponse = await res.json();
        throw new Error(`Failed to initiate call: ${errorResponse.message || 'Unknown error'}`);
      }
  
      return await res.json();
    } catch (error) {
      console.error("API Error:", error);
      return null; // Return empty array on error
    }
  }
