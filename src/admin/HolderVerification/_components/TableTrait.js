import React from 'react';
import { CgTrash } from "react-icons/cg";
import Button from "../../components/ui/button";

const TableTrait = ({ traits, onClickDel }) => {
  const tableHidden = traits.length === 0 ? 'hidden' : '';

  return (
    <div className={`w-full overflow-x-auto shadow-md rounded-lg border border-second ${tableHidden}`}>
      <table className="w-full text-left">
        <thead className='text-xs bg-third uppercase'>
          <tr>
            <th scope="col" className="text-center py-2 hidden">ID</th>
            <th scope="col" className="text-center py-2">Type</th>
            <th scope="col" className="text-center py-2">Value</th>
            <th scope="col" className="text-center py-2">Role</th>
            <th scope="col" className="text-center py-2"></th>
          </tr>
        </thead>
        <tbody>
          {traits.map((trait, index) => (
            <tr key={index} className='bg-basic hover:bg-third border-second border-t'>
              <td className='px-3 py-2 border-r border-second'>{trait.attributeName}</td>
              <td className='px-3 py-2 border-r border-second'>{trait.attributeValue}</td>
              <td className='px-3 py-2 border-r border-second'>{trait.roleName}</td>
              <td className='hidden px-3 py-2 border-r border-second'>{trait.roleId}</td>
              <td className='w-12  hover:bg-accentHover'>
                <Button onClick={() => onClickDel(index)} type='button' className='flex w-full text-[35px] font-thin bg-main'>
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