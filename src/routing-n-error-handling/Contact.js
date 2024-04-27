import React from "react";

const Contact = () => {
  return (
    <>
      <div>
        <h1 className="m-2 p-2 text-center font-semibold">Contact</h1>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            className="border-1 border-black m-2 p-2"
          />
          <input
            type="text"
            name="comment"
            placeholder="Enter Comment"
            className="border-1 border-black m-2 p-2"
          />
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
