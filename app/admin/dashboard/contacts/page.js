"use client";

import { useEffect, useState, useRef, Fragment } from "react";
import { getContacts } from "@/api/admin/contactUs";
import { Input } from "@/components/shared/input";
import Search from "@/components/icons/search";
import Button from "@/components/shared/button";
import { useAdminAuth } from "@/context/adminACLProvider";
import { Select } from "@/components/shared/select";
import Pencil from "@/components/icons/pencil";
import Filter from "@/components/icons/filter";
import Group from "@/components/icons/group";
import { auth } from "@/configs/firebase";
import ArrowRight from "@/components/icons/arrowRight";
import ArrowLeft from "@/components/icons/arrowLeft";



// function Contacts() {
//     const [contacts, setContacts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");

//     const {
//         permissions,
//         loadingAccess
//     } = useAdminAuth();

//     function hasAccess(module, action) {
//         if (loadingAccess || !permissions) {
//             return false;
//         }

//         return permissions?.[module]?.[action] === true;
//     }

//     useEffect(() => {
//         async function loadContacts() {
//             try {

//                 if (hasAccess("contacts", "view")) {

//                     const data = await getContacts();

//                     setContacts(data);

//                 } else {

//                     setError(
//                         "You don't have access right to view contacts"
//                     );
//                 }

//             } catch (error) {

//                 setError(error.message);

//             } finally {

//                 setLoading(false);
//             }
//         }

//         loadContacts();

//     }, [loadingAccess]);


//     // if (loading) {
//     //     return ;
//     // }

//     // if (error) {
//     //     return ;
//     // }


//     async function handleSearch({
//         query = "",
//         filterBy = "",
//         groupBy = "",
//     }) {

//         try {

//             setLoading(true);
//             setError("");

//             const data = await getContacts({
//                 search: query,
//                 filterBy,
//                 groupBy,
//             });

//             setContacts(data);

//         } catch (error) {

//             console.error(error);

//             setError(error.message);

//         } finally {

//             setLoading(false);
//         }
//     }


//     return (<>
//         {loading && <div>Loading...</div>}
//         {error && <div>{error}</div>}
//         <ContactsTable
//             contacts={contacts}
//             search={handleSearch}
//         />
//     </>);
    
// }


function Contacts() {

    const [contacts, setContacts] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    // ---------------------------------------------------------
    // Pagination
    // ---------------------------------------------------------

    const [page, setPage] = useState(1);

    const [limit, setLimit] = useState(10);

    // ---------------------------------------------------------
    // Current search/filter/group parameters
    // ---------------------------------------------------------

    const [searchParams, setSearchParams] = useState({
        query: "",
        filterBy: "",
        groupBy: "",
    });


    const {
        permissions,
        loadingAccess
    } = useAdminAuth();


    function hasAccess(module, action) {

        if (loadingAccess || !permissions) {
            return false;
        }

        return permissions?.[module]?.[action] === true;
    }


    // ---------------------------------------------------------
    // Load contacts
    // ---------------------------------------------------------

    useEffect(() => {

        async function loadContacts() {

            try {

                if (hasAccess("contacts", "view")) {

                    const data = await getContacts({

                        search: searchParams.query,

                        filterBy: searchParams.filterBy,

                        groupBy: searchParams.groupBy,

                        page: page,

                        limit: limit,

                    });

                    setContacts(data);

                } else {

                    setError(
                        "You don't have access right to view contacts"
                    );

                }

            } catch (error) {

                setError(error.message);

            } finally {

                setLoading(false);

            }

        }


        loadContacts();

    }, [
        loadingAccess,
        page,
        limit,
        searchParams
    ]);


    // ---------------------------------------------------------
    // Search / Filter / Group
    // ---------------------------------------------------------

    async function handleSearch({

        query = "",

        filterBy = "",

        groupBy = "",

    }) {

        try {

            setLoading(true);

            setError("");


            // -------------------------------------------------
            // Save current search/filter/group
            // -------------------------------------------------

            setSearchParams({

                query,

                filterBy,

                groupBy,

            });


            // -------------------------------------------------
            // Reset pagination when search changes
            // -------------------------------------------------

            setPage(1);


            // -------------------------------------------------
            // Get first page of new search results
            // -------------------------------------------------

            const data = await getContacts({

                search: query,

                filterBy,

                groupBy,

                page: 1,

                limit,

            });


            setContacts(data);

        } catch (error) {

            console.error(error);

            setError(error.message);

        } finally {

            setLoading(false);

        }

    }


    // ---------------------------------------------------------
    // Change page
    // ---------------------------------------------------------

    function handlePageChange(newPage) {

        setPage(newPage);

    }


    return (<>

        {loading && <div>Loading...</div>}

        {error && <div>{error}</div>}

        <ContactsTable

            contacts={contacts?.data || []}
            pagination={contacts?.pagination}

            search={handleSearch}

            page={page}

            limit={limit}

            onPageChange={handlePageChange}

        />

    </>);

}

