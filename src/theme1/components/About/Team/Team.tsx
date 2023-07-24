import Header from './Header'
import TeamCard from './TeamCard'
import team from '/src/assets/theme1/images/about/team.png'
import teamMember from '/src/assets/theme1/images/about/teamMember.png'

const Team = () => {
  return (
    <div className='md:mt-16 md:mb-10 mb-5'>
        <div className='relative -z-10 '>
        <img src={team} alt="banner" className='absolute w-full max-md:h-48' />
        </div>
       <div className='flex flex-col items-center justify-center md:gap-20 gap-6 2xl:py-36 md:py-22 py-10'>
       <Header title={'Team Member'} subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue'/>
       <div className='flex max-md:flex-wrap items-center justify-center gap-5'>
       <TeamCard img={teamMember} name='Mark Henry' position='Owner'/>
       <TeamCard img={teamMember} name='Lucky Helen' position='Chef'/>
       <TeamCard img={teamMember} name='Moon Henry' position='Founder'/>
       <TeamCard img={teamMember} name='Tom Monrow' position='Specialist'/>
       </div>
       </div>
    </div>
  )
}

export default Team