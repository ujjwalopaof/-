import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import TinyButton from './TinyButton.tsx'


        type TinyButton1Data = {
            label: string;
            primary: boolean;
            className: string;
            style: React.CSSProperties & Record<`--${string}`, string>;
        };
    
// Component

        function TinyButton1({ dataId }: { dataId: string }) {
            const { label, primary, className, style }: TinyButton1Data = getTinyButton1Data(dataId);

            return (
                <button
                    data-v-03870910={""}
                    className={className}
                    tabIndex={"0"}
                    type={"button"}
                    style={style}
                >
                    <span className={"n-button__content"}>
                        {label}
                    </span>
                    <div className={"n-base-wave"}>
                    </div>
                    {primary && (
                        <div className={"n-button__border"}>
                        </div>
                    )}
                    {primary && (
                        <div className={"n-button__state-border"}>
                        </div>
                    )}
                </button>
            );
        }
    


        function getTinyButton1Data(id: string): TinyButton1Data {
            const stringId = String(id);
            const labels: Record<string, string> = {
                "0": "8",
                "1": "16",
                "2": "32",
                "3": "64",
                "4": "128"
            };
            const primary = stringId === "2";

            const commonStyle = {
                "--n-bezier": "cubic-bezier(.4,0,.2,1)",
                "--n-bezier-ease-out": "cubic-bezier(0,0,.2,1)",
                "--n-ripple-duration": ".6s",
                "--n-opacity-disabled": "0.38",
                "--n-wave-opacity": "0.8",
                "--n-font-weight": "400",
                "--n-border-hover": "1px solid #9b75db",
                "--n-border-pressed": "1px solid #7a55c6",
                "--n-border-focus": "1px solid #9b75db",
                "--n-width": "initial",
                "--n-height": "22px",
                "--n-font-size": "12px",
                "--n-padding": "0 6px",
                "--n-icon-size": "14px",
                "--n-icon-margin": "6px",
                "--n-border-radius": "8px"
            };

            if (primary) {
                return {
                    label: labels[stringId] || "8",
                    primary: true,
                    className: "n-button n-button--primary-type n-button--tiny-type",
                    style: {
                        ...commonStyle,
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
                        "--n-border-disabled": "1px solid #8a63d2"
                    }
                };
            }

            return {
                label: labels[stringId] || "8",
                primary: false,
                className: "n-button n-button--default-type n-button--tiny-type n-button--secondary",
                style: {
                    ...commonStyle,
                    "--n-color": "rgba(255,255,255,.08)",
                    "--n-color-hover": "rgba(255,255,255,.12)",
                    "--n-color-pressed": "rgba(255,255,255,.08)",
                    "--n-color-focus": "rgba(255,255,255,.12)",
                    "--n-color-disabled": "rgba(255,255,255,.08)",
                    "--n-ripple-color": "#0000",
                    "--n-text-color": "rgba(255,255,255,0.85)",
                    "--n-text-color-hover": "rgba(255,255,255,0.85)",
                    "--n-text-color-pressed": "rgba(255,255,255,0.85)",
                    "--n-text-color-focus": "rgba(255,255,255,0.85)",
                    "--n-text-color-disabled": "rgba(255,255,255,0.85)",
                    "--n-border": "1px solid #222222",
                    "--n-border-disabled": "1px solid #222222"
                }
            };
        }
    

export default TinyButton1
