import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import SuffixArrow from './SuffixArrow.tsx'
import TextInput from './TextInput.tsx'
import Switch from './Switch.tsx'
import InputBorder from './InputBorder.tsx'
import Switch1 from './Switch1.tsx'
import ConfigToggleCopy from './ConfigToggleCopy.tsx'
import LayoutOption from './LayoutOption.tsx'
import Automation from './Automation.tsx'
import ResizableInput from './ResizableInput.tsx'
import LayoutOptions from './LayoutOptions.tsx'
import MenuWindow from './MenuWindow.tsx'
import ManualRow from './ManualRow.tsx'
import AutomationConfig from './AutomationConfig.tsx'


    
// Component

function GuiAutomationConfig({
    openMenuFocused
}: {
    openMenuFocused: boolean;
}) {
    return (
        <div data-v-830291ff={""} role={"none"} className={"n-space config-form"} style={{display:"flex", flexFlow:"column", justifyContent:"flex-start", gap:"14px"}}>
            <div role={"none"} style={{maxWidth:"100%"}}>
                <p data-v-830291ff={""} className={"config-detail-desc"}>
                    {`Opens a GUI via command or right-click and clicks your configured slot automatically.
                Runs on an interval or server event so repetitive menu tasks stay automated.`}
                </p>
            </div>
            <div role={"none"} style={{maxWidth:"100%"}}>
                <div data-v-0cbfd3bc={""} data-v-830291ff={""} className={"config-fields"}>
                    <ConfigSelectField
                        label="Open Menu Via"
                        description="Choose how the bot opens the target menu."
                        value="Command"
                        focused={openMenuFocused}
                    />

                    <div data-v-92c44818={""} data-v-0cbfd3bc={""} className={"config-field"}>
                        <ConfigFieldHeader
                            label="Command"
                            description="Command used to open the menu when Command mode is selected."
                        />
                        <div data-v-92c44818={""} className={"n-input n-input--resizable n-input--stateful"} style={{"--n-bezier":"cubic-bezier(.4,0,.2,1)", "--n-count-text-color":"rgba(255,255,255,0.6)", "--n-count-text-color-disabled":"rgba(255,255,255,0.38)", "--n-color":"rgba(255,255,255,0.1)", "--n-font-size":"15px", "--n-font-weight":"400", "--n-border-radius":"8px", "--n-height":"40px", "--n-padding-left":"14px", "--n-padding-right":"14px", "--n-text-color":"rgba(255,255,255,0.85)", "--n-caret-color":"#8a63d2", "--n-text-decoration-color":"rgba(255,255,255,0.85)", "--n-border":"1px solid #0000", "--n-border-disabled":"1px solid #0000", "--n-border-hover":"1px solid #9b75db", "--n-border-focus":"1px solid #9b75db", "--n-placeholder-color":"rgba(255,255,255,0.38)", "--n-placeholder-color-disabled":"rgba(255,255,255,0.28)", "--n-icon-size":"16px", "--n-line-height-textarea":"1.6", "--n-color-disabled":"rgba(255,255,255,0.06)", "--n-color-focus":"rgba(138,99,210,0.1)", "--n-text-color-disabled":"rgba(255,255,255,0.38)", "--n-box-shadow-focus":"0 0 8px 0 rgba(138,99,210,0.3)", "--n-loading-color":"#8a63d2", "--n-caret-color-warning":"#f2c97d", "--n-color-focus-warning":"rgba(242,201,125,0.1)", "--n-box-shadow-focus-warning":"0 0 8px 0 rgba(242,201,125,0.3)", "--n-border-warning":"1px solid #f2c97d", "--n-border-focus-warning":"1px solid #f5d599", "--n-border-hover-warning":"1px solid #f5d599", "--n-loading-color-warning":"#f2c97d", "--n-caret-color-error":"#e88080", "--n-color-focus-error":"rgba(232,128,128,0.1)", "--n-box-shadow-focus-error":"0 0 8px 0 rgba(232,128,128,0.3)", "--n-border-error":"1px solid #e88080", "--n-border-focus-error":"1px solid #e98b8b", "--n-border-hover-error":"1px solid #e98b8b", "--n-loading-color-error":"#e88080", "--n-clear-color":"rgba(255,255,255,0.38)", "--n-clear-size":"16px", "--n-clear-color-hover":"rgba(255,255,255,0.48)", "--n-clear-color-pressed":"rgba(255,255,255,0.3)", "--n-icon-color":"rgba(255,255,255,0.38)", "--n-icon-color-hover":"rgba(255,255,255,0.475)", "--n-icon-color-pressed":"rgba(255,255,255,0.30400000000000005)", "--n-icon-color-disabled":"rgba(255,255,255,0.28)", "--n-suffix-text-color":"rgba(255,255,255,0.85)"}}>
                            <div className={"n-input-wrapper"}>
                                <div className={"n-input__input"}>
                                    <TextInput dataId="33" />
                                </div>
                            </div>
                            <InputBorder className="n-input__border" />
                            <InputBorder className="n-input__state-border" />
                        </div>
                    </div>

                    <div data-v-92c44818={""} data-v-0cbfd3bc={""} className={"config-field"}>
                        <ConfigFieldHeader
                            label="Clicked GUI Slot"
                            description="Menu slot index to click after the GUI opens."
                        />
                        <div data-v-92fb65f8={""} data-v-92c44818={""} className={"gui-slot-picker"}>
                            <span data-v-92fb65f8={""} className={"n-text picker-hint"} style={{"--n-bezier":"cubic-bezier(.4,0,.2,1)", "--n-text-color":"rgba(255,255,255,0.6)", "--n-font-weight-strong":"500", "--n-font-famliy-mono":"v-mono,SFMono-Regular,Menlo,Consolas,Courier,monospace", "--n-code-border-radius":"2px", "--n-code-text-color":"rgba(255,255,255,0.85)", "--n-code-color":"rgba(255,255,255,0.12)", "--n-code-border":"1px solid #0000"}}>
                                {` Click a slot in the small chest menu. Slot numbers match in-game menu positions (1–27); the bot clicks the correct window index. `}
                            </span>
                            <span data-v-92fb65f8={""} className={"n-text field-label"} style={{"--n-bezier":"cubic-bezier(.4,0,.2,1)", "--n-text-color":"rgba(255,255,255,0.6)", "--n-font-weight-strong":"500", "--n-font-famliy-mono":"v-mono,SFMono-Regular,Menlo,Consolas,Courier,monospace", "--n-code-border-radius":"2px", "--n-code-text-color":"rgba(255,255,255,0.85)", "--n-code-color":"rgba(255,255,255,0.12)", "--n-code-border":"1px solid #0000"}}>
                                GUI Type
                            </span>
                            <LayoutOptions />
                            <MenuWindow />
                            <ManualRow />
                        </div>
                    </div>

                    <div data-v-92c44818={""} data-v-0cbfd3bc={""} className={"config-field"}>
                        <div data-v-92c44818={""} className={"config-toggle-row"}>
                            <Switch1 isActive={false} dataId="4" />
                            <ConfigToggleCopy
                                label="Close GUI after"
                                description="Closes the menu after clicking the selected slot."
                            />
                        </div>
                    </div>

                    <ConfigNumberField
                        label="Delay Before Click (ms)"
                        description="Wait time after menu open before clicking the slot."
                        textInputDataId="25"
                    />

                    <ConfigSelectField
                        label="Run When"
                        description="Select interval runs or server/world event triggers."
                        value="Interval"
                        focused={false}
                    />

                    <ConfigNumberField
                        label="Run Every (seconds)"
                        description="Time between runs when Run When is set to Interval."
                        textInputDataId="23"
                    />
                </div>
            </div>
        </div>
    )
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
    )
}