export default Contacts





function ContactsTable({ contacts = [],pagination, search,limit,page,onPageChange }) {console.log(contacts)

    const [filterBy, setFilterBy] = useState("");
    const [groupBy, setGroupBy] = useState("");
    const [searchx, setSearchx] = useState("");

    const [collapsedGroups, setCollapsedGroups] = useState({});

    const inputRef = useRef(null);


    // ----------------------------------------------------------------------
    // Filter options
    // ----------------------------------------------------------------------

    const filterOptions = [
        {
            label: "All Fields",
            value: "",
        },
        {
            label: "ID",
            value: "id",
        },
        {
            label: "Name",
            value: "name",
        },
        {
            label: "Email",
            value: "email",
        },
        {
            label: "Phone",
            value: "phone",
        },
        {
            label: "Subject",
            value: "subject",
        },
        {
            label: "Service",
            value: "service",
        },
        {
            label: "Message",
            value: "message",
        },
        {
            label: "Created By",
            value: "createdBy",
        },
        {
            label: "Created On",
            value: "createdOn",
        },
    ];


    // ----------------------------------------------------------------------
    // Group options
    // ----------------------------------------------------------------------

    const groupOptions = [
        {
            label: "No Grouping",
            value: "",
        },
        {
            label: "Name",
            value: "name",
        },
        {
            label: "Email",
            value: "email",
        },
        {
            label: "Service",
            value: "service",
        },
        {
            label: "Created By",
            value: "createdBy",
        },
        {
            label: "Created On",
            value: "createdOn",
        },
        {
            label: "Admin Mail Status",
            value: "adminMailStatus",
        },
        {
            label: "Customer Mail Status",
            value: "customerMailStatus",
        },
    ];


    // ----------------------------------------------------------------------
    // Column widths
    // ----------------------------------------------------------------------

    const [columnWidths, setColumnWidths] = useState({
        id: 50,
        name: 160,
        email: 200,
        phone: 130,
        subject: 120,
        service: 180,
        message: 280,
        adminMail: 120,
        customerMail: 140,
        createdOn: 120,
        createdBy: 120,
    });


    const resizingRef = useRef(null);


    // ----------------------------------------------------------------------
    // Start column resize
    // ----------------------------------------------------------------------

    const startResize = (column, event) => {

        event.preventDefault();

        resizingRef.current = {
            column,
            startX: event.clientX,
            startWidth: columnWidths[column],
        };

        document.addEventListener(
            "mousemove",
            handleResize
        );

        document.addEventListener(
            "mouseup",
            stopResize
        );
    };


    // ----------------------------------------------------------------------
    // Column resize
    // ----------------------------------------------------------------------

    const handleResize = (event) => {

        if (!resizingRef.current) return;

        const {
            column,
            startX,
            startWidth,
        } = resizingRef.current;

        const difference =
            event.clientX - startX;

        const newWidth = Math.max(
            70,
            startWidth + difference
        );

        setColumnWidths((prev) => ({
            ...prev,
            [column]: newWidth,
        }));
    };


    // ----------------------------------------------------------------------
    // Stop column resize
    // ----------------------------------------------------------------------

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


    // ----------------------------------------------------------------------
    // Column resize handle
    // ----------------------------------------------------------------------

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


    // ----------------------------------------------------------------------
    // Row height
    // ----------------------------------------------------------------------

    const [rowHeights, setRowHeights] = useState({});

    const rowResizingRef = useRef(null);


    // ----------------------------------------------------------------------
    // Start row resize
    // ----------------------------------------------------------------------

    const startRowResize = (rowId, event) => {

        event.preventDefault();

        rowResizingRef.current = {
            rowId,
            startY: event.clientY,
            startHeight:
                rowHeights[rowId] ||
                event.currentTarget.parentElement
                    .offsetHeight,
        };

        document.addEventListener(
            "mousemove",
            handleRowResize
        );

        document.addEventListener(
            "mouseup",
            stopRowResize
        );

        document.body.style.cursor =
            "row-resize";

        document.body.style.userSelect =
            "none";
    };


    // ----------------------------------------------------------------------
    // Row resize
    // ----------------------------------------------------------------------

    const handleRowResize = (event) => {

        if (!rowResizingRef.current) return;

        const {
            rowId,
            startY,
            startHeight,
        } = rowResizingRef.current;

        const difference =
            event.clientY - startY;

        const newHeight = Math.max(
            50,
            startHeight + difference
        );

        setRowHeights((prev) => ({
            ...prev,
            [rowId]: newHeight,
        }));
    };


    // ----------------------------------------------------------------------
    // Stop row resize
    // ----------------------------------------------------------------------

    const stopRowResize = () => {

        rowResizingRef.current = null;

        document.removeEventListener(
            "mousemove",
            handleRowResize
        );

        document.removeEventListener(
            "mouseup",
            stopRowResize
        );

        document.body.style.cursor = "";

        document.body.style.userSelect = "";
    };


    // ----------------------------------------------------------------------
    // Row resize handle
    // ----------------------------------------------------------------------

    const RowResizeHandle = ({ rowId }) => (

        <span
            onMouseDown={(event) =>
                startRowResize(
                    rowId,
                    event
                )
            }
            className="
                absolute
                bottom-0
                left-0
                w-full
                h-2
                cursor-row-resize
                select-none
                hover:bg-blue-400
                active:bg-blue-600
                z-50
            "
        />

    );


    // ----------------------------------------------------------------------
    // Get group value
    // ----------------------------------------------------------------------

    const getGroupValue = (contact) => {

        if (groupBy === "service") {

            return (
                contact.serviceName ||
                "No Service"
            );
        }

        const value = contact[groupBy];

        if (
            value === null ||
            value === undefined ||
            value === ""
        ) {
            return "No Value";
        }

        // Make mail statuses easier to understand
        if (
            groupBy === "adminMailStatus" ||
            groupBy === "customerMailStatus"
        ) {

            return Number(value) === 1
                ? "Sent"
                : "Not Sent";
        }

        return String(value);
    };


    // ----------------------------------------------------------------------
    // Group contacts
    // ----------------------------------------------------------------------

    const groupedContacts = groupBy
        ? contacts.reduce(
            (groups, contact) => {

                const groupValue =
                    getGroupValue(contact);

                if (!groups[groupValue]) {
                    groups[groupValue] = [];
                }

                groups[groupValue].push(contact);

                return groups;

            },
            {}
        )
        : null;


    // ----------------------------------------------------------------------
    // Toggle group
    // ----------------------------------------------------------------------

    const toggleGroup = (groupName) => {

        setCollapsedGroups((prev) => ({
            ...prev,
            [groupName]:
                !prev[groupName],
        }));
    };


    // ----------------------------------------------------------------------
    // Search
    // ----------------------------------------------------------------------

    const handleSearch = () => {
        setSearchx(inputRef.current?.value || "");
        search({
            query:
                inputRef.current?.value || "",

            filterBy,

            groupBy,
        });

        // Start groups expanded
        setCollapsedGroups({});
    };


    // ----------------------------------------------------------------------
    // Table
    // ----------------------------------------------------------------------

    return (<>
        
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


            {/* ---------------------------------------------------------- */}
            {/* Search / Filter / Group                                    */}
            {/* ---------------------------------------------------------- */}

            <div
                className="
                    flex
                    justify-center
                    items-center
                    gap-5
                    pt-4
                    pb-2
                    font-semibold
                    text-text-primary
                    w-260
                "
            >

                <h1 className="shrink-0 text-2xl">
                    Search :
                </h1>


                <Input
                    placeholder=""
                    ref={inputRef}
                    className="text-sm w-100"
                />


                {/* Filter By */}

                <Select
                icon={<Filter className={"w-6 h-6 fill-secondary"}/>}
                    value={filterBy}
                    onChange={(e) =>
                        setFilterBy(
                            e.target.value
                        )
                    }
                >

                    <option value="" selected disabled hidden>
                        Filter By
                    </option>

                    {filterOptions.map(
                        (option) => (

                            <option
                                key={
                                    option.value ||
                                    "all"
                                }
                                value={
                                    option.value
                                }
                            >
                                {option.label}
                            </option>

                        )
                    )}

                </Select>


                {/* Group By */}

                <Select
                icon={<Group className={"w-6 h-6 fill-secondary"}/>}
                    value={groupBy}
                    onChange={(e) =>
                        setGroupBy(
                            e.target.value
                        )
                    }
                >

                    <option value=""  selected disabled hidden>
                        Group By
                    </option>

                    {groupOptions.map(
                        (option) => (

                            <option
                                key={
                                    option.value ||
                                    "none"
                                }
                                value={
                                    option.value
                                }
                            >
                                {option.label}
                            </option>

                        )
                    )}

                </Select>


                {/* Search button */}

                <Button
                    className="w-[10px] px-6"
                    onClick={handleSearch}
                >

                    <Search className="w-6 h-6" />

                </Button>


            </div>

                        {pagination && pagination.totalPages > 0 && 
                        ( <div className="flex items-center justify-between mt-6 pb-4 pt-2 px-5 gap-4 max-w-260"> 
                            {/* Total results */}
                                <div className="text-xl text-text-primary w-fit text-nowrap"> 
                                Showing{" "} {((pagination.page - 1) * pagination.limit) + 1} {" - "} {Math.min( pagination.page * pagination.limit, pagination.total )} {" of "} {pagination.total} </div>
                            {/* Navigation */} 
                                <div className="flex items-center gap-2">
                            {/* Previous */} 
                                <Button type="button" disabled={!pagination.hasPreviousPage} onClick={() => onPageChange(pagination.page - 1) } className="px-3 disabled:cursor-not-allowed" >
                                    <ArrowLeft className={"w-6 h-6"}/> 
                                </Button>
                            {/* Page numbers */} 
                                {Array.from( { length: pagination.totalPages }, (_, index) => { 
                                    const pageNumber = index + 1; return ( 
                                        <Button key={pageNumber} type="button" onClick={() => onPageChange(pageNumber) } variant="outline" className={`px-3 py-2 border-0 rounded-md ${ pagination.page === pageNumber ? "text-text-primary" : "" }`} > 
                                    {pageNumber} </Button> 
                                ); } )} 
                            {/* Next */} 
                                <Button type="button" disabled={!pagination.hasNextPage} onClick={() => onPageChange(pagination.page + 1) } className="px-3 disabled:cursor-not-allowed" > 
                                    <ArrowRight className={"w-6 h-6"}/> 
                                </Button> 
                                </div> 
                        </div> )}


                    <div className="bg-light-blue px-5">Search by : {searchx} | Results : {contacts.length}</div>
            


            {/* ---------------------------------------------------------- */}
            {/* Table                                                       */}
            {/* ---------------------------------------------------------- */}

            <table
                className="
                    table-fixed
                    border-collapse
                "
                style={{
                    width:
                        Object.values(
                            columnWidths
                        ).reduce(
                            (
                                total,
                                width
                            ) =>
                                total + width,
                            0
                        ),
                }}
            >


                {/* ------------------------------------------------------ */}
                {/* Column widths                                           */}
                {/* ------------------------------------------------------ */}

                <colgroup>

                    {Object.entries(
                        columnWidths
                    ).map(
                        ([
                            column,
                            width,
                        ]) => (

                            <col
                                key={column}
                                style={{
                                    width:
                                        `${width}px`,
                                }}
                            />

                        )
                    )}

                </colgroup>


                {/* ------------------------------------------------------ */}
                {/* Header                                                   */}
                {/* ------------------------------------------------------ */}

                <thead className="text-text-primary">

                    <tr
                        className="
                            border-b
                            border-gray-200
                            bg-primary-dark
                        "
                    >

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


                {/* ------------------------------------------------------ */}
                {/* Body                                                     */}
                {/* ------------------------------------------------------ */}

                <tbody className="text-text-primary">


                    {/* ================================================== */}
                    {/* Grouped                                              */}
                    {/* ================================================== */}

                    {groupBy ? (

                        Object.entries(
                            groupedContacts
                        ).map(
                            ([
                                groupName,
                                groupContacts,
                            ]) => (

                                <Fragment
                                    key={groupName}
                                >


                                    {/* ---------------------------------- */}
                                    {/* Group header                       */}
                                    {/* ---------------------------------- */}

                                    <tr
                                        className="
                                            bg-secondary
                                            text-primary-dark
                                            cursor-pointer
                                            select-none
                                        "
                                        onClick={() =>
                                            toggleGroup(
                                                groupName
                                            )
                                        }
                                    >

                                        <td
                                            colSpan={11}
                                            className="
                                                px-4
                                                py-3
                                                font-bold
                                            "
                                        >

                                            <div
                                                className="
                                                    flex
                                                    items-center
                                                    gap-3
                                                "
                                            >

                                                <span>
                                                    {
                                                        collapsedGroups[
                                                            groupName
                                                        ]
                                                            ? "▶"
                                                            : "▼"
                                                    }
                                                </span>


                                                <span>
                                                    {
                                                        groupName
                                                    }
                                                </span>


                                                <span
                                                    className="
                                                        text-sm
                                                        opacity-70
                                                    "
                                                >
                                                    (
                                                    {
                                                        groupContacts.length
                                                    }
                                                    )
                                                </span>

                                            </div>

                                        </td>

                                    </tr>


                                    {/* ---------------------------------- */}
                                    {/* Group rows                         */}
                                    {/* ---------------------------------- */}

                                    {!collapsedGroups[
                                        groupName
                                    ] &&

                                        groupContacts.map(
                                            (contact) => (

                                                <tr
                                                    key={
                                                        contact.id
                                                    }
                                                    style={{
                                                        height:
                                                            rowHeights[
                                                                contact.id
                                                            ]
                                                                ? `${rowHeights[contact.id]}px`
                                                                : undefined,
                                                    }}
                                                    className="
                                                        relative
                                                        border-b
                                                        border-white
                                                        transition-colors
                                                        hover:bg-secondary
                                                        hover:text-primary-dark
                                                        even:bg-primary-dark
                                                    "
                                                >

                                                    {/* ID */}

                                                    <td className="px-4 py-4">
                                                        {
                                                            contact.id
                                                        }
                                                    </td>


                                                    {/* Name */}

                                                    <td className="px-4 py-4">

                                                        <div
                                                            title={
                                                                contact.name
                                                            }
                                                            className="
                                                                overflow-hidden
                                                                text-ellipsis
                                                                whitespace-nowrap
                                                            "
                                                        >
                                                            {
                                                                contact.name
                                                            }
                                                        </div>

                                                    </td>


                                                    {/* Email */}

                                                    <td className="px-4 py-4">

                                                        <div
                                                            title={
                                                                contact.email
                                                            }
                                                            className="
                                                                overflow-hidden
                                                                text-ellipsis
                                                                whitespace-nowrap
                                                            "
                                                        >
                                                            {
                                                                contact.email
                                                            }
                                                        </div>

                                                    </td>


                                                    {/* Phone */}

                                                    <td className="px-4 py-4">

                                                        <div
                                                            title={
                                                                contact.phone
                                                            }
                                                            className="
                                                                overflow-hidden
                                                                text-ellipsis
                                                                whitespace-nowrap
                                                            "
                                                        >
                                                            {
                                                                contact.phone
                                                            }
                                                        </div>

                                                    </td>


                                                    {/* Subject */}

                                                    <td className="px-4 py-4">

                                                        <div
                                                            title={
                                                                contact.subject
                                                            }
                                                            className="
                                                                overflow-hidden
                                                                text-ellipsis
                                                                whitespace-nowrap
                                                            "
                                                        >
                                                            {
                                                                contact.subject
                                                            }
                                                        </div>

                                                    </td>


                                                    {/* Service */}

                                                    <td className="px-4 py-4">

                                                        <div
                                                            title={
                                                                contact.serviceName
                                                            }
                                                            className="
                                                                overflow-hidden
                                                                text-ellipsis
                                                                whitespace-nowrap
                                                            "
                                                        >
                                                            {
                                                                contact.serviceName ||
                                                                "-"
                                                            }
                                                        </div>

                                                    </td>


                                                    {/* Message */}

                                                    <td className="px-4 py-4">

                                                        <div
                                                            title={
                                                                contact.message
                                                            }
                                                            className="
                                                                overflow-hidden
                                                                break-words
                                                                whitespace-normal
                                                            "
                                                        >
                                                            {
                                                                contact.message
                                                            }
                                                        </div>

                                                    </td>


                                                    {/* Admin Mail */}

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


                                                    {/* Customer Mail */}

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


                                                    {/* Created On */}

                                                    <td className="px-4 py-4">

                                                        <div
                                                            title={
                                                                contact.createdOn
                                                            }
                                                            className="
                                                                overflow-hidden
                                                                text-ellipsis
                                                                whitespace-nowrap
                                                            "
                                                        >
                                                            {
                                                                contact.createdOn
                                                            }
                                                        </div>

                                                    </td>


                                                    {/* Created By */}

                                                    <td className="px-4 py-4">

                                                        <div
                                                            title={
                                                                contact.createdBy
                                                            }
                                                            className="
                                                                overflow-hidden
                                                                text-ellipsis
                                                                whitespace-nowrap
                                                            "
                                                        >
                                                            {
                                                                contact.createdBy
                                                            }
                                                        </div>

                                                    </td>


                                                    {/* Row resize */}

                                                    <RowResizeHandle
                                                        rowId={
                                                            contact.id
                                                        }
                                                    />

                                                </tr>

                                            )
                                        )
                                    }

                                </Fragment>

                            )
                        )

                    ) : (


                        /* ==================================================
                           Normal / ungrouped
                           ================================================== */

                        contacts.map(
                            (contact) => (

                                <tr
                                    key={contact.id}
                                    style={{
                                        height:
                                            rowHeights[
                                                contact.id
                                            ]
                                                ? `${rowHeights[contact.id]}px`
                                                : undefined,
                                    }}
                                    className="
                                        relative
                                        border-b
                                        border-white
                                        transition-colors
                                        hover:bg-secondary
                                        hover:text-primary-dark
                                        even:bg-primary-dark
                                    "
                                >

                                    {/* ID */}

                                    <td className="px-4 py-4">
                                        {
                                            contact.id
                                        }
                                    </td>


                                    {/* Name */}

                                    <td className="px-4 py-4">

                                        <div
                                            title={
                                                contact.name
                                            }
                                            className="
                                                overflow-hidden
                                                text-ellipsis
                                                whitespace-nowrap
                                            "
                                        >
                                            {
                                                contact.name
                                            }
                                        </div>

                                    </td>


                                    {/* Email */}

                                    <td className="px-4 py-4">

                                        <div
                                            title={
                                                contact.email
                                            }
                                            className="
                                                overflow-hidden
                                                text-ellipsis
                                                whitespace-nowrap
                                            "
                                        >
                                            {
                                                contact.email
                                            }
                                        </div>

                                    </td>


                                    {/* Phone */}

                                    <td className="px-4 py-4">

                                        <div
                                            title={
                                                contact.phone
                                            }
                                            className="
                                                overflow-hidden
                                                text-ellipsis
                                                whitespace-nowrap
                                            "
                                        >
                                            {
                                                contact.phone
                                            }
                                        </div>

                                    </td>


                                    {/* Subject */}

                                    <td className="px-4 py-4">

                                        <div
                                            title={
                                                contact.subject
                                            }
                                            className="
                                                overflow-hidden
                                                text-ellipsis
                                                whitespace-nowrap
                                            "
                                        >
                                            {
                                                contact.subject
                                            }
                                        </div>

                                    </td>


                                    {/* Service */}

                                    <td className="px-4 py-4">

                                        <div
                                            title={
                                                contact.serviceName
                                            }
                                            className="
                                                overflow-hidden
                                                text-ellipsis
                                                whitespace-nowrap
                                            "
                                        >
                                            {
                                                contact.serviceName ||
                                                "-"
                                            }
                                        </div>

                                    </td>


                                    {/* Message */}

                                    <td className="px-4 py-4">

                                        <div
                                            title={
                                                contact.message
                                            }
                                            className="
                                                overflow-hidden
                                                break-words
                                                whitespace-normal
                                            "
                                        >
                                            {
                                                contact.message
                                            }
                                        </div>

                                    </td>


                                    {/* Admin Mail */}

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


                                    {/* Customer Mail */}

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


                                    {/* Created On */}

                                    <td className="px-4 py-4">

                                        <div
                                            title={
                                                contact.createdOn
                                            }
                                            className="
                                                overflow-hidden
                                                text-ellipsis
                                                whitespace-nowrap
                                            "
                                        >
                                            {
                                                contact.createdOn
                                            }
                                        </div>

                                    </td>


                                    {/* Created By */}

                                    <td className="px-4 py-4">

                                        <div
                                            title={
                                                contact.createdBy
                                            }
                                            className="
                                                overflow-hidden
                                                text-ellipsis
                                                whitespace-nowrap
                                            "
                                        >
                                            {
                                                contact.createdBy
                                            }
                                        </div>

                                    </td>


                                    {/* Row resize */}

                                    <RowResizeHandle
                                        rowId={
                                            contact.id
                                        }
                                    />

                                </tr>

                            )
                        )

                    )}

                </tbody>

            </table>


            {/* ---------------------------------------------------------- */}
            {/* Empty state                                                 */}
            {/* ---------------------------------------------------------- */}

            {contacts.length === 0 && (

                <div
                    className="
                        flex
                        min-h-[200px]
                        items-center
                        justify-center
                        text-gray-500
                    "
                >
                    No contact messages found.
                </div>

            )}

        </div>
    </>);
}

