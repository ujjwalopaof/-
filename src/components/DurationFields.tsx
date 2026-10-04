import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import TextInput from './TextInput.tsx'
import InputPlaceholder from './InputPlaceholder.tsx'


// Component

        function DurationFields() {
            return (
                <div data-v-0cbfd3bc={""} className={"config-field-row"}>
                    <DurationField
                        label="Minimum Duration"
                        description="Min Self Destruct remaining (e.g. 23h+). Blank to ignore."
                        dataId="18"
                        placeholder="e.g. 23h+"
                    />
                    <DurationField
                        label="Maximum Duration"
                        description="Max Self Destruct remaining (e.g. 30h). Blank to ignore."
                        dataId="19"
                        placeholder="e.g. 30h"
                    />
                </div>
            )
        }
    

// Subcomponents

        function DurationField({
            label,
            description,
            dataId,
            placeholder
        }: {
            label: string;
            description: string;
            dataId: string;
            placeholder: string;
        }) {
            return (
                <div data-v-92c44818={""} data-v-0cbfd3bc={""} className={"config-field"}>
                    <div data-v-92c44818={""} className={"config-field-header"}>
                        <span data-v-92c44818={""} className={"config-field-label"}>
                            {label}
                        </span>
                        <p data-v-92c44818={""} className={"config-field-desc"}>
                            {description}
                        </p>
                    </div>
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
                                <TextInput dataId={dataId} />
                                <InputPlaceholder text={placeholder} />
                            </div>
                        </div>
                        <div className={"n-input__border"}>
                        </div>
                        <div className={"n-input__state-border"}>
                        </div>
                    </div>
                </div>
            )
        }
    

export default DurationFields
