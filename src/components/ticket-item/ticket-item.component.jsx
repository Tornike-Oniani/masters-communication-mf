import React, { useState } from 'react';

import StatusItem from '../status-item/status-item.component';
import OpenIcon from '../../assets/folder-open.svg';
import CloseIcon from '../../assets/folder.svg';

const TicketItem = ({ data }) => {
  const { id, title, status, reviewedBy, issueDate, description } = data;

  const [openMode, setOpenMode] = useState(false);

  const renderMode = () => {
    if (openMode) {
      return (
        <>
          <tr className="table-row">
            <td className="hidden md:table-cell table-row-item whitespace-nowrap w-[1%]">
              {id}
            </td>
            <td className="table-row-item w-2/5">{title}</td>
            <td className="table-row-item whitespace-nowrap w-[1%]">
              <StatusItem status={status} />
            </td>
            <td className="table-row-item italic">{reviewedBy}</td>
            <td className="table-row-item">{issueDate}</td>
            <td className="table-row-item">
              <div className="flex">
                <div
                  className="action-link group"
                  onClick={() => setOpenMode(false)}
                >
                  {
                    <CloseIcon className="block fill-inherit transition-colors duration-300 mr-1" />
                  }
                  <span>Close</span>
                </div>
              </div>
            </td>
          </tr>
          <tr className="border-b table-row">
            <td colSpan={6} className="table-row-item">
              <h3 className="font-bold text-lg text-cst-text-gray-800 mb-2">
                Description
              </h3>
              <p>{description}</p>
              <div className="ml-2 border border-gray-400 rounded bg-cst-gray-600 p-2 my-3">
                <h3 className="font-bold text-lg text-cst-text-gray-800 mb-1">
                  Resolve comment
                </h3>
                <p className="italic mb-2">Mary Sue</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque, minus optio accusamus nisi maiores reprehenderit
                  recusandae aspernatur! Necessitatibus eos aut totam rem ab,
                  expedita dolore et, ex quidem iste quasi eum eligendi quo amet
                  vero nostrum dolorem. Dolor laboriosam expedita unde commodi
                  laudantium, animi possimus, quidem, dolores dolorum deleniti
                  libero?
                </p>
              </div>
            </td>
          </tr>
        </>
      );
    }

    return (
      <tr className="grid grid-cols-2 border rounded border-gray-400 shadow mb-3 md:shadow-none md:m-0 md:border-0 md:rounded-none md:border-b md:table-row">
        <td className="hidden md:table-cell table-row-item whitespace-nowrap w-[1%]">
          {id}
        </td>
        <td className="col-span-2 font-bold text-lg text-cst-text-gray-800 bg-cst-gray-800 p-2 md:text-base md:text-cst-text-gray-900 md:font-normal md:p-0 md:bg-white md:table-row-item md:w-2/5">
          {title}
        </td>
        <td className="col-span-2 justify-self-start ml-2 mt-2 md:table-cell md:table-row-item md:whitespace-nowrap md:w-[1%]">
          <StatusItem status={status} />
        </td>
        <td className="ml-2 mt-2 col-span-2 md:table-row-item">
          <span className="inline-block mr-1 font-semibold md:hidden">
            Reviewed by:
          </span>
          <span className="italic">{reviewedBy}</span>
        </td>
        <td className="ml-2 mt-2 row-start-2 col-span-2 md:table-row-item">
          <span className="inline-block font-semibold mr-1 md:hidden">
            Issued at:{' '}
          </span>
          {issueDate}
        </td>
        <td className="md:table-row-item">
          <div className="flex ml-2 mt-2 mb-2">
            <div
              className="action-link group"
              onClick={() => setOpenMode(true)}
            >
              {
                <OpenIcon className="block fill-inherit transition-colors duration-300 mr-1" />
              }
              <span>Open</span>
            </div>
          </div>
        </td>
      </tr>
    );
  };

  return renderMode();
};

export default TicketItem;
