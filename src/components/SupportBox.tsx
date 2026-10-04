import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Lifebuoy_ring_outline from './icons/Lifebuoy_ring_outline.tsx'
import Game_controller_face from './icons/Game_controller_face.tsx'
import SupportBoxNote from './SupportBoxNote.tsx'
import SupportButton from './SupportButton.tsx'


// Component
function SupportBox() {
    return <div data-v-99ec678c={""} data-v-f0ece469={""} className={"support-box"}>
        <div data-v-99ec678c={""} className={"support-box-icon"}>
            <Lifebuoy_ring_outline />
        </div>
        <div data-v-99ec678c={""} className={"support-box-content"}>
            <div data-v-99ec678c={""} className={"support-box-title"}>
                Open Ticket
            </div>
            <div data-v-99ec678c={""} className={"support-box-desc"}>
                {` Clicking 'Open Ticket' will create a ticket for you on our `}
                <Game_controller_face />
                {` Discord Server. `}
            </div>
            <SupportBoxNote />
            <SupportButton />
        </div>
    </div>
}


export default SupportBox
