/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import { FC } from 'react'; // Import FC (Functional Component) type
interface FormComponentProps {

  onPrev: () => void;
}

const FormComponentplus :  FC<FormComponentProps> = ({onPrev})=> {
    const maxRows = 5;
    const [currentRow, setCurrentRow] = useState(0);
  
    const handleInputChange = (
      rowIndex: number,
      columnIndex: number,
      e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
      
  
      if (columnIndex === 3 && rowIndex < maxRows - 1) {
        setCurrentRow(rowIndex + 1);
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
          {[...Array(maxRows)].map((_, rowIndex) => (
            <tr key={rowIndex} style={{ display: rowIndex <= currentRow ? 'table-row' : 'none' }}>
              {[...Array(4)].map((_, columnIndex) => (
                <td key={columnIndex} className="px-6 py-4 whitespace-nowrap">
                  {columnIndex === 2 ? ( // For the "Sex" column
                    <select
                      className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring focus:border-blue-300"
                      onChange={(e) => handleInputChange(rowIndex, columnIndex, e)}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  ) : columnIndex === 1 ? ( // For the "Date of Birth" column
                    <input
                      type="date"
                      className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring focus:border-blue-300"
                      onChange={(e) => handleInputChange(rowIndex, columnIndex, e)}
                    />
                  ) : (
                    <input
                      type="text"
                      className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring focus:border-blue-300"
                      onChange={(e) => handleInputChange(rowIndex, columnIndex, e)}
                    />
                  )}
                </td>
              ))}
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
          <div className="p-2 grid grid-cols-1">
                <label>Visit/work for:</label>
                <input type="text" className="border rounded p-2 w-full" />
          </div>
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