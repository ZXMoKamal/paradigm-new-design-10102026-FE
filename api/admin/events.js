import { auth } from "@/configs/firebase";

export async function deleteEvent(eventId){
    const formData = new FormData();

    formData.append("id", eventId);

    const user = auth.currentUser;

    if (!user) {
        throw new Error("Not authenticated");
    }

    const token = await user.getIdToken();

    const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/admin/deleteEvent.php",
        {
            method: "POST",
            headers: {
                "ngrok-skip-browser-warning": "true",
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        }
    );

    const data = await response.json();

    if (!response.ok) {
        // console.log(data);
        return;
    }

    return data;    
}
