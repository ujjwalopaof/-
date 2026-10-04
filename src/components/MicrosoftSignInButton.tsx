import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


    
// Component

        function MicrosoftSignInButton({
            scope,
            isAamCta = false,
            waveActive = false
        }: {
            scope: "eee196c5" | "f0ece469";
            isAamCta?: boolean;
            waveActive?: boolean;
        }) {
            const scopeAttribute =
                scope === "eee196c5"
                    ? { "data-v-eee196c5": "" }
                    : { "data-v-f0ece469": "" };

            return (
                <button
                    {...scopeAttribute}
                    className={`n-button n-button--primary-type n-button--large-type n-button--block${isAamCta ? " aam-cta" : ""}`}
                    tabIndex={"0"}
                    type={"button"}
                    style={{
                        "--n-bezier": "cubic-bezier(.4,0,.2,1)",
                        "--n-bezier-ease-out": "cubic-bezier(0,0,.2,1)",
                        "--n-ripple-duration": ".6s",
                        "--n-opacity-disabled": "0.38",
                        "--n-wave-opacity": "0.8",
                        "--n-font-weight": "400",
                        "--n-color": "#8a63d2",
                        "--n-color-hover": "#9b75db",
                        "--n-color-pressed": "#7a55c6",
                        "--n-color-focus": "#9b75db",
                        "--n-color-disabled": "#8a63d2",
                        "--n-ripple-color": "#8a63d2",
                        "--n-text-color": "#ffffff",
                        "--n-text-color-hover": "#000000",
                        "--n-text-color-pressed": "#000000",
                        "--n-text-color-focus": "#000000",
                        "--n-text-color-disabled": "#000000",
                        "--n-border": "1px solid transparent",
                        "--n-border-hover": "1px solid #9b75db",
                        "--n-border-pressed": "1px solid #7a55c6",
                        "--n-border-focus": "1px solid #9b75db",
                        "--n-border-disabled": "1px solid #8a63d2",
                        "--n-width": "initial",
                        "--n-height": "40px",
                        "--n-font-size": "15px",
                        "--n-padding": "0 18px",
                        "--n-icon-size": "20px",
                        "--n-icon-margin": "6px",
                        "--n-border-radius": "8px"
                    }}
                    {...(isAamCta
                        ? { "data-navigate-routes": JSON.stringify(["/dashboard?step=59"]) }
                        : {})}
                >
                    <span className={"n-button__content"}>
                        {` Sign in with Microsoft `}
                    </span>
                    <div className={`n-base-wave${waveActive ? " n-base-wave--active" : ""}`}>
                    </div>
                    <div className={"n-button__border"}>
                    </div>
                    <div className={"n-button__state-border"}>
                    </div>
                </button>
            );
        }
    

export default MicrosoftSignInButton
