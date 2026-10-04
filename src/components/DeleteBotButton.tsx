import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


// Component
function DeleteBotButton() {
    return <button className={"n-button n-button--error-type n-button--medium-type"} tabIndex={"0"} type={"button"} style={{"--n-bezier":"cubic-bezier(.4,0,.2,1)", "--n-bezier-ease-out":"cubic-bezier(0,0,.2,1)", "--n-ripple-duration":".6s", "--n-opacity-disabled":"0.38", "--n-wave-opacity":"0.8", "--n-font-weight":"400", "--n-color":"#e88080", "--n-color-hover":"#e98b8b", "--n-color-pressed":"#e57272", "--n-color-focus":"#e98b8b", "--n-color-disabled":"#e88080", "--n-ripple-color":"#e88080", "--n-text-color":"#000000", "--n-text-color-hover":"#000000", "--n-text-color-pressed":"#000000", "--n-text-color-focus":"#000000", "--n-text-color-disabled":"#000000", "--n-border":"1px solid #e88080", "--n-border-hover":"1px solid #e98b8b", "--n-border-pressed":"1px solid #e57272", "--n-border-focus":"1px solid #e98b8b", "--n-border-disabled":"1px solid #e88080", "--n-width":"initial", "--n-height":"34px", "--n-font-size":"14px", "--n-padding":"0 14px", "--n-icon-size":"18px", "--n-icon-margin":"6px", "--n-border-radius":"8px"}}>
        <span className={"n-button__content"}>
            Delete Bot & Clear Cache
        </span>
        <div className={"n-base-wave"}>
        </div>
        <div className={"n-button__border"}>
        </div>
        <div className={"n-button__state-border"}>
        </div>
    </button>
}


export default DeleteBotButton
