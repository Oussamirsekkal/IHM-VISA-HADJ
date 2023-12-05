/* eslint-disable react/no-unescaped-entities */
"use client"
import { useState } from 'react';
import Image from 'next/image'; 
import React, { FC } from 'react'; // Import FC (Functional Component) type
import { useFormData } from './datacontext';

interface FormComponentProps {
  onNext: () => void; // Define the type of onNext prop
  onPrev: () => void;
}


const FormComponentvisa: FC<FormComponentProps> = ({ onNext, onPrev }) => {
  const { formData } = useFormData();

  // Disable input if sex is male
  const isMale = formData.sex === 'male';
  return (
    <div id="Div" className="p-2">
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
                <input type="number" className="border rounded p-2 w-full" />
          </div>

          <div className="p-2 ">
              <label className="text-sm"> Date Passport issued:</label>
              <input type="Date" className="border rounded p-2 w-full" />
          </div>
            
            <div className="p-2">
                <label className="text-sm">Place of issue:</label>
                <input type="text" className="border rounded p-2 w-full" />
            </div>

            <div className="p-2">
              <label className="text-sm"> Passport expiration date:</label>
              <input type="Date" className="border rounded p-2 w-full" />
            </div>

          <div className="p-2">
            <label className="text-sm">Date of departure:</label>
            <input type="Date" className="border rounded p-2 w-full" />
          </div>

          <div className="p-2">
            <label className="text-sm">Date of arrival:</label>
            <input type="Date" className="border rounded p-2 w-full" />
          </div>

          <div className="p-2">
            <label className="text-sm">Duration of stay in kingdom:</label>
            <input type="number" className="border rounded p-2 w-full" placeholder='days'/>
          </div>

          <div className="p-2">
            <label className="text-sm">Mode of payment:</label>
            <select className="block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300">
                <option value="Free">Free</option>
                <option value="Cash">Cash </option>
                <option value="Receipt">Receipt</option>
            </select>
          </div>

          <div className="p-2">
                <label>Cheque No /Receipt No</label>
                <input type="number" className="border rounded p-2 w-full"/>
          </div>
          <div className="p-2 ">
                <label >Date</label>
                <input className="border rounded p-2 w-full" type='Date'/>
          </div>

          <div className="p-2">
            <label className="text-sm">mahram:</label>
            <input type="text" className="border rounded p-2 w-full" disabled={isMale} />
          </div>

          <div className="p-2">
            <label className="text-sm">Relationship:</label>
            <input type="text" className="border rounded p-2 w-full" />
          </div>
          
          <div className="p-2">
            <label className="text-sm">Carier's name:</label>
            <input type="text" className="border rounded p-2 w-full" />
          </div>
           
          <div className="p-2">
            <label className="text-sm">Destination:</label>
            <input type="text" className="border rounded p-2 w-full" />
          </div>
      </div> 
        
          
          <div className="p-2 flex justify-end">
          <div className="p-2 flex justify-end space-x-2">

          <button 
           className="bg-green-500 hover:bg-blue-700 text-white font-bold py-0.5 px-4 rounded" onClick={onPrev}>Previous</button>
          <button
           className="bg-green-500 hover:bg-blue-700 text-white font-bold py-0.5 px-4 rounded" onClick={onNext}>Next</button>
        

          </div>
          </div>
         
          
        
        </form>
      </div>
    </div>
  );
};

export default FormComponentvisa;