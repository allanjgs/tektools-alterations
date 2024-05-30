// Modifique o componente tip.js para torná-lo mais reutilizável, passando o texto da tooltip como uma prop chamada "text":

import React from 'react';
import { Tooltip, Typography } from "@material-tailwind/react";

const Tip = ({ tip, placement }) => {
  return (
    <Tooltip
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
      placement={placement}
      className="bg-second px-4 py-3 shadow-xl shadow-shadow/15"
      content={
        <div className="w-52">
          <Typography
            variant="small"
            color="white"
            className="font-normal opacity-80"
          >
            {tip}
          </Typography>
        </div>
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        className="h-5 w-5 cursor-pointer text-blue-gray-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        />
      </svg>
    </Tooltip>
  );
}
export default Tip;