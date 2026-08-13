import React from 'react'
import TeamMember from '../shared/teamMember'
import { teamData } from '@/data/team'

function TeamMemberSection({name}) {
  return (
    <section className='m-auto max-w-[1300px] pb-0 pt-20 sm:py-40'>
        <TeamMember member={teamData[name]}/>
    </section>
  )
}

export default TeamMemberSection