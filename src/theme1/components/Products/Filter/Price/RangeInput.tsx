import React, { useState } from 'react';
import ReactSlider from 'react-slider';

const RangeInput: React.FC = () => {
  const [value, setValue] = useState<number[]>([25,75]); // Initial range values


  return (
    <div className='flex flex-col gap-6'>
         <ReactSlider
        className="slider"
        thumbClassName="thumb"
        trackClassName="track"
        defaultValue={[25, 75]}
        ariaLabelledby={['first-slider-label', 'second-slider-label']}
        ariaValuetext={state => `Thumb value ${state.valueNow}`}
        // renderThumb={(props, state) => <div className='text' {...props}>{state.valueNow}</div>}
        pearling
        minDistance={10}
        onChange={(value) => setValue(value)}
    />
    <div className='flex justify-between gap-3'>
        <div className='bg-[#F9F9F9] border border-[#e6e6e6] rounded-md py-3 px-5 text-[#737373] w-full'>
            {value[0]}
        </div>
        <div className='bg-[#F9F9F9] border border-[#e6e6e6] rounded-md py-3 px-5 text-[#737373] w-full'>
            {value[1]}
        </div>
    </div>
    </div>
  );
};

export default RangeInput;
