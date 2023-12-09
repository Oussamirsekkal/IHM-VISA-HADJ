/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import nationalities from '../app/nationalities';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
  
    if (name === 'religion') {
      // Reset sect value when religion changes
      const newReligion = value;
      const newSect = religionSects[newReligion] ? religionSects[newReligion][0] : ''; // Set the first sect by default
  
      setEditedData((prevData) => ({
        ...prevData,
        [name]: value,
        sect: newSect,
      }));
    } else {
      // For other input/select changes, update as usual
      setEditedData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
  
     
    }
  };

  const religionSects: Record<string, string[]> = {
    Islam: ['Sunna', 'Shia'],
    Christianity: ['Catholic', 'Protestant', 'Orthodox'],
    Judaism: ['Orthodox', 'Conservative', 'Reform'],
  
  };

  function handleSectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedSect = event.target.value;
  
    setEditedData({
      ...editedData,
      sect: selectedSect,
    });
  }
  
  const handleSave = async () => {
    try {
      //await updateDatabase(editedData);
      onSave(editedData);
      toast.success('Data updated successfully', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        onClose: () => {
          onCancel(); 
        },
      });
      
    } catch (error) {
      console.error('Error updating database:', error);
      console.error('Error updating data:', error);
    toast.error('Failed to update data', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
      
    }
  };

  const updateDatabase = async (data: any) => { 
    try {
      const response = await fetch(`/api/update?id=${data.id}`, { 
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), 
      });
  
      if (!response.ok) {
        throw new Error('Failed to update data');
      }
  
     
    } catch (error :any) {
      throw new Error(error.message);
    }
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
        
          <label className="block mt-4">
  <span className="text-gray-700">First Name:</span>
  <input
    type="text"
    name="first_name"
    value={editedData.first_name}
    pattern="[A-Za-z]+"
    onChange={handleInputChange}
    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
  />
</label>

          <label className="block mt-4">
  <span className="text-gray-700">Full Name:</span>
  <input
    type="text"
    name="full_name"
    value={editedData.full_name}
    pattern="[A-Za-z]+( [A-Za-z]+)*"
    onChange={handleInputChange}
    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    required 
  />
</label>
          <label className="block mt-4">
  <span className="text-gray-700">Mother Name:</span>
  <input
    type="text"
    name="mother_name"
    pattern="[A-Za-z]+"
    value={editedData.mother_name}
    onChange={handleInputChange}
    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
  />
</label>
          <label className="block mt-4">
  <span className="text-gray-700">Date of Birth:</span>
  <input
    type="date"
    name="date_of_birth"
    value={editedData.date_of_birth}
    onChange={handleInputChange}
    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
  />
</label>
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
              onChange={handleInputChange} 
            
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
            
              
    {nationalities.map((nationality, index) => (
      <option key={index} value={nationality}>
        {nationality}
      </option>
    ))}
            </select>
          </label>

          <label className="block mt-4">
            <span className="text-gray-700">Present Nationality:</span>
            <select
              name="present_nationality"
              value={editedData.present_nationality}
              onChange={handleInputChange} 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
               {nationalities.map((nationality, index) => (
      <option key={index} value={nationality}>
        {nationality}
      </option>
    ))}
            
            </select>
          </label>
          <label className="block mt-4">
  <span className="text-gray-700">Sex:</span>
  <div className="mt-2">
    <label className="inline-flex items-center">
      <input
        type="radio"
        className="form-radio border-gray-300 text-indigo-600"
        name="sex"
        value="male"
        checked={editedData.sex === "male"}
        onChange={handleInputChange}
      />
      <span className="ml-2">Male</span>
    </label>
    <label className="inline-flex items-center ml-6">
      <input
        type="radio"
        className="form-radio border-gray-300 text-indigo-600"
        name="sex"
        value="female"
        checked={editedData.sex === "female"}
        onChange={handleInputChange}
      />
      <span className="ml-2">Female</span>
    </label>
  </div>
</label>
<label className="block mt-4">
  <span className="text-gray-700">Status:</span>
  <div className="mt-2">
    <select
      name="status"
      value={editedData.status}
      onChange={handleInputChange}
      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    >
      <option value="single">Single</option>
      <option value="married">Married</option>
      <option value="divorced">Divorced</option>
    </select>
  </div>
</label>
<label className="block mt-4">
  <span className="text-gray-700">Religion:</span>
  <div className="mt-2">
    <select
      name="religion"
      value={editedData.religion}
      onChange={handleInputChange}
      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    >
      {Object.keys(religionSects).map((religion) => (
        <option key={religion} value={religion}>
          {religion}
        </option>
      ))}
    </select>
  </div>
</label>
<label className="block mt-4">
  <span className="text-gray-700">Sect:</span>
  <div className="mt-2">
    <select
      name="sect"
      value={editedData.sect}
      onChange={handleSectChange}
      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    >
      {editedData.religion ? (
        editedData.religion && religionSects[editedData.religion] ? (
          religionSects[editedData.religion].map((sect) => (
            <option key={sect} value={sect}>
              {sect}
            </option>
          ))
        ) : (
          <option value="">Select Religion First</option>
        )
      ) : (
        <option value="">No Religion Selected</option>
      )}
    </select>
  </div>
</label>
<label className="block mt-4">
  <span className="text-gray-700">Place of Issue:</span>
  <input
    type="text"
    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    name="place_of_issue"
    pattern="[A-Za-z]+"
    value={editedData.place_of_issue}
    onChange={handleInputChange}
  />
</label>
<label className="block mt-4">
  <span className="text-gray-700">Qualification:</span>
  <input
    type="text"
    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    name="qualification"
    value={editedData.qualification}
    onChange={handleInputChange}
  />
</label>
<label className="block mt-4">
  <span className="text-gray-700">Profession:</span>
  <input
    type="text"
    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    name="profession"
    pattern="[A-Za-z]+"
    value={editedData.profession}
    onChange={handleInputChange}
  />
</label>
<div className="p-2">
  <label className="text-sm">Address:</label>
  <input
    type="text"
    className="border rounded p-2 w-full"
    name="address"
    value={editedData.address}
    onChange={handleInputChange}
  />
</div>
<div className="p-2">
  <label className="text-sm">Phone Number:</label>
  <input
    type="tel"
    className="border rounded p-2 w-full"
    name="phone_number"
    value={editedData.phone_number}
    onChange={handleInputChange}
    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
    placeholder="Enter phone number"
    required
  />
</div>
<div className="p-2">
  <label className="text-sm">Business Address:</label>
  <input
    type="text"
    className="border rounded p-2 w-full"
    name="business_address"
    value={editedData.business_address}
    onChange={handleInputChange}
  />
</div>
<div className="p-2">
  <label className="text-sm">Business Phone Number:</label>
  <input
    type="tel"
    className="border rounded p-2 w-full"
    name="business_phone_number"
    value={editedData.business_phone_number}
    onChange={handleInputChange}
    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
    placeholder="Enter phone number"
    required
  />
</div>


    
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
