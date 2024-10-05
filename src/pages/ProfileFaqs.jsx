import React from 'react'
import FaqItem from '../utility/FaqItem'

export default function ProfileFaqs() {
  return (
    <div className='p-8 bg-[#0000000A] rounded-xl border space-y-8'>
      <FaqItem
        title="How can i cancel my order?"
        description="When you start and order you can cancel it by clicking the logo on home page. You can find cancel button there. When you start and order you can cancel it by clicking the logo on home page. You can find cancel button there.  When you start and order you can cancel it by clicking the logo on home page. You can find cancel button there.  When you start and order you can cancel it by clicking the logo on home page. You can find cancel button there."
        isOpen={true}
      />
      <FaqItem
        title="How can i order my others foods?"
        description="When you start and order you can cancel it by clicking the logo on home page. You can find cancel button there. When you start and order you can cancel it by clicking the logo on home page. You can find cancel button there.  When you start and order you can cancel it by clicking the logo on home page. You can find cancel button there.  When you start and order you can cancel it by clicking the logo on home page. You can find cancel button there."
        isOpen={false}
      />
      <FaqItem
        title="How i get copun code?"
        description="When you start and order you can cancel it by clicking the logo on home page. You can find cancel button there. When you start and order you can cancel it by clicking the logo on home page. You can find cancel button there.  When you start and order you can cancel it by clicking the logo on home page. You can find cancel button there.  When you start and order you can cancel it by clicking the logo on home page. You can find cancel button there."
        isOpen={false}
      />
      <FaqItem
        title="About Our foods"
        description="When you start and order you can cancel it by clicking the logo on home page. You can find cancel button there. When you start and order you can cancel it by clicking the logo on home page. You can find cancel button there.  When you start and order you can cancel it by clicking the logo on home page. You can find cancel button there.  When you start and order you can cancel it by clicking the logo on home page. You can find cancel button there."
        isOpen={false}
      />
    </div>
  )
}
