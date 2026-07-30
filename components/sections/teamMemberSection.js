import React from 'react'
import TeamMember from '../shared/teamMember'

function TeamMemberSection() {
  return (
    <section className='m-auto max-w-[1300px] pb-0 pt-20 sm:py-40'>
        <TeamMember member={{
            photo:"/images/ceo.jpg",
            name:"Mahmoud Amer",
            position:"CFO",
            bio:['With over 20 years of dedicated volunteer work and community service, Mahmoud Amer has demonstrated a profound commitment to leadership and personal development. Throughout his career, he has successfully trained and mentored numerous individuals, empowering them to ascend to prominent positions within their fields.',
                'For 17 years, Mahmoud Amer excelled in international private sector companies, where he earned a reputation for his dedication, precision, and strategic acumen. His deep understanding of job responsibilities and relentless pursuit of both practical and academic excellence facilitated his progression through various roles, culminating in his position as Accounts Manager for a multinational conglomerate operating across five countries. Driven by a passion for business management, Mahmoud Amer took a courageous step to contribute to the founding of Paradigm Company. Leaving behind a stable career to pursue his entrepreneurial aspirations, he applied his extensive skills in leadership, active listening, and effective communication to build a distinguished team. Under his guidance, Paradigm fosters an environment rooted in commitment and integrity, promoting collaboration and innovation. At Paradigm, we view trust as the foundation of our progress and success. We are dedicated to delivering creative and sustainable technological solutions tailored to our clients’ needs. By meticulously addressing potential risks and developing comprehensive contingency plans, we ensure the highest quality outcomes.',
                'Today, Mahmoud Amer assures our clients: “Let your dreams and imaginations run wild; leave the execution to us. With Paradigm Capital Group, your vision becomes reality.”']
        }}/>
    </section>
  )
}

export default TeamMemberSection