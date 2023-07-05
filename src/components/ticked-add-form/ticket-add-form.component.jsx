import React from 'react';
import { NavLink } from 'react-router-dom';

const TicketAddForm = () => {
  return (
    <div className="rounded bg-white w-full p-4 shadow">
      <h3 className="font-bold text-lg text-cst-text-gray-800 mb-3">
        Create new ticket
      </h3>
      <div className="flex flex-col">
        <label htmlFor="title" className="font-semibold mb-1">
          Title
        </label>
        <input
          id="title"
          type="text"
          className="text-input mb-3"
          placeholder="Title"
        />
        <label htmlFor="description" className="font-semibold mb-1">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          className="text-input"
          placeholder="Description"
        />
        <div className="self-end flex mt-3">
          <button className="btn-primary min-w-[100px] mr-3">
            Send ticket
          </button>
          <NavLink
            to="/dashboard/tickets/"
            className="btn-primary min-w-[100px] text-center"
          >
            Cancel
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default TicketAddForm;
