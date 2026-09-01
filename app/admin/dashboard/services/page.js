"use client"
import { deleteService } from "@/api/admin/services";
import { getServices } from "@/api/services";
import AddServicesForm from "@/components/admin/addServicesForm";
import ArrowRight from "@/components/icons/arrowRight";
import { servicesIconCode } from "@/components/icons/iconCodes.js/servicesIconCode";
import Trash from "@/components/icons/trash";
// import AdminPastEventsSection from "@/components/sections/adminPastEventsSection";
import TabNav from "@/components/shared/tabNav";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Event() {
    const [activeTab, setActiveTab] = useState("add");

    const tabs = [
        {
            label: "Add Service",
            value: "add",
            content: <AddServicesForm />,
        },
        {
            label: "Services",
            value: "services",
            content: <AdminServicesSection/>,
        },
    ];

    return (
        <TabNav
            tabs={tabs}
            activeTab={activeTab}
            onChange={setActiveTab}
        />
    );
}


// function AdminServicesSection() {

//   return (
//     <ServicesGrid nameTag="h3" deleteButton={true} onDelete={async (id)=>{
//       const result = await deleteService(id);
//       if(result.success){
//         toast.success(result.message);
//       }else{
//         toast.error(result.message);
//       }
//     }} />
//   )
// }



const colors=['var(--light-red)', 'var(--light-blue)', 'var(--light-yellow)', 'var(--light-green)', 'var(--light-orange)','var(--dark-red)', 'var(--dark-cyan)', 'var(--dark-yellow)', 'var(--dark-orange)'];

function AdminServicesSection({
  nameTag: NameTag = 'h3',
  className = '',
}) {

    const [services,setServices] = useState([]);
  
    useEffect(()=>{
      async function getData(){
        const services = await getServices();
        setServices(services);
      }
      getData();
    },[]);



// console.log(services)

  return (
    <ul className={cn('grid grid-cols-1 min-[400px]:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8', className)}>
      {services.map((service, index) => {
        const color = colors[index % colors.length];

        return (
          <li
           data-aos="fade-left"
           data-aos-duration={1000+(1000*index)}
            key={index}
            className="group sm:p-6 transition hover:border-white/30 flex items-start gap-4 mb-4"
          >


          <button onClick={
            async (e)=>{
                e.stopPropagation();
                const result = await deleteService(service.id);
                if(result.success){
                    toast.success(result.message);
                }else{
                    toast.error(result.message);
                }}} className="absolute top-0 right-0 z-1000 flex justify-center cursor-pointer w-10 h-10 bg-primary rounded-bl-2xl">
            <Trash className={"fill-light-red w-6 h-6"}/>
          </button>


            {/* TOP ROW */}
            <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/services/${service.requestTitle}/` || '#'} className="flex items-center justify-start gap-2 relative overflow-hidden" >
            
              <section
                className="sm:w-12 w-8 sm:h-12 h-8 shrink-0 flex items-center justify-center rounded-full stroke-1!"
                style={{ fill: color }}
              >
                {servicesIconCode[service.icon_code]}
              </section>

              <section className="w-full">

                <NameTag className="text-sm sm:text-md md:text-lg font-primary-regular text-text-primary">
                    {service.title}
                </NameTag>

                <div className="flex items-center justify-start gap-2 relative overflow-hidden" >
                    <span className=" relative text-text-primary opacity-80 transition-transform duration-300 lg:-translate-x-100 translate-x-0 group-hover:-translate-x-0 " >
                        Read more
                    </span>
                    <span className="transform transition-transform duration-300 lg:-translate-x-20 translate-x-0 group-hover:-translate-x-0 " >
                        <ArrowRight className="w-5 h-5 fill-text-primary"/>
                    </span>
                </div>

              </section>
            </Link>

          </li>
        );
      })}
    </ul>
  );
}