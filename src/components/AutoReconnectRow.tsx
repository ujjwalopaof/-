import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import SuffixArrow from './SuffixArrow.tsx'
import TextInput from './TextInput.tsx'
import InputSuffix from './InputSuffix.tsx'


// Component
function AutoReconnectRow() {
    return <div className={"auto-reconnect-row"}>
        <div className={"n-input-group"}>
            <div className={"n-input-number auto-reconnect-delay"} style={{flex:"1 1 0%"}}>
                <div className={"n-input n-input--resizable n-input--stateful"} style={{"--n-bezier":"cubic-bezier(.4,0,.2,1)", "--n-count-text-color":"rgba(255,255,255,0.6)", "--n-count-text-color-disabled":"rgba(255,255,255,0.38)", "--n-color":"rgba(255,255,255,0.1)", "--n-font-size":"14px", "--n-font-weight":"400", "--n-border-radius":"8px", "--n-height":"34px", "--n-padding-left":"12px", "--n-padding-right":"8px", "--n-text-color":"rgba(255,255,255,0.85)", "--n-caret-color":"#8a63d2", "--n-text-decoration-color":"rgba(255,255,255,0.85)", "--n-border":"1px solid #0000", "--n-border-disabled":"1px solid #0000", "--n-border-hover":"1px solid #9b75db", "--n-border-focus":"1px solid #9b75db", "--n-placeholder-color":"rgba(255,255,255,0.38)", "--n-placeholder-color-disabled":"rgba(255,255,255,0.28)", "--n-icon-size":"16px", "--n-line-height-textarea":"1.6", "--n-color-disabled":"rgba(255,255,255,0.06)", "--n-color-focus":"rgba(138,99,210,0.1)", "--n-text-color-disabled":"rgba(255,255,255,0.38)", "--n-box-shadow-focus":"0 0 8px 0 rgba(138,99,210,0.3)", "--n-loading-color":"#8a63d2", "--n-caret-color-warning":"#f2c97d", "--n-color-focus-warning":"rgba(242,201,125,0.1)", "--n-box-shadow-focus-warning":"0 0 8px 0 rgba(242,201,125,0.3)", "--n-border-warning":"1px solid #f2c97d", "--n-border-focus-warning":"1px solid #f5d599", "--n-border-hover-warning":"1px solid #f5d599", "--n-loading-color-warning":"#f2c97d", "--n-caret-color-error":"#e88080", "--n-color-focus-error":"rgba(232,128,128,0.1)", "--n-box-shadow-focus-error":"0 0 8px 0 rgba(232,128,128,0.3)", "--n-border-error":"1px solid #e88080", "--n-border-focus-error":"1px solid #e98b8b", "--n-border-hover-error":"1px solid #e98b8b", "--n-loading-color-error":"#e88080", "--n-clear-color":"rgba(255,255,255,0.38)", "--n-clear-size":"16px", "--n-clear-color-hover":"rgba(255,255,255,0.48)", "--n-clear-color-pressed":"rgba(255,255,255,0.3)", "--n-icon-color":"rgba(255,255,255,0.38)", "--n-icon-color-hover":"rgba(255,255,255,0.475)", "--n-icon-color-pressed":"rgba(255,255,255,0.30400000000000005)", "--n-icon-color-disabled":"rgba(255,255,255,0.28)", "--n-suffix-text-color":"rgba(255,255,255,0.85)"}}>
                    <div className={"n-input-wrapper"}>
                        <div className={"n-input__input"}>
                            <TextInput dataId="5" />
                        </div>
                        <InputSuffix />
                    </div>
                    <div className={"n-input__border"}>
                    </div>
                    <div className={"n-input__state-border"}>
                    </div>
                </div>
            </div>
            <div className={"n-input-group-label ms-label"} style={{"--n-bezier":"cubic-bezier(.4,0,.2,1)", "--n-group-label-color":"rgba(255,255,255,0.1)", "--n-group-label-border":"1px solid #0000", "--n-border-radius":"8px", "--n-group-label-text-color":"rgba(255,255,255,0.85)", "--n-font-size":"14px", "--n-line-height":"1.6", "--n-height":"34px"}}>
                s
                <div className={"n-input-group-label__border"}>
                </div>
            </div>
        </div>
        <div className={"n-select auto-reconnect-mode"}>
            <div className={"n-base-selection n-base-selection--selected"} style={{"--n-bezier":"cubic-bezier(.4,0,.2,1)", "--n-border":"1px solid #0000", "--n-border-active":"1px solid #8a63d2", "--n-border-focus":"1px solid #9b75db", "--n-border-hover":"1px solid #9b75db", "--n-border-radius":"8px", "--n-box-shadow-active":"0 0 8px 0 rgba(138,99,210,0.4)", "--n-box-shadow-focus":"0 0 8px 0 rgba(138,99,210,0.4)", "--n-box-shadow-hover":"none", "--n-caret-color":"#8a63d2", "--n-color":"rgba(255,255,255,0.1)", "--n-color-active":"rgba(138,99,210,0.1)", "--n-color-disabled":"rgba(255,255,255,0.06)", "--n-font-size":"14px", "--n-height":"34px", "--n-padding-single-top":"0", "--n-padding-multiple-top":"3px", "--n-padding-single-right":"26px", "--n-padding-multiple-right":"26px", "--n-padding-single-left":"12px", "--n-padding-multiple-left":"12px", "--n-padding-single-bottom":"0", "--n-padding-multiple-bottom":"0", "--n-placeholder-color":"rgba(255,255,255,0.38)", "--n-placeholder-color-disabled":"rgba(255,255,255,0.28)", "--n-text-color":"rgba(255,255,255,0.85)", "--n-text-color-disabled":"rgba(255,255,255,0.38)", "--n-arrow-color":"rgba(255,255,255,0.38)", "--n-arrow-color-disabled":"rgba(255,255,255,0.28)", "--n-loading-color":"#8a63d2", "--n-color-active-warning":"rgba(242,201,125,0.1)", "--n-box-shadow-focus-warning":"0 0 8px 0 rgba(242,201,125,0.4)", "--n-box-shadow-active-warning":"0 0 8px 0 rgba(242,201,125,0.4)", "--n-box-shadow-hover-warning":"none", "--n-border-warning":"1px solid #f2c97d", "--n-border-focus-warning":"1px solid #f5d599", "--n-border-hover-warning":"1px solid #f5d599", "--n-border-active-warning":"1px solid #f2c97d", "--n-color-active-error":"rgba(232,128,128,0.1)", "--n-box-shadow-focus-error":"0 0 8px 0 rgba(232,128,128,0.4)", "--n-box-shadow-active-error":"0 0 8px 0 rgba(232,128,128,0.4)", "--n-box-shadow-hover-error":"none", "--n-border-error":"1px solid #e88080", "--n-border-focus-error":"1px solid #e98b8b", "--n-border-hover-error":"1px solid #e98b8b", "--n-border-active-error":"1px solid #e88080", "--n-clear-size":"16px", "--n-clear-color":"rgba(255,255,255,0.38)", "--n-clear-color-hover":"rgba(255,255,255,0.48)", "--n-clear-color-pressed":"rgba(255,255,255,0.3)", "--n-arrow-size":"16px", "--n-font-weight":"400"}}>
                <div className={"n-base-selection-label"} tabIndex={"0"}>
                    <div className={"n-base-selection-input"} title={"Enabled"}>
                        <div className={"n-base-selection-input__content"}>
                            <span style={{color:"rgb(99,226,183)"}}>
                                Enabled
                            </span>
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
}


export default AutoReconnectRow
