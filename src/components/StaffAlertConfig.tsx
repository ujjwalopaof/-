import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import TextInput from './TextInput.tsx'
import Switch from './Switch.tsx'
import InputBorder from './InputBorder.tsx'
import Switch1 from './Switch1.tsx'
import ConfigToggleCopy from './ConfigToggleCopy.tsx'


    
// Component

        function StaffAlertConfig({
            inputFocused
        }: {
            inputFocused: boolean;
        }) {
            return (
                <div
                    data-v-830291ff={""}
                    role={"none"}
                    className={"n-space config-form"}
                    style={{
                        display: "flex",
                        flexFlow: "column",
                        justifyContent: "flex-start",
                        gap: "14px"
                    }}
                >
                    <div role={"none"} style={{maxWidth: "100%"}}>
                        <p data-v-830291ff={""} className={"config-detail-desc"}>
                            {`Checks DonutSMP tab list for staff markers and tracks staff presence changes.
                Sends Discord webhook alerts when staff join or when staff leave completely.`}
                        </p>
                    </div>
                    <div role={"none"} style={{maxWidth: "100%"}}>
                        <div
                            data-v-0cbfd3bc={""}
                            data-v-830291ff={""}
                            className={"config-fields"}
                        >
                            <div
                                data-v-92c44818={""}
                                data-v-0cbfd3bc={""}
                                className={"config-field"}
                            >
                                <div
                                    data-v-92c44818={""}
                                    className={"config-field-header"}
                                >
                                    <span
                                        data-v-92c44818={""}
                                        className={"config-field-label"}
                                    >
                                        Discord Webhook URL
                                    </span>
                                    <p
                                        data-v-92c44818={""}
                                        className={"config-field-desc"}
                                    >
                                        Destination webhook for staff alerts.
                                    </p>
                                </div>
                                <div
                                    data-v-92c44818={""}
                                    className={`n-input n-input--resizable${inputFocused ? " n-input--focus" : ""} n-input--stateful`}
                                    style={{
                                        "--n-bezier": "cubic-bezier(.4,0,.2,1)",
                                        "--n-count-text-color": "rgba(255,255,255,0.6)",
                                        "--n-count-text-color-disabled": "rgba(255,255,255,0.38)",
                                        "--n-color": "rgba(255,255,255,0.1)",
                                        "--n-font-size": "15px",
                                        "--n-font-weight": "400",
                                        "--n-border-radius": "8px",
                                        "--n-height": "40px",
                                        "--n-padding-left": "14px",
                                        "--n-padding-right": "14px",
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
                                    }}
                                >
                                    <div className={"n-input-wrapper"}>
                                        <div className={"n-input__input"}>
                                            <TextInput dataId="29" />
                                            <div className={"n-input__placeholder"}>
                                                <span>
                                                    Please Input
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <InputBorder className="n-input__border" />
                                    <InputBorder className="n-input__state-border" />
                                </div>
                            </div>
                            <ToggleField
                                label="Notify when there are no staff"
                                description="Sends an alert when staff count reaches zero."
                            />
                            <ToggleField
                                label="Notify when a staff member joins"
                                description="Sends an alert when new staff appear in tab."
                            />
                        </div>
                    </div>
                </div>
            )
        }
    

// Subcomponents

        function ToggleField({
            label,
            description
        }: {
            label: string;
            description: string;
        }) {
            return (
                <div
                    data-v-92c44818={""}
                    data-v-0cbfd3bc={""}
                    className={"config-field"}
                >
                    <div
                        data-v-92c44818={""}
                        className={"config-toggle-row"}
                    >
                        <Switch1 isActive={true} dataId="5" />
                        <ConfigToggleCopy
                            label={label}
                            description={description}
                        />
                    </div>
                </div>
            )
        }
    

export default StaffAlertConfig
