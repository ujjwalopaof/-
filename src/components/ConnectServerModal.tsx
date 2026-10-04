import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import SuffixArrow from './SuffixArrow.tsx'
import TextInput from './TextInput.tsx'
import ConnectionButton from './ConnectionButton.tsx'
import InputBorder from './InputBorder.tsx'
import FocusSentinel from './FocusSentinel.tsx'
import DefaultButton from './DefaultButton.tsx'
import ServerPickButton from './ServerPickButton.tsx'
import SelectionPlaceholder from './SelectionPlaceholder.tsx'
import InputGroupLabel from './InputGroupLabel.tsx'
import DefaultButton1 from './DefaultButton1.tsx'
import SelectionLabel from './SelectionLabel.tsx'
import InputNumber from './InputNumber.tsx'
import SelectionTags from './SelectionTags.tsx'


        type ConnectServerModalData = {
            showMask: boolean;
            hidden: boolean;
            hostFocused: boolean;
        }
    
// Component

        function ConnectServerModal({ dataId }: { dataId: string }) {
            const { showMask, hidden, hostFocused }: ConnectServerModalData =
                getConnectServerModalData(dataId)

            return (
                <div role={"none"} className={"n-scrollbar-content n-modal-scroll-content"}>
                    {showMask ? (
                        <div
                            className={"n-modal-mask"}
                            data-navigate-routes={JSON.stringify(["/dashboard?step=62"])}
                        >
                        </div>
                    ) : null}
                    <FocusSentinel tabIndex="0" />
                    <ModalCard hidden={hidden} hostFocused={hostFocused} />
                    <FocusSentinel tabIndex="0" />
                </div>
            )
        }
    