function ConfigSelectField({
    label,
    description,
    value,
    focused
}: {
    label: string;
    description: string;
    value: string;
    focused: boolean;
}) {
    return (
        <div data-v-92c44818={""} data-v-0cbfd3bc={""} className={"config-field"}>
            <ConfigFieldHeader label={label} description={description} />
            <div data-v-92c44818={""} className={"n-select"} style={{width:"100%"}}>
                <div
                    className={`n-base-selection n-base-selection--selected${focused ? " n-base-selection--focus" : ""}`}
                    style={{"--n-bezier":"cubic-bezier(.4,0,.2,1)", "--n-border":"1px solid #0000", "--n-border-active":"1px solid #8a63d2", "--n-border-focus":"1px solid #9b75db", "--n-border-hover":"1px solid #9b75db", "--n-border-radius":"8px", "--n-box-shadow-active":"0 0 8px 0 rgba(138,99,210,0.4)", "--n-box-shadow-focus":"0 0 8px 0 rgba(138,99,210,0.4)", "--n-box-shadow-hover":"none", "--n-caret-color":"#8a63d2", "--n-color":"rgba(255,255,255,0.1)", "--n-color-active":"rgba(138,99,210,0.1)", "--n-color-disabled":"rgba(255,255,255,0.06)", "--n-font-size":"15px", "--n-height":"40px", "--n-padding-single-top":"0", "--n-padding-multiple-top":"3px", "--n-padding-single-right":"26px", "--n-padding-multiple-right":"26px", "--n-padding-single-left":"12px", "--n-padding-multiple-left":"12px", "--n-padding-single-bottom":"0", "--n-padding-multiple-bottom":"0", "--n-placeholder-color":"rgba(255,255,255,0.38)", "--n-placeholder-color-disabled":"rgba(255,255,255,0.28)", "--n-text-color":"rgba(255,255,255,0.85)", "--n-text-color-disabled":"rgba(255,255,255,0.38)", "--n-arrow-color":"rgba(255,255,255,0.38)", "--n-arrow-color-disabled":"rgba(255,255,255,0.28)", "--n-loading-color":"#8a63d2", "--n-color-active-warning":"rgba(242,201,125,0.1)", "--n-box-shadow-focus-warning":"0 0 8px 0 rgba(242,201,125,0.4)", "--n-box-shadow-active-warning":"0 0 8px 0 rgba(242,201,125,0.4)", "--n-box-shadow-hover-warning":"none", "--n-border-warning":"1px solid #f2c97d", "--n-border-focus-warning":"1px solid #f5d599", "--n-border-hover-warning":"1px solid #f5d599", "--n-border-active-warning":"1px solid #f2c97d", "--n-color-active-error":"rgba(232,128,128,0.1)", "--n-box-shadow-focus-error":"0 0 8px 0 rgba(232,128,128,0.4)", "--n-box-shadow-active-error":"0 0 8px 0 rgba(232,128,128,0.4)", "--n-box-shadow-hover-error":"none", "--n-border-error":"1px solid #e88080", "--n-border-focus-error":"1px solid #e98b8b", "--n-border-hover-error":"1px solid #e98b8b", "--n-border-active-error":"1px solid #e88080", "--n-clear-size":"16px", "--n-clear-color":"rgba(255,255,255,0.38)", "--n-clear-color-hover":"rgba(255,255,255,0.48)", "--n-clear-color-pressed":"rgba(255,255,255,0.3)", "--n-arrow-size":"16px", "--n-font-weight":"400"}}
                >
                    <div className={"n-base-selection-label"} tabIndex={"0"}>
                        <div className={"n-base-selection-input"} title={value}>
                            <div className={"n-base-selection-input__content"}>
                                {value}
                            </div>
                        </div>
                        <div className={"n-base-loading n-base-suffix"} role={"img"}>
                            <div className={"n-base-loading__placeholder"}>
                                <div className={"n-base-clear"}>
                                    <div className={"n-base-clear__placeholder"}>
                                        <SuffixArrow />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"n-base-selection__border"}>
                    </div>
                    <div className={"n-base-selection__state-border"}>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ConfigNumberField({
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
                <ResizableInput textInputDataId={textInputDataId} isFocused={false} />
            </div>
        </div>
    )
}
    

export default GuiAutomationConfig
