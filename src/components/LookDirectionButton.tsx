import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


// Component

        function LookDirectionButton({ label }: { label: string }) {
            return (
                <button
                    data-v-7c13119a={""}
                    className={"n-button n-button--default-type n-button--large-type n-button--block look-direction-btn"}
                    tabIndex={"0"}
                    type={"button"}
                    style={{"--n-bezier":"cubic-bezier(.4,0,.2,1)", "--n-bezier-ease-out":"cubic-bezier(0,0,.2,1)", "--n-ripple-duration":".6s", "--n-opacity-disabled":"0.38", "--n-wave-opacity":"0.8", "--n-font-weight":"400", "--n-color":"rgba(255,255,255,.08)", "--n-color-hover":"rgba(255,255,255,.12)", "--n-color-pressed":"rgba(255,255,255,.08)", "--n-color-focus":"rgba(255,255,255,.12)", "--n-color-disabled":"rgba(255,255,255,.08)", "--n-ripple-color":"#0000", "--n-text-color":"rgba(255,255,255,0.85)", "--n-text-color-hover":"rgba(255,255,255,0.85)", "--n-text-color-pressed":"rgba(255,255,255,0.85)", "--n-text-color-focus":"rgba(255,255,255,0.85)", "--n-text-color-disabled":"rgba(255,255,255,0.85)", "--n-border":"1px solid #222222", "--n-border-hover":"1px solid #9b75db", "--n-border-pressed":"1px solid #7a55c6", "--n-border-focus":"1px solid #9b75db", "--n-border-disabled":"1px solid #222222", "--n-width":"initial", "--n-height":"40px", "--n-font-size":"15px", "--n-padding":"0 18px", "--n-icon-size":"20px", "--n-icon-margin":"6px", "--n-border-radius":"8px"}}
                >
                    <span className={"n-button__content"}>
                        {label}
                    </span>
                    <div className={"n-base-wave"}>
                    </div>
                </button>
            )
        }
    

export default LookDirectionButton
