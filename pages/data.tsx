import 'tailwindcss/tailwind.css';
import Navbar from '../app/navbar';
import Footer from '../app/footer';
import { GetServerSideProps } from 'next';
import React, { useState } from 'react';

interface DataProps {
  cartData: Array<{
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
  }>;
}

const DataPage = ({ cartData: initialCartData }: DataProps) => {
  const [cartData, setCartData] = useState<Array<{
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
  }>>(initialCartData);
  const handleEdit = (id :  number) => {

    console.log(`Edit row with ID: ${id}`);
  };

  const handleDelete = async (id: number )=> {
    try {
      const response = await fetch('/api/deletedata', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
  
      if (response.ok) {
        console.log(`Row with ID ${id} has been deleted`);
        const updatedCartData = cartData.filter((item) => item.id !== id);
        setCartData(updatedCartData);
      
      } else {
     
        const errorData = await response.json();
        console.error('Failed to delete:', errorData.error);
      }
    } catch (error) {
      console.error('Error while deleting:', error);
    }
  };
  const renderCartData = () => {
    return (
      <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="w-full lg:w-11/12 xl:w-10/12 p-6 mx-auto text-center">
          <h1 className="text-3xl font-bold mb-6">Your Data is here !</h1>
          {cartData.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-200 text-gray-700">
                   
                   <tr>
               <th className="py-3 px-6 text-left">First Name</th>
               <th className="py-3 px-6 text-left">Full Name</th>
               <th className="py-3 px-6 text-left">Mother Name</th>
               <th className="py-3 px-6 text-left">Date of Birth</th>
               <th className="py-3 px-6 text-left">Place of Birth</th>
               <th className="py-3 px-6 text-left">Previous Nationality</th>
               <th className="py-3 px-6 text-left">Present Nationality</th>
               <th className="py-3 px-6 text-left">Sex</th>
               <th className="py-3 px-6 text-left">Status</th>
               <th className="py-3 px-6 text-left">Sect</th>
               <th className="py-3 px-6 text-left">Religion</th>
               <th className="py-3 px-6 text-left">Place of Issue</th>
               <th className="py-3 px-6 text-left">Qualification</th>
               <th className="py-3 px-6 text-left">Profession</th>
               <th className="py-3 px-6 text-left">Address</th>
               <th className="py-3 px-6 text-left">Phone Number</th>
               <th className="py-3 px-6 text-left">Business Address</th>
               <th className="py-3 px-6 text-left">Business Phone Number</th>
             </tr>
                 </thead>
                <tbody className="text-gray-600">
                
                  {cartData.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-100">
                               <td className="py-4 px-6">{item.first_name}</td>
                <td className="py-4 px-6">{item.full_name}</td>
                  <td className="py-4 px-6">{item.mother_name}</td>
                  <td className="py-4 px-6">{item.date_of_birth}</td>
                  <td className="py-4 px-6">{item.place_of_birth}</td>
                  <td className="py-4 px-6">{item.previous_nationality}</td>
                  <td className="py-4 px-6">{item.present_nationality}</td>
                  <td className="py-4 px-6">{item.sex}</td>
                  <td className="py-4 px-6">{item.status}</td>
                  <td className="py-4 px-6">{item.sect}</td>
                  <td className="py-4 px-6">{item.religion}</td>
                  <td className="py-4 px-6">{item.place_of_issue}</td>
                  <td className="py-4 px-6">{item.qualification}</td>
                  <td className="py-4 px-6">{item.profession}</td>
                  <td className="py-4 px-6">{item.address}</td>
                  <td className="py-4 px-6">{item.phone_number}</td>
                  <td className="py-4 px-6">{item.business_address}</td>
                  <td className="py-4 px-6">{item.business_phone_number}</td>
                      <td className="py-4 px-6">
                        <button
                          onClick={() => handleEdit(item.id)}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mb-2 mr-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 mt-2 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>Database is waiting to be filled...</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
     
    );
  };

  return renderCartData();
};
export const getServerSideProps: GetServerSideProps = async () => {
  let apiUrl = '';

  if (process.env.NODE_ENV === 'development') {
    apiUrl = 'http://localhost:3000/api/fetchCartData?user=*';
  } else {
    apiUrl = 'https://ihm-visa-hadj-ehxm.vercel.app/api/fetchCartData?user=*';
  }

  try {
    const res = await fetch(apiUrl);
    const cartData = await res.json();

    return {
      props: { cartData },
    };
  } catch (error) {
    console.error('Error fetching cart data:', error);
    return {
      props: { cartData: [] },
    };
  }
};

export default DataPage;
