"use client";
import React, { useState } from "react";
import axios from "axios";
interface fdata {
  username: string;
  email: string;
  password: string;
}
const page = () => {
  const [form, setForm] = useState<fdata>({
    username: "",
    email: "",
    password: "",
  });

  const signup = () => {
  try {
    axios.post("/api/register", form)
  } catch (error) {
    console.log(error);
    
  }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <label htmlFor="">Name</label>
      <input type="text" className="text-black" onChange={onChangeHandler} value={form.username} name="username" />
      <label htmlFor="">Email</label>
      <input type="email" className="text-black" value={form.email} onChange={onChangeHandler} name="email" />
      <label htmlFor="">Password</label>
      <input type="password" className="text-black" value={form.password} onChange={onChangeHandler} name="password" />

      <button onClick={signup}>Signup</button>
    </div>
  );
};

export default page;