// function ContactsTable({ contacts = [], search }) {

//     const [filterBy, setFilterBy] = useState("");
// const [groupBy, setGroupBy] = useState("");

// const [collapsedGroups, setCollapsedGroups] = useState({});

//     const inputRef = useRef(null);

//     const [columnWidths, setColumnWidths] = useState({
//         id: 50,
//         name: 160,
//         email: 200,
//         phone: 130,
//         subject: 120,
//         service: 180,
//         message: 280,
//         adminMail: 120,
//         customerMail: 140,
//         createdOn: 120,
//         createdBy: 120,
//     });

//     const resizingRef = useRef(null);

//     const startResize = (column, event) => {

//         event.preventDefault();

//         resizingRef.current = {
//             column,
//             startX: event.clientX,
//             startWidth: columnWidths[column],
//         };

//         document.addEventListener("mousemove", handleResize);
//         document.addEventListener("mouseup", stopResize);
//     };


//     const handleResize = (event) => {

//         if (!resizingRef.current) return;

//         const {
//             column,
//             startX,
//             startWidth,
//         } = resizingRef.current;

//         const difference = event.clientX - startX;

//         const newWidth = Math.max(
//             70,
//             startWidth + difference
//         );

//         setColumnWidths((prev) => ({
//             ...prev,
//             [column]: newWidth,
//         }));
//     };


