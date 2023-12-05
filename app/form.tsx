import { useState } from 'react';
import Image from 'next/image';
import React, { FC } from 'react';
import axios from 'axios'; // HTTP requests
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormData } from './datacontext';

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
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  
    setFormData({
      ...formData,
      [name]: value,
    });
  
    if (name === 'sex') {
      updateFormData({ sex: value });
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
  
  function handleReligionChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedReligion = event.target.value;
 
    if (selectedReligion && religionSects[selectedReligion]) {
      const defaultSect = religionSects[selectedReligion][0];
  
      setFormData({
        ...formData,
        religion: selectedReligion,
        sect: defaultSect,
      });
    }
  }
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
  const formatToCustomFormat = (dateString: string) => {
    const [month, day, year] = dateString.split('/');
    return `${year}/${day}/${month}`;
  };
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
        <option value="Afghan">Afghan</option>
    <option value="Albanian">Albanian</option>
  <option value="Algerian">Algerian</option>
  <option value="American">American</option>
  <option value="Andorran">Andorran</option>
  <option value="Angolan">Angolan</option>
  <option value="Antiguans">Antiguans</option>
  <option value="Argentinean">Argentinean</option>
  <option value="Armenian">Armenian</option>
  <option value="Australian">Australian</option>
  <option value="Austrian">Austrian</option>
  <option value="Azerbaijani">Azerbaijani</option>
  <option value="Bahamian">Bahamian</option>
  <option value="Bahraini">Bahraini</option>
  <option value="Bangladeshi">Bangladeshi</option>
  <option value="Barbadian">Barbadian</option>
  <option value="Barbudans">Barbudans</option>
  <option value="Batswana">Batswana</option>
