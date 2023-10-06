// ##api/get-files
import { token, BASE_URL } from "@/config";

export async function GET() {
    if (!BASE_URL) {
        return new Response(JSON.stringify({ error: "base URL not found" }), {
            status: 404,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    if (!token) {
        return new Response(JSON.stringify({ error: "API token not found" }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    try {
        const request = await fetch('https://nezabackend-2a2e9782ab7f.herokuapp.com/api/extracted_data/', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        });
        if (!request.ok) {
            throw new Error(`Request failed with status ${request.status}`);
        }
        const responseJson = await request.json();
        return new Response(JSON.stringify(responseJson), {
            status: 200,
            statusText: 'Success',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error:any) {
        return new Response(error.message, {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}