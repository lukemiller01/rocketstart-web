import React from 'react'
import { Footer } from '../../containers'
import PrivacyPolicy from '../../containers/privacy-policy/PrivacyPolicy'

const Privacy = () => {
  return (
    <div>
        <PrivacyPolicy/>
        <div className="grey__bg">
          <Footer/>
        </div>
    </div>
  )
}

export default Privacy