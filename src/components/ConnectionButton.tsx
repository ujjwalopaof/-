import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


        type ConnectionButtonData = {
            className: string;
            tabIndex: string;
            style: Record<string, string>;
            buttonAttributes: Record<string, string>;
            spanAttributes: Record<string, string>;
            content: string;
            waveClassName: string;
        };
    
// Component

        function ConnectionButton({ dataId }: { dataId: string }) {
            const data: ConnectionButtonData = getConnectionButtonData(dataId);

            return (
                <button
                    {...data.buttonAttributes}
                    className={data.className}
                    tabIndex={data.tabIndex}
                    type={"button"}
                    style={data.style}
                >
                    <span className={"n-button__content"} {...data.spanAttributes}>
                        {data.content}
                    </span>
                    <div className={data.waveClassName}>
                    </div>
                    <div className={"n-button__border"}>
                    </div>
                    <div className={"n-button__state-border"}>
                    </div>
                </button>
            );
        }
    


        function getConnectionButtonData(id: string): ConnectionButtonData {
            const key = String(id);

            const primaryCompactStyle: Record<string, string> = {
                "--n-bezier": "cubic-bezier(.4,0,.2,1)",
                "--n-bezier-ease-out": "cubic-bezier(0,0,.2,1)",
                "--n-ripple-duration": ".6s",
                "--n-opacity-disabled": "0.38",
                "--n-wave-opacity": "0.8",
                "--n-font-weight": "400",
                "--n-color": "#8a63d2",
                "--n-color-hover": "#9b75db",
                "--n-color-pressed": "#7a55c6",
                "--n-color-focus": "#9b75db",
                "--n-color-disabled": "#8a63d2",
                "--n-ripple-color": "#8a63d2",
                "--n-text-color": "#ffffff",
                "--n-text-color-hover": "#000000",
                "--n-text-color-pressed": "#000000",
                "--n-text-color-focus": "#000000",
                "--n-text-color-disabled": "#000000",
                "--n-border": "1px solid transparent",
                "--n-border-hover": "1px solid #9b75db",
                "--n-border-pressed": "1px solid #7a55c6",
                "--n-border-focus": "1px solid #9b75db",
                "--n-border-disabled": "1px solid #8a63d2",
                "--n-width": "initial",
                "--n-height": "34px",
                "--n-font-size": "14px",
                "--n-padding": "0 14px",
                "--n-icon-size": "18px",
                "--n-icon-margin": "6px",
                "--n-border-radius": "8px"
            };

            const primarySpacedStyle: Record<string, string> = {
                ...primaryCompactStyle,
                "--n-bezier": "cubic-bezier(.4, 0, .2, 1)",
                "--n-bezier-ease-out": "cubic-bezier(0, 0, .2, 1)"
            };

            const errorStyle: Record<string, string> = {
                "--n-bezier": "cubic-bezier(.4,0,.2,1)",
                "--n-bezier-ease-out": "cubic-bezier(0,0,.2,1)",
                "--n-ripple-duration": ".6s",
                "--n-opacity-disabled": "0.38",
                "--n-wave-opacity": "0.8",
                "--n-font-weight": "400",
                "--n-color": "#e88080",
                "--n-color-hover": "#e98b8b",
                "--n-color-pressed": "#e57272",
                "--n-color-focus": "#e98b8b",
                "--n-color-disabled": "#e88080",
                "--n-ripple-color": "#e88080",
                "--n-text-color": "#000000",
                "--n-text-color-hover": "#000000",
                "--n-text-color-pressed": "#000000",
                "--n-text-color-focus": "#000000",
                "--n-text-color-disabled": "#000000",
                "--n-border": "1px solid #e88080",
                "--n-border-hover": "1px solid #e98b8b",
                "--n-border-pressed": "1px solid #e57272",
                "--n-border-focus": "1px solid #e98b8b",
                "--n-border-disabled": "1px solid #e88080",
                "--n-width": "initial",
                "--n-height": "34px",
                "--n-font-size": "14px",
                "--n-padding": "0 14px",
                "--n-icon-size": "18px",
                "--n-icon-margin": "6px",
                "--n-border-radius": "8px"
            };

            const defaultData: ConnectionButtonData = {
                className: "n-button n-button--primary-type n-button--medium-type connection-panel-connect-btn",
                tabIndex: "0",
                style: primaryCompactStyle,
                buttonAttributes: {},
                spanAttributes: {},
                content: "Connect",
                waveClassName: "n-base-wave"
            };

            switch (key) {
                case "0":
                    return {
                        ...defaultData,
                        buttonAttributes: {
                            "data-navigate-routes": JSON.stringify(["/dashboard?step=8"])
                        }
                    };
                case "1":
                    return {
                        className: "n-button n-button--error-type n-button--medium-type connection-panel-connect-btn",
                        tabIndex: "0",
                        style: errorStyle,
                        buttonAttributes: {},
                        spanAttributes: {
                            "data-navigate-routes": JSON.stringify(["/dashboard?step=48", "/dashboard?step=49"])
                        },
                        content: "Connect",
                        waveClassName: "n-base-wave"
                    };
                case "2":
                    return {
                        className: "n-button n-button--primary-type n-button--medium-type connection-panel-connect-btn",
                        tabIndex: "0",
                        style: primarySpacedStyle,
                        buttonAttributes: {},
                        spanAttributes: {
                            "data-navigate-routes": JSON.stringify(["/dashboard?step=48", "/dashboard?step=49"])
                        },
                        content: "Connect",
                        waveClassName: "n-base-wave n-base-wave--active"
                    };
                case "3":
                    return {
                        className: "n-button n-button--primary-type n-button--medium-type connection-panel-connect-btn",
                        tabIndex: "0",
                        style: primarySpacedStyle,
                        buttonAttributes: {},
                        spanAttributes: {
                            "data-navigate-routes": JSON.stringify(["/dashboard?step=48", "/dashboard?step=49"])
                        },
                        content: "Connect",
                        waveClassName: "n-base-wave"
                    };
                case "4":
                    return {
                        className: "n-button n-button--error-type n-button--medium-type connection-panel-connect-btn",
                        tabIndex: "0",
                        style: errorStyle,
                        buttonAttributes: {},
                        spanAttributes: {},
                        content: " Disconnect ",
                        waveClassName: "n-base-wave"
                    };
                case "5":
                    return {
                        className: "n-button n-button--primary-type n-button--medium-type n-button--disabled",
                        tabIndex: "-1",
                        style: primaryCompactStyle,
                        buttonAttributes: {
                            "data-v-aa7df84d": "",
                            "disabled": ""
                        },
                        spanAttributes: {},
                        content: "Connect",
                        waveClassName: "n-base-wave"
                    };
                default:
                    return defaultData;
            }
        }
    

export default ConnectionButton
