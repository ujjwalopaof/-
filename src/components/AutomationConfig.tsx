import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import SuffixArrow from './SuffixArrow.tsx'
import Automation from './Automation.tsx'
import ResizableInput from './ResizableInput.tsx'
import ManualAdd from './ManualAdd.tsx'


        type AutomationConfigData = {
            description: string;
            firstFieldLabel: string;
            firstFieldDescription: string;
            textInputDataId: string;
            secondFieldLabel: string;
            secondFieldDescription: string;
            secondFieldContent: React.ReactNode;
        };
    
// Component

        function AutomationConfig({
            dataId
        }: {
            dataId: string;
        }) {
            const {
                description,
                firstFieldLabel,
                firstFieldDescription,
                textInputDataId,
                secondFieldLabel,
                secondFieldDescription,
                secondFieldContent
            }: AutomationConfigData = getAutomationConfigData(dataId);

            return (
                <div data-v-830291ff={""} role={"none"} className={"n-space config-form"} style={{display:"flex", flexFlow:"column", justifyContent:"flex-start", gap:"14px"}}>
                    <div role={"none"} style={{maxWidth:"100%"}}>
                        <p data-v-830291ff={""} className={"config-detail-desc"}>
                            {description}
                        </p>
                    </div>
                    <div role={"none"} style={{maxWidth:"100%"}}>
                        <div data-v-0cbfd3bc={""} data-v-830291ff={""} className={"config-fields"}>
                            <NumericConfigField
                                label={firstFieldLabel}
                                description={firstFieldDescription}
                                textInputDataId={textInputDataId}
                            />
                            <div data-v-92c44818={""} data-v-0cbfd3bc={""} className={"config-field"}>
                                <ConfigFieldHeader
                                    label={secondFieldLabel}
                                    description={secondFieldDescription}
                                />
                                {secondFieldContent}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    

// Subcomponents

        function ConfigFieldHeader({
            label,
            description
        }: {
            label: string;
            description: string;
        }) {
            return (
                <div data-v-92c44818={""} className={"config-field-header"}>
                    <span data-v-92c44818={""} className={"config-field-label"}>
                        {label}
                    </span>
                    <p data-v-92c44818={""} className={"config-field-desc"}>
                        {description}
                    </p>
                </div>
            );
        }

        function NumericConfigField({
            label,
            description,
            textInputDataId
        }: {
            label: string;
            description: string;
            textInputDataId: string;
        }) {
            return (
                <div data-v-92c44818={""} data-v-0cbfd3bc={""} className={"config-field"}>
                    <ConfigFieldHeader label={label} description={description} />
                    <div data-v-92c44818={""} className={"n-input-number"} style={{width:"100%"}}>
                        <ResizableInput textInputDataId={textInputDataId} isFocused={true} />
                    </div>
                </div>
            );
        }
    

function getAutomationConfigData(id): AutomationConfigData  {
    switch (String(id)) {
    case "0":
        return ({
                  "description": "Monitors nearby players and compares them against your whitelist.\n            Disconnects instantly when an untrusted player enters your configured range.",
                  "firstFieldLabel": "Distance (blocks)",
                  "firstFieldDescription": "Trigger distance for unknown players around the bot.",
                  "textInputDataId": "30",
                  "secondFieldLabel": "Player Whitelist",
                  "secondFieldDescription": "Players allowed near the bot without triggering disconnect.",
                  "secondFieldContent": (
                    <div data-v-446f4431={""} data-v-92c44818={""} className="automation-player-picker">
                        <span data-v-446f4431={""} className="n-text empty-hint" style={{"--n-bezier":"cubic-bezier(.4,0,.2,1)", "--n-text-color":"rgba(255,255,255,0.6)", "--n-font-weight-strong":"500", "--n-font-famliy-mono":"v-mono,SFMono-Regular,Menlo,Consolas,Courier,monospace", "--n-code-border-radius":"2px", "--n-code-text-color":"rgba(255,255,255,0.85)", "--n-code-color":"rgba(255,255,255,0.12)", "--n-code-border":"1px solid #0000"}}>
                            Connect your bot to pick from players on the server.
                        </span>
                        <ManualAdd />
                    </div>
                  )
                });
    case "1":
        return ({
                  "description": "Eats automatically when hunger drops below your threshold using the selected food slot.\n            Keeps your bot fed while staying out of the way of normal chat usage.",
                  "firstFieldLabel": "Eat when hunger at or below",
                  "firstFieldDescription": "Starts eating once hunger is at or below this value.",
                  "textInputDataId": "15",
                  "secondFieldLabel": "Food slot",
                  "secondFieldDescription": "Slot used when the automation needs to eat food.",
                  "secondFieldContent": (
                    <div data-v-830291ff={""} className="n-select" style={{width:"100%"}}>
                        <div className="n-base-selection n-base-selection--selected" style={{
                            "--n-bezier": "cubic-bezier(.4,0,.2,1)",
                            "--n-border": "1px solid #0000",
                            "--n-border-active": "1px solid #8a63d2",
                            "--n-border-focus": "1px solid #9b75db",
                            "--n-border-hover": "1px solid #9b75db",
                            "--n-border-radius": "8px",
                            "--n-box-shadow-active": "0 0 8px 0 rgba(138,99,210,0.4)",
                            "--n-box-shadow-focus": "0 0 8px 0 rgba(138,99,210,0.4)",
                            "--n-box-shadow-hover": "none",
                            "--n-caret-color": "#8a63d2",
                            "--n-color": "rgba(255,255,255,0.1)",
                            "--n-color-active": "rgba(138,99,210,0.1)",
                            "--n-color-disabled": "rgba(255,255,255,0.06)",
                            "--n-font-size": "15px",
                            "--n-height": "40px",
                            "--n-padding-single-top": "0",
                            "--n-padding-multiple-top": "3px",
                            "--n-padding-single-right": "26px",
                            "--n-padding-multiple-right": "26px",
                            "--n-padding-single-left": "12px",
                            "--n-padding-multiple-left": "12px",
                            "--n-padding-single-bottom": "0",
                            "--n-padding-multiple-bottom": "0",
                            "--n-placeholder-color": "rgba(255,255,255,0.38)",
                            "--n-placeholder-color-disabled": "rgba(255,255,255,0.28)",
                            "--n-text-color": "rgba(255,255,255,0.85)",
                            "--n-text-color-disabled": "rgba(255,255,255,0.38)",
                            "--n-arrow-color": "rgba(255,255,255,0.38)",
                            "--n-arrow-color-disabled": "rgba(255,255,255,0.28)",
                            "--n-loading-color": "#8a63d2",
                            "--n-color-active-warning": "rgba(242,201,125,0.1)",
                            "--n-box-shadow-focus-warning": "0 0 8px 0 rgba(242,201,125,0.4)",
                            "--n-box-shadow-active-warning": "0 0 8px 0 rgba(242,201,125,0.4)",
                            "--n-box-shadow-hover-warning": "none",
                            "--n-border-warning": "1px solid #f2c97d",
                            "--n-border-focus-warning": "1px solid #f5d599",
                            "--n-border-hover-warning": "1px solid #f5d599",
                            "--n-border-active-warning": "1px solid #f2c97d",
                            "--n-color-active-error": "rgba(232,128,128,0.1)",
                            "--n-box-shadow-focus-error": "0 0 8px 0 rgba(232,128,128,0.4)",
                            "--n-box-shadow-active-error": "0 0 8px 0 rgba(232,128,128,0.4)",
                            "--n-box-shadow-hover-error": "none",
                            "--n-border-error": "1px solid #e88080",
                            "--n-border-focus-error": "1px solid #e98b8b",
                            "--n-border-hover-error": "1px solid #e98b8b",
                            "--n-border-active-error": "1px solid #e88080",
                            "--n-clear-size": "16px",
                            "--n-clear-color": "rgba(255,255,255,0.38)",
                            "--n-clear-color-hover": "rgba(255,255,255,0.48)",
                            "--n-clear-color-pressed": "rgba(255,255,255,0.3)",
                            "--n-arrow-size": "16px",
                            "--n-font-weight": "400",
                        }}>
                            <div className="n-base-selection-label" tabIndex={0}>
                                <div className="n-base-selection-input" title="Offhand">
                                    <div className="n-base-selection-input__content">
                                        Offhand
                                    </div>
                                </div>
                                <div className="n-base-loading n-base-suffix" role="img">
                                    <div className="n-base-loading__placeholder">
                                        <div className="n-base-clear">
                                            <div className="n-base-clear__placeholder">
                                                <SuffixArrow />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="n-base-selection__border"></div>
                            <div className="n-base-selection__state-border"></div>
                        </div>
                    </div>
                  )
                });
    default:
        return ({
                  "description": "Monitors nearby players and compares them against your whitelist.\n            Disconnects instantly when an untrusted player enters your configured range.",
                  "firstFieldLabel": "Distance (blocks)",
                  "firstFieldDescription": "Trigger distance for unknown players around the bot.",
                  "textInputDataId": "30",
                  "secondFieldLabel": "Player Whitelist",
                  "secondFieldDescription": "Players allowed near the bot without triggering disconnect.",
                  "secondFieldContent": (
                    <div data-v-446f4431={""} data-v-92c44818={""} className="automation-player-picker">
                        <span data-v-446f4431={""} className="n-text empty-hint" style={{"--n-bezier":"cubic-bezier(.4,0,.2,1)", "--n-text-color":"rgba(255,255,255,0.6)", "--n-font-weight-strong":"500", "--n-font-famliy-mono":"v-mono,SFMono-Regular,Menlo,Consolas,Courier,monospace", "--n-code-border-radius":"2px", "--n-code-text-color":"rgba(255,255,255,0.85)", "--n-code-color":"rgba(255,255,255,0.12)", "--n-code-border":"1px solid #0000"}}>
                            Connect your bot to pick from players on the server.
                        </span>
                        <ManualAdd />
                    </div>
                  )
                });
    }
}


export default AutomationConfig
