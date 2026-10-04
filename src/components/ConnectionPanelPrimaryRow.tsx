import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import IconButton1 from './IconButton1.tsx'
import IconButton from './IconButton.tsx'
import ConnectionButton from './ConnectionButton.tsx'
import LoadingWrapper from './LoadingWrapper.tsx'
import Icon from './Icon.tsx'
import ConnectionPanel from './ConnectionPanel.tsx'


        type ConnectionPanelPrimaryRowData =
            | { kind: "connection"; connectionDataId: string }
            | { kind: "connecting" }
            | { kind: "routeConnection" };
    
// Component

        function ConnectionPanelPrimaryRow({
            dataId
        }: {
            dataId: string;
        }) {
            const location = useLocation()
            const data: ConnectionPanelPrimaryRowData = getConnectionPanelPrimaryRowData(dataId)

            return (
                <div className={"connection-panel-primary-row"}>
                    {data.kind === "connection" ? (
                        <ConnectionButton dataId={data.connectionDataId} />
                    ) : data.kind === "connecting" ? (
                        <ConnectionLoadingButton />
                    ) : (
                        <RouteConnectionButton locationKey={location.pathname + location.search + location.hash} />
                    )}
                    <IconButton1 dataId="1" />
                </div>
            )
        }
    

// Subcomponents

        function RouteConnectionButton({
            locationKey
        }: {
            locationKey: string;
        }) {
            switch (locationKey) {
                case "/dashboard?step=9":
                case "/dashboard?step=10":
                case "/dashboard?step=11":
                case "/dashboard?step=12":
                case "/dashboard?step=13":
                case "/dashboard?step=14":
                case "/dashboard?step=15":
                case "/dashboard?step=16":
                case "/dashboard?step=17":
                case "/dashboard?step=18":
                case "/dashboard?step=19":
                case "/dashboard?step=20":
                case "/dashboard?step=21":
                case "/dashboard?step=22":
                case "/dashboard?step=23":
                case "/dashboard?step=24":
                case "/dashboard?step=25":
                case "/dashboard?step=26":
                case "/dashboard?step=27":
                case "/dashboard?step=28":
                case "/dashboard?step=29":
                case "/dashboard?step=30":
                case "/dashboard?step=31":
                case "/dashboard?step=32":
                case "/dashboard?step=33":
                case "/dashboard?step=34":
                case "/dashboard?step=35":
                case "/dashboard?step=36":
                case "/dashboard?step=37":
                case "/dashboard?step=38":
                case "/dashboard?step=39":
                case "/dashboard?step=40":
                case "/dashboard?step=41":
                case "/dashboard?step=42":
                case "/dashboard?step=43":
                case "/dashboard?step=44":
                case "/dashboard?step=45":
                case "/dashboard?step=46":
                case "/dashboard?step=47":
                    return <ConnectionButton dataId="1" />
                case "/dashboard?step=48":
                    return <ConnectionButton dataId="2" />
                default:
                    return null
            }
        }

        function ConnectionLoadingButton() {
            return (
                <button
                    className={"n-button n-button--warning-type n-button--medium-type connection-panel-connect-btn"}
                    tabIndex={"0"}
                    type={"button"}
                    style={{
                        "--n-bezier": "cubic-bezier(.4,0,.2,1)",
                        "--n-bezier-ease-out": "cubic-bezier(0,0,.2,1)",
                        "--n-ripple-duration": ".6s",
                        "--n-opacity-disabled": "0.38",
                        "--n-wave-opacity": "0.8",
                        "--n-font-weight": "400",
                        "--n-color": "#f2c97d",
                        "--n-color-hover": "#f5d599",
                        "--n-color-pressed": "#e6c260",
                        "--n-color-focus": "#f5d599",
                        "--n-color-disabled": "#f2c97d",
                        "--n-ripple-color": "#f2c97d",
                        "--n-text-color": "#000000",
                        "--n-text-color-hover": "#000000",
                        "--n-text-color-pressed": "#000000",
                        "--n-text-color-focus": "#000000",
                        "--n-text-color-disabled": "#000000",
                        "--n-border": "1px solid #f2c97d",
                        "--n-border-hover": "1px solid #f5d599",
                        "--n-border-pressed": "1px solid #e6c260",
                        "--n-border-focus": "1px solid #f5d599",
                        "--n-border-disabled": "1px solid #f2c97d",
                        "--n-width": "initial",
                        "--n-height": "34px",
                        "--n-font-size": "14px",
                        "--n-padding": "0 14px",
                        "--n-icon-size": "18px",
                        "--n-icon-margin": "6px",
                        "--n-border-radius": "8px"
                    } as React.CSSProperties}
                >
                    <span className={"n-button__icon"}>
                        <div className={"n-icon-slot"} role={"none"}>
                            <div className={"n-spin-body"}>
                                <div
                                    className={"n-base-loading n-spin"}
                                    role={"img"}
                                    style={{
                                        "--n-bezier": "cubic-bezier(.4,0,.2,1)",
                                        "--n-opacity-spinning": "0.38",
                                        "--n-size": "12px",
                                        "--n-color": "#8a63d2",
                                        "--n-text-color": "#8a63d2"
                                    } as React.CSSProperties}
                                >
                                    <LoadingWrapper />
                                </div>
                            </div>
                        </div>
                    </span>
                    <span className={"n-button__content"}>
                        {` Connecting (cancel)`}
                    </span>
                    <div className={"n-base-wave"}>
                    </div>
                    <div className={"n-button__border"}>
                    </div>
                    <div className={"n-button__state-border"}>
                    </div>
                </button>
            )
        }
    


        function getConnectionPanelPrimaryRowData(id: string): ConnectionPanelPrimaryRowData {
            const stringId = String(id)

            switch (stringId) {
                case "0":
                    return { kind: "connection", connectionDataId: "0" }
                case "1":
                    return { kind: "connecting" }
                case "2":
                    return { kind: "routeConnection" }
                case "3":
                    return { kind: "connection", connectionDataId: "4" }
                default:
                    return { kind: "connection", connectionDataId: "0" }
            }
        }
    

export default ConnectionPanelPrimaryRow