//     const stopResize = () => {

//         resizingRef.current = null;

//         document.removeEventListener(
//             "mousemove",
//             handleResize
//         );

//         document.removeEventListener(
//             "mouseup",
//             stopResize
//         );
//     };


//     const ResizeHandle = ({ column }) => (

//         <span
//             onMouseDown={(event) =>
//                 startResize(column, event)
//             }
//             className="
//                 absolute
//                 right-0
//                 top-0
//                 h-full
//                 w-2
//                 cursor-col-resize
//                 select-none
//                 hover:bg-blue-400
//                 active:bg-blue-600
//             "
//         />

//     );



//     ///row hight
//     const [rowHeights, setRowHeights] = useState({});

// const rowResizingRef = useRef(null);

// const startRowResize = (rowId, event) => {
//     event.preventDefault();

//     rowResizingRef.current = {
//         rowId,
//         startY: event.clientY,
//         startHeight: rowHeights[rowId] || event.currentTarget.parentElement.offsetHeight,
//     };

//     document.addEventListener("mousemove", handleRowResize);
//     document.addEventListener("mouseup", stopRowResize);

//     document.body.style.cursor = "row-resize";
//     document.body.style.userSelect = "none";
// };

// const handleRowResize = (event) => {
//     if (!rowResizingRef.current) return;

