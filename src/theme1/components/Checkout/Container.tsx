import React, { useState } from 'react'
import OrderSummary from './OrderSummary/OrderSummary'
import Payment from './Payment/Payment'
import Delivery from './Delivery/Delivery'
import DeliveryInfo from './Delivery/DeliveryInfo'
import Map from './Delivery/Map'
import { useNavigate } from 'react-router-dom'


enum CheckoutStep {
  Step1,
  Step2,
  Step3,
}
const Container: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>(CheckoutStep.Step1);

  const goToNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case CheckoutStep.Step1:
        return <Map />;
      case CheckoutStep.Step2:
        return <DeliveryInfo />;
      case CheckoutStep.Step3:
        return <OrderSummary />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto md:my-16 py-8 p-4">
            <div className="md:flex hidden md:flex-row flex-col gap-6 justify-between items-start">
                <div className="flex flex-col gap-[3.9rem] md:w-7/12 w-full checkoutShadow">
                <Delivery/>
                <Payment/>
                </div>
              <div className='md:w-5/12 w-full'>
              <OrderSummary/>
              </div>
            </div>

            <div>
           <div className='md:hidden'>
           {renderStep()}
           </div>
        <div className='flex md:hidden gap-4 mt-6 justify-center font-medium '>
        {currentStep !== CheckoutStep.Step1 && (
          <button className='bg-pink1 text-white w-1/2 py-2 rounded-full' onClick={goToPreviousStep}>Previous</button>
        )}
        {currentStep !== CheckoutStep.Step3 && (
          <button className='bg-pink1 text-white w-1/2 py-2 rounded-full' onClick={goToNextStep}>Next</button>
        )}
        {currentStep === CheckoutStep.Step3 && (
          <button className='bg-pink1 text-white w-1/2 py-2 rounded-full' onClick={() => navigate('/order-success')}>Confirm Checkout</button>
        )}
        </div>

      </div>
    </div> 
    
    
    )
}

export default Container