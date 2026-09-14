"use client"
import { deleteEvent } from "@/api/admin/events";
import { getEvents } from "@/api/events";
import AddEventForm from "@/components/admin/addEventForm";
import EditEventForm from "@/components/admin/editEventForm";
import ArrowRight from "@/components/icons/arrowRight";
import Pencil from "@/components/icons/pencil";
import Trash from "@/components/icons/trash";
import ImagesGrid from "@/components/shared/imageGrid";
// import AdminPastEventsSection from "@/components/sections/adminPastEventsSection";
import TabNav from "@/components/shared/tabNav";
import { auth } from "@/configs/firebase";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { toast } from "sonner";

export default function Event() {
  const [activeTab, setActiveTab] = useState("add");

  const tabs = [
    {
      label: "Add Event",
      value: "add",
      content: <AddEventForm />,
    },
    {
      label: "Events",
      value: "events",
      content: <AdminPastEventsSection />,
    },
  ];

  return (
    <TabNav
      tabs={ tabs }
      activeTab={ activeTab }
      onChange={ setActiveTab }
    />
  );
}




function EventsTable({
  events = [],
  onDelete = async () => { },
  path = "/portfolio/",
}) {
  const [de, sde] = useState(0);

    const [requestTitle, setRequestTitle] = useState("");
  const [editFormOpen, setEditFormOpen] = useState(false);

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
              Thumb
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
                <img src={ event.thumb } />
              </td>

              {/* Name */ }
              <td className="px-4 py-4">
                <div
                  title={ event.name }
                  className="
                                        overflow-hidden
                                        text-ellipsis
                                        whitespace-nowrap
                                    "
                >
                  { event.name || "-" }
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
                  < button
                    type="button"
                    title="Edit event"
                    onClick={ async (e) => {
                      e.stopPropagation();
                      setEditFormOpen(true);
                      setRequestTitle(event.requestTitle);
                    } }
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-light-red cursor-pointer transition hover: scale-105"
                  >
                    <Pencil className="h-5 w-5 fill-light-blue" />
                  </ button>

                  {/* Delete */ }
                  < button
                    type="button"
                    title="Delete event"
                    onClick={ async (e) => {
                      e.stopPropagation();

                      if(confirm("are you sure to delete : "+event.name)){

                        const i = await onDelete(event.id);
                        i.ok && sde(event.id)
                      }
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
      <EditEventForm requestTitle={requestTitle} open={editFormOpen} onClose={()=>setEditFormOpen(false)}/>
    </div >
  );
}



function AdminPastEventsSection() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function getData() {
      try {
        const user = auth.currentUser;

        let fbToken = null;

        if (user) {
          fbToken = await user.getIdToken();
        }

        const eventsData = await getEvents(fbToken);

        setEvents(eventsData);
      } catch (error) {
        // console.error("Failed to get events:", error);

        toast.error("Failed to load events.");
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  const handleDelete = async (id) => {
    const result = await deleteEvent(id);

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

  if (loading) {
    return (
      <div className="flex min-h-[200px] items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <EventsTable
      events={ events }
      path="/portfolio/"
      onDelete={ handleDelete }
    />
  );
}


// function AdminPastEventsSection() {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState([]);

//   useEffect(() => {
//     setLoading(true);
//     async function getData() {
//       const user = auth.currentUser;

//       let fbToken = null;

//       if (user) {
//         fbToken = await user.getIdToken();
//       }

//       const events = await getEvents(fbToken);

//       setEvents(events);
//       setLoading(false);
//     }

//     getData();
//   }, []);

//   return (<>
//   {loading && <p>Loading...</p>}
//     <ImagesGrid
//       items={events}
//       path={"/portfolio/"}
//       deleteButton={true}
//       onDelete={async (id) => {
//         const result = await deleteEvent(id);

//         if (result.success) {
//           toast.success(result.message);
//         } else {
//           toast.error(result.message);
//         }
//       }}
//     />
//   </>
//   );
// }