import React, { useState } from "react";

const SignupForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cPassword: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const validateFrom = () => {
    let errors = {};

    const nameRegx = /^[A-Z][a-z]*$/;
    if (!nameRegx.test(data.name)) {
      errors.name = "First letter should be Capital letter.";
    }

    const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegx.test(data.email)) {
      errors.email = "Enter valid email.";
    }

    const phoneRegx = /^\d{10}$/;
    if (!phoneRegx.test(data.phone)) {
      errors.phone = "Number should be 10 digit.";
    }

    const passwordRegx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegx.test(data.password)) {
      errors.password =
        "Password must be eight characters, one uppercase letter, one lowercase letter, one number and one special character.";
    }

    if (data.password !== data.cPassword) {
      errors.cPassword = "Password did not match.";
    }

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFrom()) {
      alert("Successfully submit");
    }
  };

  return (
    <>
      <div className="">
        <div className="md:w-[50%] mx-auto mt-14 p-5 bg-white shadow-xl rounded-lg">
          <h1 className="font-bold text-2xl text-center">Signup Form</h1>
          <form
            className="mt-10 flex flex-col space-y-8"
            onSubmit={handleSubmit}
          >
            <div>
              <input
                type="text"
                className="border-2 w-full p-3 outline-none border-b-indigo-300 focus:border-b-indigo-500 rounded-md"
                placeholder="Enter name"
                name="name"
                value={data.name}
                onChange={handleChange}
              />
              {error.name && (
                <p className="text-red-600 m-1 text-sm">{error.name}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                className="border-2 w-full p-3 outline-none border-b-indigo-300 focus:border-b-indigo-500 rounded-md"
                placeholder="Enter email"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
              {error.email && (
                <p className="text-red-600 m-1 text-sm">{error.email}</p>
              )}
            </div>
            <div>
            <input
              type="phone"
              className="border-2 w-full p-3 outline-none border-b-indigo-300 focus:border-b-indigo-500 rounded-md"
              placeholder="Enter phone"
              name="phone"
              value={data.phone}
              onChange={handleChange}
            />
            {error.phone && (
              <p className="text-red-600 m-1 text-sm">{error.phone}</p>
            )}
            </div>
            <div>
            <input
              type="password"
              className="border-2 w-full p-3 outline-none border-b-indigo-300 focus:border-b-indigo-500 rounded-md"
              placeholder="Enter password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            {error.password && (
              <p className="text-red-600 m-1 text-sm">{error.password}</p>
            )}
            </div>
            <div>
            <input
              type="password"
              className="border-2 w-full p-3 outline-none border-b-indigo-300 focus:border-b-indigo-500 rounded-md"
              placeholder="Enter confirm password"
              name="cPassword"
              value={data.cPassword}
              onChange={handleChange}
            />
            </div>
            {error.cPassword && (
              <p className="text-red-600 m-1 text-sm">{error.cPassword}</p>
            )}
            <button
              type="submit"
              className="bg-blue-950 hover:bg-blue-900 text-white font-semibold p-2 mt-5 rounded-md md:hover:bg-blue-400 md:text-black md:bg-blue-500 md:mx-[40%]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
