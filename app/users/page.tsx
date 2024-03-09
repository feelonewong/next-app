"use client";
import React from "react";
import UserTable from "@/app/users/UserTable";
import Link from "next/link";

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
      <Link href="/users/new" className="btn mb-3">Add New User</Link>
      <UserTable sortOrder={sortOrder}  />
    </>
  );
};

export default UsersPage;
