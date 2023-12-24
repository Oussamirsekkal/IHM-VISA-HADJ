/* eslint-disable react/no-unescaped-entities */
"use client"
import { useState } from 'react';
import Image from 'next/image'; 
import React, { FC } from 'react'; // Import FC (Functional Component) type
import { useFormData } from './datacontext';
import axios from 'axios';
import { toast } from 'react-toastify';

interface FormComponentProps {
  onNext: () => void; // Define the type of onNext prop
  onPrev: () => void;
}


const FormComponentvisa: FC<FormComponentProps> = ({ onNext, onPrev }) => {
  const { formData } = useFormData();

  const [formDatavisa, setFormDatavisa] = useState({
    purpose_travel:"" ,
    passnum : "",
    datePassportIssued:"",
    datePassportExpiration:"",
    pass_lssue_place : "",
    date_departure : ""  ,
    date_arrival : "" ,
    duration_stay_kingdom :"" ,
    mode_payment : "" ,
    cheque_recep_num :"" ,
    date_recep : "" ,
    mahram :"" ,
    mahram_relationship :"" ,
    carier_name :"" ,
    destination :"" ,
  });




  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormDatavisa({
      ...formDatavisa,
      [name]: value,
    });

  
  
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/insertdatavisa', formDatavisa);
      console.log('Data inserted successfully:', response.data);

      
      toast.success('Your data has been successfully submitted!');
      //handleReset();

     
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };
  
  


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
        <form id="Formulairevisa" className="bg-white p-4" onSubmit={handleSubmit}>
         
        <div className="grid grid-cols-2 gap-4">
          <div className="p-2">
            <label className="text-sm">purpose of travel:</label>
            <select name="purpose_travel" className="block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" value={formDatavisa.purpose_travel} onChange={handleChange}>
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
                <input type="text" name="passnum" className="border rounded p-2 w-full" value={formDatavisa.passnum} onChange={handleChange} />
          </div>

          <div className="p-2 ">
              <label className="text-sm"> Date Passport issued:</label>
              <input type="Date" name="datePassportIssued" onChange={handleChange} value={formDatavisa.datePassportIssued} id="datePassportIssued" className="border rounded p-2 w-full" />
          </div>
            
            <div className="p-2">
                <label className="text-sm">Place of issue:</label>
                <input type="text" name="pass_lssue_place" className="border rounded p-2 w-full" value={formDatavisa.pass_lssue_place} onChange={handleChange} />
            </div>

            <div className="p-2">
              <label className="text-sm"> Passport expiration date:</label>
              <input type="Date" onChange={handleChange} name="datePassportExpiration"  value={formDatavisa.datePassportExpiration} id="datePassportExpiration" className="border rounded p-2 w-full" />
            </div>

          <div className="p-2">
            <label className="text-sm">Date of departure:</label>
            <input type="Date" className="border rounded p-2 w-full" name="date_departure"  value={formDatavisa.date_departure} onChange={handleChange}  />
          </div>

          <div className="p-2">
            <label className="text-sm">Date of arrival:</label>
            <input type="Date" className="border rounded p-2 w-full" name="date_arrival" value={formDatavisa.date_arrival} onChange={handleChange}  />
          </div>

          <div className="p-2">
            <label className="text-sm">Duration of stay in kingdom:</label>
            <input type="number" className="border rounded p-2 w-full" name="duration_stay_kingdom" placeholder='days' value={formDatavisa.duration_stay_kingdom} onChange={handleChange}/>
          </div>

          <div className="p-2">
            <label className="text-sm">Mode of payment:</label>
            <select className="block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" name="mode_payment"  value={formDatavisa.mode_payment} onChange={handleChange}>
                <option value="Free">Free</option>
                <option value="Cash">Cash </option>
                <option value="Receipt">Receipt</option>
            </select>
          </div>

          <div className="p-2">
                <label>Cheque No /Receipt No</label>
                <input type="number" className="border rounded p-2 w-full" name="cheque_recep_num"  value={formDatavisa.cheque_recep_num} onChange={handleChange}/>
          </div>
          <div className="p-2 ">
                <label >Date</label>
                <input className="border rounded p-2 w-full" type='Date' name="date_recep" value={formDatavisa.date_recep} onChange={handleChange}/>
          </div>

          <div className="p-2">
            <label className="text-sm">mahram:</label>
            <input type="text" className="border rounded p-2 w-full" name="mahram" disabled={isMale} value={formDatavisa.mahram} onChange={handleChange} />
          </div>

          <div className="p-2">
            <label className="text-sm">Relationship:</label>
            <input type="text" className="border rounded p-2 w-full" name="mahram_relationship" value={formDatavisa.mahram_relationship} onChange={handleChange} />
          </div>
          
          <div className="p-2">
            <label className="text-sm">Carier's name:</label>
            <input type="text" className="border rounded p-2 w-full" name="carier_name"  value={formDatavisa.carier_name} onChange={handleChange} />
          </div>
           
          <div className="p-2">
            <label className="text-sm">Destination:</label>
            <input type="text" className="border rounded p-2 w-full" name="destination"  value={formDatavisa.destination} onChange={handleChange} />
          </div>
      </div> 
        
          
     
          <div className="p-2 flex justify-end">
        <div className="p-2 flex justify-end space-x-2">
        <button 
           className="bg-green-500 hover:bg-blue-700 text-white font-bold py-0.5 px-4 rounded" onClick={onPrev}>Previous</button>
        <button
            type="button"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-0.5 px-4 rounded"
            onClick={handleReset}
          >
            Reset
          </button>
          
          <button
            type="submit"
            className="bg-green-500 hover:bg-blue-700 text-white font-bold py-0.5 px-4 rounded"
          >
            Submit
          </button>
         
          <button
            className="bg-green-500 hover:bg-blue-700 text-white font-bold py-0.5 px-4 rounded"
            onClick={onNext}
          >
            Next
          </button>
        </div>

</div>
         
          
        
        </form>
      </div>
    </div>
  );
};

export default FormComponentvisa;

function handleReset() {
  throw new Error('Function not implemented.');
}
