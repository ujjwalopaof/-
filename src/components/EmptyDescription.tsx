import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


// Component
function EmptyDescription() {
    return <div className={"n-empty__description"}>
        No macros yet: create one to get started
    </div>
}


export default EmptyDescription