//     const {
//         rowId,
//         startY,
//         startHeight,
//     } = rowResizingRef.current;

//     const difference = event.clientY - startY;

//     const newHeight = Math.max(
//         50,
//         startHeight + difference
//     );

//     setRowHeights((prev) => ({
//         ...prev,
//         [rowId]: newHeight,
//     }));
// };

// const stopRowResize = () => {
//     rowResizingRef.current = null;

//     document.removeEventListener(
//         "mousemove",
//         handleRowResize
//     );

//     document.removeEventListener(
//         "mouseup",
//         stopRowResize
//     );

//     document.body.style.cursor = "";
//     document.body.style.userSelect = "";
// };

//     const RowResizeHandle = ({ rowId }) => (
//     <span
//         onMouseDown={(event) =>
//             startRowResize(rowId, event)
//         }
//         className="
//             absolute
//             bottom-0
//             left-0
//             w-full
//             h-2
//             cursor-row-resize
//             select-none
//             hover:bg-blue-400
//             active:bg-blue-600
//             z-50
//         "
//     />
// );
//     return (

//         <div
//             className="
//                 w-full 
//                 rounded-xl
//                 border
//                 border-primary
//                 bg-brimary-dark
//                 shadow-sm
//                 flex
//                 flex-col
               
//             "
//         >
//             <div className="flex justify-center items-center gap-5 p-4 font-semibold text-text-primary w-250">
//                 <h1 className="shrink-0 text-2xl">Search : </h1>
//                 <Input placeholder="" ref={inputRef} className={"text-sm w-100"} />
//                 <Select
//                     value={filterBy}
//                     onChange={(e) => setFilterBy(e.target.value)}
//                 >
//                     <option value="">Filter By</option>

