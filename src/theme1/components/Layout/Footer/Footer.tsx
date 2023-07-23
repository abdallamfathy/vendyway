import Contact from "./Contact"
import { Links } from "./Links"
import Logo from "./Logo"
import logo from '../../../../assets/theme1/icons/footerLogo.png'
import CopyRights from "./CopyRights"


const Footer = () => {
  return (
    <div className="footer md:pt-14 pt-6 md:pb-11 pb-4 max-md:px-4">
        <div className="container mx-auto">
            <div className="flex md:flex-row flex-col max-md:gap-5 justify-between items-start flex-shrink-0 mb-10 ">
            <Logo logo={logo} name={'Fudo'} title={'Our job is to filling your tummy with delicious food and  with fast and free delivery.'}/>
            <Links title={'About'} links={['About Us' , 'Features' , 'News' , 'Menu']}/>
            <Links title={'Company'} links={['Why Fodo' , 'Partner With Us' , 'FAQ' , 'Blog']}/>
            <Links title={'Support'} links={['Account' , 'Support Center' , 'Feedback' , 'Contact Us' , 'Accessibilty']}/>
            <div className="flex flex-col gap-8 items-start">
            <Links title={'Get in Touch'} links={['Question or feedback?' , 'We’d love to hear from you']}/>
            <Contact/>
            </div>
            </div>
            <CopyRights/>
        </div>
    </div>
  )
}

export default Footer