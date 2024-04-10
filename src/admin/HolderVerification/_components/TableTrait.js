import React from 'react';
import { CgTrash } from "react-icons/cg";
import Button from "../../components/ui/button";

const TableTrait = ({ traits, onClickDel }) => {
  // Verifica se o array de traits está vazio
  const tableHidden = traits.length === 0 ? 'hidden' : '';

  return (
    <div className={`w-1/2 overflow-x-auto shadow-md rounded-lg border border-second ${tableHidden}`}>
      <table className="w-full text-left">
        <thead className='text-xs bg-third uppercase'>
          <tr>
            <th scope="col" className="text-center py-2">Type</th>
            <th scope="col" className="text-center py-2">Value</th>
            <th scope="col" className="text-center py-2">Role</th>
            <th scope="col" className="text-center py-2"></th>
          </tr>
        </thead>
        <tbody>
          {traits.map((trait, index) => (
            <tr key={index} className='bg-basic hover:bg-third border-second border-t'>
              <td className='px-2 py-2 border-r border-second'>{trait.type}</td>
              <td className='px-2 py-2 border-r border-second'>{trait.value}</td>
              <td className='px-2 py-2 border-r border-second'>{trait.role}</td>
              <td className='w-10 h-full hover:bg-accentHover'>
                <Button onClick={() => onClickDel(index)} type='button' className='flex w-full text-[35px] h-full font-thin bg-main'>
                  <CgTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableTrait;