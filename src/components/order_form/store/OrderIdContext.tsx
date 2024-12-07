import React, { createContext, useState, ReactNode } from "react";

interface ScheduleContextType {
  orderId: string;
  setOrderId: React.Dispatch<React.SetStateAction<string>>;
}

const OrderIdContext = createContext<ScheduleContextType | undefined>(
  undefined
);

const OrderIdProvider = ({ children }: { children: ReactNode }) => {
  const [orderId, setOrderId] = useState<string>("");

  return (
    <OrderIdContext.Provider
      value={{
        orderId,
        setOrderId,
      }}
    >
      {children}
    </OrderIdContext.Provider>
  );
};

export { OrderIdProvider, OrderIdContext };
