import { BASE_URL } from "@/app/config";

const ACCESS_TOKEN = '';
const API_URL = `${BASE_URL}api/user/details`;

export async function getUserDetails() {
    if (!BASE_URL) {
        return new Response(JSON.stringify({ error: "Base URL not found" }), {
            status: 404,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    if (!ACCESS_TOKEN) {
        return new Response(JSON.stringify({ error: "API token not found" }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    try {
        const request = await fetch(API_URL, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${ACCESS_TOKEN}`
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
    } catch (error: any) { 
        return new Response(error.message, {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
