import React, { useEffect, useState } from "react";
import { ToastContainer } from "./styles";

export const Toast = ({ message, duration }: ToastProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return <>{visible && <ToastContainer>{message}</ToastContainer>}</>;
};
