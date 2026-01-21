
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface PrivacyPolicyContextType {
  isPrivacyPolicyOpen: boolean;
  openPrivacyPolicy: () => void;
  closePrivacyPolicy: () => void;
}

const PrivacyPolicyContext = createContext<PrivacyPolicyContextType | undefined>(undefined);

export const PrivacyPolicyProvider = ({ children }: { children: ReactNode }) => {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);

  const openPrivacyPolicy = () => setIsPrivacyPolicyOpen(true);
  const closePrivacyPolicy = () => setIsPrivacyPolicyOpen(false);

  return (
    <PrivacyPolicyContext.Provider value={{ isPrivacyPolicyOpen, openPrivacyPolicy, closePrivacyPolicy }}>
      {children}
    </PrivacyPolicyContext.Provider>
  );
};

export const usePrivacyPolicy = () => {
  const context = useContext(PrivacyPolicyContext);
  if (context === undefined) {
    throw new Error('usePrivacyPolicy must be used within a PrivacyPolicyProvider');
  }
  return context;
};
