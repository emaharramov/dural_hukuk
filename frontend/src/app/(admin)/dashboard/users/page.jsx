"use client";
import { TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { DotLoader } from "react-spinners";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    fetch("http://localhost:3000/api/auth/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        console.log(data);

        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false); // Ensure loading is false even if there is an error
      });
  }, []);

  const handleEditUser = (user) => {
    console.log("Editing user:", user);
  };

  const handleDeleteUser = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/auth/users/${userId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // Update the users state to remove the deleted user
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
        console.log("User deleted successfully");
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
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
            <p className="font-poppins-medium h-[48px] flex items-center px-2">
              All Users
            </p>
            <div>
              <TextField
                id="standard-search"
                label="Search field"
                type="search"
                variant="standard"
                InputLabelProps={{
                  style: {
                    color: "#052038",
                    fontFamily: "poppins-regular",
                    fontSize: "15px",
                  },
                }}
                InputProps={{
                  style: {
                    color: "#052038",
                    fontFamily: "poppins-regular",
                    fontSize: "13px",
                  },
                }}
              />
            </div>
          </div>
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {index + 1}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {user.name}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {user.email}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm space-x-4">
                    <button
                      className="text-green-500 hover:text-green-700"
                      onClick={() => handleEditUser(user)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDeleteUser(user._id)}
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
