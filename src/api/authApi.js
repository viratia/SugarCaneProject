import { BASE_URL } from "../utils/constants";

export const loginApi = async (payload) => {
    try {
        const response = await fetch(`${BASE_URL}/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        console.log("HTTP Status:", response.status);

        const data = await response.json();

        console.log("Response body:", data);
        
        return {
            success: response.ok,
            data: data,
        };

    } catch (error) {
        return {
            success: false,
            data: { message: "Network error" },
        };
    }
};
