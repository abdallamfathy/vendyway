import React, { useState } from 'react';

interface InputProps {
    title: string;
}

const PaymentInput: React.FC <InputProps> = ({title}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked);
    };
    
  return (
    <div className='flex items-center gap-2'>
      <input
        type='radio'
        name='option'
        className='custom-radio'
        id={title}
        checked={isChecked}
        onChange={handleInputChange}
      />
      <label
        htmlFor='option'
        className={`text-mgray1 ${isChecked ? 'text-dark1' : ''}`}
      >
        {title}
      </label>
    </div>
  )
}

export default PaymentInput