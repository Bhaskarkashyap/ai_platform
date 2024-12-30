import LandingHero from '@/components/landing-hero'
// import LandingNavbar from '@/components/landing-navbar'

import React from 'react'

function LandingPage() {
  return (
<div className='h-full'>
<div className="absolute z-[-1] bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_80%)]">
</div>
{/* <LandingNavbar /> */}
<LandingHero />
</div>
  )
}

export default LandingPage