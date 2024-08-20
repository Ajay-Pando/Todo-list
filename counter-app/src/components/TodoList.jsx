import React, { useEffect, useState } from "react";
import axios from "axios";

const TodoList = () => {
  const [edit, setEdit] = useState(false);
  const [list, setList] = useState([]);
  const [description, setdescription] = useState();
  const [userId, setUserId] = useState();

  const url = "http://localhost:5000";

  const showTodoList = async () => {
    try {
      const { data } = await axios.get(`${url}/api/display`);
      setList(data);
    } catch (error) {
      console.log("Error fetching todos:", error);
    }
  };

  const createTodo = async (e) => {
    try {
      const data = await axios.post(`${url}/api/create`, { description });
      if (data.status === 200) {
        setdescription("");
        showTodoList();
      }
    } catch (error) {
      console.log("Error insert todo:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const deleteData = await axios.delete(`${url}/api/delete/${id}`);
      if (deleteData.status === 200) {
        showTodoList();
      }
    } catch (error) {
      console.log("Error delete todo:", error);
    }
  };

  const singleTodo = async (id) => {
    setEdit(true);
    try {
      const { data } = await axios.get(`${url}/api/show/${id}`);
      setdescription(data.description);
      setUserId(data.id);
    } catch (error) {
      console.log(error);
    }
  };

  const editTodo = async (e) => {
    e.preventDefault();
    try {
      const edit = await axios.put(`${url}/api/edit/${userId}`, {description});
      if(edit.status === 200){
        setEdit(false);
        setdescription("");
        showTodoList();
      }
    } catch (error) {
      console.log("Error edit todo:", error);
    }
  };


  useEffect(() => {
    showTodoList();
  }, []);
  return (
    <>
      <div className="">
        <div className="md:w-[50%] mx-auto mt-14 p-5 bg-orange-50 shadow-xl rounded-lg">
          <h1 className="font-bold text-2xl text-center">TODO List</h1>
          <form
            className="mt-10 flex md:flex-row flex-col"
            onSubmit={edit ? editTodo : createTodo}
          >
            <div className="w-full">
              <input
                type="text"
                className="border-2 w-full p-3 outline-none border-b-indigo-300 focus:border-b-green-700 rounded-md"
                placeholder="Add a task"
                name="task"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
              />
            </div>
            {edit ? (
              <button
                type="submit"
                className="bg-green-700 md:w-28 hover:bg-green-600 text-white font-semibold p-3 md:mx-4 rounded-md mt-5 md:mt-0 w-full"
              >
                Edit
              </button>
            ) : (
              <button
                type="submit"
                className="bg-green-700 md:w-28 hover:bg-green-600 text-white font-semibold p-3 md:mx-4 rounded-md mt-5 md:mt-0 w-full"
              >
                Add
              </button>
            )}
          </form>
          <div className="mt-10 space-y-4">
            {list.length === 0 ? (
              <p className="text-center text-gray-500">No tasks available</p>
            ) : (
              list.map((d) => (
                <div
                  className="sm:flex flex-col sm:flex-row bg-yellow-50 shadow-xl rounded-sm p-2 space-x-3"
                  key={d.id}
                >
                  <p className="flex items-center w-full">{d.description}</p>
                  <button
                    type="button"
                    className="bg-yellow-600 hover:bg-yellow-500 p-2 rounded-md font-semibold sm:w-auto w-[30%] mt-3 sm:mt-0"
                    onClick={() => singleTodo(d.id)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="bg-red-600 hover:bg-red-500 p-2 rounded-md font-semibold"
                    onClick={() => deleteTodo(d.id)}
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
