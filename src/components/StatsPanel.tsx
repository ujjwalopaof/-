import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Img from './Img.tsx'
import Filled_star_shape from './icons/Filled_star_shape.tsx'
import VitalStat from './VitalStat.tsx'
import VitalBar from './VitalBar.tsx'
import IconButton1 from './IconButton1.tsx'
import InventoryGrid from './InventoryGrid.tsx'
import InventoryHints from './InventoryHints.tsx'
import SkinViewer from './SkinViewer.tsx'
import TinyButton from './TinyButton.tsx'
import IngameViewButton from './IngameViewButton.tsx'
import SuffixArrow from './SuffixArrow.tsx'
import IconButton from './IconButton.tsx'
import Icon from './Icon.tsx'
import ProfitTable from './ProfitTable.tsx'
import InventoryArmor from './InventoryArmor.tsx'


// Component

        function StatsPanel() {
            return (
                <div className={"stats-2col"}>
                    <div className={"stats-left-col"}>
                        <div className={"stats-cell stats-hf"}>
                            <div className={"stats-vitals-compact"}>
                                <div className={"vital-row vital-row--hf"}>
                                    <VitalStat icon="heart" />
                                    <VitalStat icon="food" />
                                </div>
                                <div className={"vital-row"}>
                                    <Filled_star_shape />
                                    <span className={"vital-label"}>
                                        Lv 0
                                    </span>
                                    <VitalBar width="0%" />
                                    <span className={"vital-value"}>
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div className={"standing-block-inline"}>
                                <span
                                    className={"n-text standing-block-caption"}
                                    style={{
                                        "--n-bezier": "cubic-bezier(.4,0,.2,1)",
                                        "--n-text-color": "rgba(255,255,255,0.6)",
                                        "--n-font-weight-strong": "500",
                                        "--n-font-famliy-mono": "v-mono,SFMono-Regular,Menlo,Consolas,Courier,monospace",
                                        "--n-code-border-radius": "2px",
                                        "--n-code-text-color": "rgba(255,255,255,0.85)",
                                        "--n-code-color": "rgba(255,255,255,0.12)",
                                        "--n-code-border": "1px solid #0000"
                                    }}
                                >
                                    Standing on Block
                                </span>
                                <div className={"standing-block-row"}>
                                    <Img id="8" />
                                    <span className={"standing-block-label"}>
                                        Deepslate
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={"stats-cell stats-widget-slot"}>
                            <div className={"stats-widget-header"}>
                                <span
                                    className={"n-text"}
                                    style={{
                                        "--n-bezier": "cubic-bezier(.4,0,.2,1)",
                                        "--n-text-color": "rgba(255,255,255,0.6)",
                                        "--n-font-weight-strong": "500",
                                        "--n-font-famliy-mono": "v-mono,SFMono-Regular,Menlo,Consolas,Courier,monospace",
                                        "--n-code-border-radius": "2px",
                                        "--n-code-text-color": "rgba(255,255,255,0.85)",
                                        "--n-code-color": "rgba(255,255,255,0.12)",
                                        "--n-code-border": "1px solid #0000"
                                    }}
                                >
                                    XP
                                </span>
                                <div className={"stats-widget-header-actions"}>
                                    <IconButton1 dataId="0" />
                                </div>
                            </div>
                            <div className={"stats-widget-body"}>
                                <div className={"profit-table-wrap"}>
                                    <ProfitTable />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={"stats-right-col"}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                            height: "100%"
                        }}
                    >
                        <div className={"stats-cell"} style={{ height: "max-content" }}>
                            <span
                                className={"n-text"}
                                style={{
                                    "--n-bezier": "cubic-bezier(.4,0,.2,1)",
                                    "--n-text-color": "rgba(255,255,255,0.6)",
                                    "--n-font-weight-strong": "500",
                                    "--n-font-famliy-mono": "v-mono,SFMono-Regular,Menlo,Consolas,Courier,monospace",
                                    "--n-code-border-radius": "2px",
                                    "--n-code-text-color": "rgba(255,255,255,0.85)",
                                    "--n-code-color": "rgba(255,255,255,0.12)",
                                    "--n-code-border": "1px solid #0000"
                                }}
                            >
                                Inventory
                            </span>
                            <div className={"inventory-row"} style={{ marginTop: "8px" }}>
                                <div className={"inventory-wrap"}>
                                    <InventoryGrid />
                                    <InventoryHints />
                                </div>
                                <div className={"inventory-model-grid"}>
                                    <SkinViewer username="Xyrk_" />
                                    <InventoryArmor />
                                </div>
                            </div>
                        </div>
                        <div className={"stats-cell"} style={{ height: "max-content" }}>
                            <div className={"stats-info-row"}>
                                <div className={"stats-info-field"}>
                                    <span
                                        className={"n-text stats-info-label"}
                                        style={{
                                            "--n-bezier": "cubic-bezier(.4,0,.2,1)",
                                            "--n-text-color": "rgba(255,255,255,0.6)",
                                            "--n-font-weight-strong": "500",
                                            "--n-font-famliy-mono": "v-mono,SFMono-Regular,Menlo,Consolas,Courier,monospace",
                                            "--n-code-border-radius": "2px",
                                            "--n-code-text-color": "rgba(255,255,255,0.85)",
                                            "--n-code-color": "rgba(255,255,255,0.12)",
                                            "--n-code-border": "1px solid #0000"
                                        }}
                                    >
                                        Ingame Viewer
                                    </span>
                                    <div className={"ingame-view-btn-wrap"}>
                                        <IngameViewButton />
                                    </div>
                                </div>
                                <div className={"stats-info-field"}>
                                    <span
                                        className={"n-text stats-info-label"}
                                        style={{
                                            "--n-bezier": "cubic-bezier(.4,0,.2,1)",
                                            "--n-text-color": "rgba(255,255,255,0.6)",
                                            "--n-font-weight-strong": "500",
                                            "--n-font-famliy-mono": "v-mono,SFMono-Regular,Menlo,Consolas,Courier,monospace",
                                            "--n-code-border-radius": "2px",
                                            "--n-code-text-color": "rgba(255,255,255,0.85)",
                                            "--n-code-color": "rgba(255,255,255,0.12)",
                                            "--n-code-border": "1px solid #0000"
                                        }}
                                    >
                                        Facing Direction
                                    </span>
                                    <TinyButton dataId="1" />
                                </div>
                                <div className={"stats-info-field"}>
                                    <span
                                        className={"n-text stats-info-label"}
                                        style={{
                                            "--n-bezier": "cubic-bezier(.4,0,.2,1)",
                                            "--n-text-color": "rgba(255,255,255,0.6)",
                                            "--n-font-weight-strong": "500",
                                            "--n-font-famliy-mono": "v-mono,SFMono-Regular,Menlo,Consolas,Courier,monospace",
                                            "--n-code-border-radius": "2px",
                                            "--n-code-text-color": "rgba(255,255,255,0.85)",
                                            "--n-code-color": "rgba(255,255,255,0.12)",
                                            "--n-code-border": "1px solid #0000"
                                        }}
                                    >
                                        Sneak Mode
                                    </span>
                                    <div className={"n-select stats-info-control"}>
                                        <div
                                            className={"n-base-selection n-base-selection--selected"}
                                            style={{
                                                "--n-bezier": "cubic-bezier(.4,0,.2,1)",
                                                "--n-border": "1px solid #0000",
                                                "--n-border-active": "1px solid #8a63d2",
                                                "--n-border-focus": "1px solid #9b75db",
                                                "--n-border-hover": "1px solid #9b75db",
                                                "--n-border-radius": "8px",
                                                "--n-box-shadow-active": "0 0 8px 0 rgba(138,99,210,0.4)",
                                                "--n-box-shadow-focus": "0 0 8px 0 rgba(138,99,210,0.4)",
                                                "--n-box-shadow-hover": "none",
                                                "--n-caret-color": "#8a63d2",
                                                "--n-color": "rgba(255,255,255,0.1)",
                                                "--n-color-active": "rgba(138,99,210,0.1)",
                                                "--n-color-disabled": "rgba(255,255,255,0.06)",
                                                "--n-font-size": "12px",
                                                "--n-height": "22px",
                                                "--n-padding-single-top": "0",
                                                "--n-padding-multiple-top": "3px",
                                                "--n-padding-single-right": "26px",
                                                "--n-padding-multiple-right": "26px",
                                                "--n-padding-single-left": "12px",
                                                "--n-padding-multiple-left": "12px",
                                                "--n-padding-single-bottom": "0",
                                                "--n-padding-multiple-bottom": "0",
                                                "--n-placeholder-color": "rgba(255,255,255,0.38)",
                                                "--n-placeholder-color-disabled": "rgba(255,255,255,0.28)",
                                                "--n-text-color": "rgba(255,255,255,0.85)",
                                                "--n-text-color-disabled": "rgba(255,255,255,0.38)",
                                                "--n-arrow-color": "rgba(255,255,255,0.38)",
                                                "--n-arrow-color-disabled": "rgba(255,255,255,0.28)",
                                                "--n-loading-color": "#8a63d2",
                                                "--n-color-active-warning": "rgba(242,201,125,0.1)",
                                                "--n-box-shadow-focus-warning": "0 0 8px 0 rgba(242,201,125,0.4)",
                                                "--n-box-shadow-active-warning": "0 0 8px 0 rgba(242,201,125,0.4)",
                                                "--n-box-shadow-hover-warning": "none",
                                                "--n-border-warning": "1px solid #f2c97d",
                                                "--n-border-focus-warning": "1px solid #f5d599",
                                                "--n-border-hover-warning": "1px solid #f5d599",
                                                "--n-border-active-warning": "1px solid #f2c97d",
                                                "--n-color-active-error": "rgba(232,128,128,0.1)",
                                                "--n-box-shadow-focus-error": "0 0 8px 0 rgba(232,128,128,0.4)",
                                                "--n-box-shadow-active-error": "0 0 8px 0 rgba(232,128,128,0.4)",
                                                "--n-box-shadow-hover-error": "none",
                                                "--n-border-error": "1px solid #e88080",
                                                "--n-border-focus-error": "1px solid #e98b8b",
                                                "--n-border-hover-error": "1px solid #e98b8b",
                                                "--n-border-active-error": "1px solid #e88080",
                                                "--n-clear-size": "16px",
                                                "--n-clear-color": "rgba(255,255,255,0.38)",
                                                "--n-clear-color-hover": "rgba(255,255,255,0.48)",
                                                "--n-clear-color-pressed": "rgba(255,255,255,0.3)",
                                                "--n-arrow-size": "16px",
                                                "--n-font-weight": "400"
                                            }}
                                        >
                                            <div className={"n-base-selection-label"} tabIndex={"0"}>
                                                <div
                                                    className={"n-base-selection-input"}
                                                    title={"Disabled"}
                                                >
                                                    <div className={"n-base-selection-input__content"}>
                                                        Disabled
                                                    </div>
                                                </div>
                                                <div
                                                    className={"n-base-loading n-base-suffix"}
                                                    role={"img"}
                                                >
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    

export default StatsPanel