// Subcomponents

        function FieldLabel({ children }: { children: React.ReactNode }) {
            return (
                <span
                    data-v-aa7df84d={""}
                    className={"n-text cts-field-label"}
                    style={{
                        "--n-bezier":"cubic-bezier(.4,0,.2,1)",
                        "--n-text-color":"rgba(255,255,255,0.6)",
                        "--n-font-weight-strong":"500",
                        "--n-font-famliy-mono":"v-mono,SFMono-Regular,Menlo,Consolas,Courier,monospace",
                        "--n-code-border-radius":"2px",
                        "--n-code-text-color":"rgba(255,255,255,0.85)",
                        "--n-code-color":"rgba(255,255,255,0.12)",
                        "--n-code-border":"1px solid #0000"
                    }}
                >
                    {children}
                </span>
            )
        }

        function SelectFrame({ children, className = "n-select" }: {
            children: React.ReactNode;
            className?: string;
        }) {
            return (
                <div data-v-aa7df84d={""} className={className}>
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
                        {children}
                    </div>
                </div>
            )
        }

        function SelectSuffix() {
            return (
                <div className={"n-base-loading n-base-suffix"} role={"img"}>
                    <div className={"n-base-loading__placeholder"}>
                        <div className={"n-base-clear"}>
                            <div className={"n-base-clear__placeholder"}>
                                <SuffixArrow />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        function VersionSelect() {
            return (
                <SelectFrame>
                    <div className={"n-base-selection-label"} tabIndex={"0"}>
                        <div className={"n-base-selection-input"} title={"Latest (1.21.11)"}>
                            <div className={"n-base-selection-input__content"}>
                                <span style={{display:"flex", alignItems:"center", gap:"6px"}}>
                                    <span>
                                        Latest (1.21.11)
                                    </span>
                                    <span
                                        className={"cts-micro-tag cts-micro-tag--green"}
                                        style={{
                                            display:"inline-flex",
                                            alignItems:"center",
                                            lineHeight:"1",
                                            whiteSpace:"nowrap",
                                            fontSize:"10px",
                                            padding:"1px 5px",
                                            borderRadius:"3px",
                                            fontWeight:"600",
                                            flexShrink:"0",
                                            background:"rgba(99,226,183,0.15)",
                                            color:"rgb(99,226,183)"
                                        }}
                                    >
                                        Recommended
                                    </span>
                                </span>
                            </div>
                        </div>
                        <SelectSuffix />
                    </div>
                    <div className={"n-base-selection__border"}>
                    </div>
                    <div className={"n-base-selection__state-border"}>
                    </div>
                </SelectFrame>
            )
        }

        function AccountSelect() {
            return (
                <div data-v-aa7df84d={""} className={"n-select"}>
                    <div
                        className={"n-base-selection n-base-selection--multiple"}
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
                        <SelectionTags />
                        <SelectionPlaceholder text="Choose one or more accounts" />
                        <InputBorder className="n-base-selection__border" />
                        <InputBorder className="n-base-selection__state-border" />
                    </div>
                </div>
            )
        }

        function LabelSelect({ dataId, wrapped }: {
            dataId: string;
            wrapped?: boolean;
        }) {
            const select = (
                <SelectFrame>
                    <SelectionLabel dataId={dataId} focusable={true} />
                    <InputBorder className="n-base-selection__border" />
                    <InputBorder className="n-base-selection__state-border" />
                </SelectFrame>
            )

            return wrapped ? (
                <div data-v-aa7df84d={""} className={"cts-proxy-wrap"}>
                    {select}
                </div>
            ) : select
        }

        function ReconnectModeSelect() {
            return (
                <SelectFrame className="n-select auto-reconnect-mode">
                    <div className={"n-base-selection-label"} tabIndex={"0"}>
                        <div className={"n-base-selection-input"} title={"Enabled"}>
                            <div className={"n-base-selection-input__content"}>
                                <span style={{color:"rgb(99,226,183)"}}>
                                    Enabled
                                </span>
                            </div>
                        </div>
                        <SelectSuffix />
                    </div>
                    <div className={"n-base-selection__border"}>
                    </div>
                    <div className={"n-base-selection__state-border"}>
                    </div>
                </SelectFrame>
            )
        }

        function ModalCard({ hidden, hostFocused }: {
            hidden: boolean;
            hostFocused: boolean;
        }) {
            return (
                <div
                    data-v-aa7df84d={""}
                    className={"n-modal cts-card"}
                    style={hidden
                        ? {transformOrigin:"-714px 17px", display:"none"}
                        : {transformOrigin:"-714px 17px"}}
                >
                    <div data-v-aa7df84d={""} className={"cts-head"}>
                        <span data-v-aa7df84d={""} className={"cts-head-title"}>
                            Connect Account to Server
                        </span>
                    </div>
                    <div data-v-aa7df84d={""} className={"cts-body"}>
                        <FieldLabel>Server</FieldLabel>
                        <div data-v-aa7df84d={""} className={"cts-server-group-wrap"}>
                            <div
                                data-v-aa7df84d={""}
                                className={"n-input-group cts-server-group cts-server-group--has-picker"}
                            >
                                <div
                                    data-v-aa7df84d={""}
                                    className={
                                        hostFocused
                                            ? "n-input n-input--resizable n-input--focus n-input--stateful cts-host"
                                            : "n-input n-input--resizable n-input--stateful cts-host"
                                    }
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
                                            <TextInput dataId="0" />
                                        </div>
                                    </div>
                                    <div className={"n-input__border"}>
                                    </div>
                                    <div className={"n-input__state-border"}>
                                    </div>
                                </div>
                                <ServerPickButton />
                            </div>
                        </div>

                        <div data-v-aa7df84d={""} className={"cts-version-row"}>
                            <div data-v-aa7df84d={""} className={"cts-version-field"}>
                                <FieldLabel>Version</FieldLabel>
                                <VersionSelect />
                            </div>
                            <div data-v-aa7df84d={""} className={"cts-port-field"}>
                                <FieldLabel>Port</FieldLabel>
                                <InputNumber dataId="8" />
                            </div>
                        </div>

                        <FieldLabel>Account</FieldLabel>
                        <AccountSelect />

                        <FieldLabel>Proxy</FieldLabel>
                        <LabelSelect dataId="4" wrapped={true} />

                        <div data-v-aa7df84d={""} className={"cts-backend-label-row"}>
                            <FieldLabel>Backend</FieldLabel>
                        </div>
                        <LabelSelect dataId="2" />

                        <FieldLabel>Auto-Reconnect</FieldLabel>
                        <div data-v-aa7df84d={""} className={"auto-reconnect-row"}>
                            <div data-v-aa7df84d={""} className={"n-input-group"}>
                                <InputNumber dataId="9" />
                                <InputGroupLabel />
                            </div>
                            <ReconnectModeSelect />
                        </div>
                    </div>

                    <div data-v-aa7df84d={""} className={"cts-foot"}>
                        <DefaultButton1 label="Cancel" />
                        <ConnectionButton dataId="5" />
                    </div>
                </div>
            )
        }
    


        function getConnectServerModalData(id: string): ConnectServerModalData {
            const normalizedId = String(id)

            if (normalizedId === "0") {
                return {
                    showMask: true,
                    hidden: false,
                    hostFocused: true
                }
            }

            if (normalizedId === "1") {
                return {
                    showMask: false,
                    hidden: true,
                    hostFocused: false
                }
            }

            return {
                showMask: false,
                hidden: true,
                hostFocused: false
            }
        }
    

export default ConnectServerModal
