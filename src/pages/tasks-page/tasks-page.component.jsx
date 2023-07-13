import React, { useState } from 'react';
import DynamicList from '../../components/dynamic-list/dynamic-list.component';
import TaskItem from '../../components/task-item/task-item.component';

const TasksPage = () => {
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
      accessor: 'resolvedBy',
      label: 'Resolved By',
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
      resolvedBy: '',
      issueDate: '02/15/2022',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, quam aliquid laborum dicta sunt error commodi asperiores, illo architecto beatae laboriosam nihil facilis ipsa id non obcaecati dolorem sapiente mollitia!',
    },
    {
      id: 2,
      title: 'Email change',
      status: 'rejected',
      resolvedBy: 'Mary Sue',
      issueDate: '04/07/2022',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error illum officiis sit quos! Magni, qui ab doloribus nesciunt totam nulla eaque in, beatae dolorum deleniti perferendis fugit, ea quod laborum earum aperiam. Provident, ut cum mollitia veniam eligendi neque, laborum asperiores aut tempora error quasi officiis voluptatibus nisi ab numquam impedit cumque hic. Eaque consectetur magni sunt a impedit tenetur accusamus sapiente odit eveniet dicta maxime dolorem laborum, beatae incidunt provident velit praesentium ab mollitia at? Eius eligendi ratione enim consequatur a aspernatur vitae voluptatum inventore, iusto praesentium, neque molestiae esse reiciendis corrupti culpa explicabo possimus. Earum delectus est veritatis!',
    },
    {
      id: 3,
      title: 'Promotion acceptance',
      status: 'accepted',
      resolvedBy: 'Mary Sue',
      issueDate: '02/04/2023',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis suscipit quaerat itaque tenetur, atque laudantium ea molestias maxime dolor nam autem libero. Recusandae quod est tenetur fuga aut quia, omnis quaerat? Natus molestias rerum tenetur provident harum aperiam. Blanditiis nam modi eos animi quas rem nostrum, natus, excepturi ab praesentium incidunt a magni beatae enim at, cum officia. Ea excepturi iusto laudantium aspernatur provident et culpa, hic laborum distinctio ab accusantium ipsum, voluptate similique architecto earum adipisci officia cupiditate corporis eligendi veniam! Officia atque ex beatae veritatis deleniti sint? Sequi eum tempore nesciunt a deleniti sapiente neque cupiditate officia porro vel aliquid dolor inventore quaerat consequatur eligendi qui rem, asperiores optio. Aperiam blanditiis eius eum quae? Est nulla autem sit sequi laborum impedit pariatur delectus veritatis perferendis fugit voluptatum id laudantium tenetur officia dicta debitis, ducimus quisquam et earum atque eveniet at temporibus similique expedita? Doloremque iusto dolores soluta consectetur.',
    },
  ];

  return (
    <div className="w-full min-h-screen max-h-full bg-cst-gray-800">
      <div className="w-full lg:w-11/12 xl:w-4/5 m-auto pt-16">
        {/* Header with title, breadcrumbs, search, add */}
        <div className="flex justify-between pt-8 pb-4">
          {/* Title & breadcrumbs */}
          <div className="pl-4 lg:p-0">
            <h3 className="font-bold text-2xl text-cst-text-gray-800">
              Dashboard
            </h3>
          </div>
        </div>
        <div className="">
          <div className="bg-white rounded shadow-md overflow-auto">
            <h3 className="font-semibold text-xl px-4 py-5 text-gray-600">
              Available Tickets
            </h3>
            <div className="flex flex-col p-4 sm:flex-row sm:justify-end">
              <input
                type="text"
                placeholder="Search ticket"
                id="searchOrganization"
                className="text-input"
                onChange={(event) => setFilter(event.target.value)}
              />
            </div>

            <DynamicList
              columns={columns}
              rows={tickets}
              filter={filter}
              filterBy="title"
              ItemComponent={TaskItem}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksPage;
