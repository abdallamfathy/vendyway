import React from 'react'
import InputPass from './InputPass'
import Button from '../Button'
import Header from '../Header';

interface PasswordProps {
    handleShow: (component: string) => void;
}

const Password: React.FC<PasswordProps> = ({handleShow}) => {

  return (
    <div className='flex flex-col gap-8'>
        <Header title='Change Password' text='Edit profile' handleShow={handleShow}/>
        <InputPass title='Current Password' type='password' placeholder=''/>
        <InputPass title='New Password' type='password' placeholder=''/>
        <InputPass title='Re-type new password' type='password' placeholder=''/>
        <div className='w-fit max-md:self-center'>
        <Button text='Save Changes'/>
        </div>
    </div>
  )
}

export default Password