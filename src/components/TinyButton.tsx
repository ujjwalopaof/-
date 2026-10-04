import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


        type TinyButtonData = {
            className: string;
            label: string;
            scoped: boolean;
            style: Record<string, string>;
        }
    
// Component

        function TinyButton({ dataId }: { dataId: string }) {
            const { className, label, scoped, style }: TinyButtonData = getTinyButtonData(dataId);
            return (
                <button
                    {...(scoped ? { "data-v-cef28e8e": "" } : {})}
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
                </button>
            );
        }
    


        function getTinyButtonData(id: string): TinyButtonData {
            const stringId = String(id);

            const commonStyle = {
                "--n-bezier": "cubic-bezier(.4,0,.2,1)",
                "--n-bezier-ease-out": "cubic-bezier(0,0,.2,1)",
                "--n-ripple-duration": ".6s",
                "--n-opacity-disabled": "0.38",
                "--n-wave-opacity": "0.8",
                "--n-font-weight": "400",
                "--n-color-hover": "rgba(255,255,255,.12)",
                "--n-color-pressed": "rgba(255,255,255,.08)",
                "--n-color-focus": "rgba(255,255,255,.12)",
                "--n-ripple-color": "#0000",
                "--n-width": "initial",
                "--n-height": "22px",
                "--n-font-size": "12px",
                "--n-padding": "0 6px",
                "--n-icon-size": "14px",
                "--n-icon-margin": "6px",
                "--n-border-radius": "8px"
            };

            const defaultStyle = {
                ...commonStyle,
                "--n-color": "#0000",
                "--n-color-disabled": "#0000",
                "--n-text-color": "rgba(255,255,255,0.85)",
                "--n-text-color-hover": "rgba(255,255,255,0.85)",
                "--n-text-color-pressed": "rgba(255,255,255,0.85)",
                "--n-text-color-focus": "rgba(255,255,255,0.85)",
                "--n-text-color-disabled": "rgba(255,255,255,0.85)",
                "--n-border": "1px solid #222222",
                "--n-border-hover": "1px solid #9b75db",
                "--n-border-pressed": "1px solid #7a55c6",
                "--n-border-focus": "1px solid #9b75db",
                "--n-border-disabled": "1px solid #222222"
            };

            const records: Record<string, TinyButtonData> = {
                "0": {
                    className: "n-button n-button--error-type n-button--tiny-type",
                    label: "Drop",
                    scoped: false,
                    style: {
                        ...commonStyle,
                        "--n-color": "rgba(255,255,255,.08)",
                        "--n-color-disabled": "rgba(255,255,255,.08)",
                        "--n-text-color": "#e88080",
                        "--n-text-color-hover": "#e88080",
                        "--n-text-color-pressed": "#e88080",
                        "--n-text-color-focus": "#e88080",
                        "--n-text-color-disabled": "#e88080",
                        "--n-border": "1px solid #e88080",
                        "--n-border-hover": "1px solid #e98b8b",
                        "--n-border-pressed": "1px solid #e57272",
                        "--n-border-focus": "1px solid #e98b8b",
                        "--n-border-disabled": "1px solid #e88080",
                        position: "absolute",
                        bottom: "-28px",
                        width: "100%",
                        padding: "0px"
                    }
                },
                "1": {
                    className: "n-button n-button--default-type n-button--tiny-type stats-info-control",
                    label: "None",
                    scoped: false,
                    style: {
                        ...defaultStyle,
                        "--n-color": "rgba(255,255,255,.08)",
                        "--n-color-disabled": "rgba(255,255,255,.08)"
                    }
                },
                "2": {
                    className: "n-button n-button--default-type n-button--tiny-type",
                    label: "Refresh",
                    scoped: false,
                    style: defaultStyle
                },
                "3": {
                    className: "n-button n-button--default-type n-button--tiny-type",
                    label: "Clear",
                    scoped: true,
                    style: defaultStyle
                }
            };

            return records[stringId] ?? records["2"];
        }
    

export default TinyButton
