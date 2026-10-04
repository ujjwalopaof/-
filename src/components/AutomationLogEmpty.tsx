import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Automation from './Automation.tsx'


// Component
function AutomationLogEmpty() {
    return <div data-v-830291ff={""} className={"automation-log-empty"}>
        {` No automation events yet. Triggers will appear here when automations run. `}
    </div>
}


export default AutomationLogEmpty
