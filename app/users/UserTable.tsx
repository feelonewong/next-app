import Link from "next/link";
import React from "react";
import { sort } from "fast-sort";
interface User {
  id: number;
  name: string;
  email: string;
}
interface Props {
  sortOrder: string;
}
const UserTable = async ({ sortOrder }: Props) => {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const res = await fetch(apiUrl, {
    cache: "no-store",
  });
  const users: User[] = await res.json();
  const sortedUser = sortOrder === "email"
    ? sort(users).desc((u) => u.email)
    : sort(users).desc((u) => u.name);

  return (
    <div>
      <table className="table  table-border border ">
        <thead>
          <tr>
            <th>
              <Link href="/users?sortOrder=name">姓名</Link>
            </th>
            <th>
              <Link href="/users?sortOrder=email">邮箱</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUser.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
