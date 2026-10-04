import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Speech_bubble from './icons/Speech_bubble.tsx'
import SupportButton from './SupportButton.tsx'
import Sidebar from './Sidebar.tsx'


// Component
function SidebarSupportButton() {
    return <button data-v-067a1f02={""} type={"button"} className={"sidebar-support-btn"}>
        <Speech_bubble />
        <span data-v-067a1f02={""}>
            Get Support
        </span>
    </button>
}


export default SidebarSupportButton
