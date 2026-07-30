import React from 'react'

function TeamMember({member}) {
  return (
    <section className='w-full xl:w-[1200px] 2xl:w-[1300px] relative flex max-lg:flex-col max-lg:items-center max-lg:justify-start justify-end m-auto'>
        <img src={member.photo} alt='' fetchPriority='high' width={'650'} className='lg:absolute left-0 top-0 right-0 z-0 max-sm:w-full max[300px]:h-[200px] max-sm:h-[400px] max-lg:h-[600px] lg:w-[550px] xl:w-[650px] max-lg:object-cover max-lg:object-top max-lg:p-5'/>
        <section className='relative flex max-lg:items-center max-lg:justify-start justify-end flex-col z-1 w-full lg:w-[700px] xl:w-[750px]'>
            <section className='lg:px-10 xl:px-40 max-lg:py-10'>
                <h1 className='text-[36px] sm:text-[46px] font-primary-medium max-lg:text-center'>{member.name}</h1>
                <h2 className='text-[20px] sm:text-[28px] font-primary-medium max-lg:text-center'>{member.position}</h2>
            </section>
            <br/>
            <section className='bg-primary-light py-[30px] px-[20px] sm:p-[50px]'>
                <h2 className='text-[36px] sm:text-[46px] font-primary-medium mb-5'>Biography</h2>
                {
                    member.bio.map((p,index)=><p key={index} className='text-[16px] sm:text-[18px] font-primary-light my-5'>{p}</p>)
                }
            </section>
        </section>
    </section>
  )
}

export default TeamMember