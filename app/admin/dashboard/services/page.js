"use client"
import { deleteService } from "@/api/admin/services";
import { getServices } from "@/api/services";
import AddServicesForm from "@/components/admin/addServicesForm";
import ArrowRight from "@/components/icons/arrowRight";
import { servicesIconCode } from "@/components/icons/iconCodes.js/servicesIconCode";
import Trash from "@/components/icons/trash";
// import AdminPastEventsSection from "@/components/sections/adminPastEventsSection";
import TabNav from "@/components/shared/tabNav";
import { auth } from "@/configs/firebase";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { useEffect, useState,useRef } from "react";
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


function EventsTable({
  events = [],
  onDelete = async () => { },
  path = "/portfolio/",
}) {
  const [columnWidths, setColumnWidths] = useState({
    id: 70,
    thumb: 200,
    name: 500,
    requestTitle: 220,
    createdOn: 160,
    createdBy: 160,
    actions: 200,
  });

  const resizingRef = useRef(null);

  const startResize = (column, event) => {
    event.preventDefault();

    resizingRef.current = {
      column,
      startX: event.clientX,
      startWidth: columnWidths[column],
    };

    document.addEventListener("mousemove", handleResize);
    document.addEventListener("mouseup", stopResize);
  };

  const handleResize = (event) => {
    if (!resizingRef.current) return;

    const {
      column,
      startX,
      startWidth,
    } = resizingRef.current;

    const difference = event.clientX - startX;

    const newWidth = Math.max(
      70,
      startWidth + difference
    );

    setColumnWidths((prev) => ({
      ...prev,
      [column]: newWidth,
    }));
  };

  const stopResize = () => {
    resizingRef.current = null;

    document.removeEventListener(
      "mousemove",
      handleResize
    );

    document.removeEventListener(
      "mouseup",
      stopResize
    );
  };

  const ResizeHandle = ({ column }) => (
    <span
      onMouseDown={ (event) =>
        startResize(column, event)
      }
      className="
            absolute
            right-0
            top-0
            h-full
            w-2
            cursor-col-resize
            select-none
            hover:bg-blue-400
            active:bg-blue-600
        "
    />
  );

  const totalWidth = Object.values(columnWidths).reduce(
    (total, width) => total + width,
    0
  );

  return (
    <div
      className="
                w-auto
                rounded-xl
                border
                border-primary
               
                shadow-sm
                
            "
    >
      <table
        className="table-fixed border-collapse"
        style={ {
          width: `${totalWidth}px`,
        } }
      >
        <colgroup>
          { Object.entries(columnWidths).map(
            ([column, width]) => (
              <col
                key={ column }
                style={ {
                  width: `${width}px`,
                } }
              />
            )
          ) }
        </colgroup>

        <thead className="text-text-primary">
          <tr className="border-b border-text-primary bg-primary-dark">

            <th className="relative px-4 py-4 text-left">
              ID
              <ResizeHandle column="id" />
            </th>

            <th className="relative px-4 py-4 text-left">
              Icon
              <ResizeHandle column="thumb" />
            </th>

            <th className="relative px-4 py-4 text-left">
              Name
              <ResizeHandle column="name" />
            </th>

            <th className="relative px-4 py-4 text-left">
              Request Title
              <ResizeHandle column="requestTitle" />
            </th>

            <th className="relative px-4 py-4 text-left">
              Created On
              <ResizeHandle column="createdOn" />
            </th>

            <th className="relative px-4 py-4 text-left">
              Created By
              <ResizeHandle column="createdBy" />
            </th>

            <th className="relative px-4 py-4 text-center">
              Actions
              <ResizeHandle column="actions" />
            </th>

          </tr>
        </thead>

        <tbody className="text-text-primary">

          { events.map((event) => (
            <tr
              key={ event.id }
              className="
                                border-b
                                border-white
                                transition-colors
                                hover:bg-secondary
                                hover:text-primary-dark
                                even:bg-primary-dark
                            "
            >

              {/* ID */ }
              <td className="px-4 py-4">
                { event.id }
              </td>

              {/* thumb */ }
              <td className="px-4 py-4 ">
                <section
                    className="sm:w-12 w-8 sm:h-12 h-8 shrink-0 flex items-center justify-center rounded-full stroke-1!"
                    style={{ fill: "var(--light-blue)" }}
                  >
                  { servicesIconCode[event.icon_code] }
                  </section>
              </td>

              {/* Name */ }
              <td className="px-4 py-4">
                <div
                  title={ event.title }
                  className="
                                        overflow-hidden
                                        text-ellipsis
                                        whitespace-nowrap
                                    "
                >
                  { event.title || "-" }
                </div>
              </td>

              {/* Request Title */ }
              <td className="px-4 py-4">
                <div
                  title={ event.requestTitle }
                  className="
                                        overflow-hidden
                                        text-ellipsis
                                        whitespace-nowrap
                                    "
                >
                  { event.requestTitle || "-" }
                </div>
              </td>

              {/* Created On */ }
              <td className="px-4 py-4">
                <div
                  title={ event.createdOn }
                  className="
                                        overflow-hidden
                                        text-ellipsis
                                        whitespace-nowrap
                                    "
                >
                  { event.createdOn || "-" }
                </div>
              </td>

              {/* Created By */ }
              <td className="px-4 py-4">
                <div
                  title={ event.createdBy }
                  className="
                                        overflow-hidden
                                        text-ellipsis
                                        whitespace-nowrap
                                    "
                >
                  { event.createdBy || "-" }
                </div>
              </td>

              {/* Actions */ }
              <td className="px-4 py-4">
                <div className="flex items-center justify-center gap-3">

                  {/* View */ }
                  <Link
                    href={ `${path}${event.requestTitle}/` }
                    title="View event"
                    onClick={ (e) =>
                      e.stopPropagation()
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-primary-dark transition hover: scale-105"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Link >

                  {/* Edit */ }
                  {/* < button
                    type="button"
                    title="Edit event"
                    onClick={ async (e) => {
                      e.stopPropagation();

                      // await onDelete(event.id);
                    } }
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-light-red cursor-pointer transition hover: scale-105"
                  >
                    <Trash className="h-5 w-5 fill-light-red" />
                  </ button> */}

                  {/* Delete */ }
                  < button
                    type="button"
                    title="Delete event"
                    onClick={ async (e) => {
                      e.stopPropagation();

                      await onDelete(event.id);
                    } }
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-light-red cursor-pointer transition hover: scale-105"
                  >
                    <Trash className="h-5 w-5 fill-light-red" />
                  </ button>

                </div >
              </td >

            </tr >
          )) }

        </tbody >
      </table >

      {
        events.length === 0 && (
          <div
            className="
                        flex
                        min-h-[200px]
                        items-center
                        justify-center
                        text-gray-500
                    "
          >
            No events found.
          </div>
        )
      }
    </div >
  );
}


function AdminServicesSection({
  nameTag: NameTag = "h3",
  className = "",
}) {

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    async function getData() {
      setLoading(true);

      const user = auth.currentUser;

      let fbToken = null;

      if (user) {
        fbToken = await user.getIdToken();
      }

      const services = await getServices(fbToken);

      setServices(services);
      setLoading(false);
    }

    getData();

  }, []);

  const handleDelete = async (id) => {
    const result = await deleteService(id);

    if (result.success) {
      toast.success(result.message);

      // Remove deleted event immediately from the table
      setEvents((prev) =>
        prev.filter((event) => event.id !== id)
      );
    } else {
      toast.error(result.message);
    }
  };

