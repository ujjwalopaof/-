import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


// Component
function InventoryHints() {
    return <div className={"inventory-hints"}>
        <span className={"hint-item"}>
            Q to Drop
        </span>
        <span className={"hint-separator"}>
            •
        </span>
        <span className={"hint-item"}>
            Right-Click to Use
        </span>
        <span className={"hint-separator"}>
            •
        </span>
        <span className={"hint-item"}>
            Drag to Move
        </span>
        <span className={"hint-separator"}>
            •
        </span>
        <span className={"hint-item"}>
            Shift+Click to Store
        </span>
    </div>
}


export default InventoryHints
