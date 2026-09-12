"use client";

import { useEffect, useState, useRef } from "react";
import { getContacts } from "@/api/admin/contactUs";
import { Input } from "@/components/shared/input";
import Search from "@/components/icons/search";
import Button from "@/components/shared/button";



function Contacts() {

    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        async function loadContacts() {

            try {

                const data = await getContacts();

                setContacts(data);

            } catch (error) {

                console.error(error);

                setError(error.message);

            } finally {

                setLoading(false);
            }
        }

        loadContacts();

    }, []);


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }


    async function handleSearch(query) {
        try {
            setLoading(true);

                const data = await getContacts(query);

                setContacts(data);

            } catch (error) {

                console.error(error);

                setError(error.message);

            } finally {

                setLoading(false);
            }
    }


    return (
        <ContactsTable contacts={contacts} search={handleSearch}/>
    );
}

export default Contacts





function ContactsTable({ contacts = [], search }) {

    const inputRef = useRef(null);

    const [columnWidths, setColumnWidths] = useState({
        id: 50,
        name: 180,
        email: 230,
        phone: 160,
        subject: 150,
        service: 220,
        message: 350,
        adminMail: 120,
        customerMail: 140,
        createdOn: 140,
        createdBy: 140,
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
            onMouseDown={(event) =>
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


    return (

        <div
            className="
                w-full 
                rounded-xl
                border
                border-primary
                bg-brimary-dark
                shadow-sm
                flex
                flex-col
               
            "
        >
            <div className="flex justify-center items-center gap-5 p-4 text-lg font-semibold text-text-primary w-200">
                <h1 className="shrink-0 text-3xl">Search : </h1>
                <Input placeholder="" ref={inputRef} />
                <Button className="w-1" onClick={() => search(inputRef.current.value)}>
                    <Search className="w-8 h-8" />
                </Button>
            </div>

            <br/>

            <table
                className="
                    table-fixed
                    border-collapse
                "
                style={{
                    width: Object.values(columnWidths).reduce(
                        (total, width) => total + width,
                        0
                    ),
                }}
            >

                <colgroup>

                    {Object.entries(columnWidths).map(
                        ([column, width]) => (

                            <col
                                key={column}
                                style={{
                                    width: `${width}px`,
                                }}
                            />

                        )
                    )}

                </colgroup>


                <thead className="text-text-primary">

                    <tr className="border-b border-gray-200 bg-primary-dark ">

                        <th className="relative px-4 py-4 text-left">
                            ID
                            <ResizeHandle column="id" />
                        </th>

                        <th className="relative px-4 py-4 text-left">
                            Name
                            <ResizeHandle column="name" />
                        </th>

                        <th className="relative px-4 py-4 text-left">
                            Email
                            <ResizeHandle column="email" />
                        </th>

                        <th className="relative px-4 py-4 text-left">
                            Phone
                            <ResizeHandle column="phone" />
                        </th>

                        <th className="relative px-4 py-4 text-left">
                            Subject
                            <ResizeHandle column="subject" />
                        </th>

                        <th className="relative px-4 py-4 text-left">
                            Service
                            <ResizeHandle column="service" />
                        </th>

                        <th className="relative px-4 py-4 text-left">
                            Message
                            <ResizeHandle column="message" />
                        </th>

                        <th className="relative px-4 py-4 text-center">
                            Admin Mail
                            <ResizeHandle column="adminMail" />
                        </th>

                        <th className="relative px-4 py-4 text-center">
                            Customer Mail
                            <ResizeHandle column="customerMail" />
                        </th>
                        <th className="relative px-4 py-4 text-center">
                            Created On
                            <ResizeHandle column="createdOn" />
                        </th>
                        <th className="relative px-4 py-4 text-center">
                            Created By
                            <ResizeHandle column="createdBy" />
                        </th>

                    </tr>

                </thead>


                <tbody className="text-text-primary">

                    {contacts.map((contact) => (

                        <tr
                            key={contact.id}
                            className="
                                border-b
                                border-white
                                transition-colors
                                hover:bg-secondary
                                hover:text-primary-dark
                                even:bg-primary-dark
                            "
                        >

                            <td className="px-4 py-4">
                                {contact.id}
                            </td>


                            <td className="px-4 py-4">

                                <div
                                    title={contact.name}
                                    className="
                                        overflow-hidden
                                        text-ellipsis
                                        whitespace-nowrap
                                    "
                                >
                                    {contact.name}
                                </div>

                            </td>


                            <td className="px-4 py-4">

                                <div
                                    title={contact.email}
                                    className="
                                        overflow-hidden
                                        text-ellipsis
                                        whitespace-nowrap
                                    "
                                >
                                    {contact.email}
                                </div>

                            </td>


                            <td className="px-4 py-4">

                                <div
                                    title={contact.phone}
                                    className="
                                        overflow-hidden
                                        text-ellipsis
                                        whitespace-nowrap
                                    "
                                >
                                    {contact.phone}
                                </div>

                            </td>


                            <td className="px-4 py-4">

                                <div
                                    title={contact.subject}
                                    className="
                                        overflow-hidden
                                        text-ellipsis
                                        whitespace-nowrap
                                    "
                                >
                                    {contact.subject}
                                </div>

                            </td>


                            <td className="px-4 py-4">

                                <div
                                    title={contact.serviceName}
                                    className="
                                        overflow-hidden
                                        text-ellipsis
                                        whitespace-nowrap
                                    "
                                >
                                    {contact.serviceName || "-"}
                                </div>

                            </td>


                            <td className="px-4 py-4">

                                <div
                                    title={contact.message}
                                    className="
                                        overflow-hidden
                                        text-ellipsis
                                        whitespace-nowrap
                                    "
                                >
                                    {contact.message}
                                </div>

                            </td>


                            <td className="px-4 py-4 text-center">

                                <div className="flex justify-center">

                                    <span
                                        title={
                                            Number(
                                                contact.adminMailStatus
                                            ) === 1
                                                ? "Sent"
                                                : "Not sent"
                                        }
                                        className={`
                                            h-3
                                            w-3
                                            rounded-full
                                            ${
                                                Number(
                                                    contact.adminMailStatus
                                                ) === 1
                                                    ? "bg-green-500"
                                                    : "bg-red-500"
                                            }
                                        `}
                                    />

                                </div>

                            </td>


                            <td className="px-4 py-4 text-center">

                                <div className="flex justify-center">

                                    <span
                                        title={
                                            Number(
                                                contact.customerMailStatus
                                            ) === 1
                                                ? "Sent"
                                                : "Not sent"
                                        }
                                        className={`
                                            h-3
                                            w-3
                                            rounded-full
                                            ${
                                                Number(
                                                    contact.customerMailStatus
                                                ) === 1
                                                    ? "bg-green-500"
                                                    : "bg-red-500"
                                            }
                                        `}
                                    />

                                </div>

                            </td>

                            <td className="px-4 py-4">

                                <div
                                    title={contact.createdOn}
                                    className="
                                        overflow-hidden
                                        text-ellipsis
                                        whitespace-nowrap
                                    "
                                >
                                    {contact.createdOn}
                                </div>

                            </td>
                            <td className="px-4 py-4">

                                <div
                                    title={contact.createdBy}
                                    className="
                                        overflow-hidden
                                        text-ellipsis
                                        whitespace-nowrap
                                    "
                                >
                                    {contact.createdBy}
                                </div>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>


            {contacts.length === 0 && (

                <div className="flex min-h-[200px] items-center justify-center text-gray-500">
                    No contact messages found.
                </div>

            )}

        </div>
    );
}

