import React, { createContext, useContext, useState } from 'react';

interface ScheduleModalContextType {
  isOpen: boolean;
  openScheduleModal: () => void;
  closeScheduleModal: () => void;
}

const ScheduleModalContext = createContext<ScheduleModalContextType>({
  isOpen: false,
  openScheduleModal: () => {},
  closeScheduleModal: () => {},
});

export function ScheduleModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openScheduleModal = () => setIsOpen(true);
  const closeScheduleModal = () => setIsOpen(false);

  return (
    <ScheduleModalContext.Provider value={{ isOpen, openScheduleModal, closeScheduleModal }}>
      {children}
    </ScheduleModalContext.Provider>
  );
}

export function useScheduleModal() {
  return useContext(ScheduleModalContext);
}
