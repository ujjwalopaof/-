import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Cancel_circle from './icons/Cancel_circle.tsx'


// Component
function CancelReconnectButton() {
    return <button className={"n-button n-button--warning-type n-button--tiny-type connection-panel-cancel-reconnect"} tabIndex={"0"} type={"button"} style={{"--n-bezier":"cubic-bezier(.4,0,.2,1)", "--n-bezier-ease-out":"cubic-bezier(0,0,.2,1)", "--n-ripple-duration":".6s", "--n-opacity-disabled":"0.38", "--n-wave-opacity":"0.8", "--n-font-weight":"400", "--n-color":"#0000", "--n-color-hover":"rgba(255,255,255,.12)", "--n-color-pressed":"rgba(255,255,255,.08)", "--n-color-focus":"rgba(255,255,255,.12)", "--n-color-disabled":"#0000", "--n-ripple-color":"#0000", "--n-text-color":"#f2c97d", "--n-text-color-hover":"#f2c97d", "--n-text-color-pressed":"#f2c97d", "--n-text-color-focus":"#f2c97d", "--n-text-color-disabled":"#f2c97d", "--n-border":"1px solid #f2c97d", "--n-border-hover":"1px solid #f5d599", "--n-border-pressed":"1px solid #e6c260", "--n-border-focus":"1px solid #f5d599", "--n-border-disabled":"1px solid #f2c97d", "--n-width":"initial", "--n-height":"22px", "--n-font-size":"12px", "--n-padding":"0 6px", "--n-icon-size":"14px", "--n-icon-margin":"6px", "--n-border-radius":"8px"}}>
        <span className={"n-button__icon"}>
            <div className={"n-icon-slot"} role={"none"}>
                <i role={"img"} className={"n-icon"} style={{"--n-bezier":"cubic-bezier(.4,0,.2,1)", fontSize:"12px"}}>
                    <Cancel_circle />
                </i>
            </div>
        </span>
        <span className={"n-button__content"}>
            {` Cancel Reconnect `}
        </span>
        <div className={"n-base-wave"}>
        </div>
    </button>
}


export default CancelReconnectButton
