"use client"
import { deleteBlog } from "@/api/admin/blogs";
import { getBlogs } from "@/api/blogs";
import AddBlogForm from "@/components/admin/addBlogForm";
import EditArticleForm from "@/components/admin/editArticleForm";
import ArrowRight from "@/components/icons/arrowRight";
import Pencil from "@/components/icons/pencil";
import Trash from "@/components/icons/trash";
import ImagesGrid from "@/components/shared/imageGrid";
import TabNav from "@/components/shared/tabNav";
import { auth } from "@/configs/firebase";
import { useAdminAuth } from "@/context/adminACLProvider";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { toast } from "sonner";

export default function Blog() {

    const {
        permissions,
        loading
    } = useAdminAuth();
    
    function hasAccess(module, action) {
    
        if (loading || !permissions) {
            return false;
        }
    
        return permissions?.[module]?.[action] === true;
    }

    const [activeTab, setActiveTab] = useState("add");

    const tabs = [
        {
            label: "Add Blog",
            value: "add",
            content: <AddBlogForm />,
            hasAccess:hasAccess("Blog","create")
        },
        {
            label: "Blogs",
            value: "blogs",
            content: <AdminBlogsSection allowEdit={hasAccess("Blog","edit")} allowDelete={hasAccess("Blog","delete")} />,
            hasAccess:hasAccess("Blog","view")
        },
    ];

    return (
      loading?<span>Loading...</span>:
        <TabNav
            tabs={tabs}
            activeTab={activeTab}
            onChange={setActiveTab}
        />
    );
}



function EventsTable({
  events = [],
  onDelete = async () => { },
  allowDelete,
  allowEdit,
  path = "/portfolio/",
}) {console.log(allowDelete,allowEdit)

  const [de,sde] = useState(0);
const [requestTitle, setRequestTitle] = useState("");
  const [editFormOpen, setEditFormOpen] = useState(false);

  const [columnWidths, setColumnWidths] = useState({
    id: 50,
    thumb: 200,
    name: 300,
    requestTitle: 220,
    createdOn: 120,
    createdBy: 160,
    lastUpdateOn: 160,
    lastUpdateBy: 160,
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

            <th className="relative px-4 py-4 text-left">
              Last Update On
              <ResizeHandle column="createdOn" />
            </th>

            <th className="relative px-4 py-4 text-left">
              Last Update By
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

              {/*Last Update On */ }
              <td className="px-4 py-4">
                <div
                  title={ event.lastUpdateOn }
                  className="
                                        overflow-hidden
                                        text-ellipsis
                                        whitespace-nowrap
                                    "
                >
                  { event.lastUpdateOn || "-" }
                </div>
              </td>

              {/*Last Update By */ }
              <td className="px-4 py-4">
                <div
                  title={ event.lastUpdateBy }
                  className="
                                        overflow-hidden
                                        text-ellipsis
                                        whitespace-nowrap
                                    "
                >
                  { event.lastUpdateBy || "-" }
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
                  {allowEdit && <button
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
                  </ button>}

                  {/* Delete */ }
                  {allowDelete && <button
                    type="button"
                    title="Delete event"
                    onClick={ async (e) => {
                      e.stopPropagation();
                      if(allowDelete && confirm("are you sure to delete : "+event.name)){
                        const i =await onDelete(event.id);
                        i.success && sde(event.id);
                      }

                    } }
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-light-red cursor-pointer transition hover: scale-105"
                  >
                    <Trash className="h-5 w-5 fill-light-red" />
                  </ button>}

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
            <EditArticleForm allowEdit={allowEdit} requestTitle={requestTitle} open={editFormOpen} onClose={()=>setEditFormOpen(false)}/>
      
    </div >
  );
}


function AdminBlogsSection({allowDelete,allowEdit}) {

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function getData() {
      setLoading(true);

      const user = auth.currentUser;

      let fbToken = null;

      if (user) {
        fbToken = await user.getIdToken();
      }

      const blogs = await getBlogs(fbToken);

      setBlogs(blogs);
      setLoading(false);
    }

    getData();

  }, []);

    const handleDelete = async (id) => {
      const result = await deleteBlog(id);
  
      if (result.success) {
        toast.success(result.message);
  
        // // Remove deleted event immediately from the table
        setBlogs((prev) =>
          prev.filter((blog) => blog.id !== id)
        );
      } else {
        toast.error(result.message);
      }
      return result;
    };

  if (loading) {
    return (
      <div className="flex min-h-[200px] items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  
  return (
  <>
    {/* {loading && <p>Loading...</p>} */}

      <EventsTable
        events={ blogs }
        path="/article/"
        onDelete={ handleDelete }
        allowDelete={allowDelete}
        allowEdit={allowEdit}
      />
  </>

  );
}


// function AdminBlogsSection() {

//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState([]);

//   useEffect(() => {

//     async function getData() {
//       setLoading(true);

//       const user = auth.currentUser;

//       let fbToken = null;

//       if (user) {
//         fbToken = await user.getIdToken();
//       }

//       const blogs = await getBlogs(fbToken);

//       setBlogs(blogs);
//       setLoading(false);
//     }

//     getData();

//   }, []);


//   return (
//   <>
//     {loading && <p>Loading...</p>}

//     <ImagesGrid
//       items={blogs}
//       path={"/article/"}
//       deleteButton={true}
//       onDelete={async (id) => {

//         const result = await deleteBlog(id);

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