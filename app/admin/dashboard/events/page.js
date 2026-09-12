"use client"
import { deleteEvent } from "@/api/admin/events";
import { getEvents } from "@/api/events";
import AddEventForm from "@/components/admin/addEventForm";
import ImagesGrid from "@/components/shared/imageGrid";
// import AdminPastEventsSection from "@/components/sections/adminPastEventsSection";
import TabNav from "@/components/shared/tabNav";
import { auth } from "@/configs/firebase";
import { useEffect, useState } from "react";
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
            content: <AdminPastEventsSection/>,
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


function AdminPastEventsSection() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      const user = auth.currentUser;

      let fbToken = null;

      if (user) {
        fbToken = await user.getIdToken();
      }

      const events = await getEvents(fbToken);

      setEvents(events);
      setLoading(false);
    }

    getData();
  }, []);

  return (<>
  {loading && <p>Loading...</p>}
    <ImagesGrid
      items={events}
      path={"/portfolio/"}
      deleteButton={true}
      onDelete={async (id) => {
        const result = await deleteEvent(id);

        if (result.success) {
          toast.success(result.message);
        } else {
          toast.error(result.message);
        }
      }}
    />
  </>
  );
}