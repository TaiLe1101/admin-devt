// src/context/MessageProvider.tsx
import { message } from "antd";
import React, { createContext, ReactNode, useContext } from "react";

type MessageInstance = ReturnType<typeof message.useMessage>[0];

interface MessageContextProps {
  messageApi: MessageInstance;
}

const MessageContext = createContext<MessageContextProps | undefined>(
  undefined
);

export const MessageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <MessageContext.Provider value={{ messageApi }}>
      {contextHolder}
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error("useMessage must be used within a MessageProvider");
  }
  return context.messageApi;
};
