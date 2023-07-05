import React from 'react';

import PendingIcon from '../../assets/spinner.svg';
import AcceptedIcon from '../../assets/checkmark.svg';
import RejectedIcon from '../../assets/cross.svg';

const StatusItem = ({ status }) => {
  const renderStatus = () => {
    if (status === 'pending') {
      return (
        <span className="flex items-center border rounded border-yellow-500 text-yellow-600 fill-yellow-600 p-2">
          <PendingIcon className="block mr-2 fill-inherit" />
          {status}
        </span>
      );
    }

    if (status === 'accepted') {
      return (
        <span className="flex items-center border rounded border-green-500 text-green-600 fill-green-600 p-2 ">
          <AcceptedIcon className="block mr-2 fill-inherit" />
          {status}
        </span>
      );
    }

    if (status === 'rejected') {
      return (
        <span className="flex items-center border rounded border-red-500 text-red-600 fill-red-600 p-2 ">
          <RejectedIcon className="block mr-2 fill-inherit" />
          {status}
        </span>
      );
    }
  };

  return renderStatus();
};

export default StatusItem;
