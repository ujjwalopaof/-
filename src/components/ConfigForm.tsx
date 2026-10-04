import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import SuffixArrow from './SuffixArrow.tsx'
import TextInput from './TextInput.tsx'
import Switch from './Switch.tsx'
import InputBorder from './InputBorder.tsx'
import Icon from './Icon.tsx'
import Switch1 from './Switch1.tsx'
import LookDirectionButton from './LookDirectionButton.tsx'
import ConfigFieldGroupTitle from './ConfigFieldGroupTitle.tsx'
import ArrowIcon from './ArrowIcon.tsx'
import ConfigNumberField from './ConfigNumberField.tsx'
import DurationFields from './DurationFields.tsx'
import RadiusPresets from './RadiusPresets.tsx'
import PurchasePriceFields from './PurchasePriceFields.tsx'
import CoordQuickRow from './CoordQuickRow.tsx'


        type ConfigFormData = {
            description: React.ReactNode;
            fields: React.ReactNode;
        }
    
// Component

        function ConfigForm({
            dataId
        }: {
            dataId: string;
        }) {
            const {
                description,
                fields
            }: ConfigFormData = getConfigFormData(dataId);

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
                            {description}
                        </p>
                    </div>
                    <div role={"none"} style={{maxWidth: "100%"}}>
                        <div
                            data-v-0cbfd3bc={""}
                            data-v-830291ff={""}
                            className={"config-fields"}
                        >
                            {fields}
                        </div>
                    </div>
                </div>
            );
        }
    

