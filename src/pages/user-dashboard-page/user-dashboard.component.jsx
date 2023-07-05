import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';

import UserInformation from '../../components/user-information/user-information.component';
import TicketsView from '../../components/tickets-view/tickets-view.component';
import TicketAddForm from '../../components/ticked-add-form/ticket-add-form.component';
import ProfileIcon from '../../assets/address-book.svg';
import TicketsIcon from '../../assets/newspaper.svg';

const UserDashboardPage = () => {
  return (
    <div className="flex flex-col items-stretch h-screen bg-cst-gray-800 lg:flex-row">
      <div className="bg-cst-black-800 md:min-w-[220px] xl:min-w-[250px]">
        <ul className="flex lg:block lg:mt-24">
          <li className="">
            <NavLink
              to="/dashboard/"
              className={({ isActive }) =>
                'flex items-center p-4 ' +
                (isActive
                  ? 'bg-cst-black-900 text-white fill-white'
                  : 'text-cst-text-gray-600 fill-cst-text-gray-600')
              }
            >
              <ProfileIcon className="block w-5 h-5 mr-2" />
              Account information
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/dashboard/tickets/"
              className={({ isActive }) =>
                'flex items-center p-4 ' +
                (isActive
                  ? 'bg-cst-black-900 text-white fill-white'
                  : 'text-cst-text-gray-600 fill-cst-text-gray-600')
              }
            >
              <TicketsIcon className="block w-5 h-5 mr-2" />
              Tickets
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="w-full p-3 sm:p-5 lg:p-10">
        <h3 className="font-bold text-2xl text-cst-text-gray-800 mb-5">
          Dashboard
        </h3>
        <Routes>
          <Route path="/" element={<UserInformation />} />
          <Route path="/tickets" element={<TicketsView />} />
          <Route path="/tickets/create" element={<TicketAddForm />} />
        </Routes>
      </div>
    </div>
  );
};

export default UserDashboardPage;
