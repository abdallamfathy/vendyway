import React from 'react';
import Header from '../Checkout/Header';
import avatar from '/src/assets/theme1/images/avatar.png'
import off from '/src/assets/theme1/icons/sidemenu/off.svg'
import { useOrderContext } from '../../utils/OrderContext';

interface SideMenuProps {
  options: { id: number; name: string; icon: string; }[];
  active: number;
  onHandleActive: (id: number) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ options, active, onHandleActive }) => {
  const {toggleMenu} = useOrderContext();


  return (
      <>
    <div className='md:flex hidden flex-col'>
        <Header title='My Account'/>
      <div className="flex flex-col justify-between text-left py-6 text-mdark1  cartShadow">
      {options.map((option) => (
            <button
              onClick={() => onHandleActive(option.id)}
              key={option.id} className={`${option.id === active ? 'font-medium text-white bg-pink1 rounded-md' : ''} w-full text-left p-3 pl-5`}
            >
              {option.name}
            </button>
        ))}
      </div>
    </div>




          {/*  Mobile Menu */}

        <div id="side-menu" className="md:hidden fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform duration-300 translate-x-0 bg-white w-80 " tabIndex={-1} aria-labelledby="drawer-label">
           <div className='flex flex-col justify-between py-40 h-full p-4'>
           <div className='flex justify-between items-center '>
                <div className='flex gap-2 items-center'>
                        <img src={avatar} alt="perosn" className='w-14 h-14'/>
                        <p className='text-sm font-semibold'>Imran Molla</p>
                </div>
                
           <button onClick={toggleMenu} type="button" data-drawer-hide="side-menu" aria-controls="side-menu" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center border border-lgray1" >
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span className="sr-only">Close menu</span>
           </button>
           </div>
    
    
           <div className='flex flex-col gap-10'>
           {
                        options.map((option, index) => {
                            return (
                                <div className='flex items-center gap-4 text-lgray1' key={index}>
                                    <img src={option.icon} alt="icon" />
                                    <button 
                                    onClick={() => {toggleMenu(); onHandleActive(option.id)}}
                                    key={option.id}
                                    className='sideMenu text-sm text-dark1'>
                                      {option.name}
                                      </button>
                                </div>
                            )
                        })
                    }
           </div>
    
            <div className='flex flex-col gap-6'>
                <button className='flex w-fit gap-2 items-center px-2 py-2 rounded-full bg-pink1 text-white text-sm'><img src={off} alt="off icon" /> Log Out</button>
                <p className='text-sm text-lgray1'>made by @vandyway</p>
            </div>
    
           </div>
           
        </div>
        </>
  );
};

export default SideMenu;
