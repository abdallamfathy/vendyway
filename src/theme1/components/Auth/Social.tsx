import React from 'react'

type SocialProps = {
    icon: string;
    text: string;
}

const Social: React.FC <SocialProps> = (props) => {
  return (
    <button className='flex justify-around items-center px-5 py-3 rounded-lg border border-gray-300 text-mdark1 w-40'>
        
        <span className="text-blue-500"><props.icon /></span>
        <p>{props.text}</p>
    </button>
  )
}

export default Social