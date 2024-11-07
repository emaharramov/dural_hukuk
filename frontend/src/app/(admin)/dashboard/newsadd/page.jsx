"use client";
import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Cookies from "js-cookie";

const Page = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState("");
  const [author, setAuthor] = useState("");
  const [authorsList, setAuthorsList] = useState([
    { id: "1", name: "Author One" },
    { id: "2", name: "Author Two" },
  ]);
  const quillRef = useRef(null);

  useEffect(() => {
    const quill = new Quill(quillRef.current, {
      theme: "snow",
      modules: {
        toolbar: [
          ["bold", "italic", "underline", "strike"],
          [{ header: [1, 2, 3, false] }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["clean"],
        ],
      },
    });
    return () => quill.off("text-change");
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

 const handleSubmit = async (event) => {
   event.preventDefault();
   const content = quillRef.current.firstChild.innerHTML;

   const token = Cookies.get("token");
   console.log(token);
   
   if (!token) {
     toast.error("User is not authenticated.");
     return;
   }

   try {
     await axios.post(
       "http://localhost:3000/api/posts",
       {
         title,
         image,
         content,
         tags: tags.split(",").map((tag) => tag.trim()),
         author: author
           ? { _id: "672b12cd104c29a834cbe65d", name: author }
           : null,
       },
       {
         headers: { Authorization: `Bearer ${token}` },
       }
     );
     toast.success("Post created successfully!");
   } catch (error) {
     if (error.response) {
       // Specific error handling for different statuses
       if (error.response.status === 400) {
         toast.error("Bad request. Please check the input data.");
       } else if (error.response.status === 401) {
         toast.error("Unauthorized. Check your token.");
       } else if (error.response.status === 403) {
         toast.error("Forbidden. You do not have permission.");
       } else {
         toast.error("Failed to create post.");
       }
     } else {
       toast.error("Network error. Check your connection.");
     }
     console.error("Error submitting post:", error);
   }
 };

  return (
    <div className="w-full mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <ToastContainer />
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Add News Post
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Content
          </label>
          <div
            ref={quillRef}
            style={{ height: "200px" }}
            className="mt-1 bg-white border border-gray-300 rounded-md shadow-sm"
          ></div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tags
          </label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Tags (comma-separated)"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Author
          </label>
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select an author</option>
            {authorsList.map((author) => (
              <option key={author.id} value={author.name}>
                {author.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page;
