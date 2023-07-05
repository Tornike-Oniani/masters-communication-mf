import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import DynamicList from '../dynamic-list/dynamic-list.component';
import TicketItem from '../ticket-item/ticket-item.component';

const TicketsView = () => {
  const [filter, setFilter] = useState('');

  const columns = [
    {
      accessor: 'id',
      label: '#',
    },
    {
      accessor: 'title',
      label: 'Title',
    },
    {
      accessor: 'status',
      label: 'Status',
    },
    {
      accessor: 'reviewedBy',
      label: 'Reviewed By',
    },
    {
      accessor: 'issueDate',
      label: 'IssueDate',
    },
    {
      accessor: 'actions',
      label: 'Actions',
    },
  ];

  const tickets = [
    {
      id: 1,
      title: 'Requesting role change',
      status: 'pending',
      reviewedBy: 'Mary Sue',
      issueDate: '02/15/2022',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, quam aliquid laborum dicta sunt error commodi asperiores, illo architecto beatae laboriosam nihil facilis ipsa id non obcaecati dolorem sapiente mollitia!',
    },
    {
      id: 2,
      title: 'Email change',
      status: 'rejected',
      reviewedBy: 'Mary Sue',
      issueDate: '04/07/2022',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error illum officiis sit quos! Magni, qui ab doloribus nesciunt totam nulla eaque in, beatae dolorum deleniti perferendis fugit, ea quod laborum earum aperiam. Provident, ut cum mollitia veniam eligendi neque, laborum asperiores aut tempora error quasi officiis voluptatibus nisi ab numquam impedit cumque hic. Eaque consectetur magni sunt a impedit tenetur accusamus sapiente odit eveniet dicta maxime dolorem laborum, beatae incidunt provident velit praesentium ab mollitia at? Eius eligendi ratione enim consequatur a aspernatur vitae voluptatum inventore, iusto praesentium, neque molestiae esse reiciendis corrupti culpa explicabo possimus. Earum delectus est veritatis!',
    },
    {
      id: 3,
      title: 'Promotion acceptance',
      status: 'accepted',
      reviewedBy: 'Mary Sue',
      issueDate: '02/04/2023',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis suscipit quaerat itaque tenetur, atque laudantium ea molestias maxime dolor nam autem libero. Recusandae quod est tenetur fuga aut quia, omnis quaerat? Natus molestias rerum tenetur provident harum aperiam. Blanditiis nam modi eos animi quas rem nostrum, natus, excepturi ab praesentium incidunt a magni beatae enim at, cum officia. Ea excepturi iusto laudantium aspernatur provident et culpa, hic laborum distinctio ab accusantium ipsum, voluptate similique architecto earum adipisci officia cupiditate corporis eligendi veniam! Officia atque ex beatae veritatis deleniti sint? Sequi eum tempore nesciunt a deleniti sapiente neque cupiditate officia porro vel aliquid dolor inventore quaerat consequatur eligendi qui rem, asperiores optio. Aperiam blanditiis eius eum quae? Est nulla autem sit sequi laborum impedit pariatur delectus veritatis perferendis fugit voluptatum id laudantium tenetur officia dicta debitis, ducimus quisquam et earum atque eveniet at temporibus similique expedita? Doloremque iusto dolores soluta consectetur.',
    },
  ];

  return (
    <div className="border border-gray-400 rounded bg-white w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4">
        <NavLink to="create" className="btn-primary text-center mb-4 sm:mb-0">
          Create new ticket
        </NavLink>
        <input
          type="text"
          className="text-input"
          placeholder="Search..."
          onChange={(event) => {
            setFilter(event.target.value);
          }}
        />
      </div>
      <DynamicList
        columns={columns}
        rows={tickets}
        filter={filter}
        filterBy="title"
        ItemComponent={TicketItem}
      />
    </div>
  );
};

export default TicketsView;
