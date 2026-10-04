import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Trash_bin from './icons/Trash_bin.tsx'
import Triangle_play_button_outline from './icons/Triangle_play_button_outline.tsx'
import Power_symbol from './icons/Power_symbol.tsx'
import Triangle_play_button_outline1 from './icons/Triangle_play_button_outline1.tsx'


        type AccountQuickButtonData = {
            actionClass: string;
            title?: string;
            iconSize: string;
            icon: JSX.Element;
        };
    
// Component

        function AccountQuickButton({
            dataId
        }: {
            dataId: string;
        }) {
            const { actionClass, title, iconSize, icon }: AccountQuickButtonData =
                getAccountQuickButtonData(dataId);

            return (
                <button
                    className={`n-button n-button--default-type n-button--tiny-type acct-quick-btn ${actionClass}`}
                    tabIndex={"0"}
                    type={"button"}
                    {...(title !== undefined ? { title } : {})}
                    style={{
                        "--n-bezier": "cubic-bezier(.4,0,.2,1)",
                        "--n-bezier-ease-out": "cubic-bezier(0,0,.2,1)",
                        "--n-ripple-duration": ".6s",
                        "--n-opacity-disabled": "0.38",
                        "--n-wave-opacity": "0.8",
                        "--n-font-weight": "400",
                        "--n-color": "#0000",
                        "--n-color-hover": "rgba(255,255,255,.12)",
                        "--n-color-pressed": "rgba(255,255,255,.08)",
                        "--n-color-focus": "rgba(255,255,255,.12)",
                        "--n-color-disabled": "#0000",
                        "--n-ripple-color": "#0000",
                        "--n-text-color": "rgba(255,255,255,0.85)",
                        "--n-text-color-hover": "rgba(255,255,255,0.85)",
                        "--n-text-color-pressed": "rgba(255,255,255,0.85)",
                        "--n-text-color-focus": "rgba(255,255,255,0.85)",
                        "--n-text-color-disabled": "rgba(255,255,255,0.85)",
                        "--n-border": "1px solid #222222",
                        "--n-border-hover": "1px solid #9b75db",
                        "--n-border-pressed": "1px solid #7a55c6",
                        "--n-border-focus": "1px solid #9b75db",
                        "--n-border-disabled": "1px solid #222222",
                        "--n-width": "22px",
                        "--n-height": "22px",
                        "--n-font-size": "12px",
                        "--n-padding": "initial",
                        "--n-icon-size": "14px",
                        "--n-icon-margin": "6px",
                        "--n-border-radius": "22px"
                    }}
                >
                    <span className={"n-button__icon"} style={{ margin: "0px" }}>
                        <div className={"n-icon-slot"} role={"none"}>
                            <i
                                role={"img"}
                                className={"n-icon"}
                                style={{
                                    "--n-bezier": "cubic-bezier(.4,0,.2,1)",
                                    fontSize: iconSize
                                }}
                            >
                                {icon}
                            </i>
                        </div>
                    </span>
                    <div className={"n-base-wave"}>
                    </div>
                </button>
            );
        }
    


        function getAccountQuickButtonData(id: string): AccountQuickButtonData {
            const key = String(id);

            const data: Record<string, AccountQuickButtonData> = {
                "0": {
                    actionClass: "acct-remove-btn",
                    title: "Remove connection",
                    iconSize: "14px",
                    icon: <Trash_bin />
                },
                "1": {
                    actionClass: "acct-quick-play",
                    iconSize: "15px",
                    icon: <Triangle_play_button_outline />
                },
                "2": {
                    actionClass: "acct-quick-stop",
                    iconSize: "15px",
                    icon: <Power_symbol />
                },
                "3": {
                    actionClass: "acct-quick-play",
                    iconSize: "15px",
                    icon: <Triangle_play_button_outline1 />
                }
            };

            return data[key] ?? data["0"];
        }
    

export default AccountQuickButton
