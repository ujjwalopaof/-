import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import LayoutOption from './LayoutOption.tsx'


// Component
function LayoutOptions() {
    return <div data-v-92fb65f8={""} className={"layout-options"} role={"listbox"}>
        
                    <LayoutOption label="Small Chest" active={true} />
                
        
                    <LayoutOption label="Double Chest" />
                
        
                    <LayoutOption label="Furnace" />
                
        
                    <LayoutOption label="3×3 Menu" />
                
    </div>
}


export default LayoutOptions
