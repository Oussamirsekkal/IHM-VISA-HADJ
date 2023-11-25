import { useState } from 'react';
import Image from 'next/image';
import React, { FC } from 'react';
import axios from 'axios'; // HTTP requests
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormComponentProps {
  onNext: () => void;
}

const FormComponent: FC<FormComponentProps> = ({ onNext }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    full_name: '',
    mother_name: '',
    date_of_birth: '',
    place_of_birth: '',
    previous_nationality: '',
    present_nationality: '',
    sex: '',
    status: '',
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
    previous_nationality: '',
    present_nationality: '',
    sex: '',
    status: '',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleReset = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/insertdata', formData);
      console.log('Data inserted successfully:', response.data);

      // Show a success notification
      toast.success('Your data has been successfully submitted!');
      handleReset();

      // Optionally, you can call onNext here or perform other actions upon successful submission
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };

  return (
    <div id="Div" className="p-2">
      <div className="flex flex-col items-center">
        <div className="text-center py-4">
          <Image src="/IHM.png" alt="Logo" width={80} height={60} />
        </div>
      {/* Your form */}
      <form id="Formulaire" className="bg-white p-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-2">
            <label className="text-sm">First Name:</label>
            <input
              type="text"
              className="border rounded p-2 w-full"
              name="first_name"
              value={formData.first_name}
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
              onChange={handleChange}
            />
          </div>

          <div className="p-2">
            <label className="text-sm">Mother Name:</label>
            <input
              type="text"
              className="border rounded p-2 w-full"
              name="mother_name"
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
              onChange={handleChange}
            />
          </div>

          <div className="p-2">
            <label className="text-sm">Place of Birth:</label>
            <input
              type="text"
              className="border rounded p-2 w-full"
              name="place_of_birth"
              value={formData.place_of_birth}
              onChange={handleChange}
            />
          </div>

          <div className="p-2">
            <label className="text-sm">Previous Nationality:</label>
            <input
              type="text"
              className="border rounded p-2 w-full"
              name="previous_nationality"
              value={formData.previous_nationality}
              onChange={handleChange}
            />
          </div>

          <div className="p-2">
            <label className="text-sm">Present Nationality:</label>
            <input
              type="text"
              className="border rounded p-2 w-full"
              name="present_nationality"
              value={formData.present_nationality}
              onChange={handleChange}
            />
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
            <input
              type="text"
              className="border rounded p-2 w-full"
              name="status"
              value={formData.status}
              onChange={handleChange}
            />
          </div>

          <div className="p-2">
            <label className="text-sm">Sect:</label>
            <input
              type="text"
              className="border rounded p-2 w-full"
              name="sect"
              value={formData.sect}
              onChange={handleChange}
            />
          </div>

          <div className="p-2">
            <label className="text-sm">Religion:</label>
            <input
              type="text"
              className="border rounded p-2 w-full"
              name="religion"
              value={formData.religion}
              onChange={handleChange}
            />
          </div>

          <div className="p-2">
            <label className="text-sm">Place of Issue:</label>
            <input
              type="text"
              className="border rounded p-2 w-full"
              name="place_of_issue"
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
                type="text"
                className="border rounded p-2 w-full"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                placeholder="Enter phone number"
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
                type="text"
                className="border rounded p-2 w-full"
                name="business_phone_number"
                value={formData.business_phone_number}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
            </div>
          </div>
        </div>
        <div className="p-2 flex justify-end">
  <button
    type="submit"
    className="bg-green-500 hover:bg-blue-700 text-white font-bold py-0.5 px-4 rounded"
  >
    Submit
  </button>
  <button
    className="bg-green-500 hover:bg-blue-700 text-white font-bold py-0.5 px-4 rounded ml-2"
    onClick={onNext}
  >
    Next
  </button>
  <button
            type="button"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-0.5 px-4 rounded ml-2"
            onClick={handleReset}
          >
            Reset
          </button>
</div>
      </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default FormComponent;
