"use client";
import React from "react";
import UserTable from "@/app/users/UserTable";

interface Props {
  params: {
    
  },
  searchParams: {
    sortOrder: string
  }
}
const UsersPage = ({ searchParams: { sortOrder } }:Props) => {
  return (
    <>
      <h1 className="p-2 text-center text-lg">Users Table</h1>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
