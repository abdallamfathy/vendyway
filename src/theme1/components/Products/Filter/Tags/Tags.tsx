import {useState} from 'react'
import Title from '../Title'


const Tags = () => {
    // 'Services , Our Menu , Pizza , Cupcake'
    const [checked , setChecked] = useState(false);
    console.log(checked);
    console.log(setChecked);
    
    
    const [Tags , setTags] = useState([
        {
            id:1,
            name:"Pizza",
            checked:false,
        },
        {
            id:2,
            name:"Our Menu",
            checked:false,
        },
        {
            id:3,
            name:"Services",
            checked:false,
        },
        {
            id:4,
            name:"Cupcake",
            checked:false,
        },
        {
            id:5,
            name:'Burger',
            checked:false,
        },
        {
            id:6,
            name:'Cookie',
            checked:false,
        },
        {
            id:7,
            name:'Our shop',
            checked:false,
        },
        {
            id:8,
            name:'Tandoori chicken',
            checked:false,
        }
    ])

    const handleChange = (id: number) => {
        const updatedTags = Tags.map((tag) => {
          if (tag.id === id) {
            return {
              ...tag,
              checked: !tag.checked,
            };
          }
          return tag;
        });
      
        setTags(updatedTags);
      };
  return (
    <div className="py-6 px-8 rounded-md border border-[#E8E8E8] ">
      <div className="flex flex-col gap-5">
        <Title title="Products Tags" />
        <div className='flex flex-wrap  gap-4'>
        {
            Tags.map((tag,index)=>{
                return(
                    <div key={index} className={`flex items-center gap-4 text-[#4F4F4F] border-b border-[#F2F2F2] pb-1 ${tag.checked && 'text-pink1 border-b border-lpink1'}`}>
                        <span onClick={() => handleChange(tag?.id)} className='cursor-pointer'>{tag.name}</span>
                    </div>
                )
            }
            )
        }
        </div>
      </div>
    </div>
  )
}

export default Tags