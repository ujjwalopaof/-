import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Close_cross from './icons/Close_cross.tsx'


// Component
function TrialOfferClose() {
    return <button className={"trial-offer-banner__close"}>
        <Close_cross />
    </button>
}


export default TrialOfferClose