function getConfigFormData(id): ConfigFormData  {
    switch (String(id)) {
    case "0":
        return ({
                    "description": (
                        <>Holds left click in your chosen look direction and keeps the Sell Axe loop running.
                        Optional stuck recovery, auto-eat, and auto-replenish keep it going on donutsmp.net.</>
                    ),
                    "fields": (
                        <>
                            <div data-v-92c44818={""} data-v-0cbfd3bc={""} className={"config-field"}>
                                <div data-v-92c44818={""} className={"config-field-header"}>
                                    <span data-v-92c44818={""} className={"config-field-label"}>
                                        Look Direction
                                    </span>
                                    <p data-v-92c44818={""} className={"config-field-desc"}>
                                        Direction to face while holding left click.
                                    </p>
                                </div>
                                <div data-v-7c13119a={""} data-v-92c44818={""} className={"look-direction-field"}>
                                    <LookDirectionButton label="Keep current" />
                                </div>
                            </div>
                            <div data-v-0cbfd3bc={""} className={"config-field-group"}>
                                <div data-v-0cbfd3bc={""} className={"config-field-group-header"}>
                                    <ConfigFieldGroupTitle title="Detect Bot Stuck" />
                                    <Switch1 isActive={false} dataId="3" />
                                </div>
                                <p data-v-0cbfd3bc={""} className={"config-field-group-desc"}>
                                    Recovers when the bot stays in one spot without moving for too long.
                                </p>
                                <div data-v-0cbfd3bc={""} className={"config-field-group-body"}>
                                    <div data-v-92c44818={""} data-v-0cbfd3bc={""} className={"config-field"}>
                                        <div data-v-92c44818={""} className={"config-field-header"}>
                                            <span data-v-92c44818={""} className={"config-field-label"}>
                                                When Stuck
                                            </span>
                                            <p data-v-92c44818={""} className={"config-field-desc"}>
                                                Choose what happens once the bot stops moving.
                                            </p>
                                        </div>
                                        <div data-v-92c44818={""} className={"n-select"} style={{width:"100%"}}>
                                            <div className={"n-base-selection n-base-selection--selected"} style={{"--n-bezier":"cubic-bezier(.4,0,.2,1)", "--n-border":"1px solid #0000", "--n-border-active":"1px solid #8a63d2", "--n-border-focus":"1px solid #9b75db", "--n-border-hover":"1px solid #9b75db", "--n-border-radius":"8px", "--n-box-shadow-active":"0 0 8px 0 rgba(138,99,210,0.4)", "--n-box-shadow-focus":"0 0 8px 0 rgba(138,99,210,0.4)", "--n-box-shadow-hover":"none", "--n-caret-color":"#8a63d2", "--n-color":"rgba(255,255,255,0.1)", "--n-color-active":"rgba(138,99,210,0.1)", "--n-color-disabled":"rgba(255,255,255,0.06)", "--n-font-size":"15px", "--n-height":"40px", "--n-padding-single-top":"0", "--n-padding-multiple-top":"3px", "--n-padding-single-right":"26px", "--n-padding-multiple-right":"26px", "--n-padding-single-left":"12px", "--n-padding-multiple-left":"12px", "--n-padding-single-bottom":"0", "--n-padding-multiple-bottom":"0", "--n-placeholder-color":"rgba(255,255,255,0.38)", "--n-placeholder-color-disabled":"rgba(255,255,255,0.28)", "--n-text-color":"rgba(255,255,255,0.85)", "--n-text-color-disabled":"rgba(255,255,255,0.38)", "--n-arrow-color":"rgba(255,255,255,0.38)", "--n-arrow-color-disabled":"rgba(255,255,255,0.28)", "--n-loading-color":"#8a63d2", "--n-color-active-warning":"rgba(242,201,125,0.1)", "--n-box-shadow-focus-warning":"0 0 8px 0 rgba(242,201,125,0.4)", "--n-box-shadow-active-warning":"0 0 8px 0 rgba(242,201,125,0.4)", "--n-box-shadow-hover-warning":"none", "--n-border-warning":"1px solid #f2c97d", "--n-border-focus-warning":"1px solid #f5d599", "--n-border-hover-warning":"1px solid #f5d599", "--n-border-active-warning":"1px solid #f2c97d", "--n-color-active-error":"rgba(232,128,128,0.1)", "--n-box-shadow-focus-error":"0 0 8px 0 rgba(232,128,128,0.4)", "--n-box-shadow-active-error":"0 0 8px 0 rgba(232,128,128,0.4)", "--n-box-shadow-hover-error":"none", "--n-border-error":"1px solid #e88080", "--n-border-focus-error":"1px solid #e98b8b", "--n-border-hover-error":"1px solid #e98b8b", "--n-border-active-error":"1px solid #e88080", "--n-clear-size":"16px", "--n-clear-color":"rgba(255,255,255,0.38)", "--n-clear-color-hover":"rgba(255,255,255,0.48)", "--n-clear-color-pressed":"rgba(255,255,255,0.3)", "--n-arrow-size":"16px", "--n-font-weight":"400"}}>
                                                <div className={"n-base-selection-label"} tabIndex={"0"}>
                                                    <div className={"n-base-selection-input"} title={"Nudge movement"}>
                                                        <div className={"n-base-selection-input__content"}>
                                                            Nudge movement
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
                                    <ConfigNumberField dataId="0" />
                                </div>
                            </div>
                            <div data-v-0cbfd3bc={""} className={"config-field-group"}>
                                <div data-v-0cbfd3bc={""} className={"config-field-group-header"}>
                                    <ConfigFieldGroupTitle title="Auto Eat" />
                                    <Switch1 isActive={false} dataId="3" />
                                </div>
                                <p data-v-0cbfd3bc={""} className={"config-field-group-desc"}>
                                    Pauses holding to eat from your configured food slot, then resumes.
                                </p>
                                <div data-v-0cbfd3bc={""} className={"config-field-group-body"}>
                                    <ConfigNumberField dataId="1" />
                                    <div data-v-92c44818={""} data-v-0cbfd3bc={""} className={"config-field"}>
                                        <div data-v-92c44818={""} className={"config-field-header"}>
                                            <span data-v-92c44818={""} className={"config-field-label"}>
                                                Food slot
                                            </span>
                                            <p data-v-92c44818={""} className={"config-field-desc"}>
                                                Slot used when the automation needs to eat food.
                                            </p>
                                        </div>
                                        <div data-v-92c44818={""} className={"n-select"} style={{width:"100%"}}>
                                            <div className={"n-base-selection n-base-selection--selected"} style={{"--n-bezier":"cubic-bezier(.4,0,.2,1)", "--n-border":"1px solid #0000", "--n-border-active":"1px solid #8a63d2", "--n-border-focus":"1px solid #9b75db", "--n-border-hover":"1px solid #9b75db", "--n-border-radius":"8px", "--n-box-shadow-active":"0 0 8px 0 rgba(138,99,210,0.4)", "--n-box-shadow-focus":"0 0 8px 0 rgba(138,99,210,0.4)", "--n-box-shadow-hover":"none", "--n-caret-color":"#8a63d2", "--n-color":"rgba(255,255,255,0.1)", "--n-color-active":"rgba(138,99,210,0.1)", "--n-color-disabled":"rgba(255,255,255,0.06)", "--n-font-size":"15px", "--n-height":"40px", "--n-padding-single-top":"0", "--n-padding-multiple-top":"3px", "--n-padding-single-right":"26px", "--n-padding-multiple-right":"26px", "--n-padding-single-left":"12px", "--n-padding-multiple-left":"12px", "--n-padding-single-bottom":"0", "--n-padding-multiple-bottom":"0", "--n-placeholder-color":"rgba(255,255,255,0.38)", "--n-placeholder-color-disabled":"rgba(255,255,255,0.28)", "--n-text-color":"rgba(255,255,255,0.85)", "--n-text-color-disabled":"rgba(255,255,255,0.38)", "--n-arrow-color":"rgba(255,255,255,0.38)", "--n-arrow-color-disabled":"rgba(255,255,255,0.28)", "--n-loading-color":"#8a63d2", "--n-color-active-warning":"rgba(242,201,125,0.1)", "--n-box-shadow-focus-warning":"0 0 8px 0 rgba(242,201,125,0.4)", "--n-box-shadow-active-warning":"0 0 8px 0 rgba(242,201,125,0.4)", "--n-box-shadow-hover-warning":"none", "--n-border-warning":"1px solid #f2c97d", "--n-border-focus-warning":"1px solid #f5d599", "--n-border-hover-warning":"1px solid #f5d599", "--n-border-active-warning":"1px solid #f2c97d", "--n-color-active-error":"rgba(232,128,128,0.1)", "--n-box-shadow-focus-error":"0 0 8px 0 rgba(232,128,128,0.4)", "--n-box-shadow-active-error":"0 0 8px 0 rgba(232,128,128,0.4)", "--n-box-shadow-hover-error":"none", "--n-border-error":"1px solid #e88080", "--n-border-focus-error":"1px solid #e98b8b", "--n-border-hover-error":"1px solid #e98b8b", "--n-border-active-error":"1px solid #e88080", "--n-clear-size":"16px", "--n-clear-color":"rgba(255,255,255,0.38)", "--n-clear-color-hover":"rgba(255,255,255,0.48)", "--n-clear-color-pressed":"rgba(255,255,255,0.3)", "--n-arrow-size":"16px", "--n-font-weight":"400"}}>
                                                <div className={"n-base-selection-label"} tabIndex={"0"}>
                                                    <div className={"n-base-selection-input"} title={"Offhand"}>
                                                        <div className={"n-base-selection-input__content"}>
                                                            Offhand
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
                                </div>
                            </div>
                            <div data-v-0cbfd3bc={""} className={"config-field-group"}>
                                <div data-v-0cbfd3bc={""} className={"config-field-group-header"}>
                                    <ConfigFieldGroupTitle title="Automatically Replenish Axe" />
                                    <Switch1 isActive={false} dataId="3" />
                                </div>
                                <p data-v-0cbfd3bc={""} className={"config-field-group-desc"}>
                                    Equips a spare axe or buys one from /ah when your held axe breaks.
                                </p>
                                <div data-v-0cbfd3bc={""} className={"config-field-group-body"}>
                                    <PurchasePriceFields />
                                    <DurationFields />
                                    <div data-v-92c44818={""} data-v-0cbfd3bc={""} className={"config-field"}>
                                        <div data-v-92c44818={""} className={"config-field-header"}>
                                            <span data-v-92c44818={""} className={"config-field-label"}>
                                                Auction Search Command
                                            </span>
                                            <p data-v-92c44818={""} className={"config-field-desc"}>
                                                Command used to open matching axe listings in auction house.
                                            </p>
                                        </div>
                                        <div data-v-92c44818={""} className={"n-input n-input--resizable n-input--stateful"} style={{"--n-bezier":"cubic-bezier(.4,0,.2,1)", "--n-count-text-color":"rgba(255,255,255,0.6)", "--n-count-text-color-disabled":"rgba(255,255,255,0.38)", "--n-color":"rgba(255,255,255,0.1)", "--n-font-size":"15px", "--n-font-weight":"400", "--n-border-radius":"8px", "--n-height":"40px", "--n-padding-left":"14px", "--n-padding-right":"14px", "--n-text-color":"rgba(255,255,255,0.85)", "--n-caret-color":"#8a63d2", "--n-text-decoration-color":"rgba(255,255,255,0.85)", "--n-border":"1px solid #0000", "--n-border-disabled":"1px solid #0000", "--n-border-hover":"1px solid #9b75db", "--n-border-focus":"1px solid #9b75db", "--n-placeholder-color":"rgba(255,255,255,0.38)", "--n-placeholder-color-disabled":"rgba(255,255,255,0.28)", "--n-icon-size":"16px", "--n-line-height-textarea":"1.6", "--n-color-disabled":"rgba(255,255,255,0.06)", "--n-color-focus":"rgba(138,99,210,0.1)", "--n-text-color-disabled":"rgba(255,255,255,0.38)", "--n-box-shadow-focus":"0 0 8px 0 rgba(138,99,210,0.3)", "--n-loading-color":"#8a63d2", "--n-caret-color-warning":"#f2c97d", "--n-color-focus-warning":"rgba(242,201,125,0.1)", "--n-box-shadow-focus-warning":"0 0 8px 0 rgba(242,201,125,0.3)", "--n-border-warning":"1px solid #f2c97d", "--n-border-focus-warning":"1px solid #f5d599", "--n-border-hover-warning":"1px solid #f5d599", "--n-loading-color-warning":"#f2c97d", "--n-caret-color-error":"#e88080", "--n-color-focus-error":"rgba(232,128,128,0.1)", "--n-box-shadow-focus-error":"0 0 8px 0 rgba(232,128,128,0.3)", "--n-border-error":"1px solid #e88080", "--n-border-focus-error":"1px solid #e98b8b", "--n-border-hover-error":"1px solid #e98b8b", "--n-loading-color-error":"#e88080", "--n-clear-color":"rgba(255,255,255,0.38)", "--n-clear-size":"16px", "--n-clear-color-hover":"rgba(255,255,255,0.48)", "--n-clear-color-pressed":"rgba(255,255,255,0.3)", "--n-icon-color":"rgba(255,255,255,0.38)", "--n-icon-color-hover":"rgba(255,255,255,0.475)", "--n-icon-color-pressed":"rgba(255,255,255,0.30400000000000005)", "--n-icon-color-disabled":"rgba(255,255,255,0.28)", "--n-suffix-text-color":"rgba(255,255,255,0.85)"}}>
                                            <div className={"n-input-wrapper"}>
                                                <div className={"n-input__input"}>
                                                    <TextInput dataId="20" />
                                                </div>
                                            </div>
                                            <div className={"n-input__border"}>
                                            </div>
                                            <div className={"n-input__state-border"}>
                                            </div>
                                        </div>
                                    </div>
                                    <ConfigNumberField dataId="2" />
                                    <div data-v-92c44818={""} data-v-0cbfd3bc={""} className={"config-field"}>
                                        <div data-v-92c44818={""} className={"config-toggle-row"}>
                                            <Switch1 isActive={false} dataId="4" />
                                            <div data-v-92c44818={""} className={"config-toggle-copy"}>
                                                <div data-v-92c44818={""} className={"config-field-header"}>
                                                    <span data-v-92c44818={""} className={"config-field-label"}>
                                                        Sort Highest To Lowest
                                                    </span>
                                                    <p data-v-92c44818={""} className={"config-field-desc"}>
                                                        Click the AH hopper twice to sort by highest price before buying.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                });
    case "1":
        return ({
                  "description": (
                    <>Define a boundary box around your farm or base and monitor position continuously.
                    If the bot leaves the area, it can disconnect or run a safety command.</>
                  ),
                  "fields": (
                    <>
                        <div data-v-92c44818={""} data-v-0cbfd3bc={""} className={"config-field"}>
                            <div data-v-92c44818={""} className={"config-field-header"}>
                                <span data-v-92c44818={""} className={"config-field-label"}>
                                    Boundary Area
                                </span>
                                <p data-v-92c44818={""} className={"config-field-desc"}>
                                    Set min/max corners or use radius-based quick setup.
                                </p>
                            </div>
                            <div data-v-03870910={""} data-v-92c44818={""} className={"coord-bounds-editor"}>
                                
                                <CoordQuickRow focused={true} />
                                
                                <span data-v-03870910={""} className={"n-text coord-hint"} style={{"--n-bezier":"cubic-bezier(.4,0,.2,1)", "--n-text-color":"rgba(255,255,255,0.6)", "--n-font-weight-strong":"500", "--n-font-famliy-mono":"v-mono,SFMono-Regular,Menlo,Consolas,Courier,monospace", "--n-code-border-radius":"2px", "--n-code-text-color":"rgba(255,255,255,0.85)", "--n-code-color":"rgba(255,255,255,0.12)", "--n-code-border":"1px solid #0000"}}>
                                    Connect your bot to grab its current position.
                                </span>
                                
                                <RadiusPresets />
                                
                                <div data-v-03870910={""} className={"n-collapse coord-advanced"} style={{"--n-font-size":"14px", "--n-bezier":"cubic-bezier(.4,0,.2,1)", "--n-text-color":"rgba(255,255,255,0.85)", "--n-divider-color":"rgba(255,255,255,0.09)", "--n-title-padding":"16px 0 0 0", "--n-title-font-size":"14px", "--n-title-text-color":"#ffffff", "--n-title-text-color-disabled":"rgba(255,255,255,0.38)", "--n-title-font-weight":"400", "--n-arrow-color":"rgba(255,255,255,0.85)", "--n-arrow-color-disabled":"rgba(255,255,255,0.38)", "--n-item-margin":"16px 0 0 0"}}>
                                    <div data-v-03870910={""} className={"n-collapse-item n-collapse-item--right-arrow-placement n-collapse-item--trigger-area-main n-collapse-item--trigger-area-extra n-collapse-item--trigger-area-arrow"}>
                                        <div className={"n-collapse-item__header"}>
                                            <div className={"n-collapse-item__header-main"}>
                                                Advanced bounds
                                                <div className={"n-collapse-item-arrow"}>
                                                    <ArrowIcon />
                                                </div>
                                            </div>
                                            <div className={"n-collapse-item__header-extra"}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-v-92c44818={""} data-v-0cbfd3bc={""} className={"config-field"}>
                            <div data-v-92c44818={""} className={"config-field-header"}>
                                <span data-v-92c44818={""} className={"config-field-label"}>
                                    Outside Bounds Action
                                </span>
                                <p data-v-92c44818={""} className={"config-field-desc"}>
                                    Choose what happens when the bot exits the boundary.
                                </p>
                            </div>
                            <div data-v-92c44818={""} className={"n-select"} style={{width:"100%"}}>
                                <div className={"n-base-selection n-base-selection--selected"} style={{"--n-bezier":"cubic-bezier(.4,0,.2,1)", "--n-border":"1px solid #0000", "--n-border-active":"1px solid #8a63d2", "--n-border-focus":"1px solid #9b75db", "--n-border-hover":"1px solid #9b75db", "--n-border-radius":"8px", "--n-box-shadow-active":"0 0 8px 0 rgba(138,99,210,0.4)", "--n-box-shadow-focus":"0 0 8px 0 rgba(138,99,210,0.4)", "--n-box-shadow-hover":"none", "--n-caret-color":"#8a63d2", "--n-color":"rgba(255,255,255,0.1)", "--n-color-active":"rgba(138,99,210,0.1)", "--n-color-disabled":"rgba(255,255,255,0.06)", "--n-font-size":"15px", "--n-height":"40px", "--n-padding-single-top":"0", "--n-padding-multiple-top":"3px", "--n-padding-single-right":"26px", "--n-padding-multiple-right":"26px", "--n-padding-single-left":"12px", "--n-padding-multiple-left":"12px", "--n-padding-single-bottom":"0", "--n-padding-multiple-bottom":"0", "--n-placeholder-color":"rgba(255,255,255,0.38)", "--n-placeholder-color-disabled":"rgba(255,255,255,0.28)", "--n-text-color":"rgba(255,255,255,0.85)", "--n-text-color-disabled":"rgba(255,255,255,0.38)", "--n-arrow-color":"rgba(255,255,255,0.38)", "--n-arrow-color-disabled":"rgba(255,255,255,0.28)", "--n-loading-color":"#8a63d2", "--n-color-active-warning":"rgba(242,201,125,0.1)", "--n-box-shadow-focus-warning":"0 0 8px 0 rgba(242,201,125,0.4)", "--n-box-shadow-active-warning":"0 0 8px 0 rgba(242,201,125,0.4)", "--n-box-shadow-hover-warning":"none", "--n-border-warning":"1px solid #f2c97d", "--n-border-focus-warning":"1px solid #f5d599", "--n-border-hover-warning":"1px solid #f5d599", "--n-border-active-warning":"1px solid #f2c97d", "--n-color-active-error":"rgba(232,128,128,0.1)", "--n-box-shadow-focus-error":"0 0 8px 0 rgba(232,128,128,0.4)", "--n-box-shadow-active-error":"0 0 8px 0 rgba(232,128,128,0.4)", "--n-box-shadow-hover-error":"none", "--n-border-error":"1px solid #e88080", "--n-border-focus-error":"1px solid #e98b8b", "--n-border-hover-error":"1px solid #e98b8b", "--n-border-active-error":"1px solid #e88080", "--n-clear-size":"16px", "--n-clear-color":"rgba(255,255,255,0.38)", "--n-clear-color-hover":"rgba(255,255,255,0.48)", "--n-clear-color-pressed":"rgba(255,255,255,0.3)", "--n-arrow-size":"16px", "--n-font-weight":"400"}}>
                                    <div className={"n-base-selection-label"} tabIndex={"0"}>
                                        <div className={"n-base-selection-input"} title={"Disconnect"}>
                                            <div className={"n-base-selection-input__content"}>
                                                Disconnect
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
                        <div data-v-92c44818={""} data-v-0cbfd3bc={""} className={"config-field"}>
                            <div data-v-92c44818={""} className={"config-field-header"}>
                                <span data-v-92c44818={""} className={"config-field-label"}>
                                    Chat Command (if action is chat)
                                </span>
                                <p data-v-92c44818={""} className={"config-field-desc"}>
                                    Command to send after leaving bounds when action is chat.
                                </p>
                            </div>
                            <div data-v-92c44818={""} className={"n-input n-input--resizable n-input--stateful"} style={{"--n-bezier":"cubic-bezier(.4,0,.2,1)", "--n-count-text-color":"rgba(255,255,255,0.6)", "--n-count-text-color-disabled":"rgba(255,255,255,0.38)", "--n-color":"rgba(255,255,255,0.1)", "--n-font-size":"15px", "--n-font-weight":"400", "--n-border-radius":"8px", "--n-height":"40px", "--n-padding-left":"14px", "--n-padding-right":"14px", "--n-text-color":"rgba(255,255,255,0.85)", "--n-caret-color":"#8a63d2", "--n-text-decoration-color":"rgba(255,255,255,0.85)", "--n-border":"1px solid #0000", "--n-border-disabled":"1px solid #0000", "--n-border-hover":"1px solid #9b75db", "--n-border-focus":"1px solid #9b75db", "--n-placeholder-color":"rgba(255,255,255,0.38)", "--n-placeholder-color-disabled":"rgba(255,255,255,0.28)", "--n-icon-size":"16px", "--n-line-height-textarea":"1.6", "--n-color-disabled":"rgba(255,255,255,0.06)", "--n-color-focus":"rgba(138,99,210,0.1)", "--n-text-color-disabled":"rgba(255,255,255,0.38)", "--n-box-shadow-focus":"0 0 8px 0 rgba(138,99,210,0.3)", "--n-loading-color":"#8a63d2", "--n-caret-color-warning":"#f2c97d", "--n-color-focus-warning":"rgba(242,201,125,0.1)", "--n-box-shadow-focus-warning":"0 0 8px 0 rgba(242,201,125,0.3)", "--n-border-warning":"1px solid #f2c97d", "--n-border-focus-warning":"1px solid #f5d599", "--n-border-hover-warning":"1px solid #f5d599", "--n-loading-color-warning":"#f2c97d", "--n-caret-color-error":"#e88080", "--n-color-focus-error":"rgba(232,128,128,0.1)", "--n-box-shadow-focus-error":"0 0 8px 0 rgba(232,128,128,0.3)", "--n-border-error":"1px solid #e88080", "--n-border-focus-error":"1px solid #e98b8b", "--n-border-hover-error":"1px solid #e98b8b", "--n-loading-color-error":"#e88080", "--n-clear-color":"rgba(255,255,255,0.38)", "--n-clear-size":"16px", "--n-clear-color-hover":"rgba(255,255,255,0.48)", "--n-clear-color-pressed":"rgba(255,255,255,0.3)", "--n-icon-color":"rgba(255,255,255,0.38)", "--n-icon-color-hover":"rgba(255,255,255,0.475)", "--n-icon-color-pressed":"rgba(255,255,255,0.30400000000000005)", "--n-icon-color-disabled":"rgba(255,255,255,0.28)", "--n-suffix-text-color":"rgba(255,255,255,0.85)"}}>
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
                    </>
                  )
                });
    default:
        return ({
                    "description": (
                        <>Holds left click in your chosen look direction and keeps the Sell Axe loop running.
                        Optional stuck recovery, auto-eat, and auto-replenish keep it going on donutsmp.net.</>
                    ),
                    "fields": (
                        <>
                            <div data-v-92c44818={""} data-v-0cbfd3bc={""} className={"config-field"}>
                                <div data-v-92c44818={""} className={"config-field-header"}>
                                    <span data-v-92c44818={""} className={"config-field-label"}>
                                        Look Direction
                                    </span>
                                    <p data-v-92c44818={""} className={"config-field-desc"}>
                                        Direction to face while holding left click.
                                    </p>
                                </div>
                                <div data-v-7c13119a={""} data-v-92c44818={""} className={"look-direction-field"}>
                                    <LookDirectionButton label="Keep current" />
                                </div>
                            </div>
                            <div data-v-0cbfd3bc={""} className={"config-field-group"}>
                                <div data-v-0cbfd3bc={""} className={"config-field-group-header"}>
                                    <ConfigFieldGroupTitle title="Detect Bot Stuck" />
                                    <Switch1 isActive={false} dataId="3" />
                                </div>
                                <p data-v-0cbfd3bc={""} className={"config-field-group-desc"}>
                                    Recovers when the bot stays in one spot without moving for too long.
                                </p>
                                <div data-v-0cbfd3bc={""} className={"config-field-group-body"}>
                                    <div data-v-92c44818={""} data-v-0cbfd3bc={""} className={"config-field"}>
                                        <div data-v-92c44818={""} className={"config-field-header"}>
                                            <span data-v-92c44818={""} className={"config-field-label"}>
                                                When Stuck
                                            </span>
                                            <p data-v-92c44818={""} className={"config-field-desc"}>
                                                Choose what happens once the bot stops moving.
                                            </p>
                                        </div>
                                        <div data-v-92c44818={""} className={"n-select"} style={{width:"100%"}}>
                                            <div className={"n-base-selection n-base-selection--selected"} style={{"--n-bezier":"cubic-bezier(.4,0,.2,1)", "--n-border":"1px solid #0000", "--n-border-active":"1px solid #8a63d2", "--n-border-focus":"1px solid #9b75db", "--n-border-hover":"1px solid #9b75db", "--n-border-radius":"8px", "--n-box-shadow-active":"0 0 8px 0 rgba(138,99,210,0.4)", "--n-box-shadow-focus":"0 0 8px 0 rgba(138,99,210,0.4)", "--n-box-shadow-hover":"none", "--n-caret-color":"#8a63d2", "--n-color":"rgba(255,255,255,0.1)", "--n-color-active":"rgba(138,99,210,0.1)", "--n-color-disabled":"rgba(255,255,255,0.06)", "--n-font-size":"15px", "--n-height":"40px", "--n-padding-single-top":"0", "--n-padding-multiple-top":"3px", "--n-padding-single-right":"26px", "--n-padding-multiple-right":"26px", "--n-padding-single-left":"12px", "--n-padding-multiple-left":"12px", "--n-padding-single-bottom":"0", "--n-padding-multiple-bottom":"0", "--n-placeholder-color":"rgba(255,255,255,0.38)", "--n-placeholder-color-disabled":"rgba(255,255,255,0.28)", "--n-text-color":"rgba(255,255,255,0.85)", "--n-text-color-disabled":"rgba(255,255,255,0.38)", "--n-arrow-color":"rgba(255,255,255,0.38)", "--n-arrow-color-disabled":"rgba(255,255,255,0.28)", "--n-loading-color":"#8a63d2", "--n-color-active-warning":"rgba(242,201,125,0.1)", "--n-box-shadow-focus-warning":"0 0 8px 0 rgba(242,201,125,0.4)", "--n-box-shadow-active-warning":"0 0 8px 0 rgba(242,201,125,0.4)", "--n-box-shadow-hover-warning":"none", "--n-border-warning":"1px solid #f2c97d", "--n-border-focus-warning":"1px solid #f5d599", "--n-border-hover-warning":"1px solid #f5d599", "--n-border-active-warning":"1px solid #f2c97d", "--n-color-active-error":"rgba(232,128,128,0.1)", "--n-box-shadow-focus-error":"0 0 8px 0 rgba(232,128,128,0.4)", "--n-box-shadow-active-error":"0 0 8px 0 rgba(232,128,128,0.4)", "--n-box-shadow-hover-error":"none", "--n-border-error":"1px solid #e88080", "--n-border-focus-error":"1px solid #e98b8b", "--n-border-hover-error":"1px solid #e98b8b", "--n-border-active-error":"1px solid #e88080", "--n-clear-size":"16px", "--n-clear-color":"rgba(255,255,255,0.38)", "--n-clear-color-hover":"rgba(255,255,255,0.48)", "--n-clear-color-pressed":"rgba(255,255,255,0.3)", "--n-arrow-size":"16px", "--n-font-weight":"400"}}>
                                                <div className={"n-base-selection-label"} tabIndex={"0"}>
                                                    <div className={"n-base-selection-input"} title={"Nudge movement"}>
                                                        <div className={"n-base-selection-input__content"}>
                                                            Nudge movement
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
                                    <ConfigNumberField dataId="0" />
                                </div>
                            </div>
                            <div data-v-0cbfd3bc={""} className={"config-field-group"}>
                                <div data-v-0cbfd3bc={""} className={"config-field-group-header"}>
                                    <ConfigFieldGroupTitle title="Auto Eat" />
                                    <Switch1 isActive={false} dataId="3" />
                                </div>
                                <p data-v-0cbfd3bc={""} className={"config-field-group-desc"}>
                                    Pauses holding to eat from your configured food slot, then resumes.
                                </p>
                                <div data-v-0cbfd3bc={""} className={"config-field-group-body"}>
                                    <ConfigNumberField dataId="1" />
                                    <div data-v-92c44818={""} data-v-0cbfd3bc={""} className={"config-field"}>
                                        <div data-v-92c44818={""} className={"config-field-header"}>
                                            <span data-v-92c44818={""} className={"config-field-label"}>
                                                Food slot
                                            </span>
                                            <p data-v-92c44818={""} className={"config-field-desc"}>
                                                Slot used when the automation needs to eat food.
                                            </p>
                                        </div>
                                        <div data-v-92c44818={""} className={"n-select"} style={{width:"100%"}}>
                                            <div className={"n-base-selection n-base-selection--selected"} style={{"--n-bezier":"cubic-bezier(.4,0,.2,1)", "--n-border":"1px solid #0000", "--n-border-active":"1px solid #8a63d2", "--n-border-focus":"1px solid #9b75db", "--n-border-hover":"1px solid #9b75db", "--n-border-radius":"8px", "--n-box-shadow-active":"0 0 8px 0 rgba(138,99,210,0.4)", "--n-box-shadow-focus":"0 0 8px 0 rgba(138,99,210,0.4)", "--n-box-shadow-hover":"none", "--n-caret-color":"#8a63d2", "--n-color":"rgba(255,255,255,0.1)", "--n-color-active":"rgba(138,99,210,0.1)", "--n-color-disabled":"rgba(255,255,255,0.06)", "--n-font-size":"15px", "--n-height":"40px", "--n-padding-single-top":"0", "--n-padding-multiple-top":"3px", "--n-padding-single-right":"26px", "--n-padding-multiple-right":"26px", "--n-padding-single-left":"12px", "--n-padding-multiple-left":"12px", "--n-padding-single-bottom":"0", "--n-padding-multiple-bottom":"0", "--n-placeholder-color":"rgba(255,255,255,0.38)", "--n-placeholder-color-disabled":"rgba(255,255,255,0.28)", "--n-text-color":"rgba(255,255,255,0.85)", "--n-text-color-disabled":"rgba(255,255,255,0.38)", "--n-arrow-color":"rgba(255,255,255,0.38)", "--n-arrow-color-disabled":"rgba(255,255,255,0.28)", "--n-loading-color":"#8a63d2", "--n-color-active-warning":"rgba(242,201,125,0.1)", "--n-box-shadow-focus-warning":"0 0 8px 0 rgba(242,201,125,0.4)", "--n-box-shadow-active-warning":"0 0 8px 0 rgba(242,201,125,0.4)", "--n-box-shadow-hover-warning":"none", "--n-border-warning":"1px solid #f2c97d", "--n-border-focus-warning":"1px solid #f5d599", "--n-border-hover-warning":"1px solid #f5d599", "--n-border-active-warning":"1px solid #f2c97d", "--n-color-active-error":"rgba(232,128,128,0.1)", "--n-box-shadow-focus-error":"0 0 8px 0 rgba(232,128,128,0.4)", "--n-box-shadow-active-error":"0 0 8px 0 rgba(232,128,128,0.4)", "--n-box-shadow-hover-error":"none", "--n-border-error":"1px solid #e88080", "--n-border-focus-error":"1px solid #e98b8b", "--n-border-hover-error":"1px solid #e98b8b", "--n-border-active-error":"1px solid #e88080", "--n-clear-size":"16px", "--n-clear-color":"rgba(255,255,255,0.38)", "--n-clear-color-hover":"rgba(255,255,255,0.48)", "--n-clear-color-pressed":"rgba(255,255,255,0.3)", "--n-arrow-size":"16px", "--n-font-weight":"400"}}>
                                                <div className={"n-base-selection-label"} tabIndex={"0"}>
                                                    <div className={"n-base-selection-input"} title={"Offhand"}>
                                                        <div className={"n-base-selection-input__content"}>
                                                            Offhand
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
                                </div>
                            </div>
                            <div data-v-0cbfd3bc={""} className={"config-field-group"}>
                                <div data-v-0cbfd3bc={""} className={"config-field-group-header"}>
                                    <ConfigFieldGroupTitle title="Automatically Replenish Axe" />
                                    <Switch1 isActive={false} dataId="3" />
                                </div>
                                <p data-v-0cbfd3bc={""} className={"config-field-group-desc"}>
                                    Equips a spare axe or buys one from /ah when your held axe breaks.
                                </p>
                                <div data-v-0cbfd3bc={""} className={"config-field-group-body"}>
                                    <PurchasePriceFields />
                                    <DurationFields />
                                    <div data-v-92c44818={""} data-v-0cbfd3bc={""} className={"config-field"}>
                                        <div data-v-92c44818={""} className={"config-field-header"}>
                                            <span data-v-92c44818={""} className={"config-field-label"}>
                                                Auction Search Command
                                            </span>
                                            <p data-v-92c44818={""} className={"config-field-desc"}>
                                                Command used to open matching axe listings in auction house.
                                            </p>
                                        </div>
                                        <div data-v-92c44818={""} className={"n-input n-input--resizable n-input--stateful"} style={{"--n-bezier":"cubic-bezier(.4,0,.2,1)", "--n-count-text-color":"rgba(255,255,255,0.6)", "--n-count-text-color-disabled":"rgba(255,255,255,0.38)", "--n-color":"rgba(255,255,255,0.1)", "--n-font-size":"15px", "--n-font-weight":"400", "--n-border-radius":"8px", "--n-height":"40px", "--n-padding-left":"14px", "--n-padding-right":"14px", "--n-text-color":"rgba(255,255,255,0.85)", "--n-caret-color":"#8a63d2", "--n-text-decoration-color":"rgba(255,255,255,0.85)", "--n-border":"1px solid #0000", "--n-border-disabled":"1px solid #0000", "--n-border-hover":"1px solid #9b75db", "--n-border-focus":"1px solid #9b75db", "--n-placeholder-color":"rgba(255,255,255,0.38)", "--n-placeholder-color-disabled":"rgba(255,255,255,0.28)", "--n-icon-size":"16px", "--n-line-height-textarea":"1.6", "--n-color-disabled":"rgba(255,255,255,0.06)", "--n-color-focus":"rgba(138,99,210,0.1)", "--n-text-color-disabled":"rgba(255,255,255,0.38)", "--n-box-shadow-focus":"0 0 8px 0 rgba(138,99,210,0.3)", "--n-loading-color":"#8a63d2", "--n-caret-color-warning":"#f2c97d", "--n-color-focus-warning":"rgba(242,201,125,0.1)", "--n-box-shadow-focus-warning":"0 0 8px 0 rgba(242,201,125,0.3)", "--n-border-warning":"1px solid #f2c97d", "--n-border-focus-warning":"1px solid #f5d599", "--n-border-hover-warning":"1px solid #f5d599", "--n-loading-color-warning":"#f2c97d", "--n-caret-color-error":"#e88080", "--n-color-focus-error":"rgba(232,128,128,0.1)", "--n-box-shadow-focus-error":"0 0 8px 0 rgba(232,128,128,0.3)", "--n-border-error":"1px solid #e88080", "--n-border-focus-error":"1px solid #e98b8b", "--n-border-hover-error":"1px solid #e98b8b", "--n-loading-color-error":"#e88080", "--n-clear-color":"rgba(255,255,255,0.38)", "--n-clear-size":"16px", "--n-clear-color-hover":"rgba(255,255,255,0.48)", "--n-clear-color-pressed":"rgba(255,255,255,0.3)", "--n-icon-color":"rgba(255,255,255,0.38)", "--n-icon-color-hover":"rgba(255,255,255,0.475)", "--n-icon-color-pressed":"rgba(255,255,255,0.30400000000000005)", "--n-icon-color-disabled":"rgba(255,255,255,0.28)", "--n-suffix-text-color":"rgba(255,255,255,0.85)"}}>
                                            <div className={"n-input-wrapper"}>
                                                <div className={"n-input__input"}>
                                                    <TextInput dataId="20" />
                                                </div>
                                            </div>
                                            <div className={"n-input__border"}>
                                            </div>
                                            <div className={"n-input__state-border"}>
                                            </div>
                                        </div>
                                    </div>
                                    <ConfigNumberField dataId="2" />
                                    <div data-v-92c44818={""} data-v-0cbfd3bc={""} className={"config-field"}>
                                        <div data-v-92c44818={""} className={"config-toggle-row"}>
                                            <Switch1 isActive={false} dataId="4" />
                                            <div data-v-92c44818={""} className={"config-toggle-copy"}>
                                                <div data-v-92c44818={""} className={"config-field-header"}>
                                                    <span data-v-92c44818={""} className={"config-field-label"}>
                                                        Sort Highest To Lowest
                                                    </span>
                                                    <p data-v-92c44818={""} className={"config-field-desc"}>
                                                        Click the AH hopper twice to sort by highest price before buying.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                });
    }
}


export default ConfigForm
