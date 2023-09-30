import Link from 'next/link';
import React from 'react'
interface IMenu{
    text:string,
    active:boolean | null,
    path:string
    onClick: () => void;
}

const MenuItem = ({ text, active, onClick,path }:IMenu) => {
    return (
      <li
        className={`cursor-pointer ${
          active ? 'text-blue-500 font-semibold' : 'text-gray-500'
        }`}
        onClick={onClick}
      >
        <Link href={`${path}`}> {text} </Link>
      </li>
    );
  };

export default MenuItem