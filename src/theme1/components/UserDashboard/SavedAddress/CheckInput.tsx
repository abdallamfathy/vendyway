import React from 'react'

interface CheckInputProps {
    text: string;
}

const CheckInput: React.FC<CheckInputProps> = ({text}) => {
  return (
    <div>
        <label
            className={`checkbox-container inline-flex gap-1 items-start`}>
            <input
              type="checkbox"
            
            />
            <span className="checkmark checkmark2" />
            <p className='text-dark1 -ml-2 max-md:text-sm'>{text}</p>
          </label>
    </div>
  )
}

export default CheckInput