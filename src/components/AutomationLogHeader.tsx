import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Automation from './Automation.tsx'


// Component
function AutomationLogHeader() {
    return <div className={"n-card-header__main"} role={"heading"}>
        Automation Log
    </div>
}


export default AutomationLogHeader
