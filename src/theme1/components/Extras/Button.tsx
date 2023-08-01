import React from 'react'
import { useNavigate } from 'react-router-dom';

interface ButtonProps  {
    text?: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    loading?: boolean;
    loadingText?: string;
    icon?: React.ReactNode;
    img?: string;
    iconPosition?: 'left' | 'right';
    variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'text';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    fullWidth?: boolean;
    link?: string;
    target?: string;
    rel?: string;

}

const Button: React.FC<ButtonProps> = ({ onClick, text , img , className , disabled , fullWidth , icon , link , loading , loadingText ,  size ,  type , variant }) => {
  const navigate = useNavigate();
  return (
    <button
       type={type}
       className={`${className} ${fullWidth && 'w-full'}
       ${size === 'sm' ? 'w-24' : size === 'md' ? 'md:w-36 w-28' : size === 'lg' ? 'md:w-40 w-28 ' : size === 'xl' ? 'md:w-60 w-36' :  null} 
       ${variant === 'primary' ? 'bg-pink1 text-white' : variant === 'secondary' ? 'text-dark1 bg-lgray1 bg-opacity-40' : variant === 'outline' ? 'border border-lpink1 text-lpink1 hover:bg-pink1 hover:text-white transition-colors' : variant === 'text' ? 'bg-transparent text-pink1': null}
       flex justify-center items-center gap-2 md:gap-4 py-2 rounded-full max-md:text-sm`}
       disabled={disabled} 
       onClick={() => {link && navigate(link);
       onClick ? onClick() : null}}>
       {icon} {img && <img src={img} alt="image" />} {text} {loading ? loadingText : null}
       </button>
    )
}

export default Button