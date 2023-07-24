import React, {useState} from 'react'
import AddressCard from './AddressCard';
import AddressForm from './AddressForm';


const SavedAddress:React.FC = () => {
    const [show, setShow] = useState("info");
    const handleShow = (component: string) => {
      setShow(component);
    }
  return (
    <div className='flex flex-col gap-8'>
        
        {
            show === 'info' ? <AddressCard handleShow={handleShow}/> : show === 'newAddress' ? <AddressForm /> : null
        }
    </div>
  )
}

export default SavedAddress