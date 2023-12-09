/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import { FC } from 'react'; // Import FC (Functional Component) type
import 'react-toastify/dist/ReactToastify.css';
import { useFormData } from './datacontext';
interface FormComponentProps {

  onPrev: () => void;
}

const FormComponentplus :  FC<FormComponentProps> = ({onPrev} )=> {
  const { formData } = useFormData();
 
  const ismuslim = formData.religion === 'Islam';
  console.log('Is Muslim:', ismuslim);
  

  const maxRows = 5;
  const [rows, setRows] = useState([{}]); 
  const handleAddRow = () => {
    if (rows.length < maxRows) {
      const newRow = { relationship: '', dob: '', sex: '', fullName: '' }; 
      setRows([...rows, newRow]);
    }
  };

 // const handleEditRow = (index: number) => {
   
   // console.log(`Editing row at index ${index}`);
  //};

  const handleDeleteRow = (index: number) => {

    if (rows.length > 1) {
      const updatedRows = rows.filter((_, i) => i !== index);
      setRows(updatedRows);
    } else {
      const confirmed = window.confirm('Are you sure you want to delete the last row?');
      if (confirmed) {
        const updatedRows = rows.filter((_, i) => i !== index);
        setRows(updatedRows);
      }
    }
  };


  return (
    <div id="Div" className="p-2">
      
      <div className="flex flex-col items-center">
        <div className="text-center py-4">
          <Image src="/IHM.png" alt="Logo" width={80} height={60} />
        </div>
        <form id="Formulairevisa" className="bg-white p-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="p-2">
              <label className="text-md font-bold text-gray-700">
                Dependents traveling in the same passport:
              </label>

              <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
              Relationship
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
              Date of Birth
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
              Sex
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">
              Full name
            </th>
          </tr>
        </thead>
        
        <tbody>
        {rows.map((_, rowIndex) => (
  <tr key={rowIndex}>
    {[...Array(4)].map((_, columnIndex) => (
      <td key={columnIndex} className="px-6 py-4 whitespace-nowrap">
        {columnIndex === 0 ? (
          <select
            className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring focus:border-blue-300 w-30"
   
          >
            <option value="father">Father</option>
            <option value="son">Mother</option>
            <option value="son">Son</option>
            <option value="uncle">Uncle</option>
            <option value="uncle">Wife</option>
            <option value="cousin">Cousin</option>
            <option value="sister">Sister</option>
            <option value="daughter">Daughter</option>
         
          </select>
        ) : columnIndex === 1 ? (
          <input
            type="date"
            className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring focus:border-blue-300"
          
          />
        ) :  columnIndex === 2 ? (
          <select
            className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring focus:border-blue-300 w-30"
   
          >
            <option value="father">Male</option>
            <option value="son">Female</option>
         
          </select>
        ) :
       
        (
          <input
            type="text"
            className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring focus:border-blue-300 w-50"

          />
        )}
      </td>
    ))}
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center space-x-2">
        <button
          type="button"
          onClick={() => handleAddRow()}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded"
        >
          Add
        </button>
      
        <button
          type="button"
          onClick={() => handleDeleteRow(rowIndex)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
        >
          Delete
        </button>
      </div>
    </td>
  </tr>
))}
      </tbody>
      </table>
    </div>
            </div>

            <div className="p-2 grid grid-cols-1">
              <label className="text-md font-bold text-gray-700">
                Name and address of company or individual in the kingdom:
              </label>
              <input type="text" className="border rounded my-2 p-2 w-full" />
              <input type="text" className="border rounded p-2 w-full" />
            </div>

            <div className="p-2 grid grid-cols-2">
                <label>Name</label>
                <label className='ml-2'>Date</label>
                <input type="text" className="border rounded mr-2 p-2 w-full" />
                <input type="date" className="border rounded ml-2 p-2 w-full" />
          </div>

            <div className="p-0.5 mt-4 bg-gray-100 rounded-md">
              <p className="text-md font-bold text-gray-800">
                I, the undersigned, hereby acknowledge that all the information I have provided is accurate, and I will adhere to the laws of the Kingdom during my stay.
              </p>

              <div className="mt-2">
                <input
                  type="checkbox"
                  id="acceptConditions"
                  className="form-checkbox h-4 w-4 text-blue-500"
                />
                <label
                  htmlFor="acceptConditions"
                  className="ml-2 text-md font-bold text-gray-800"
                >
                  I accept the conditions
                </label>
              </div>
            </div>

            <div className="p-2 grid grid-cols-2">
                <label>Date:</label>
                <label className='ml-2'>Autorization:</label>
                <input type="date" className="border rounded mr-2 p-2 w-full" />
                <input type="text" className="border rounded ml-2 p-2 w-full" />
                
          </div>
          <select className="border rounded p-2 w-2/5">
  <option value="Work Traffic">Work Traffic</option>
  <option value="Visit">Visit</option>
  {ismuslim && (
    <>
      <option value="Omra">Omra</option>
      <option value="Hadj">Hadj</option>
    </>
  )}
  <option value="Residence">Residence</option>
  <option value="Diplomacy">Diplomacy</option>
</select>
          <div className="p-2 grid grid-cols-2">
                <label>Date:</label>
                <label className='ml-2'>Visa N=°:</label>
                <input type="date" className="border rounded mr-2 p-2 w-full" />
                <input type="text" className="border rounded ml-2 p-2 w-full" />
          </div>
          <div className="p-2 grid grid-cols-3">
  <label>File collected:</label>
  <label>Type:</label>
  <label className='ml-2'>Duration:</label>
  <input type="text" className="border rounded ml-2 p-2 w-3/4" />
  <input type="text" className="border rounded ml-2 p-2 w-3/4" />
  <input type="text" className="border rounded ml-2  p-2 w-3/4" />
</div>
          </div>
          <div className="p-2 flex justify-end">
          <div className="p-2 flex justify-end space-x-2">

          <button 
           className="bg-green-500 hover:bg-blue-700 text-white font-bold py-0.5 px-4 rounded" onClick={onPrev}>Previous</button>
        <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-0.5 px-4 rounded">
             Submit
            </button>
        

          </div>
          </div>
        </form>
   
      </div>
    </div>
  );
};

export default FormComponentplus;