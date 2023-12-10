import { useState } from 'react';
import Image from 'next/image';
import React, { FC } from 'react';
import axios from 'axios'; // HTTP requests
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormData } from './datacontext';
import nationalities from './nationalities';

import { gsap } from "gsap";


interface FormComponentProps {
  onNext: () => void;
 
  
}


const FormComponent: FC<FormComponentProps> = ({ onNext } ) => {
  const [formData, setFormData] = useState({
    first_name: '',
    full_name: '',
    mother_name: '',
    date_of_birth: '',
    place_of_birth: '',
    previous_nationality: 'Algerian',
    present_nationality: 'Algerian',
    sex: 'male',
    status: 'single',
    sect: '',
    religion: '',
    place_of_issue: '',
    qualification: '',
    profession: '',
    address: '',
    phone_number: '',
    business_address:'',
    business_phone_number: ''
  });
  const initialFormData = {
    first_name: '',
    full_name: '',
    mother_name: '',
    date_of_birth: '',
    place_of_birth: '',
 previous_nationality: 'Algerian',
    present_nationality: 'Algerian',
    sex: 'male',
    status: 'single',
    sect: '',
    religion: '',
    place_of_issue: '',
    qualification: '',
    profession: '',
    address: '',
    phone_number: '',
    business_address:'',
    business_phone_number: ''

  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
  
    if (name === 'religion') {
      const selectedReligion = value;
  
      if (selectedReligion && religionSects[selectedReligion]) {
        const defaultSect = religionSects[selectedReligion][0];
  
        setFormData({
          ...formData,
          religion: selectedReligion,
          sect: defaultSect,
        });
      }
      updateFormData({ religion: value });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
  
      if (name === 'sex') {
        updateFormData({ sex: value });
      }
    }
  };
  
  const handleReset = () => {
    setFormData(initialFormData);
  };

  const validateAge = (dateOfBirth: string) => {
    const currentDate = new Date();
    const selectedDate = new Date(dateOfBirth);
    const minDate = new Date(currentDate);
    minDate.setFullYear(minDate.getFullYear() - 150); 
    const maxDate = new Date(currentDate);
    maxDate.setFullYear(maxDate.getFullYear() - 18); 

    return selectedDate >= minDate && selectedDate <= maxDate;
  };

  const handleDateOfBirthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (validateAge(value)) {
      setFormData({
        ...formData,
        date_of_birth: value,
      });
    } else {
    
      alert('Please enter a valid date of birth between 18 and 150 years old.');
      setFormData({
        ...formData,
        date_of_birth: "",
      });
    }
  };
  const religionSects: Record<string, string[]> = {
    Islam: ['Sunna', 'Shia'],
    Christianity: ['Catholic', 'Protestant', 'Orthodox'],
    Judaism: ['Orthodox', 'Conservative', 'Reform'],
  
  };
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/insertdata', formData);
      console.log('Data inserted successfully:', response.data);

      
      toast.success('Your data has been successfully submitted!');
      handleReset();

     
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };
  
  function handleSectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedSect = event.target.value;
  
    setFormData({
      ...formData,
      sect: selectedSect,
    });
  }

  const { updateFormData } = useFormData();


 
  return (

    
    <div id="Div" className="p-2">
      <div className="flex flex-col items-center">
        <div className="text-center py-4">
          <Image src="/IHM.png" alt="Logo" width={80} height={60} />
        </div>

      <form id="Formulaire" className="bg-white p-4" onSubmit={handleSubmit}>
      
        <div className="grid grid-cols-2 gap-4">
          <div className="p-2">
            <label className="text-sm">First Name:</label>
            <input
              type="text"
              className="border rounded p-2 w-full"
              name="first_name"
              value={formData.first_name}
              pattern="[A-Za-z]+"
              onChange={handleChange}
            />
          </div>

          <div className="p-2">
            <label className="text-sm">Full Name:</label>
            <input
              type="text"
              className="border rounded p-2 w-full"
              name="full_name"
              value={formData.full_name}
              pattern="[A-Za-z]+( [A-Za-z]+)*"

              onChange={handleChange}
              required 
            />
          </div>

          <div className="p-2">
            <label className="text-sm">Mother Name:</label>
            <input
              type="text"
              className="border rounded p-2 w-full"
              name="mother_name"
              pattern="[A-Za-z]+"
              value={formData.mother_name}
              onChange={handleChange}
            />
          </div>

          <div className="p-2">
        <label className="text-sm">Date of Birth:</label>
        <input
          type="date"
          className="border rounded p-2 w-full"
          name="date_of_birth"
          value={formData.date_of_birth}
          required
          onChange={handleDateOfBirthChange}
        />
      </div>

          <div className="p-2">
            <label className="text-sm">Place of Birth:</label>
            <input
              type="text"
              className="border rounded p-2 w-full"
              name="place_of_birth"
              pattern="[A-Za-z]+"
              value={formData.place_of_birth}
              onChange={handleChange}
              required
            />
          </div>

          <div className="p-2">
            <label className="text-sm">Previous Nationality:</label>
            <select
    className="border rounded p-2 w-full"
    name="previous_nationality"
    value={formData.previous_nationality}
    onChange={handleSelectChange}
  >
    {nationalities.map((nationality, index) => (
      <option key={index} value={nationality}>
        {nationality}
      </option>
    ))}
  </select>
          </div>

          <div className="p-2">
            <label className="text-sm">Present Nationality:</label>
           
            <select
    className="border rounded p-2 w-full"
    name="present_nationality"
    value={formData.present_nationality}
    onChange={handleSelectChange}
  >
       {nationalities.map((nationality, index) => (
      <option key={index} value={nationality}>
        {nationality}
      </option>
    ))}
  </select>
          </div>

          <div className="p-2">
            <label className="text-sm">Sex:</label>
            <div>
              <input
                type="radio"
                className="border m-1"
                id="male"
                name="sex"
                value="male"
                onChange={handleChange}
              />
              <label htmlFor="male" className="mr-2">
                Male
              </label>
              <input
                type="radio"
                className="border m-1"
                id="female"
                name="sex"
                value="female"
                onChange={handleChange}
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>

          <div className="p-2">
            <label className="text-sm">Status:</label>
            <select  
              className="border rounded p-2 w-full"
              name="status"
              value={formData.status}
              onChange={handleSelectChange}>
                <option value="single"> Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
             
              </select>
          </div>

        

          <div className="p-2">
  <label className="text-sm">Religion:</label>
  <select
    className="border rounded p-2 w-full"
    name="religion"
    value={formData.religion}
    onChange={handleChange}
  >
    <option value="">Select Religion</option>
    {Object.keys(religionSects).map((religion) => (
      <option key={religion} value={religion}>
        {religion}
      </option>
    ))}
  </select>
</div>
<div className="p-2">
  <label className="text-sm">Sect:</label>
  <select
    className="border rounded p-2 w-full"
    name="sect"
    value={formData.sect}
    onChange={handleSectChange}
  >
    {formData.religion && religionSects[formData.religion] ? (
      religionSects[formData.religion].map((sect) => (
        <option key={sect} value={sect}>
          {sect}
        </option>
      ))
    ) : (
      <option value="">Select Religion First</option>
    )}
  </select>
</div>
          <div className="p-2">
            <label className="text-sm">Place of Issue:</label>
            <input
              type="text"
              className="border rounded p-2 w-full"
              name="place_of_issue"
              pattern="[A-Za-z]+"
              value={formData.place_of_issue}
              onChange={handleChange}
            />
          </div>

          <div className="p-2">
            <label className="text-sm">Qualification:</label>
            <input
              type="text"
              className="border rounded p-2 w-full"
              name="qualification"
          
              value={formData.qualification}
              onChange={handleChange}
            />
          </div>

          <div className="p-2">
            <label className="text-sm">Profession:</label>
            <input
              type="text"
              className="border rounded p-2 w-full"
              name="profession"
              pattern="[A-Za-z]+"
              value={formData.profession}
              onChange={handleChange}
            />
          </div>

          <div className="p-2">
            <label className="text-sm">Address and Phone Number:</label>
            <div className="p-2">
              <input
                type="text"
                className="border rounded p-2 mr-2 w-full"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="p-2">
              <input
                type="number"
                className="border rounded p-2 w-full"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                placeholder="Enter phone number"
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                required
              />
            </div>
          </div>
          

          <div className="p-2">
            <label className="text-sm">Business Address and Phone Number:</label>
            <div className="p-2">
              <input
                type="text"
                className="border rounded p-2 mr-2 w-full"
                name="business_address"
                value={formData.business_address}
                onChange={handleChange}
              />
            </div>
            <div className="p-2">
              <input
                type="number"
                className="border rounded p-2 w-full"
                name="business_phone_number"
                value={formData.business_phone_number}
                onChange={handleChange}
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                placeholder="Enter phone number"
                required
              />
            </div>
          </div>
        </div>
        <div className="p-2 flex justify-end">
        <div className="p-2 flex justify-end space-x-2">
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
      <ToastContainer />
    </div>
  );
};


export default FormComponent;
