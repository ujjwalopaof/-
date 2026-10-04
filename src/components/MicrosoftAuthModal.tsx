import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Img from './Img.tsx'
import FocusSentinel from './FocusSentinel.tsx'
import CloseButton from './CloseButton.tsx'
import MicrosoftSignInButton from './MicrosoftSignInButton.tsx'
import CopyLinkButton from './CopyLinkButton.tsx'
import SupportBox from './SupportBox.tsx'


    
// Component

        function MicrosoftAuthModal({
            showMask,
            hidden
        }: {
            showMask: boolean;
            hidden: boolean;
        }) {
            return (
                <div role={"none"} className={"n-scrollbar-content n-modal-scroll-content"}>
                    {showMask && (
                        <div
                            className={"n-modal-mask"}
                            data-navigate-routes={JSON.stringify(["/dashboard?step=60"])}
                        >
                        </div>
                    )}
                    <FocusSentinel tabIndex="0" />
                    <MicrosoftAuthCard hidden={hidden} />
                    <FocusSentinel tabIndex="0" />
                </div>
            )
        }
    

// Subcomponents

        function MicrosoftAuthCard({ hidden }: { hidden: boolean }) {
            const style = {
                "--n-bezier": "cubic-bezier(.4, 0, .2, 1)",
                "--n-border-radius": "8px",
                "--n-color": "#080808",
                "--n-color-modal": "#080808",
                "--n-color-popover": "rgba(0, 0, 0, 0.94)",
                "--n-color-embedded": "#080808",
                "--n-color-embedded-modal": "#080808",
                "--n-color-embedded-popover": "rgba(0, 0, 0, 0.94)",
                "--n-color-target": "#8a63d2",
                "--n-text-color": "rgba(255, 255, 255, 0.85)",
                "--n-line-height": "1.6",
                "--n-action-color": "rgba(255, 255, 255, 0.06)",
                "--n-title-text-color": "#ffffff",
                "--n-title-font-weight": "500",
                "--n-close-icon-color": "rgba(255, 255, 255, 0.52)",
                "--n-close-icon-color-hover": "rgba(255, 255, 255, 0.52)",
                "--n-close-icon-color-pressed": "rgba(255, 255, 255, 0.52)",
                "--n-close-color-hover": "rgba(255, 255, 255, .12)",
                "--n-close-color-pressed": "rgba(255, 255, 255, .08)",
                "--n-border-color": "#222222",
                "--n-box-shadow": "0 1px 2px -2px rgba(0, 0, 0, .24), 0 3px 6px 0 rgba(0, 0, 0, .18), 0 5px 12px 4px rgba(0, 0, 0, .12)",
                "--n-padding-top": "19px",
                "--n-padding-bottom": "20px",
                "--n-padding-left": "24px",
                "--n-font-size": "14px",
                "--n-title-font-size": "18px",
                "--n-close-size": "22px",
                "--n-close-icon-size": "18px",
                "--n-close-border-radius": "8px",
                maxWidth: "380px",
                borderRadius: "12px",
                background: "rgba(0, 0, 0, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                transformOrigin: "353px 246px",
                ...(hidden ? { display: "none" } : {})
            }

            return (
                <div
                    className={"n-card n-modal msa-auth-modal"}
                    role={"dialog"}
                    style={style}
                >
                    <div className={"n-card-header"} role={"heading"} style={{display:"none"}}>
                        <div className={"n-card-header__main"} role={"heading"}>
                        </div>
                        <CloseButton
                            className="n-base-close n-base-close--absolute n-card-header__close"
                            iconVariant="card"
                        />
                    </div>
                    <div className={"n-card__content"} role={"none"} style={{padding:"24px"}}>
                        <div data-v-f0ece469={""} className={"msa-modal"}>
                            <div data-v-f0ece469={""} className={"msa-header"}>
                                <Img id="115" />
                                <span data-v-f0ece469={""} className={"msa-title"}>
                                    Login with your Microsoft account
                                </span>
                            </div>
                            <CopyLinkButton />
                            <div data-v-f0ece469={""} className={"msa-footer"}>
                                <SupportBox />
                            </div>
                            <p data-v-f0ece469={""} className={"msa-instruction"}>
                                {` Use the code below to sign in. `}
                            </p>
                            <div data-v-f0ece469={""} className={"msa-code"}>
                                ZXTYZRU5
                            </div>
                            <MicrosoftSignInButton scope="f0ece469" />
                        </div>
                    </div>
                </div>
            )
        }
    

export default MicrosoftAuthModal