//                     {filterOptions.map((option) => (
//                         <option
//                             key={option.value || "all"}
//                             value={option.value}
//                         >
//                             {option.label}
//                         </option>
//                     ))}
//                 </Select>


//                 <Select
//                     value={groupBy}
//                     onChange={(e) => setGroupBy(e.target.value)}
//                 >
//                     <option value="">Group By</option>

//                     {groupOptions.map((option) => (
//                         <option
//                             key={option.value || "none"}
//                             value={option.value}
//                         >
//                             {option.label}
//                         </option>
//                     ))}
//                 </Select>


//                 <Button
//                     className="w-[10px] px-6"
//                     onClick={() =>
//                         search({
//                             query: inputRef.current?.value || "",
//                             filterBy,
//                             groupBy,
//                         })
//                     }
//                 >
//                     <Search className="w-6 h-6" />
//                 </Button>
//             </div>

//             <br/>

//             <table
//                 className="
//                     table-fixed
//                     border-collapse
//                 "
//                 style={{
//                     width: Object.values(columnWidths).reduce(
//                         (total, width) => total + width,
//                         0
//                     ),
//                 }}
//             >

//                 <colgroup>

//                     {Object.entries(columnWidths).map(
//                         ([column, width]) => (

//                             <col
//                                 key={column}
//                                 style={{
//                                     width: `${width}px`,
//                                 }}
//                             />

