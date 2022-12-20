import { useContext, useState } from "react";
import { createContext } from "react";

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(true);
  };

  const handlClose = () => {
    setShowModal(false);
  };

  return (
    <AppContext.Provider
      value={{
        showModal,
        handlClose,
        handleOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return {
    showModal: context.showModal,
    handlClose: context.handlClose,
    handleOpen: context.handleOpen,
  };
};
