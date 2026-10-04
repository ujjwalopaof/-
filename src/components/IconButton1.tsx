import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Webpage_layout_window from './icons/Webpage_layout_window.tsx'
import Skull_head from './icons/Skull_head.tsx'
import IconButton from './IconButton.tsx'
import Icon from './Icon.tsx'


        type IconButton1Data = {
            buttonClassName: string;
            title?: string;
            buttonStyle: Record<string, string>;
            iconFontSize: string;
            icon: JSX.Element;
        };
    
// Component

        function IconButton1({ dataId }: { dataId: string }) {
            const data: IconButton1Data = getIconButton1Data(dataId);

            return (
                <button
                    className={data.buttonClassName}
                    tabIndex={"0"}
                    type={"button"}
                    {...(data.title !== undefined ? { title: data.title } : {})}
                    style={data.buttonStyle}
                >
                    <IconSlot fontSize={data.iconFontSize}>
                        {data.icon}
                    </IconSlot>
                    <div className={"n-base-wave"}>
                    </div>
                </button>
            );
        }
    

// Subcomponents

        function IconSlot({
            fontSize,
            children
        }: {
            fontSize: string;
            children: JSX.Element;
        }) {
            return (
                <span className={"n-button__icon"} style={{margin:"0px"}}>
                    <div className={"n-icon-slot"} role={"none"}>
                        <i
                            role={"img"}
                            className={"n-icon"}
                            style={{"--n-bezier":"cubic-bezier(.4,0,.2,1)", fontSize}}
                        >
                            {children}
                        </i>
                    </div>
                </span>
            );
        }
    


        function getIconButton1Data(id: string): IconButton1Data {
            const stringId = String(id);

            if (stringId === "0") {
                return {
                    buttonClassName: "n-button n-button--default-type n-button--small-type stats-widget-swap",
                    title: "Change widget",
                    buttonStyle: {
                        "--n-bezier":"cubic-bezier(.4,0,.2,1)",
                        "--n-bezier-ease-out":"cubic-bezier(0,0,.2,1)",
                        "--n-ripple-duration":".6s",
                        "--n-opacity-disabled":"0.38",
                        "--n-wave-opacity":"0.8",
                        "--n-font-weight":"400",
                        "--n-color":"#0000",
                        "--n-color-hover":"rgba(255,255,255,.12)",
                        "--n-color-pressed":"rgba(255,255,255,.08)",
                        "--n-color-focus":"rgba(255,255,255,.12)",
                        "--n-color-disabled":"#0000",
                        "--n-ripple-color":"#0000",
                        "--n-text-color":"rgba(255,255,255,0.85)",
                        "--n-text-color-hover":"rgba(255,255,255,0.85)",
                        "--n-text-color-pressed":"rgba(255,255,255,0.85)",
                        "--n-text-color-focus":"rgba(255,255,255,0.85)",
                        "--n-text-color-disabled":"rgba(255,255,255,0.85)",
                        "--n-border":"1px solid #222222",
                        "--n-border-hover":"1px solid #9b75db",
                        "--n-border-pressed":"1px solid #7a55c6",
                        "--n-border-focus":"1px solid #9b75db",
                        "--n-border-disabled":"1px solid #222222",
                        "--n-width":"28px",
                        "--n-height":"28px",
                        "--n-font-size":"14px",
                        "--n-padding":"initial",
                        "--n-icon-size":"18px",
                        "--n-icon-margin":"6px",
                        "--n-border-radius":"28px"
                    },
                    iconFontSize: "18px",
                    icon: <Webpage_layout_window />
                };
            }

            return {
                buttonClassName: "n-button n-button--error-type n-button--tiny-type connection-panel-force-kill",
                buttonStyle: {
                    "--n-bezier":"cubic-bezier(.4,0,.2,1)",
                    "--n-bezier-ease-out":"cubic-bezier(0,0,.2,1)",
                    "--n-ripple-duration":".6s",
                    "--n-opacity-disabled":"0.38",
                    "--n-wave-opacity":"0.8",
                    "--n-font-weight":"400",
                    "--n-color":"#0000",
                    "--n-color-hover":"rgba(255,255,255,.12)",
                    "--n-color-pressed":"rgba(255,255,255,.08)",
                    "--n-color-focus":"rgba(255,255,255,.12)",
                    "--n-color-disabled":"#0000",
                    "--n-ripple-color":"#0000",
                    "--n-text-color":"#e88080",
                    "--n-text-color-hover":"#e88080",
                    "--n-text-color-pressed":"#e88080",
                    "--n-text-color-focus":"#e88080",
                    "--n-text-color-disabled":"#e88080",
                    "--n-border":"1px solid #e88080",
                    "--n-border-hover":"1px solid #e98b8b",
                    "--n-border-pressed":"1px solid #e57272",
                    "--n-border-focus":"1px solid #e98b8b",
                    "--n-border-disabled":"1px solid #e88080",
                    "--n-width":"initial",
                    "--n-height":"22px",
                    "--n-font-size":"12px",
                    "--n-padding":"0 6px",
                    "--n-icon-size":"14px",
                    "--n-icon-margin":"6px",
                    "--n-border-radius":"8px"
                },
                iconFontSize: "14px",
                icon: <Skull_head />
            };
        }
    

export default IconButton1