//                         )
//                     )}

//                 </colgroup>


//                 <thead className="text-text-primary">

//                     <tr className="border-b border-gray-200 bg-primary-dark ">

//                         <th className="relative px-4 py-4 text-left">
//                             ID
//                             <ResizeHandle column="id" />
//                         </th>

//                         <th className="relative px-4 py-4 text-left">
//                             Name
//                             <ResizeHandle column="name" />
//                         </th>

//                         <th className="relative px-4 py-4 text-left">
//                             Email
//                             <ResizeHandle column="email" />
//                         </th>

//                         <th className="relative px-4 py-4 text-left">
//                             Phone
//                             <ResizeHandle column="phone" />
//                         </th>

//                         <th className="relative px-4 py-4 text-left">
//                             Subject
//                             <ResizeHandle column="subject" />
//                         </th>

//                         <th className="relative px-4 py-4 text-left">
//                             Service
//                             <ResizeHandle column="service" />
//                         </th>

//                         <th className="relative px-4 py-4 text-left">
//                             Message
//                             <ResizeHandle column="message" />
//                         </th>

//                         <th className="relative px-4 py-4 text-center">
//                             Admin Mail
//                             <ResizeHandle column="adminMail" />
//                         </th>

//                         <th className="relative px-4 py-4 text-center">
//                             Customer Mail
//                             <ResizeHandle column="customerMail" />
//                         </th>
//                         <th className="relative px-4 py-4 text-center">
//                             Created On
//                             <ResizeHandle column="createdOn" />
//                         </th>
//                         <th className="relative px-4 py-4 text-center">
//                             Created By
//                             <ResizeHandle column="createdBy" />
//                         </th>

