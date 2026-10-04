import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import SuffixArrow from './SuffixArrow.tsx'
import TextInput from './TextInput.tsx'
import Switch from './Switch.tsx'
import Switch1 from './Switch1.tsx'
import ConfigFieldGroupTitle from './ConfigFieldGroupTitle.tsx'
import ConfigFieldHeader from './ConfigFieldHeader.tsx'
import AdvancedConfigToggle from './AdvancedConfigToggle.tsx'
import BlockFilterSearch from './BlockFilterSearch.tsx'
import InputNumber from './InputNumber.tsx'


// Component

function AutoSellConfig({
    pickerFocused,
    advancedExpanded
}: {
    pickerFocused: boolean;
    advancedExpanded: boolean;
}) {
    const location = useLocation();

    return (
        <div data-v-830291ff={""} role={"none"} className={"n-space config-form"} style={{display:"flex", flexFlow:"column", justifyContent:"flex-start", gap:"14px"}}>
            <div role={"none"} style={{maxWidth:"100%"}}>
                <p data-v-830291ff={""} className={"config-detail-desc"}>
                    Standard Auto-Sell macro with customizable options to tailor to your needs. As a general rule of thumb, the faster you make this, the more likely you are to be detected.
                </p>
            </div>
            <div role={"none"} style={{maxWidth:"100%"}}>
                <div data-v-0cbfd3bc={""} data-v-830291ff={""} className={"config-fields"}>
                    <div data-v-92c44818={""} data-v-0cbfd3bc={""} className={"config-field"}>
                        <ConfigTextHeader
                            label="Items to Sell"
                            description="Items that should be sold when found in inventory."
                        />
                        <div
                            data-v-46ccc207={""}
                            data-v-92c44818={""}
                            className={pickerFocused ? "block-filter-picker block-filter-picker--focused" : "block-filter-picker"}
                        >
                            {(() => {
                                switch (location.pathname + location.search + location.hash) {
                                    case "/dashboard?step=26":
                                        return <BlockFilterSearch focused={true} />;
                                    case "/dashboard?step=27":
                                    case "/dashboard?step=28":
                                        return <BlockFilterSearch focused={false} />;
                                    default:
                                        return null;
                                }
                            })()}
                        </div>
                    </div>
                    <div data-v-0cbfd3bc={""} className={"config-field-row"}>
                        <div data-v-92c44818={""} data-v-0cbfd3bc={""} className={"config-field"}>
                            <ConfigFieldHeader dataId="0" />
                            <AutoSellTextField />
                        </div>
                        <div data-v-92c44818={""} data-v-0cbfd3bc={""} className={"config-field"}>
                            <ConfigFieldHeader dataId="1" />
                            <InputNumber dataId="0" />
                        </div>
                    </div>
                    <div data-v-0cbfd3bc={""} className={"config-field-group"}>
                        <div data-v-0cbfd3bc={""} className={"config-field-group-header"}>
                            <ConfigFieldGroupTitle title="Transfer Mode" />
                        </div>
                        <div data-v-0cbfd3bc={""} className={"config-field-group-body"}>
                            <div data-v-92c44818={""} data-v-0cbfd3bc={""} className={"config-field"}>
                                <ConfigTextHeader
                                    label="Method"
                                    description="How matching stacks are moved into the sell GUI."
                                />
                                <TransferModeSelect />
                            </div>
                        </div>
                    </div>
                    <div data-v-0cbfd3bc={""} className={"config-field-group"}>
                        <div data-v-0cbfd3bc={""} className={"config-field-group-header"}>
                            <ConfigFieldGroupTitle title="Additional Options" />
                        </div>
                        <div data-v-0cbfd3bc={""} className={"config-field-group-body"}>
                            <ToggleConfigField
                                isActive={true}
                                switchDataId="5"
                                label="Skip if inventory empty"
                                description="Skips runs when none of the selected items are present."
                            />
                            <ToggleConfigField
                                isActive={false}
                                switchDataId="4"
                                label="Only sell when inventory is full"
                                description="Only runs when the player inventory has no empty slots."
                            />
                            <ToggleConfigField
                                isActive={false}
                                switchDataId="4"
                                label="Keep inventory open"
                                description="Leaves sell GUI open between runs; avoid using this while continuous mining."
                            />
                            <ToggleConfigField
                                isActive={false}
                                switchDataId="4"
                                label="Pause when Staff Online"
                                description="Pauses runs while any staff are visible in tab list."
                            />
                            <ToggleConfigField
                                isActive={false}
                                switchDataId="4"
                                label="Pause when Staff in Range"
                                description="Pauses runs when staff are within your distance threshold."
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div role={"none"} style={{maxWidth:"100%"}}>
                <div data-v-830291ff={""} className={"advanced-config"} data-navigate-routes={JSON.stringify(["/dashboard?step=27"])}>
                    <AdvancedConfigToggle />
                    {advancedExpanded ? (
                        <div data-v-0cbfd3bc={""} data-v-830291ff={""} className={"config-fields"}>
                            <ToggleConfigField
                                isActive={true}
                                switchDataId="5"
                                label="Slow GUI pacing"
                                description="Adds human-like pause timing around menu open and close."
                            />
                            <ToggleConfigField
                                isActive={false}
                                switchDataId="4"
                                label="Pause while moving"
                                description="Skips selling when the bot is actively walking or sprinting."
                            />
                            <AdvancedNumberField headerDataId="2" inputDataId="1" />
                            <AdvancedNumberField headerDataId="3" inputDataId="2" />
                            <AdvancedNumberField headerDataId="4" inputDataId="3" />
                            <AdvancedNumberField headerDataId="5" inputDataId="4" />
                            <AdvancedNumberField headerDataId="6" inputDataId="5" />
                            <AdvancedNumberField headerDataId="7" inputDataId="6" />
                            <AdvancedNumberField headerDataId="8" inputDataId="7" />
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
    

// Subcomponents

function ConfigTextHeader({
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

function ToggleConfigField({
    isActive,
    switchDataId,
    label,
    description
}: {
    isActive: boolean;
    switchDataId: string;
    label: string;
    description: string;
}) {
    return (
        <div data-v-92c44818={""} data-v-0cbfd3bc={""} className={"config-field"}>
            <div data-v-92c44818={""} className={"config-toggle-row"}>
                <Switch1 isActive={isActive} dataId={switchDataId} />
                <div data-v-92c44818={""} className={"config-toggle-copy"}>
                    <ConfigTextHeader label={label} description={description} />
                </div>
            </div>
        </div>
    );
}

function AdvancedNumberField({
    headerDataId,
    inputDataId
}: {
    headerDataId: string;
    inputDataId: string;
}) {
    return (
        <div data-v-92c44818={""} data-v-0cbfd3bc={""} className={"config-field"}>
            <ConfigFieldHeader dataId={headerDataId} />
            <InputNumber dataId={inputDataId} />
        </div>
    );
}

function AutoSellTextField() {
    return (
        <div
            data-v-92c44818={""}
            className={"n-input n-input--resizable n-input--stateful"}
            style={{
                "--n-bezier":"cubic-bezier(.4,0,.2,1)",
                "--n-count-text-color":"rgba(255,255,255,0.6)",
                "--n-count-text-color-disabled":"rgba(255,255,255,0.38)",
                "--n-color":"rgba(255,255,255,0.1)",
                "--n-font-size":"15px",
                "--n-font-weight":"400",
                "--n-border-radius":"8px",
                "--n-height":"40px",
                "--n-padding-left":"14px",
                "--n-padding-right":"14px",
                "--n-text-color":"rgba(255,255,255,0.85)",
                "--n-caret-color":"#8a63d2",
                "--n-text-decoration-color":"rgba(255,255,255,0.85)",
                "--n-border":"1px solid #0000",
                "--n-border-disabled":"1px solid #0000",
                "--n-border-hover":"1px solid #9b75db",
                "--n-border-focus":"1px solid #9b75db",
                "--n-placeholder-color":"rgba(255,255,255,0.38)",
                "--n-placeholder-color-disabled":"rgba(255,255,255,0.28)",
                "--n-icon-size":"16px",
                "--n-line-height-textarea":"1.6",
                "--n-color-disabled":"rgba(255,255,255,0.06)",
                "--n-color-focus":"rgba(138,99,210,0.1)",
                "--n-text-color-disabled":"rgba(255,255,255,0.38)",
                "--n-box-shadow-focus":"0 0 8px 0 rgba(138,99,210,0.3)",
                "--n-loading-color":"#8a63d2",
                "--n-caret-color-warning":"#f2c97d",
                "--n-color-focus-warning":"rgba(242,201,125,0.1)",
                "--n-box-shadow-focus-warning":"0 0 8px 0 rgba(242,201,125,0.3)",
                "--n-border-warning":"1px solid #f2c97d",
                "--n-border-focus-warning":"1px solid #f5d599",
                "--n-border-hover-warning":"1px solid #f5d599",
                "--n-loading-color-warning":"#f2c97d",
                "--n-caret-color-error":"#e88080",
                "--n-color-focus-error":"rgba(232,128,128,0.1)",
                "--n-box-shadow-focus-error":"0 0 8px 0 rgba(232,128,128,0.3)",
                "--n-border-error":"1px solid #e88080",
                "--n-border-focus-error":"1px solid #e98b8b",
                "--n-border-hover-error":"1px solid #e98b8b",
                "--n-loading-color-error":"#e88080",
                "--n-clear-color":"rgba(255,255,255,0.38)",
                "--n-clear-size":"16px",
                "--n-clear-color-hover":"rgba(255,255,255,0.48)",
                "--n-clear-color-pressed":"rgba(255,255,255,0.3)",
                "--n-icon-color":"rgba(255,255,255,0.38)",
                "--n-icon-color-hover":"rgba(255,255,255,0.475)",
                "--n-icon-color-pressed":"rgba(255,255,255,0.30400000000000005)",
                "--n-icon-color-disabled":"rgba(255,255,255,0.28)",
                "--n-suffix-text-color":"rgba(255,255,255,0.85)"
            }}
        >
            <div className={"n-input-wrapper"}>
                <div className={"n-input__input"}>
                    <TextInput dataId="22" />
                </div>
            </div>
            <div className={"n-input__border"}></div>
            <div className={"n-input__state-border"}></div>
        </div>
    );
}

function TransferModeSelect() {
    return (
        <div data-v-92c44818={""} className={"n-select"} style={{width:"100%"}}>
            <div
                className={"n-base-selection n-base-selection--selected"}
                style={{
                    "--n-bezier":"cubic-bezier(.4,0,.2,1)",
                    "--n-border":"1px solid #0000",
                    "--n-border-active":"1px solid #8a63d2",
                    "--n-border-focus":"1px solid #9b75db",
                    "--n-border-hover":"1px solid #9b75db",
                    "--n-border-radius":"8px",
                    "--n-box-shadow-active":"0 0 8px 0 rgba(138,99,210,0.4)",
                    "--n-box-shadow-focus":"0 0 8px 0 rgba(138,99,210,0.4)",
                    "--n-box-shadow-hover":"none",
                    "--n-caret-color":"#8a63d2",
                    "--n-color":"rgba(255,255,255,0.1)",
                    "--n-color-active":"rgba(138,99,210,0.1)",
                    "--n-color-disabled":"rgba(255,255,255,0.06)",
                    "--n-font-size":"15px",
                    "--n-height":"40px",
                    "--n-padding-single-top":"0",
                    "--n-padding-multiple-top":"3px",
                    "--n-padding-single-right":"26px",
                    "--n-padding-multiple-right":"26px",
                    "--n-padding-single-left":"12px",
                    "--n-padding-multiple-left":"12px",
                    "--n-padding-single-bottom":"0",
                    "--n-padding-multiple-bottom":"0",
                    "--n-placeholder-color":"rgba(255,255,255,0.38)",
                    "--n-placeholder-color-disabled":"rgba(255,255,255,0.28)",
                    "--n-text-color":"rgba(255,255,255,0.85)",
                    "--n-text-color-disabled":"rgba(255,255,255,0.38)",
                    "--n-arrow-color":"rgba(255,255,255,0.38)",
                    "--n-arrow-color-disabled":"rgba(255,255,255,0.28)",
                    "--n-loading-color":"#8a63d2",
                    "--n-color-active-warning":"rgba(242,201,125,0.1)",
                    "--n-box-shadow-focus-warning":"0 0 8px 0 rgba(242,201,125,0.4)",
                    "--n-box-shadow-active-warning":"0 0 8px 0 rgba(242,201,125,0.4)",
                    "--n-box-shadow-hover-warning":"none",
                    "--n-border-warning":"1px solid #f2c97d",
                    "--n-border-focus-warning":"1px solid #f5d599",
                    "--n-border-hover-warning":"1px solid #f5d599",
                    "--n-border-active-warning":"1px solid #f2c97d",
                    "--n-color-active-error":"rgba(232,128,128,0.1)",
                    "--n-box-shadow-focus-error":"0 0 8px 0 rgba(232,128,128,0.4)",
                    "--n-box-shadow-active-error":"0 0 8px 0 rgba(232,128,128,0.4)",
                    "--n-box-shadow-hover-error":"none",
                    "--n-border-error":"1px solid #e88080",
                    "--n-border-focus-error":"1px solid #e98b8b",
                    "--n-border-hover-error":"1px solid #e98b8b",
                    "--n-border-active-error":"1px solid #e88080",
                    "--n-clear-size":"16px",
                    "--n-clear-color":"rgba(255,255,255,0.38)",
                    "--n-clear-color-hover":"rgba(255,255,255,0.48)",
                    "--n-clear-color-pressed":"rgba(255,255,255,0.3)",
                    "--n-arrow-size":"16px",
                    "--n-font-weight":"400"
                }}
            >
                <div className={"n-base-selection-label"} tabIndex={"0"}>
                    <div className={"n-base-selection-input"} title={"Shift-click each stack"}>
                        <div className={"n-base-selection-input__content"}>
                            Shift-click each stack
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
                <div className={"n-base-selection__border"}></div>
                <div className={"n-base-selection__state-border"}></div>
            </div>
        </div>
    );
}
    

export default AutoSellConfig
