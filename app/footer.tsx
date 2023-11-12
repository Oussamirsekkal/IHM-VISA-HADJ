import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="mb-2 font-bold">Sekkal Oussama Amir:</p>
          <div className="flex space-x-4">
            <Link href={"https://www.facebook.com/ousssekkal.amir/"} target="_blank">
              <Image src="/fb.png" alt="Facebook" width={20} height={20} />
            </Link>
            <Link href={"https://www.instagram.com/ousssekkal.amir/"} target="_blank">
              <Image src="/insta.png" alt="Instagram" width={20} height={20} />
            </Link>
            <Link href={"https://github.com/Oussamirsekkal"} target="_blank">
              <Image src="/git.png" alt="GitHub" width={20} height={20} />
            </Link>
          </div>
        </div>
        <div className="text-center md:text-left">
          <p className="mb-2 font-bold">Makhlouf Ibrahim:</p>
          <div className="flex space-x-4">
            <Link href={"https://www.facebook.com/profile.php?id=100017719095409"} target="_blank">
              <Image src="/fb.png" alt="Facebook" width={20} height={20} />
            </Link>
            <Link href={"https://www.instagram.com/mak__ibra/"} target="_blank">
              <Image src="/insta.png" alt="Instagram" width={20} height={20} />
            </Link>
            <Link href={"https://github.com/makibra"} target="_blank">
              <Image src="/git.png" alt="GitHub" width={20} height={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
