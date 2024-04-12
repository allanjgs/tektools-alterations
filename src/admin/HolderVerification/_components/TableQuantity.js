import React from 'react';
import { CgTrash } from "react-icons/cg";
import Button from "../../components/ui/button";

const TableQuantity = ({ quantitys, onClickDel }) => {

  const tableHidden = quantitys.length === 0 ? 'hidden' : '';

  return (
    <div className={`w-full overflow-x-auto shadow-md rounded-lg border border-second ${tableHidden}`}>
      <table className="w-full text-left ">
        <thead className='text-xs bg-third uppercase'>
          <tr>
            <th scope="col" className="text-center py-2">Role</th>
            <th scope="col" className="text-center py-2 w-1/5 ">Quantity NFTs</th>
            <th scope="col" className="text-center py-2 "></th>
          </tr>
        </thead>
        <tbody>
          {quantitys.map((quantity, index) => (
            <tr key={index} className='bg-basic hover:bg-third border-second border-t font-light'>
              <td className='px-3 border-r border-second'>{quantity.role}</td>
              <td className='px-3 border-r border-second text-center'>{quantity.nft}</td>
              <td className='w-12 hover:bg-accentHover'>
                <Button onClick={() => onClickDel(index)} type='button' className='flex w-full text-[35px] font-thin bg-main'>
                  <CgTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableQuantity