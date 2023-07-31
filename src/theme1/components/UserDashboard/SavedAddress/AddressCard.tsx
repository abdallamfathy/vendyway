import React from 'react'
import Header from '../Header';
import Button from '../../Extras/Button';

interface AddressCardProps {
    handleShow: (component: string) => void;
}
const AddressCard: React.FC<AddressCardProps> = ({handleShow}) => {
  return (
    <div className='flex flex-col gap-20' >
        <Header title='Address Information' text='My Address'  handleShow={handleShow}/>
        <div className='flex flex-col rounded-lg border border-lgray1'>
        <div className='bg-gray1 text-mdark1 flex items-center justify-between p-3 px-4 rounded-t-lg'>
            <h1>Shipping Address</h1>
            <p className='text-pink1'>Edit</p>
        </div>
        <div className=' flex flex-col gap-4  text-mgray1 p-6'>
            <p>Name : <span className='text-mdark1'>Hager Tarek</span></p>
            <p>Address : <span className='text-mdark1'>21 Saad Zaghloul street Mansoura,  Egypt</span></p>
            <p>Phone number : <span className='text-mdark1'>01010101010</span></p>
        </div>
    </div>
        <div className='max-md:self-center' onClick={() => handleShow('newAddress')}>
        <Button
              text="Add new address"
              className="py-4"
              variant={'primary'}
              size="xl"
            />
        </div>
    </div>
  )
}

export default AddressCard