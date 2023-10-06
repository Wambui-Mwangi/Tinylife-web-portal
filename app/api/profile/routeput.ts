import { BASE_URL } from "@/app/config";
import { ACCESS_TOKEN } from "@/config";

export async function PUT(request: Request) {
    if (!ACCESS_TOKEN) {
        return new Response(JSON.stringify({ error: "API token not found" }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    try {
        const requestData = await request.json();

        const updateResponse = await fetch(`${BASE_URL}api/user/details/`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${ACCESS_TOKEN}`
            },
            body: JSON.stringify(requestData),
        });

        if (!updateResponse.ok) {
            throw new Error(`Request failed with status ${updateResponse.status}`);
        }

        const responseJson = await updateResponse.json();

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
