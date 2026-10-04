import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import TextInput from './TextInput.tsx'
import InputBorder from './InputBorder.tsx'


    
// Component

        function BasicsSection({
            isFocused
        }: {
            isFocused: boolean;
        }) {
            return (
                <section data-v-83bc3aca={""} className={"config-section"}>
                    <div data-v-83bc3aca={""} className={"config-section-header"}>
                        <h3 data-v-83bc3aca={""} className={"config-section-title"}>
                            Basics
                        </h3>
                    </div>
                    <form data-v-83bc3aca={""} className={"n-form config-basics-form"}>
                        <NameFormItem isFocused={isFocused} />
                    </form>
                </section>
            )
        }
    

// Subcomponents

        function NameFormItem({
            isFocused
        }: {
            isFocused: boolean;
        }) {
            return (
                <div
                    data-v-83bc3aca={""}
                    className={"n-form-item n-form-item--large-size n-form-item--top-labelled"}
                    style={{
                        "--n-bezier":"cubic-bezier(.4,0,.2,1)",
                        "--n-line-height":"1.6",
                        "--n-blank-height":"40px",
                        "--n-label-font-size":"14px",
                        "--n-label-text-align":"flex-start",
                        "--n-label-height":"28px",
                        "--n-label-padding":"0 0 6px 2px",
                        "--n-label-font-weight":"400",
                        "--n-asterisk-color":"#e88080",
                        "--n-label-text-color":"#ffffff",
                        "--n-feedback-padding":"4px 0 0 2px",
                        "--n-feedback-font-size":"14px",
                        "--n-feedback-height":"26px",
                        "--n-feedback-text-color":"rgba(255,255,255,0.6)",
                        "--n-feedback-text-color-warning":"#f2c97d",
                        "--n-feedback-text-color-error":"#e88080"
                    }}
                >
                    <label className={"n-form-item-label n-form-item-label--right-mark"}>
                        <span className={"n-form-item-label__text"}>
                            Name
                        </span>
                    </label>
                    <div className={"n-form-item-blank"}>
                        <div
                            data-v-83bc3aca={""}
                            className={`n-input n-input--resizable${isFocused ? " n-input--focus" : ""} n-input--stateful`}
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
                                    <TextInput dataId="13" />
                                </div>
                                <div className={"n-input__suffix"}>
                                    <span className={"n-input-word-count"}>
                                        9 / 64
                                    </span>
                                </div>
                            </div>
                            <InputBorder className="n-input__border" />
                            <InputBorder className="n-input__state-border" />
                        </div>
                    </div>
                    <div className={"n-form-item-feedback-wrapper"}>
                    </div>
                </div>
            )
        }
    

export default BasicsSection
