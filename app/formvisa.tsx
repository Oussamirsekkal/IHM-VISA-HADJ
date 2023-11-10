/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useState } from 'react';
import Image from 'next/image'; 


const FormComponentvisa = () => {
  return (
    <div id="Div" className="p-4">
      <div className="flex flex-col items-center"> {}
        <div className="text-center py-4">
          <Image
            src="/IHM.png" 
            alt="Logo"
            width={80} 
            height={60} 
          />
        </div>
        <form id="Formulairevisa" className="bg-white p-4">
         
        <div className="grid grid-cols-2 gap-4">
          <div className="p-2">
            <label className="text-sm">purpose of travel:</label>
            <select className="block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300">
                <option value="Work">Work</option>
                <option value="Transit">Transit</option>
                <option value="Visit">Visit</option>
                <option value="Umrah">Umrah</option>
                <option value="Residence">Residence</option>
                <option value="Hadj">Hadj</option>
                <option value="Diplomacy">Diplomacy</option>      
            </select>

          </div>

          <div className="p-2">
                <label className="text-sm">Passport No:</label>
                <input type="text" className="border rounded p-2 w-full" />
            </div>

          <div className="p-2 flex flex-col-3">
          <label className="text-sm">Passport No:</label>
          <input
  type="Date"
  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
  className="border rounded p-2 w-full"
  placeholder="Enter Passport ;"
/>

          <label className="text-sm"> Date Passport issued:</label>
          
              <input type="text" className="border rounded p-2 mr-2 w-full" />
              
          </div>
            
            <div className="p-2">
                <label className="text-sm">Full Name:</label>
                <input type="text" className="border rounded p-2 w-full" />
            </div>

          <div className="p-2">
            <label className="text-sm">Mother Name:</label>
            <input type="text" className="border rounded p-2 w-full" />
          </div>
          <div className="p-2">
            <label className="text-sm">Date of birth:</label>
            <input type="Date" className="border rounded p-2 w-full" />
          </div>

          <div className="p-2">
            <label className="text-sm">Place of Birth:</label>
            <input type="text" className="border rounded p-2 w-full" />
          </div>

          <div className="p-2">
            <label className="text-sm">Previous Nationality:</label>
            <input type="text" className="border rounded p-2 w-full" />
          </div>

          <div className="p-2">
            <label className="text-sm">Present Nationality:</label>
            <input type="text" className="border rounded p-2 w-full" />
          </div>

          <div className="p-2">
            <label className="text-sm">Sex:</label>
            <div>
            <input type="radio" className="border m-1" id="male" />

              <label htmlFor="male" className="mr-2">Male</label>
              <input type="radio" className="border m-1" id="female" />
              <label htmlFor="female">Female</label>
            </div>
          </div>

          <div className="p-2">
            <label className="text-sm">Status:</label>
            <input type="text" className="border rounded p-2 w-full" />
          </div>

          <div className="p-2">
            <label className="text-sm">Sect:</label>
            <input type="text" className="border rounded p-2 w-full" />
          </div>
          
          <div className="p-2">
            <label className="text-sm">Religion:</label>
            <input type="text" className="border rounded p-2 w-full" />
          </div>

          <div className="p-2">
            <label className="text-sm">Place of issue:</label>
            <input type="text" className="border rounded p-2 w-full" />
          </div>

          <div className="p-2">
            <label className="text-sm">Qualification:</label>
            <input type="text" className="border rounded p-2 w-full" />
          </div>

          <div className="p-2">
            <label className="text-sm">Profession:</label>
            <input type="text" className="border rounded p-2 w-full" />
          </div>

          <div className="p-2 ">
            <label className="text-sm">Adress and phone number:</label>
            <div className="p-2 flex flex-col-2">
              <input type="text" className="border rounded p-2 mr-2 w-full" />
              <input type="number"pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    className="border rounded p-2 w-full"
                    placeholder="Enter phone number"
              />
            </div>
          </div>
          <div className="p-2 ">
            <label className="text-sm"> Buisness Adress and phone number:</label>
            <div className="p-2 flex flex-col-2">
              <input type="text" className="border rounded p-2 mr-2 w-full" />
              <input type="number"pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    className="border rounded p-2 w-full"
                    placeholder="Enter phone number (e.g., 123-456-7890)"
              />
            </div>
          </div>

          <div className="p-2 flex justify-end">
          <button
           className="bg-green-500 hover:bg-blue-700 text-white font-bold py-0.5 px-4 rounded">Next</button>
          </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponentvisa;