<option value="Belarusian">Belarusian</option>
<option value="Belgian">Belgian</option>
<option value="Belizean">Belizean</option>
<option value="Beninese">Beninese</option>
<option value="Bhutanese">Bhutanese</option>
<option value="Bolivian">Bolivian</option>
<option value="Bosnian">Bosnian</option>
<option value="Brazilian">Brazilian</option>
<option value="British">British</option>
<option value="Bruneian">Bruneian</option>
<option value="Bulgarian">Bulgarian</option>
<option value="Burkinabe">Burkinabe</option>
<option value="Burmese">Burmese</option>
<option value="Burundian">Burundian</option>
<option value="Cambodian">Cambodian</option>
<option value="Cameroonian">Cameroonian</option>
<option value="Canadian">Canadian</option>
<option value="Cape Verdean">Cape Verdean</option>
<option value="Central African">Central African</option>
<option value="Chadian">Chadian</option>
<option value="Chilean">Chilean</option>
<option value="Chinese">Chinese</option>
<option value="Colombian">Colombian</option>
<option value="Comoran">Comoran</option>
<option value="Congolese">Congolese</option>
<option value="Congolese">Congolese</option>
<option value="Costa Rican">Costa Rican</option>
<option value="Croatian">Croatian</option>
<option value="Cuban">Cuban</option>
<option value="Cypriot">Cypriot</option>
<option value="Czech">Czech</option>
<option value="Danish">Danish</option>
<option value="Djibouti">Djibouti</option>
<option value="Dominican">Dominican</option>
<option value="Dominican">Dominican</option>
<option value="Dutch">Dutch</option>
<option value="Dutchman">Dutchman</option>
<option value="Dutchwoman">Dutchwoman</option>
<option value="East Timorese">East Timorese</option>
<option value="Ecuadorean">Ecuadorean</option>
<option value="Egyptian">Egyptian</option>
<option value="Emirian">Emirian</option>
<option value="Equatorial Guinean">Equatorial Guinean</option>
<option value="Eritrean">Eritrean</option>
<option value="Estonian">Estonian</option>
<option value="Ethiopian">Ethiopian</option>
<option value="Fijian">Fijian</option>
<option value="Filipino">Filipino</option>
<option value="Finnish">Finnish</option>
<option value="French">French</option>
<option value="Gabonese">Gabonese</option>
<option value="Gambian">Gambian</option>
<option value="Georgian">Georgian</option>
<option value="German">German</option>
<option value="Ghanaian">Ghanaian</option>
<option value="Greek">Greek</option>
<option value="Grenadian">Grenadian</option>
<option value="Guatemalan">Guatemalan</option>
<option value="Guinea-Bissauan">Guinea-Bissauan</option>
<option value="Guinean">Guinean</option>
<option value="Guyanese">Guyanese</option>
<option value="Haitian">Haitian</option>
<option value="Herzegovinian">Herzegovinian</option>
<option value="Honduran">Honduran</option>
<option value="Hungarian">Hungarian</option>
<option value="I-Kiribati">I-Kiribati</option>
<option value="Icelander">Icelander</option>
<option value="Indian">Indian</option>
<option value="Indonesian">Indonesian</option>
<option value="Iranian">Iranian</option>
<option value="Iraqi">Iraqi</option>
<option value="Irish">Irish</option>
<option value="Irish">Irish</option>
<option value="Italian">Italian</option>
<option value="Ivorian">Ivorian</option>
<option value="Jamaican">Jamaican</option>
<option value="Japanese">Japanese</option>
<option value="Jordanian">Jordanian</option>
<option value="Kazakhstani">Kazakhstani</option>
<option value="Kenyan">Kenyan</option>
<option value="Kittian and Nevisian">Kittian and Nevisian</option>
<option value="Kuwaiti">Kuwaiti</option>
<option value="Kyrgyz">Kyrgyz</option>
<option value="Laotian">Laotian</option>
<option value="Latvian">Latvian</option>
<option value="Lebanese">Lebanese</option>
<option value="Liberian">Liberian</option>
<option value="Libyan">Libyan</option>
<option value="Liechtensteiner">Liechtensteiner</option>
<option value="Lithuanian">Lithuanian</option>
<option value="Luxembourger">Luxembourger</option>
<option value="Macedonian">Macedonian</option>
<option value="Malagasy">Malagasy</option>
<option value="Malawian">Malawian</option>
<option value="Malaysian">Malaysian</option>
<option value="Maldivan">Maldivan</option>
<option value="Malian">Malian</option>
<option value="Maltese">Maltese</option>
<option value="Marshallese">Marshallese</option>
<option value="Mauritanian">Mauritanian</option>
<option value="Mauritian">Mauritian</option>
<option value="Mexican">Mexican</option>
<option value="Micronesian">Micronesian</option>
<option value="Moldovan">Moldovan</option>
<option value="Monacan">Monacan</option>
<option value="Mongolian">Mongolian</option>
<option value="Moroccan">Moroccan</option>
<option value="Mosotho">Mosotho</option>
<option value="Motswana">Motswana</option>
<option value="Mozambican">Mozambican</option>
<option value="Namibian">Namibian</option>
<option value="Nauruan">Nauruan</option>
<option value="Nepalese">Nepalese</option>
<option value="Netherlander">Netherlander</option>
<option value="New Zealander">New Zealander</option>
<option value="Ni-Vanuatu">Ni-Vanuatu</option>
<option value="Nicaraguan">Nicaraguan</option>
<option value="Nigerian">Nigerian</option>
<option value="Nigerien">Nigerien</option>
<option value="North Korean">North Korean</option>
<option value="Northern Irish">Northern Irish</option>
<option value="Norwegian">Norwegian</option>
<option value="Omani">Omani</option>
<option value="Palestinian">Palestinian</option>
<option value="Pakistani">Pakistani</option>
<option value="Palauan">Palauan</option>
<option value="Panamanian">Panamanian</option>
<option value="Papua New Guinean">Papua New Guinean</option>
<option value="Paraguayan">Paraguayan</option>
<option value="Peruvian">Peruvian</option>
<option value="Polish">Polish</option>
<option value="Portuguese">Portuguese</option>
<option value="Qatari">Qatari</option>
<option value="Romanian">Romanian</option>
<option value="Russian">Russian</option>
<option value="Rwandan">Rwandan</option>
<option value="Saint Lucian">Saint Lucian</option>
<option value="Salvadoran">Salvadoran</option>
<option value="Samoan">Samoan</option>
<option value="San Marinese">San Marinese</option>
<option value="Sao Tomean">Sao Tomean</option>
<option value="Saudi">Saudi</option>
<option value="Scottish">Scottish</option>
<option value="Senegalese">Senegalese</option>
<option value="Serbian">Serbian</option>
<option value="Seychellois">Seychellois</option>
<option value="Sierra Leonean">Sierra Leonean</option>
<option value="Singaporean">Singaporean</option>
<option value="Slovakian">Slovakian</option>
<option value="Slovenian">Slovenian</option>
<option value="Solomon Islander">Solomon Islander</option>
<option value="Somali">Somali</option>
<option value="South African">South African</option>
<option value="South Korean">South Korean</option>
<option value="Spanish">Spanish</option>
<option value="Sri Lankan">Sri Lankan</option>
<option value="Sudanese">Sudanese</option>
<option value="Surinamer">Surinamer</option>
<option value="Swazi">Swazi</option>
<option value="Swedish">Swedish</option>
<option value="Swiss">Swiss</option>
<option value="Syrian">Syrian</option>
<option value="Taiwanese">Taiwanese</option>
<option value="Tajik">Tajik</option>
<option value="Tanzanian">Tanzanian</option>
<option value="Thai">Thai</option>
<option value="Togolese">Togolese</option>
<option value="Tongan">Tongan</option>
<option value="Trinidadian or Tobagonian">Trinidadian or Tobagonian</option>
<option value="Tunisian">Tunisian</option>
<option value="Turkish">Turkish</option>
<option value="Tuvaluan">Tuvaluan</option>
<option value="Ugandan">Ugandan</option>
<option value="Ukrainian">Ukrainian</option>
<option value="Uruguayan">Uruguayan</option>
<option value="Uzbekistani">Uzbekistani</option>
<option value="Venezuelan">Venezuelan</option>
<option value="Vietnamese">Vietnamese</option>
<option value="Welsh">Welsh</option>
<option value="Welsh">Welsh</option>
<option value="Yemenite">Yemenite</option>
<option value="Zambian">Zambian</option>
<option value="Zimbabwean">Zimbabwean</option>


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
        <option value="Afghan">Afghan</option>
    <option value="Albanian">Albanian</option>
  <option value="Algerian">Algerian</option>
  <option value="American">American</option>
  <option value="Andorran">Andorran</option>
  <option value="Angolan">Angolan</option>
  <option value="Antiguans">Antiguans</option>
  <option value="Argentinean">Argentinean</option>
  <option value="Armenian">Armenian</option>
  <option value="Australian">Australian</option>
  <option value="Austrian">Austrian</option>
  <option value="Azerbaijani">Azerbaijani</option>
  <option value="Bahamian">Bahamian</option>
  <option value="Bahraini">Bahraini</option>
  <option value="Bangladeshi">Bangladeshi</option>
  <option value="Barbadian">Barbadian</option>
  <option value="Barbudans">Barbudans</option>
  <option value="Batswana">Batswana</option>