// console.log(services)
  if (loading) {
    return (
      <div className="flex min-h-[200px] items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <>
      <EventsTable
        events={ services }
        path="/services/"
        onDelete={ handleDelete }
      />
   
    </>
  );
}


// const colors=['var(--light-red)', 'var(--light-blue)', 'var(--light-yellow)', 'var(--light-green)', 'var(--light-orange)','var(--dark-red)', 'var(--dark-cyan)', 'var(--dark-yellow)', 'var(--dark-orange)'];

// function AdminServicesSection({
//   nameTag: NameTag = "h3",
//   className = "",
// }) {

//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {

//     async function getData() {
//       setLoading(true);

//       const user = auth.currentUser;

//       let fbToken = null;

//       if (user) {
//         fbToken = await user.getIdToken();
//       }

//       const services = await getServices(fbToken);

//       setServices(services);
//       setLoading(false);
//     }

//     getData();

//   }, []);



// // console.log(services)

//   return (
//     <>
//     {loading && <p>Loading...</p>}
//     <ul className={cn('grid grid-cols-1 min-[400px]:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8', className)}>
//       {services.map((service, index) => {
//         const color = colors[index % colors.length];

//         return (<>
//           <li
//           //  data-aos="fade-left"
//           //  data-aos-duration={1000+(1000*index)}
//             key={index}
//             className="group sm:p-6 transition hover:border-white/30 flex items-start gap-4 mb-4"
//           >


//           <button onClick={
//             async (e)=>{
//                 e.stopPropagation();
//                 const result = await deleteService(service.id);
//                 if(result.success){
//                     toast.success(result.message);
//                 }else{
//                     toast.error(result.message);
//                 }}} className="absolute top-0 right-0 z-1000 flex justify-center cursor-pointer w-10 h-10 bg-primary rounded-bl-2xl">
//             <Trash className={"fill-light-red w-6 h-6"}/>
//           </button>


//             {/* TOP ROW */}
//             <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/services/${service.requestTitle}/` || '#'} className="flex items-center justify-start gap-2 relative overflow-hidden" >
            
//               <section
//                 className="sm:w-12 w-8 sm:h-12 h-8 shrink-0 flex items-center justify-center rounded-full stroke-1!"
//                 style={{ fill: color }}
//               >
//                 {servicesIconCode[service.icon_code]}
//               </section>

//               <section className="w-full">

//                 <NameTag className="text-sm sm:text-md md:text-lg font-primary-regular text-text-primary">
//                     {service.title}
//                 </NameTag>

//                 <div className="flex items-center justify-start gap-2 relative overflow-hidden" >
//                     <span className=" relative text-text-primary opacity-80 transition-transform duration-300 lg:-translate-x-100 translate-x-0 group-hover:-translate-x-0 " >
//                         Read more
//                     </span>
//                     <span className="transform transition-transform duration-300 lg:-translate-x-20 translate-x-0 group-hover:-translate-x-0 " >
//                         <ArrowRight className="w-5 h-5 fill-text-primary"/>
//                     </span>
//                 </div>

//                 <div >
//                   <span className="text-sm text-dark-red ">
//                     Created on: {service.createdOn}
//                   </span>
//                 </div>
//                 <div>
//                   <span className="text-sm text-dark-red ">
//                     Created by: {service.createdBy}
//                   </span>
//                 </div>
//               </section>
//             </Link>
//           </li>
//                 </>
//         );
//       })}
//     </ul>
//     </>
//   );
// }