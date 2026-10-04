import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Magnifying_glass from './icons/Magnifying_glass.tsx'
import Magnifying_glass3 from './icons/Magnifying_glass3.tsx'
import TextInput from './TextInput.tsx'


// Component
function ActivitySearchInput() {
    return <div className={"n-input-wrapper"}>
        <div className={"n-input__prefix"}>
            <i data-v-cef28e8e={""} role={"img"} className={"n-icon"} style={{"--n-bezier":"cubic-bezier(.4,0,.2,1)", fontSize:"14px"}}>
                <Magnifying_glass3 />
            </i>
        </div>
        <div className={"n-input__input"}>
            <TextInput dataId="8" />
            <div className={"n-input__placeholder"}>
                <span>
                    Search activity...
                </span>
            </div>
        </div>
        <div className={"n-input__suffix"}>
            <div className={"n-base-clear"}>
                <div className={"n-base-clear__placeholder"}>
                </div>
            </div>
        </div>
    </div>
}


export default ActivitySearchInput
