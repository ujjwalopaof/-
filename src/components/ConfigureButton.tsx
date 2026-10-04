import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


        type ConfigureButtonData = {
            buttonNavigateRoutes?: string[];
            contentNavigateRoutes?: string[];
        };
    
// Component

        function ConfigureButton({
            dataId,
            isWaveActive = false
        }: {
            dataId: string;
            isWaveActive?: boolean;
        }) {
            const {
                buttonNavigateRoutes,
                contentNavigateRoutes
            }: ConfigureButtonData = getConfigureButtonData(dataId);

            return (
                <button
                    data-v-830291ff={""}
                    className={"n-button n-button--default-type n-button--tiny-type configure-btn"}
                    tabIndex={"0"}
                    type={"button"}
                    style={{
                        "--n-bezier": "cubic-bezier(.4,0,.2,1)",
                        "--n-bezier-ease-out": "cubic-bezier(0,0,.2,1)",
                        "--n-ripple-duration": ".6s",
                        "--n-opacity-disabled": "0.38",
                        "--n-wave-opacity": "0.8",
                        "--n-font-weight": "400",
                        "--n-color": "#0000",
                        "--n-color-hover": "#0000",
                        "--n-color-pressed": "#0000",
                        "--n-color-focus": "#0000",
                        "--n-color-disabled": "#0000",
                        "--n-ripple-color": "#8a63d2",
                        "--n-text-color": "rgba(255,255,255,0.85)",
                        "--n-text-color-hover": "#9b75db",
                        "--n-text-color-pressed": "#7a55c6",
                        "--n-text-color-focus": "#9b75db",
                        "--n-text-color-disabled": "rgba(255,255,255,0.85)",
                        "--n-border": "1px solid #222222",
                        "--n-border-hover": "1px solid #9b75db",
                        "--n-border-pressed": "1px solid #7a55c6",
                        "--n-border-focus": "1px solid #9b75db",
                        "--n-border-disabled": "1px solid #222222",
                        "--n-width": "initial",
                        "--n-height": "22px",
                        "--n-font-size": "12px",
                        "--n-padding": "0 6px",
                        "--n-icon-size": "14px",
                        "--n-icon-margin": "6px",
                        "--n-border-radius": "8px"
                    } as React.CSSProperties}
                    {...(buttonNavigateRoutes !== undefined
                        ? { "data-navigate-routes": JSON.stringify(buttonNavigateRoutes) }
                        : {})}
                >
                    <span
                        className={"n-button__content"}
                        {...(contentNavigateRoutes !== undefined
                            ? { "data-navigate-routes": JSON.stringify(contentNavigateRoutes) }
                            : {})}
                    >
                        Configure
                    </span>
                    <div className={isWaveActive ? "n-base-wave n-base-wave--active" : "n-base-wave"}>
                    </div>
                    <div className={"n-button__border"}>
                    </div>
                    <div className={"n-button__state-border"}>
                    </div>
                </button>
            );
        }
    

function getConfigureButtonData(id): ConfigureButtonData  {
    switch (String(id)) {
    case "0":
        return ({
                    "buttonNavigateRoutes": ["/dashboard?step=36"],
                    "contentNavigateRoutes": undefined
                });
    case "1":
        return ({
                  "buttonNavigateRoutes": ["/dashboard?step=36"],
                  "contentNavigateRoutes": undefined
                });
    case "2":
        return ({
                    "buttonNavigateRoutes": ["/dashboard?step=38"],
                    "contentNavigateRoutes": undefined
                });
    case "3":
        return ({
                    "buttonNavigateRoutes": ["/dashboard?step=38"],
                    "contentNavigateRoutes": undefined
                });
    case "4":
        return ({
                    "buttonNavigateRoutes": ["/dashboard?step=40"],
                    "contentNavigateRoutes": ["/dashboard?step=42"]
                });
    case "5":
        return ({
                    "buttonNavigateRoutes": ["/dashboard?step=40"],
                    "contentNavigateRoutes": ["/dashboard?step=42"]
                });
    case "6":
        return ({
                  "buttonNavigateRoutes": undefined,
                  "contentNavigateRoutes": ["/dashboard?step=44"]
                });
    case "7":
        return ({
                    "buttonNavigateRoutes": ["/dashboard?step=26"],
                    "contentNavigateRoutes": undefined
                });
    case "8":
        return ({
                  "buttonNavigateRoutes": ["/dashboard?step=24"],
                  "contentNavigateRoutes": undefined
                });
    case "9":
        return ({
                    "buttonNavigateRoutes": ["/dashboard?step=30"],
                    "contentNavigateRoutes": undefined
                });
    case "10":
        return ({
                    "buttonNavigateRoutes": ["/dashboard?step=32"],
                    "contentNavigateRoutes": undefined
                });
    case "11":
        return ({
                    "buttonNavigateRoutes": ["/dashboard?step=32"],
                    "contentNavigateRoutes": undefined
                });
    case "12":
        return ({
                    "buttonNavigateRoutes": ["/dashboard?step=34"],
                    "contentNavigateRoutes": undefined
                });
    default:
        return ({
                    "buttonNavigateRoutes": ["/dashboard?step=36"],
                    "contentNavigateRoutes": undefined
                });
    }
}


export default ConfigureButton
