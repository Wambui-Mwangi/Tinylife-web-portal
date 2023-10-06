import { BASE_URL, token } from "@/config";

export async function POST(request: Request) {
    try {
      if (!BASE_URL) {
        return new Response("Base URL not found", {
          status: 404,
          statusText: "Failed",
        });
      }
  
      const body = await request.json();
      const result = await fetch(`${BASE_URL}/api/logout/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });
  
      const logout = await result.json();
  
      return new Response(JSON.stringify(logout), {
        status: 201,
        statusText: "Success",
      });
    } catch (error: any) {
      return new Response(error.message, {
        status: 500,
        statusText: "Failed",
      });
    }
  }








