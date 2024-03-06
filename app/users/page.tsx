"use client"
import React, { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage = () => {
  // 时间State
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  // 数据缓存
  const fetchData = async () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const res = await fetch(apiUrl, {
      cache: "no-store"
    });
    return await res.json();
  };

  // 用户数据State
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchData().then((users: User[]) => {
      setUsers(users);
    });
  }, []);

  // 每秒更新时间
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // componentWillUnmount 清除定时器
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h1>Users Page</h1>
      <p>{currentTime}</p>
      <ul>
        {
          users.map(user => <li key={user.id}>{user.name}</li>)
        }
      </ul>
    </>
  );
};

export default UsersPage;