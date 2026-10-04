import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import MacroMiniButton from './MacroMiniButton.tsx'


// Component
function MacroCardActions() {
    return <div data-v-04074ca5={""} className={"macro-card-actions"}>
        
                    <MacroMiniButton variant="duplicate" />
                
        
                    <MacroMiniButton variant="remove" />
                
    </div>
}


export default MacroCardActions
