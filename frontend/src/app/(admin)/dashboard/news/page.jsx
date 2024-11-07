"use client";
import { TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { DotLoader } from "react-spinners";
import { IoMdAddCircleOutline } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, []);

  const handleEditPost = (post) => {
    console.log("Editing post:", post);
  };

  const handleDeletePost = async (postId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/posts/${postId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setPosts((prevPosts) =>
          prevPosts.filter((post) => post._id !== postId)
        );
        console.log("Post deleted successfully");
      } else {
        console.error("Failed to delete post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="h-full">
      {loading ? (
        <div className="h-full flex items-center justify-center">
          <DotLoader color="#052038" />
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between px-20 py-2">
            <h1 className="text-xl font-semibold">All Posts</h1>
            <div className="flex items-center gap-x-4">
              <TextField
                id="standard-search"
                label="Search field"
                type="search"
                variant="standard"
              />
              <Link
                href={"/dashboard/newsadd"}
                className="flex items-center gap-x-2 p-2 border border-gray-300 hover:bg-gray-100 transition-all duration-300"
              >
                <IoMdAddCircleOutline size={35} />
                <span>Add Post</span>
              </Link>
            </div>
          </div>
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Content
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Author
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Tags
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr key={post._id}>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    {index + 1}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    {post.image ? (
                      <Image
                        src={`http://localhost:3000${post.image}`}
                        alt="Post"
                        width={100}
                        height={100}
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    {post.title}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    {post.content}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    {post.author ? post.author.name : "No Author"}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    {post.tags.join(", ")}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm space-x-4">
                    <button
                      className="text-green-500 hover:text-green-700"
                      onClick={() => handleEditPost(post)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDeletePost(post._id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Dashboard;
