import React, { ReactNode, createContext, useContext, useState } from 'react';


type FormData = {
  sex: string;
 
};


const FormDataContext = createContext<{ formData: FormData; updateFormData: (data: Partial<FormData>) => void }>({
  formData: { sex: '' },
  updateFormData: () => {},
});

export const FormDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({ sex: '' });

  const updateFormData = (data: Partial<FormData>) => {
    setFormData({ ...formData, ...data });
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error('useFormData must be used within a FormDataProvider');
  }
  return context;
};
