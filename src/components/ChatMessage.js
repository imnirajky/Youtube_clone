import React from 'react';
import Avatar from '@mui/material/Avatar';

const ChatMessage = ({ message, user }) => {
  return (
    <div className="w-[335px] mt-3 flex justify-start items-center box-border">
      <Avatar sx={{ backgroundColor: "red", borderRadius: "50%" }}>{user[0]}</Avatar>
      <div className="ml-3">
        <div className="text-sm font-semibold text-gray-600">{user}</div>
        <div className="text-base text-justify">{message}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
