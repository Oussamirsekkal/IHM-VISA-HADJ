import 'tailwindcss/tailwind.css';
import Navbar from '../app/navbar';
import { GetServerSideProps } from 'next';
import React from 'react';

interface DataProps {
  cartData: Array<{
    id: string;
    client_name: string;
    email: string;
    phone_number: string;
    address: string;
  }>;
}

const DataPage = ({ cartData }: DataProps) => {
  const renderCartData = () => {
    return (
      <div className="mx-auto max-w-4xl p-6 text-center">
        <h1 className="text-3xl font-bold mb-6">Data from SQL Database</h1>
        {cartData.length > 0 ? (
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Phone</th>
                <th className="py-3 px-6 text-left">Address</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {cartData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-100">
                  <td className="py-4 px-6">{item.client_name}</td>
                  <td className="py-4 px-6">{item.email}</td>
                  <td className="py-4 px-6">{item.phone_number}</td>
                  <td className="py-4 px-6">{item.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <main className="mt-20">
        {renderCartData()}
      </main>
    </div>
  );
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