<option value="Belarusian">Belarusian</option>
<option value="Belgian">Belgian</option>
<option value="Belizean">Belizean</option>
<option value="Beninese">Beninese</option>
<option value="Bhutanese">Bhutanese</option>
<option value="Bolivian">Bolivian</option>
<option value="Bosnian">Bosnian</option>
<option value="Brazilian">Brazilian</option>
<option value="British">British</option>
<option value="Bruneian">Bruneian</option>
<option value="Bulgarian">Bulgarian</option>
<option value="Burkinabe">Burkinabe</option>
<option value="Burmese">Burmese</option>
<option value="Burundian">Burundian</option>
<option value="Cambodian">Cambodian</option>
<option value="Cameroonian">Cameroonian</option>
<option value="Canadian">Canadian</option>
<option value="Cape Verdean">Cape Verdean</option>
<option value="Central African">Central African</option>
<option value="Chadian">Chadian</option>
<option value="Chilean">Chilean</option>
<option value="Chinese">Chinese</option>
<option value="Colombian">Colombian</option>
<option value="Comoran">Comoran</option>
<option value="Congolese">Congolese</option>
<option value="Congolese">Congolese</option>
<option value="Costa Rican">Costa Rican</option>
<option value="Croatian">Croatian</option>
<option value="Cuban">Cuban</option>
<option value="Cypriot">Cypriot</option>
<option value="Czech">Czech</option>
<option value="Danish">Danish</option>
<option value="Djibouti">Djibouti</option>
<option value="Dominican">Dominican</option>
<option value="Dominican">Dominican</option>
<option value="Dutch">Dutch</option>
<option value="Dutchman">Dutchman</option>
<option value="Dutchwoman">Dutchwoman</option>
<option value="East Timorese">East Timorese</option>
<option value="Ecuadorean">Ecuadorean</option>
<option value="Egyptian">Egyptian</option>
<option value="Emirian">Emirian</option>
<option value="Equatorial Guinean">Equatorial Guinean</option>
<option value="Eritrean">Eritrean</option>
<option value="Estonian">Estonian</option>
<option value="Ethiopian">Ethiopian</option>
<option value="Fijian">Fijian</option>
<option value="Filipino">Filipino</option>
<option value="Finnish">Finnish</option>
<option value="French">French</option>
<option value="Gabonese">Gabonese</option>
<option value="Gambian">Gambian</option>
<option value="Georgian">Georgian</option>
<option value="German">German</option>
<option value="Ghanaian">Ghanaian</option>
<option value="Greek">Greek</option>
<option value="Grenadian">Grenadian</option>
<option value="Guatemalan">Guatemalan</option>
<option value="Guinea-Bissauan">Guinea-Bissauan</option>
<option value="Guinean">Guinean</option>
<option value="Guyanese">Guyanese</option>
<option value="Haitian">Haitian</option>
<option value="Herzegovinian">Herzegovinian</option>
<option value="Honduran">Honduran</option>
<option value="Hungarian">Hungarian</option>
<option value="I-Kiribati">I-Kiribati</option>
<option value="Icelander">Icelander</option>
<option value="Indian">Indian</option>
<option value="Indonesian">Indonesian</option>
<option value="Iranian">Iranian</option>
<option value="Iraqi">Iraqi</option>
<option value="Irish">Irish</option>
<option value="Irish">Irish</option>
<option value="Italian">Italian</option>
<option value="Ivorian">Ivorian</option>
<option value="Jamaican">Jamaican</option>
<option value="Japanese">Japanese</option>
<option value="Jordanian">Jordanian</option>
<option value="Kazakhstani">Kazakhstani</option>
<option value="Kenyan">Kenyan</option>
<option value="Kittian and Nevisian">Kittian and Nevisian</option>
<option value="Kuwaiti">Kuwaiti</option>
<option value="Kyrgyz">Kyrgyz</option>
<option value="Laotian">Laotian</option>
<option value="Latvian">Latvian</option>
<option value="Lebanese">Lebanese</option>
<option value="Liberian">Liberian</option>
<option value="Libyan">Libyan</option>
<option value="Liechtensteiner">Liechtensteiner</option>
<option value="Lithuanian">Lithuanian</option>
<option value="Luxembourger">Luxembourger</option>
<option value="Macedonian">Macedonian</option>
<option value="Malagasy">Malagasy</option>
<option value="Malawian">Malawian</option>
<option value="Malaysian">Malaysian</option>
<option value="Maldivan">Maldivan</option>
<option value="Malian">Malian</option>
<option value="Maltese">Maltese</option>
<option value="Marshallese">Marshallese</option>
<option value="Mauritanian">Mauritanian</option>
<option value="Mauritian">Mauritian</option>
<option value="Mexican">Mexican</option>
<option value="Micronesian">Micronesian</option>
<option value="Moldovan">Moldovan</option>
<option value="Monacan">Monacan</option>
<option value="Mongolian">Mongolian</option>
<option value="Moroccan">Moroccan</option>
<option value="Mosotho">Mosotho</option>
<option value="Motswana">Motswana</option>
<option value="Mozambican">Mozambican</option>
<option value="Namibian">Namibian</option>
<option value="Nauruan">Nauruan</option>
<option value="Nepalese">Nepalese</option>
<option value="Netherlander">Netherlander</option>
<option value="New Zealander">New Zealander</option>
<option value="Ni-Vanuatu">Ni-Vanuatu</option>
<option value="Nicaraguan">Nicaraguan</option>
<option value="Nigerian">Nigerian</option>
<option value="Nigerien">Nigerien</option>
<option value="North Korean">North Korean</option>
<option value="Northern Irish">Northern Irish</option>
<option value="Norwegian">Norwegian</option>
<option value="Omani">Omani</option>
<option value="Palestinian">Palestinian</option>
<option value="Pakistani">Pakistani</option>
<option value="Palauan">Palauan</option>
<option value="Panamanian">Panamanian</option>
<option value="Papua New Guinean">Papua New Guinean</option>
<option value="Paraguayan">Paraguayan</option>
<option value="Peruvian">Peruvian</option>
<option value="Polish">Polish</option>
<option value="Portuguese">Portuguese</option>
<option value="Qatari">Qatari</option>
<option value="Romanian">Romanian</option>
<option value="Russian">Russian</option>
<option value="Rwandan">Rwandan</option>
<option value="Saint Lucian">Saint Lucian</option>
<option value="Salvadoran">Salvadoran</option>
<option value="Samoan">Samoan</option>
<option value="San Marinese">San Marinese</option>
<option value="Sao Tomean">Sao Tomean</option>
<option value="Saudi">Saudi</option>
<option value="Scottish">Scottish</option>
<option value="Senegalese">Senegalese</option>
<option value="Serbian">Serbian</option>
<option value="Seychellois">Seychellois</option>
<option value="Sierra Leonean">Sierra Leonean</option>
<option value="Singaporean">Singaporean</option>
<option value="Slovakian">Slovakian</option>
<option value="Slovenian">Slovenian</option>
<option value="Solomon Islander">Solomon Islander</option>
<option value="Somali">Somali</option>
<option value="South African">South African</option>
<option value="South Korean">South Korean</option>
<option value="Spanish">Spanish</option>
<option value="Sri Lankan">Sri Lankan</option>
<option value="Sudanese">Sudanese</option>
<option value="Surinamer">Surinamer</option>
<option value="Swazi">Swazi</option>
<option value="Swedish">Swedish</option>
<option value="Swiss">Swiss</option>
<option value="Syrian">Syrian</option>
<option value="Taiwanese">Taiwanese</option>
<option value="Tajik">Tajik</option>
<option value="Tanzanian">Tanzanian</option>
<option value="Thai">Thai</option>
<option value="Togolese">Togolese</option>
<option value="Tongan">Tongan</option>
<option value="Trinidadian or Tobagonian">Trinidadian or Tobagonian</option>
<option value="Tunisian">Tunisian</option>
<option value="Turkish">Turkish</option>
<option value="Tuvaluan">Tuvaluan</option>
<option value="Ugandan">Ugandan</option>
<option value="Ukrainian">Ukrainian</option>
<option value="Uruguayan">Uruguayan</option>
<option value="Uzbekistani">Uzbekistani</option>
<option value="Venezuelan">Venezuelan</option>
<option value="Vietnamese">Vietnamese</option>
<option value="Welsh">Welsh</option>
<option value="Welsh">Welsh</option>
<option value="Yemenite">Yemenite</option>
<option value="Zambian">Zambian</option>
<option value="Zimbabwean">Zimbabwean</option>

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
    onChange={handleReligionChange}
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
