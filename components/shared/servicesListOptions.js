import { getServices } from "@/api/services";
import { useEffect, useState } from "react";

export default function ServicesListOptions (){
    const [services, setServices] = useState([]);
    useEffect(() => {
        const loadServices = async () => {
            const services = await getServices();
            setServices(services);
        };

        loadServices();
    }, []);
    return (
        services.map((service, index) => (
            <option key={index + 1} value={service.id}>
                {service.title}
            </option>
        )))
}