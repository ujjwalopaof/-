import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Minus_horizontal_line from './icons/Minus_horizontal_line.tsx'
import Plus_cross from './icons/Plus_cross.tsx'
import Minus_horizontal_line1 from './icons/Minus_horizontal_line1.tsx'
import Icon from './Icon.tsx'


        type IconButtonData = {
            icon: "minus" | "plus" | "minus1";
        };
    
// Component

        function IconButton({
            disabled = false,
            dataId
        }: {
            disabled?: boolean;
            dataId: string;
        }) {
            const { icon }: IconButtonData = getIconButtonData(dataId);

            return (
                <button
                    className={`n-button n-button--default-type n-button--medium-type${disabled ? " n-button--disabled" : ""}`}
                    tabIndex={"-1"}
                    type={"button"}
                    {...(disabled ? { disabled: "" } : {})}
                    style={{
                        "--n-bezier":"cubic-bezier(.4,0,.2,1)",
                        "--n-bezier-ease-out":"cubic-bezier(0,0,.2,1)",
                        "--n-ripple-duration":".6s",
                        "--n-opacity-disabled":"0.38",
                        "--n-wave-opacity":"0.8",
                        "--n-font-weight":"400",
                        "--n-color":"#0000",
                        "--n-color-hover":"#0000",
                        "--n-color-pressed":"#0000",
                        "--n-color-focus":"#0000",
                        "--n-color-disabled":"#0000",
                        "--n-ripple-color":"#0000",
                        "--n-text-color":"rgba(255,255,255,0.85)",
                        "--n-text-color-hover":"#9b75db",
                        "--n-text-color-pressed":"#7a55c6",
                        "--n-text-color-focus":"#9b75db",
                        "--n-text-color-disabled":"rgb(255,255,255)",
                        "--n-border":"none",
                        "--n-border-hover":"none",
                        "--n-border-pressed":"none",
                        "--n-border-focus":"none",
                        "--n-border-disabled":"none",
                        "--n-width":"initial",
                        "--n-height":"initial",
                        "--n-font-size":"14px",
                        "--n-padding":"initial",
                        "--n-icon-size":"18px",
                        "--n-icon-margin":"6px",
                        "--n-border-radius":"initial"
                    }}
                >
                    <span className={"n-button__icon"} style={{margin:"0px"}}>
                        <div className={"n-icon-slot"} role={"none"}>
                            <i className={"n-base-icon"}>
                                {icon === "minus" ? (
                                    <Minus_horizontal_line />
                                ) : icon === "plus" ? (
                                    <Plus_cross />
                                ) : (
                                    <Minus_horizontal_line1 />
                                )}
                            </i>
                        </div>
                    </span>
                </button>
            );
        }
    

function getIconButtonData(id): IconButtonData  {
    switch (String(id)) {
    case "0":
        return ({
                    "icon": "minus"
                });
    case "1":
        return ({
                  "icon": "minus"
                });
    case "2":
        return ({
                    "icon": "plus"
                });
    case "3":
        return ({
                    "icon": "plus"
                });
    case "4":
        return ({
                    "icon": "minus1"
                });
    default:
        return ({
                    "icon": "minus"
                });
    }
}


export default IconButton
