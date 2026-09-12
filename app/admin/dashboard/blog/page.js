"use client"
import { deleteBlog } from "@/api/admin/blogs";
import { getBlogs } from "@/api/blogs";
import AddBlogForm from "@/components/admin/addBlogForm";
import ImagesGrid from "@/components/shared/imageGrid";
import TabNav from "@/components/shared/tabNav";
import { auth } from "@/configs/firebase";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Blog() {
    const [activeTab, setActiveTab] = useState("add");

    const tabs = [
        {
            label: "Add Blog",
            value: "add",
            content: <AddBlogForm />,
        },
        {
            label: "Blogs",
            value: "blogs",
            content: <AdminBlogsSection/>,
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


function AdminBlogsSection() {

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState([]);

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


  return (
  <>
    {loading && <p>Loading...</p>}

    <ImagesGrid
      items={blogs}
      path={"/article/"}
      deleteButton={true}
      onDelete={async (id) => {

        const result = await deleteBlog(id);

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