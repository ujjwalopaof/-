import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


// Component
function LockedText() {
    return <div className={"locked-text"}>
        <span>
            Connect to see this information
        </span>
    </div>
}


export default LockedText
