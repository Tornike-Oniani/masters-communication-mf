import React from 'react';

const UserInformation = () => {
  return (
    <div className="grid grid-cols-[max-content_1fr] items-center gap-y-4 gap-x-5 border border-gray-400 rounded p-4 bg-white text-right w-full">
      <h2 className="col-span-2 text-lg font-bold text-cst-text-gray-800 text-left">
        Account information
      </h2>
      <p>First Name</p>
      <input
        type="text"
        className="text-input bg-cst-gray-900"
        readOnly={true}
        value="John"
      />
      <p>Last Name</p>
      <input
        type="text"
        className="text-input bg-cst-gray-900"
        readOnly={true}
        value="Doe"
      />
      <p>Email</p>
      <input
        type="email"
        className="text-input bg-cst-gray-900"
        readOnly={true}
        value="John.Doe.1@iliauni.edu.ge"
      />
      <p>Verified</p>
      <div className="flex flex-col sm:flex-row">
        <input
          type="text"
          className="text-input border-yellow-500 text-yellow-600 mb-2 sm:mr-4 sm:mb-0"
          readOnly={true}
          value="Please verify your email!"
        />
        <button className="btn-primary">Resend verification</button>
      </div>
      <p>Roles</p>
      <div className="border border-gray-400 rounded bg-cst-gray-900 p-1 flex">
        <div className="text-base text-white bg-cst-cyan-900 px-2 py-1 rounded mr-2">
          Teacher
        </div>
        <div className="text-base text-white bg-cst-cyan-900 px-2 py-1 rounded">
          Analyst
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
