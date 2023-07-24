import * as React from 'react';

export interface SocialCardProps {
    icon:string;
    link:string;
}

export default function SocialCard (props: SocialCardProps) {
  return (
    <div className='w-7 h-7 rounded-full bg-gray1 flex items-center justify-center text-mdark1'>
        <a href={props.link} className='text-sm'><props.icon/></a>
    </div>
  );
}
