import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Lightning_bolt from './icons/Lightning_bolt.tsx'
import Lightning_bolt_outline from './icons/Lightning_bolt_outline.tsx'
import PrimaryButton from './PrimaryButton.tsx'
import FocusSentinel from './FocusSentinel.tsx'
import CloseButton from './CloseButton.tsx'
import CancelButton from './CancelButton.tsx'
import ConfigModalHeading from './ConfigModalHeading.tsx'
import Automation from './Automation.tsx'
import StaffAlertConfig from './StaffAlertConfig.tsx'
import AutomationConfig from './AutomationConfig.tsx'


    
// Component

        function AutomationConfigModal({ visible }: { visible: boolean }) {
            const modalStyle = {
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
                borderRadius: "10px",
                background: "rgba(0, 0, 0, 0.78)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(20px)",
                width: "93%",
                maxWidth: "680px",
                transformOrigin: "1183px 382px",
                ...(!visible ? { display: "none" } : {})
            };

            return (
                <div role={"none"} className={"n-scrollbar-content n-modal-scroll-content"}>
                    {visible && <div className={"n-modal-mask"}></div>}

                    <FocusSentinel tabIndex="0" />

                    <div
                        className={"n-card n-modal automations-config-modal"}
                        role={"dialog"}
                        style={modalStyle}
                    >
                        <div className={"n-card-header"} role={"heading"} style={{display:"none"}}>
                            <div className={"n-card-header__main"} role={"heading"}>
                            </div>

                            <CloseButton
                                className="n-base-close n-base-close--absolute n-card-header__close"
                                iconVariant="card"
                            />
                        </div>
                        <div className={"n-card__content"} role={"none"} style={{padding:"0px", overflow:"hidden"}}>
                            <div data-v-830291ff={""} className={"automation-config-modal"}>
                                <div data-v-830291ff={""} className={"config-modal-header"}>
                                    <Lightning_bolt_outline />

                                    <ConfigModalHeading
                                        title="DonutSMP Staff Check"
                                        scopeId="data-v-830291ff"
                                    />
                                </div>
                                <div data-v-830291ff={""} className={"config-modal-body"}>
                                    <StaffAlertConfig inputFocused={true} />
                                </div>
                                <div data-v-830291ff={""} className={"config-modal-actions"}>
                                    <CancelButton
                                        scope="830291ff"
                                        route="/dashboard?step=35"
                                        routeOnButton={true}
                                        waveActive={false}
                                    />

                                    <PrimaryButton
                                        label="Save"
                                        disabled={false}
                                        scope="data-v-830291ff"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <FocusSentinel tabIndex="0" />
                </div>
            )
        }
    

export default AutomationConfigModal
