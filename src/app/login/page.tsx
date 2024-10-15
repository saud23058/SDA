"use client";
import React, { useState } from "react";
import axios from "axios";
interface fdata {
  email: string;
  password: string;
}
const page = () => {
  const [form, setForm] = useState<fdata>({
    email: "",
    password: "",
  });

  const signup = async() => {
    try {
    const res= await axios.post("/api/login", form);

      console.log(res);
      
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <label htmlFor="">Email</label>
      <input
        type="email"
        className="text-black"
        value={form.email}
        onChange={onChangeHandler}
        name="email"
      />
      <label htmlFor="">Password</label>
      <input
        type="password"
        className="text-black"
        value={form.password}
        onChange={onChangeHandler}
        name="password"
      />

      <button onClick={signup}>Login</button>
    </div>
  );
};

export default page;
