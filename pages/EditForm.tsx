/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

interface EditFormProps {
  rowData: {
    id: number;
    first_name: string;
    full_name: string;
    mother_name: string;
    date_of_birth: string;
    place_of_birth: string;
    previous_nationality: string;
    present_nationality: string;
    sex: string;
    status: string;
    sect: string;
    religion: string;
    place_of_issue: string;
    qualification: string;
    profession: string;
    address: string;
    phone_number: string;
    business_address: string;
    business_phone_number: string;
    // Include other fields as needed
  };
  onCancel: () => void;
  onSave: (updatedData: any) => void;
}

const EditForm: React.FC<EditFormProps> = ({ rowData, onCancel, onSave }) => {
  const [editedData, setEditedData] = useState(rowData);

  useEffect(() => {
    setEditedData(rowData);
  }, [rowData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleSave = () => {
    onSave(editedData);
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
  <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div className="fixed inset-0 transition-opacity">
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>

    <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;

    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <h2 className="text-lg font-medium leading-6 text-gray-900">Edit Row</h2>
        <div className="mt-4">
          {/* ... (Previous input fields) ... */}

          <label className="block mt-4">
            <span className="text-gray-700">Place of Birth:</span>
            <input
              type="text"
              name="place_of_birth"
              value={editedData.place_of_birth}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>

          <label className="block mt-4">
            <span className="text-gray-700">Previous Nationality:</span>
            <select
              name="previous_nationality"
              value={editedData.previous_nationality}
            
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              {/* Options for previous nationality */}
            </select>
          </label>

          <label className="block mt-4">
            <span className="text-gray-700">Present Nationality:</span>
            <select
              name="present_nationality"
              value={editedData.present_nationality}
      
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              {/* Options for present nationality */}
            </select>
          </label>

          {/* Continue adding labels and inputs for other fields */}
        </div>
      </div>

      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button
          type="button"
          onClick={onCancel}
          className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleSave}
          className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</div>

    
  
  );
};

export default EditForm;
