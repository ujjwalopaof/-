import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import SuffixArrow from './SuffixArrow.tsx'
import ConnectionPanelHeader from './ConnectionPanelHeader.tsx'
import TimingDisplay from './TimingDisplay.tsx'
import CancelReconnectButton from './CancelReconnectButton.tsx'
import ConnectionHostRow from './ConnectionHostRow.tsx'
import SelectionLabel from './SelectionLabel.tsx'
import ConnectionPanelPrimaryRow from './ConnectionPanelPrimaryRow.tsx'
import AutoReconnectRow from './AutoReconnectRow.tsx'


    
// Component

        function ConnectionPanel({
            disabled = false,
            showCancel = false
        }: {
            disabled?: boolean;
            showCancel?: boolean;
        }) {
            const location = useLocation()
            const route = location.pathname + location.search + location.hash

            return (
                <div data-v-f6379ed9={""} style={{display:"flex", gridColumn:"span 4/span 4"}}>
                    <div
                        data-v-f6379ed9={""}
                        className={"n-card n-card--bordered phantom-glass-dark connection-panel-card"}
                        style={getConnectionCardStyle()}
                    >
                        <div className={"n-card__content"} role={"none"}>
                            <div className={"connection-panel-inner"}>
                                <div className={"connection-panel-header"}>
                                    <ConnectionPanelHeader />
                                    <ConnectionTiming route={route} />
                                </div>
                                <ConnectionPanelFields route={route} disabled={disabled} />
                                <div className={"connection-panel-actions"}>
                                    <ConnectionActions route={route} />
                                    {showCancel ? <CancelReconnectButton /> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    

// Subcomponents

        function getDashboardStep(route: string): number | null {
            if (route === "/dashboard") return 1
            const match = /^\/dashboard\?step=(\d+)$/.exec(route)
            if (!match) return null
            const step = Number(match[1])
            return step >= 2 && step <= 62 ? step : null
        }

        function getConnectionCardStyle() {
            return {
                "--n-bezier":"cubic-bezier(.4,0,.2,1)",
                "--n-border-radius":"8px",
                "--n-color":"#080808",
                "--n-color-modal":"#080808",
                "--n-color-popover":"rgba(0,0,0,0.94)",
                "--n-color-embedded":"#080808",
                "--n-color-embedded-modal":"#080808",
                "--n-color-embedded-popover":"rgba(0,0,0,0.94)",
                "--n-color-target":"#8a63d2",
                "--n-text-color":"rgba(255,255,255,0.85)",
                "--n-line-height":"1.6",
                "--n-action-color":"rgba(255,255,255,0.06)",
                "--n-title-text-color":"#ffffff",
                "--n-title-font-weight":"500",
                "--n-close-icon-color":"rgba(255,255,255,0.52)",
                "--n-close-icon-color-hover":"rgba(255,255,255,0.52)",
                "--n-close-icon-color-pressed":"rgba(255,255,255,0.52)",
                "--n-close-color-hover":"rgba(255,255,255,.12)",
                "--n-close-color-pressed":"rgba(255,255,255,.08)",
                "--n-border-color":"#222222",
                "--n-box-shadow":"0 1px 2px -2px rgba(0,0,0,.24),0 3px 6px 0 rgba(0,0,0,.18),0 5px 12px 4px rgba(0,0,0,.12)",
                "--n-padding-top":"12px",
                "--n-padding-bottom":"12px",
                "--n-padding-left":"16px",
                "--n-font-size":"14px",
                "--n-title-font-size":"16px",
                "--n-close-size":"22px",
                "--n-close-icon-size":"18px",
                "--n-close-border-radius":"8px",
                flex:"1 1 0%",
                display:"flex"
            } as React.CSSProperties
        }

        function getLabelStyle() {
            return {
                "--n-bezier":"cubic-bezier(.4,0,.2,1)",
                "--n-text-color":"rgba(255,255,255,0.6)",
                "--n-font-weight-strong":"500",
                "--n-font-famliy-mono":"v-mono,SFMono-Regular,Menlo,Consolas,Courier,monospace",
                "--n-code-border-radius":"2px",
                "--n-code-text-color":"rgba(255,255,255,0.85)",
                "--n-code-color":"rgba(255,255,255,0.12)",
                "--n-code-border":"1px solid #0000"
            } as React.CSSProperties
        }

        function getSelectionStyle() {
            return {
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
                "--n-font-size":"14px",
                "--n-height":"34px",
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
            } as React.CSSProperties
        }

        function ConnectionLabel({ children }: { children: React.ReactNode }) {
            return (
                <span className={"n-text connection-panel-label"} style={getLabelStyle()}>
                    {children}
                </span>
            )
        }

        function ConnectionTiming({ route }: { route: string }) {
            const step = getDashboardStep(route)
            if (step === null) return null
            if (step <= 51) return <TimingDisplay />
            if (step <= 59) return <TimingDisplay duration="392 ms" />
            return <TimingDisplay duration="249 ms" />
        }

        function ConnectionServer({ route }: { route: string }) {
            const step = getDashboardStep(route)
            if (step === null) return null
            if (step === 8 || (step >= 49 && step <= 51)) {
                return <ConnectionHostRow disabled={true} showHostEye={false} />
            }
            if (step >= 52) {
                return <ConnectionHostRow disabled={true} showHostEye={true} />
            }
            return <ConnectionHostRow disabled={false} showHostEye={false} />
        }

        function VersionSelection({ disabled }: { disabled: boolean }) {
            return (
                <div className={"n-select"}>
                    <div
                        className={
                            disabled
                                ? "n-base-selection n-base-selection--selected n-base-selection--disabled"
                                : "n-base-selection n-base-selection--selected"
                        }
                        style={getSelectionStyle()}
                    >
                        <div
                            className={"n-base-selection-label"}
                            {...(disabled ? {} : { tabIndex: "0" })}
                        >
                            <div className={"n-base-selection-input"} title={"Latest (1.21.11)"}>
                                <div className={"n-base-selection-input__content"}>
                                    <span style={{display:"flex", alignItems:"center", gap:"6px", flexWrap:"wrap"}}>
                                        <span>
                                            Latest (1.21.11)
                                        </span>
                                        <span style={{fontSize:"10px", padding:"1px 5px", borderRadius:"3px", fontWeight:"600", flexShrink:"0", background:"rgba(99,226,183,0.15)", color:"rgb(99,226,183)"}}>
                                            Recommended
                                        </span>
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
            )
        }

        function RouteSelectionLabel({
            route,
            firstDataId,
            secondDataId
        }: {
            route: string;
            firstDataId: string;
            secondDataId: string;
        }) {
            const step = getDashboardStep(route)
            if (step === null) return null
            if (step === 8 || step >= 49) {
                return <SelectionLabel dataId={secondDataId} />
            }
            return <SelectionLabel dataId={firstDataId} focusable={true} />
        }

        function DataSelection({
            route,
            disabled,
            firstDataId,
            secondDataId,
            proxy = false
        }: {
            route: string;
            disabled: boolean;
            firstDataId: string;
            secondDataId: string;
            proxy?: boolean;
        }) {
            const selection = (
                <div className={"n-select"}>
                    <div
                        className={
                            disabled
                                ? "n-base-selection n-base-selection--selected n-base-selection--disabled"
                                : "n-base-selection n-base-selection--selected"
                        }
                        style={getSelectionStyle()}
                    >
                        <RouteSelectionLabel
                            route={route}
                            firstDataId={firstDataId}
                            secondDataId={secondDataId}
                        />
                        <div className={"n-base-selection__border"}>
                        </div>
                        <div className={"n-base-selection__state-border"}>
                        </div>
                    </div>
                </div>
            )

            return proxy
                ? <div className={"connection-panel-proxy-wrap"}>{selection}</div>
                : selection
        }

        function ConnectionActions({ route }: { route: string }) {
            const step = getDashboardStep(route)
            if (step === null) return null
            if (step <= 7) return <ConnectionPanelPrimaryRow dataId="0" />
            if (step === 8 || (step >= 49 && step <= 51)) {
                return <ConnectionPanelPrimaryRow dataId="1" />
            }
            if (step >= 9 && step <= 48) {
                return <ConnectionPanelPrimaryRow dataId="2" />
            }
            return <ConnectionPanelPrimaryRow dataId="3" />
        }

        function ConnectionPanelFields({
            route,
            disabled
        }: {
            route: string;
            disabled: boolean;
        }) {
            return (
                <div className={"connection-panel-fields"}>
                    <ConnectionLabel>Server</ConnectionLabel>
                    <ConnectionServer route={route} />

                    <ConnectionLabel>Version</ConnectionLabel>
                    <VersionSelection disabled={disabled} />

                    <ConnectionLabel>Proxy</ConnectionLabel>
                    <DataSelection
                        route={route}
                        disabled={disabled}
                        firstDataId="0"
                        secondDataId="1"
                        proxy={true}
                    />

                    <ConnectionLabel>Backend Location</ConnectionLabel>
                    <DataSelection
                        route={route}
                        disabled={disabled}
                        firstDataId="2"
                        secondDataId="3"
                    />

                    <ConnectionLabel>Auto-Reconnect</ConnectionLabel>
                    <AutoReconnectRow />
                </div>
            )
        }
    

export default ConnectionPanel
