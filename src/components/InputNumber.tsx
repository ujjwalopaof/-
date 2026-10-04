import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import TextInput from './TextInput.tsx'
import IconButton from './IconButton.tsx'
import Icon from './Icon.tsx'


        type InputNumberData = {
            scope: "92c44818" | "aa7df84d";
            className: string;
            outerStyle?: React.CSSProperties;
            textInputDataId: string;
            firstIconDataId: string;
            firstIconDisabled: boolean;
            secondIconDataId: string;
            secondIconDisabled: boolean;
        };
    
// Component

        function InputNumber({ dataId }: { dataId: string }) {
            const {
                scope,
                className,
                outerStyle,
                textInputDataId,
                firstIconDataId,
                firstIconDisabled,
                secondIconDataId,
                secondIconDisabled
            }: InputNumberData = getInputNumberData(dataId);

            const content = (
                <div
                    className={"n-input n-input--resizable n-input--stateful"}
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
                        "--n-padding-right": "8px",
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
                    } as React.CSSProperties}
                >
                    <div className={"n-input-wrapper"}>
                        <div className={"n-input__input"}>
                            <TextInput dataId={textInputDataId} />
                        </div>
                        <div className={"n-input__suffix"}>
                            <IconButton
                                dataId={firstIconDataId}
                                disabled={firstIconDisabled}
                            />
                            <IconButton
                                dataId={secondIconDataId}
                                disabled={secondIconDisabled}
                            />
                        </div>
                    </div>
                    <div className={"n-input__border"}>
                    </div>
                    <div className={"n-input__state-border"}>
                    </div>
                </div>
            );

            if (scope === "92c44818") {
                return (
                    <div
                        data-v-92c44818={""}
                        className={className}
                        style={outerStyle}
                    >
                        {content}
                    </div>
                );
            }

            return (
                <div
                    data-v-aa7df84d={""}
                    className={className}
                    style={outerStyle}
                >
                    {content}
                </div>
            );
        }
    

function getInputNumberData(id): InputNumberData  {
    switch (String(id)) {
    case "0":
        return ({
                  "scope": "92c44818",
                  "className": "n-input-number",
                  "outerStyle": { "width": "100%" },
                  "textInputDataId": "23",
                  "firstIconDataId": "0",
                  "firstIconDisabled": false,
                  "secondIconDataId": "2",
                  "secondIconDisabled": false
                });
    case "1":
        return ({
                  "scope": "92c44818",
                  "className": "n-input-number",
                  "outerStyle": { "width": "100%" },
                  "textInputDataId": "24",
                  "firstIconDataId": "4",
                  "firstIconDisabled": true,
                  "secondIconDataId": "2",
                  "secondIconDisabled": false
                });
    case "2":
        return ({
                    "scope": "92c44818",
                    "className": "n-input-number",
                    "outerStyle": { "width": "100%" },
                    "textInputDataId": "25",
                    "firstIconDataId": "0",
                    "firstIconDisabled": false,
                    "secondIconDataId": "2",
                    "secondIconDisabled": false
                });
    case "3":
        return ({
                  "scope": "92c44818",
                  "className": "n-input-number",
                  "outerStyle": { "width": "100%" },
                  "textInputDataId": "17",
                  "firstIconDataId": "0",
                  "firstIconDisabled": false,
                  "secondIconDataId": "2",
                  "secondIconDisabled": false
                });
    case "4":
        return ({
                    "scope": "92c44818",
                    "className": "n-input-number",
                    "outerStyle": { "width": "100%" },
                    "textInputDataId": "26",
                    "firstIconDataId": "0",
                    "firstIconDisabled": false,
                    "secondIconDataId": "2",
                    "secondIconDisabled": false
                });
    case "5":
        return ({
                    "scope": "92c44818",
                    "className": "n-input-number",
                    "outerStyle": {"width": "100%"},
                    "textInputDataId": "27",
                    "firstIconDataId": "0",
                    "firstIconDisabled": false,
                    "secondIconDataId": "2",
                    "secondIconDisabled": false
                });
    case "6":
        return ({
                  "scope": "92c44818",
                  "className": "n-input-number",
                  "outerStyle": { "width": "100%" },
                  "textInputDataId": "28",
                  "firstIconDataId": "0",
                  "firstIconDisabled": false,
                  "secondIconDataId": "2",
                  "secondIconDisabled": false
                });
    case "7":
        return ({
                  "scope": "92c44818",
                  "className": "n-input-number",
                  "outerStyle": { "width": "100%" },
                  "textInputDataId": "14",
                  "firstIconDataId": "0",
                  "firstIconDisabled": false,
                  "secondIconDataId": "2",
                  "secondIconDisabled": false
                });
    case "8":
        return ({
                    "scope": "aa7df84d",
                    "className": "n-input-number cts-port",
                    "outerStyle": undefined,
                    "textInputDataId": "3",
                    "firstIconDataId": "0",
                    "firstIconDisabled": false,
                    "secondIconDataId": "2",
                    "secondIconDisabled": false
                });
    case "9":
        return ({
                    "scope": "aa7df84d",
                    "className": "n-input-number auto-reconnect-delay",
                    "outerStyle": {"flex":"1 1 0%"},
                    "textInputDataId": "5",
                    "firstIconDataId": "0",
                    "firstIconDisabled": false,
                    "secondIconDataId": "2",
                    "secondIconDisabled": false
                });
    default:
        return ({
                  "scope": "92c44818",
                  "className": "n-input-number",
                  "outerStyle": { "width": "100%" },
                  "textInputDataId": "23",
                  "firstIconDataId": "0",
                  "firstIconDisabled": false,
                  "secondIconDataId": "2",
                  "secondIconDisabled": false
                });
    }
}


export default InputNumber
