import { auth } from "@/configs/firebase";

export async function deleteService(serviceId){
    const formData = new FormData();

    formData.append("id", serviceId);

    const user = auth.currentUser;

    if (!user) {
        throw new Error("Not authenticated");
    }

    const token = await user.getIdToken();

    const response = await fetch(
        "http://localhost/paradigm/backend/paradigm-new-design-10102026-BE/query/admin/deleteService.php",
        {
            method: "POST",
            headers: {
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