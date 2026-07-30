import React from 'react'
import Accordion from '../shared/accordion'
import ArrowDown from '../icons/arrowDown'
import Eye from '../icons/eye'
import Gem from '../icons/gem'
import Aim from '../icons/aim'
import { SectionHeader } from '../shared/sectionHeader'
import LinkButton from '../shared/linkButton'
import ArrowRight from '../icons/arrowRight'

function OurFoundation() {
  return (
    <section className='flex flex-col gap-20 m-auto w-fit pb-40 px-5' > 


        <Accordion
      icon={<Eye className="w-10 h-10 lg:w-15 lg:h-15 fill-secondary" />}
      title="Our Vision"
      description="To be the leading choice for event management by pioneering innovative, sustainable practices and leveraging a robust global network."
      faqs={[
  {
    q: 'Go-To Destination for Events Management:',
    a: ['Establish Paradigm Capital Group as the preferred choice for events management.','Focus on delivering exceptional service and creating memorable experiences for clients.'],
  },
  {
    q: 'Innovative Practices:',
    a: ['Continuously develop and implement cutting-edge techniques and solutions in event management.','Stay ahead of industry trends and incorporate the latest technologies and creative strategies.'],
  },
  {
    q: 'Sustainable Practices:',
    a: ['Lead the industry in adopting and promoting sustainable event management practices.','Implement environmentally responsible methods and reduce the carbon footprint of events.'],
  },
  {
    q: 'Strong Global Network:',
    a: ['Build and maintain a robust network of industry leaders and innovators worldwide.','Foster strategic alliances and partnerships to enhance service offerings and stay competitive.'],
  },
]}
    />
        <Accordion
      icon={<Aim className="w-10 h-10 lg:w-15 lg:h-15 fill-secondary" />}
      title="Our Mission"
      description="To guide clients in clear communication, optimal resource use, and goal achievement, delivering unforgettable experiences as a trusted partner."
      faqs={[
  {
    q: 'Effective and Efficient Communication:',
    a: ['Help clients clearly define and communicate their needs and objectives.','Provide tools and strategies to ensure smooth and effective communication.'],
  },
  {
    q: 'Understanding Requirements and Resources:',
    a: ['Assist clients in identifying and understanding their available resources and potential challenges.','Offer insights and guidance to optimize the use of resources.'],
  },
  {
    q: 'Achieving Objective Goals:',
    a: ['Support clients in setting and achieving their specific goals.','Provide tailored solutions and strategies to meet and exceed expectations.'],
  },
  {
    q: 'Unforgettable Experience:',
    a: ['Ensure clients have a memorable and positive experience throughout their engagement with us.','Act as a reliable and supportive partner, committed to their success.'],
  },
]}
    />
        <Accordion
      icon={<Gem className="w-10 h-10 lg:w-15 lg:h-15 fill-secondary" />}
      title="Core Values"
      description="Paradigm Capital Group (PCG) emphasizes several core values that shape its operations and interactions with clients:"
      faqs={[
  {
    q: 'Trust:',
    a: ['Building relationships based on honesty, reliability, and taking responsibility for our actions and results.'],
  },
  {
    q: 'Ethics:',
    a: ['Doing the right thing with integrity and fairness.'],
  },
  {
    q: 'Quality:',
    a: ['Delivering excellence in everything we do.'],
  },
  {
    q: 'Creativity:',
    a: ['Innovating and thinking outside the box.'],
  },
  {
    q: 'Professionalism:',
    a: ['Acting with skill, respect, and dedication.'],
  },
  {
    q: 'Teamwork:',
    a: ['Achieving more together through collaboration and support.'],
  },
]}
    />
    </section>
  )
}

export default OurFoundation