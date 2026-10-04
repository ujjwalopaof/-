import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import ConnectionPanel from './ConnectionPanel.tsx'


// Component
function ConnectionPanelHeader() {
    return <div className={"connection-panel-header-left"}>
        <div className={"connection-panel-header-text"}>
            <span className={"n-text"} style={{"--n-bezier":"cubic-bezier(.4,0,.2,1)", "--n-text-color":"rgba(255,255,255,0.6)", "--n-font-weight-strong":"500", "--n-font-famliy-mono":"v-mono,SFMono-Regular,Menlo,Consolas,Courier,monospace", "--n-code-border-radius":"2px", "--n-code-text-color":"rgba(255,255,255,0.85)", "--n-code-color":"rgba(255,255,255,0.12)", "--n-code-border":"1px solid #0000"}}>
                Connection Details
            </span>
        </div>
    </div>
}


export default ConnectionPanelHeader
