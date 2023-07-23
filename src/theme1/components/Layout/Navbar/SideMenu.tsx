import React, { useEffect } from 'react';
import avatar from '/src/assets/theme1/images/avatar.png'
import off from '/src/assets/theme1/icons/sidemenu/off.svg'
import { NavLink } from 'react-router-dom';

interface SideMenuProps {
    Navigation: {
        title: string;
        link: string;
        icon: string;
    }[],
    handleShowMenu:() => void;
}

const SideMenu: React.FC<SideMenuProps> = ({Navigation , handleShowMenu}) => {
  useEffect(() => {
    const button = document.querySelector('[data-drawer-target="drawer-example"]');
    const drawer = document.getElementById('drawer-example');
    const closeButton = drawer?.querySelector('[data-drawer-hide="drawer-example"]');

    if (button && drawer && closeButton) {
      button.addEventListener('click', () => {
        drawer.classList.toggle('translate-x-full');
      });

      closeButton.addEventListener('click', () => {
        drawer.classList.add('-translate-x-full');
      });
    }
  }, []);

  return (

    <>
    <div className="text-center">
       <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 " type="button" data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example">
       Show drawer
       </button>
    </div>
    
    <div id="drawer-example" className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800" tabIndex={-1} aria-labelledby="drawer-label">
       <div className='flex flex-col justify-between h-full p-4'>
       <div className='flex justify-between items-center '>
            <div className='flex gap-2 items-center'>
                    <img src={avatar} alt="perosn" className='w-14 h-14'/>
                    <p className='text-sm font-semibold'>Imran Molla</p>
            </div>
            
       <button type="button" data-drawer-hide="drawer-example" aria-controls="drawer-example" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center border border-lgray1" >
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
          <span className="sr-only">Close menu</span>
       </button>
       </div>


       <div className='flex flex-col gap-10'>
       {
                    Navigation.map((nav, index) => {
                        return (
                            <div className='flex items-center gap-4 text-lgray1' key={index}>
                                <img src={nav.icon} alt="icon" />
                                <NavLink className='sideMenu text-sm text-dark1' to={nav.link}>{nav.title}</NavLink>
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
      )
}

export default SideMenu