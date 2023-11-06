import { Toast } from "@/components/Toast";
import { ToastsContainer } from "@/components/Toast/styles";
import React, { createContext, useContext, useState } from "react";

interface ToastProps {
  message: string;
  duration: number;
}

interface ToastContextType {
  addToast: (message: string, duration: number) => void;
}

interface ToastProviderProps {
  children: React.ReactNode;
}

const ToastContext = createContext<ToastContextType>({
  addToast: () => {},
});

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (message: string, duration: number) => {
    const toast = { message, duration };
    setToasts((prevToasts) => [...prevToasts, toast]);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastsContainer>
        {toasts.map((toast, index) => (
          <Toast
            key={index}
            message={toast.message}
            duration={toast.duration}
          />
        ))}
      </ToastsContainer>
    </ToastContext.Provider>
  );
};

export const useToastContext = () =>
  useContext(ToastContext) as ToastContextType;
