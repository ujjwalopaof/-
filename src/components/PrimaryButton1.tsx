import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import PrimaryButton from './PrimaryButton.tsx'


type PrimaryButtonData = {
    label: string;
    dataVAttribute?: "data-v-d9c23b5c" | "data-v-83bc3aca" | "data-v-03870910";
    navigateRoutes?: string[];
    extraClass?: string;
    disabled: boolean;
    preserveLabelWhitespace?: boolean;
};
    
// Component

function PrimaryButton1({ dataId }: { dataId: string }) {
    const {
        label,
        dataVAttribute,
        navigateRoutes,
        extraClass,
        disabled,
        preserveLabelWhitespace
    }: PrimaryButtonData = getPrimaryButton1Data(dataId);

    const scopedAttribute = dataVAttribute
        ? { [dataVAttribute]: "" }
        : {};

    return (
        <button
            {...scopedAttribute}
            className={`n-button n-button--primary-type n-button--small-type${extraClass ? ` ${extraClass}` : ""}${disabled ? " n-button--disabled" : ""}`}
            tabIndex={disabled ? "-1" : "0"}
            type={"button"}
            {...(disabled ? { disabled: "" } : {})}
            style={{
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
                "--n-height": "28px",
                "--n-font-size": "14px",
                "--n-padding": "0 10px",
                "--n-icon-size": "18px",
                "--n-icon-margin": "6px",
                "--n-border-radius": "8px"
            }}
        >
            <span
                className={"n-button__content"}
                {...(navigateRoutes
                    ? { "data-navigate-routes": JSON.stringify(navigateRoutes) }
                    : {})}
            >
                {preserveLabelWhitespace ? ` ${label} ` : label}
            </span>
            <div className={"n-base-wave"}>
            </div>
            <div className={"n-button__border"}>
            </div>
            <div className={"n-button__state-border"}>
            </div>
        </button>
    );
}
    

function getPrimaryButton1Data(id): PrimaryButtonData  {
    switch (String(id)) {
    case "0":
        return ({
                  "label": "Add Task",
                  "dataVAttribute": "data-v-d9c23b5c",
                  "navigateRoutes": undefined,
                  "extraClass": undefined,
                  "disabled": false,
                  "preserveLabelWhitespace": undefined
                });
    case "1":
        return ({
                    "label": "Add Task",
                    "dataVAttribute": "data-v-d9c23b5c",
                    "navigateRoutes": ["/dashboard?step=9"],
                    "extraClass": undefined,
                    "disabled": false,
                    "preserveLabelWhitespace": undefined
                });
    case "2":
        return ({
                    "label": "New Macro",
                    "dataVAttribute": "data-v-83bc3aca",
                    "navigateRoutes": ["/dashboard?step=13"],
                    "extraClass": undefined,
                    "disabled": false,
                    "preserveLabelWhitespace": undefined
                });
    case "3":
        return ({
                    "label": "Subscribe & Save 30%",
                    "dataVAttribute": undefined,
                    "navigateRoutes": undefined,
                    "extraClass": "trial-offer-banner__btn",
                    "disabled": false,
                    "preserveLabelWhitespace": undefined
                });
    case "4":
        return ({
                    "label": "Grab Current Coordinates",
                    "dataVAttribute": "data-v-03870910",
                    "navigateRoutes": undefined,
                    "extraClass": undefined,
                    "disabled": true,
                    "preserveLabelWhitespace": true
                });
    default:
        return ({
                  "label": "Add Task",
                  "dataVAttribute": "data-v-d9c23b5c",
                  "navigateRoutes": undefined,
                  "extraClass": undefined,
                  "disabled": false,
                  "preserveLabelWhitespace": undefined
                });
    }
}


export default PrimaryButton1
