import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import TextInput from './TextInput.tsx'
import HiddenEyeIcon from './HiddenEyeIcon.tsx'
import IconButton from './IconButton.tsx'
import Icon from './Icon.tsx'


    
// Component

        function ConnectionHostRow({
            disabled,
            showHostEye
        }: {
            disabled: boolean;
            showHostEye: boolean;
        }) {
            const location = useLocation()
            const route = location.pathname + location.search + location.hash
            const hostDataId = getHostTextInputDataId(route)
            const portVariant = getPortVariant(route)

            return (
                <div className={"connection-panel-host-row"}>
                    <InputFrame
                        className={`n-input${disabled ? " n-input--disabled" : ""} n-input--resizable n-input--stateful connection-panel-host`}
                        paddingRight="12px"
                        input={hostDataId === null ? null : <TextInput dataId={hostDataId} />}
                        suffix={
                            showHostEye ? (
                                <div className={"n-input__eye"}>
                                    <HiddenEyeIcon />
                                </div>
                            ) : null
                        }
                    />
                    <div className={"n-input-number connection-panel-port"}>
                        <InputFrame
                            className={`n-input${disabled ? " n-input--disabled" : ""} n-input--resizable n-input--stateful`}
                            paddingRight="8px"
                            input={
                                portVariant === null
                                    ? null
                                    : <TextInput dataId={portVariant === "default" ? "3" : "4"} />
                            }
                            suffix={
                                portVariant === null ? null : (
                                    <>
                                        <IconButton
                                            dataId={portVariant === "default" ? "0" : "1"}
                                            disabled={portVariant === "alternate"}
                                        />
                                        <IconButton
                                            dataId={portVariant === "default" ? "2" : "3"}
                                            disabled={portVariant === "alternate"}
                                        />
                                    </>
                                )
                            }
                        />
                    </div>
                </div>
            )
        }
    

// Subcomponents

        function getDashboardStep(route: string): number | null {
            if (route === "/dashboard") {
                return 1
            }

            const match = /^\/dashboard\?step=([2-9]|[1-5][0-9]|6[0-2])$/.exec(route)
            if (!match) {
                return null
            }

            return Number(match[1])
        }

        function getHostTextInputDataId(route: string): "0" | "1" | "2" | null {
            const step = getDashboardStep(route)

            if (step === null) {
                return null
            }

            if (step === 8 || (step >= 49 && step <= 51)) {
                return "1"
            }

            if (step >= 52) {
                return "2"
            }

            return "0"
        }

        function getPortVariant(route: string): "default" | "alternate" | null {
            const step = getDashboardStep(route)

            if (step === null) {
                return null
            }

            if (step === 8 || step >= 49) {
                return "alternate"
            }

            return "default"
        }

        function getConnectionInputStyle(paddingRight: "8px" | "12px") {
            return {
                "--n-bezier": "cubic-bezier(.4,0,.2,1)",
                "--n-count-text-color": "rgba(255,255,255,0.6)",
                "--n-count-text-color-disabled": "rgba(255,255,255,0.38)",
                "--n-color": "rgba(255,255,255,0.1)",
                "--n-font-size": "14px",
                "--n-font-weight": "400",
                "--n-border-radius": "8px",
                "--n-height": "34px",
                "--n-padding-left": "12px",
                "--n-padding-right": paddingRight,
                "--n-text-color": "rgba(255,255,255,0.85)",
                "--n-caret-color": "#8a63d2",
                "--n-text-decoration-color": "rgba(255,255,255,0.85)",
                "--n-border": "1px solid #0000",
                "--n-border-disabled": "1px solid #0000",
                "--n-border-hover": "1px solid #9b75db",
                "--n-border-focus": "1px solid #9b75db",
                "--n-placeholder-color": "rgba(255,255,255,0.38)",
                "--n-placeholder-color-disabled": "rgba(255,255,255,0.28)",
                "--n-icon-size": "16px",
                "--n-line-height-textarea": "1.6",
                "--n-color-disabled": "rgba(255,255,255,0.06)",
                "--n-color-focus": "rgba(138,99,210,0.1)",
                "--n-text-color-disabled": "rgba(255,255,255,0.38)",
                "--n-box-shadow-focus": "0 0 8px 0 rgba(138,99,210,0.3)",
                "--n-loading-color": "#8a63d2",
                "--n-caret-color-warning": "#f2c97d",
                "--n-color-focus-warning": "rgba(242,201,125,0.1)",
                "--n-box-shadow-focus-warning": "0 0 8px 0 rgba(242,201,125,0.3)",
                "--n-border-warning": "1px solid #f2c97d",
                "--n-border-focus-warning": "1px solid #f5d599",
                "--n-border-hover-warning": "1px solid #f5d599",
                "--n-loading-color-warning": "#f2c97d",
                "--n-caret-color-error": "#e88080",
                "--n-color-focus-error": "rgba(232,128,128,0.1)",
                "--n-box-shadow-focus-error": "0 0 8px 0 rgba(232,128,128,0.3)",
                "--n-border-error": "1px solid #e88080",
                "--n-border-focus-error": "1px solid #e98b8b",
                "--n-border-hover-error": "1px solid #e98b8b",
                "--n-loading-color-error": "#e88080",
                "--n-clear-color": "rgba(255,255,255,0.38)",
                "--n-clear-size": "16px",
                "--n-clear-color-hover": "rgba(255,255,255,0.48)",
                "--n-clear-color-pressed": "rgba(255,255,255,0.3)",
                "--n-icon-color": "rgba(255,255,255,0.38)",
                "--n-icon-color-hover": "rgba(255,255,255,0.475)",
                "--n-icon-color-pressed": "rgba(255,255,255,0.30400000000000005)",
                "--n-icon-color-disabled": "rgba(255,255,255,0.28)",
                "--n-suffix-text-color": "rgba(255,255,255,0.85)"
            }
        }

        function InputFrame({
            className,
            paddingRight,
            input,
            suffix
        }: {
            className: string;
            paddingRight: "8px" | "12px";
            input: React.ReactNode;
            suffix: React.ReactNode;
        }) {
            return (
                <div
                    className={className}
                    style={getConnectionInputStyle(paddingRight)}
                >
                    <div className={"n-input-wrapper"}>
                        <div className={"n-input__input"}>
                            {input}
                        </div>
                        <div className={"n-input__suffix"}>
                            {suffix}
                        </div>
                    </div>
                    <div className={"n-input__border"}>
                    </div>
                    <div className={"n-input__state-border"}>
                    </div>
                </div>
            )
        }
    

export default ConnectionHostRow