//                     </tr>

//                 </thead>


//                 <tbody className="text-text-primary">

//                     {contacts.map((contact) => (

//                         <tr
//                              key={contact.id}
//     style={{
//         height: rowHeights[contact.id]
//             ? `${rowHeights[contact.id]}px`
//             : undefined,
//     }}
//     className="
//         relative
//         border-b
//         border-white
//         transition-colors
//         hover:bg-secondary
//         hover:text-primary-dark
//         even:bg-primary-dark
//     "
//                         >

//                             <td className="px-4 py-4">
//                                 {contact.id}
//                             </td>


//                             <td className="px-4 py-4">

//                                 <div
//                                     title={contact.name}
//                                     className="
//                                         overflow-hidden
//                                         text-ellipsis
//                                         whitespace-nowrap
//                                     "
//                                 >
//                                     {contact.name}
//                                 </div>

//                             </td>


//                             <td className="px-4 py-4">

//                                 <div
//                                     title={contact.email}
//                                     className="
//                                         overflow-hidden
//                                         text-ellipsis
//                                         whitespace-nowrap
//                                     "
//                                 >
//                                     {contact.email}
//                                 </div>

//                             </td>


//                             <td className="px-4 py-4">

//                                 <div
//                                     title={contact.phone}
//                                     className="
//                                         overflow-hidden
//                                         text-ellipsis
//                                         whitespace-nowrap
//                                     "
//                                 >
//                                     {contact.phone}
//                                 </div>

//                             </td>


//                             <td className="px-4 py-4">

//                                 <div
//                                     title={contact.subject}
//                                     className="
//                                         overflow-hidden
//                                         text-ellipsis
//                                         whitespace-nowrap
//                                     "
//                                 >
//                                     {contact.subject}
//                                 </div>

//                             </td>


//                             <td className="px-4 py-4">

//                                 <div
//                                     title={contact.serviceName}
//                                     className="
//                                         overflow-hidden
//                                         text-ellipsis
//                                         whitespace-nowrap
//                                     "
//                                 >
//                                     {contact.serviceName || "-"}
//                                 </div>

//                             </td>


//                             <td className="px-4 py-4">

//                                 <div
//                                     title={contact.message}
//                                      className="
//         overflow-hidden
//         break-words
//         whitespace-normal
//     "
//                                 >
//                                     {contact.message}
//                                 </div>

//                             </td>


//                             <td className="px-4 py-4 text-center">

//                                 <div className="flex justify-center">

//                                     <span
//                                         title={
//                                             Number(
//                                                 contact.adminMailStatus
//                                             ) === 1
//                                                 ? "Sent"
//                                                 : "Not sent"
//                                         }
//                                         className={`
//                                             h-3
//                                             w-3
//                                             rounded-full
//                                             ${
//                                                 Number(
//                                                     contact.adminMailStatus
//                                                 ) === 1
//                                                     ? "bg-green-500"
//                                                     : "bg-red-500"
//                                             }
//                                         `}
//                                     />

//                                 </div>

//                             </td>


//                             <td className="px-4 py-4 text-center">

//                                 <div className="flex justify-center">

//                                     <span
//                                         title={
//                                             Number(
//                                                 contact.customerMailStatus
//                                             ) === 1
//                                                 ? "Sent"
//                                                 : "Not sent"
//                                         }
//                                         className={`
//                                             h-3
//                                             w-3
//                                             rounded-full
//                                             ${
//                                                 Number(
//                                                     contact.customerMailStatus
//                                                 ) === 1
//                                                     ? "bg-green-500"
//                                                     : "bg-red-500"
//                                             }
//                                         `}
//                                     />

//                                 </div>

//                             </td>

//                             <td className="px-4 py-4">

//                                 <div
//                                     title={contact.createdOn}
//                                     className="
//                                         overflow-hidden
//                                         text-ellipsis
//                                         whitespace-nowrap
//                                     "
//                                 >
//                                     {contact.createdOn}
//                                 </div>

//                             </td>
//                             <td className="px-4 py-4">

//                                 <div
//                                     title={contact.createdBy}
//                                     className="
//                                         overflow-hidden
//                                         text-ellipsis
//                                         whitespace-nowrap
//                                     "
//                                 >
//                                     {contact.createdBy}
//                                 </div>

//                             </td>
// <RowResizeHandle rowId={contact.id} />
//                         </tr>

//                     ))}

//                 </tbody>

//             </table>


//             {contacts.length === 0 && (

//                 <div className="flex min-h-[200px] items-center justify-center text-gray-500">
//                     No contact messages found.
//                 </div>

//             )}

//         </div>
//     );
// }

