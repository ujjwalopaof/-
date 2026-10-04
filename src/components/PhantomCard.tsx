import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Img from './Img.tsx'
import LockedText from './LockedText.tsx'
import StatsPanel from './StatsPanel.tsx'


    
// Component

        function PhantomCard({ locked }: { locked: boolean }) {
            return (
                <div data-v-f6379ed9={""} style={{display:"flex", gridColumn:"span 10/span 10"}}>
                    <div
                        data-v-f6379ed9={""}
                        className={"n-card n-card--bordered phantom-main-card"}
                        style={{
                            "--n-bezier":"cubic-bezier(.4,0,.2,1)",
                            "--n-border-radius":"8px",
                            "--n-color":"#080808",
                            "--n-color-modal":"#080808",
                            "--n-color-popover":"rgba(0,0,0,0.94)",
                            "--n-color-embedded":"#080808",
                            "--n-color-embedded-modal":"#080808",
                            "--n-color-embedded-popover":"rgba(0,0,0,0.94)",
                            "--n-color-target":"#8a63d2",
                            "--n-text-color":"rgba(255,255,255,0.85)",
                            "--n-line-height":"1.6",
                            "--n-action-color":"rgba(255,255,255,0.06)",
                            "--n-title-text-color":"#ffffff",
                            "--n-title-font-weight":"500",
                            "--n-close-icon-color":"rgba(255,255,255,0.52)",
                            "--n-close-icon-color-hover":"rgba(255,255,255,0.52)",
                            "--n-close-icon-color-pressed":"rgba(255,255,255,0.52)",
                            "--n-close-color-hover":"rgba(255,255,255,.12)",
                            "--n-close-color-pressed":"rgba(255,255,255,.08)",
                            "--n-border-color":"#222222",
                            "--n-box-shadow":"0 1px 2px -2px rgba(0,0,0,.24),0 3px 6px 0 rgba(0,0,0,.18),0 5px 12px 4px rgba(0,0,0,.12)",
                            "--n-padding-top":"12px",
                            "--n-padding-bottom":"12px",
                            "--n-padding-left":"16px",
                            "--n-font-size":"14px",
                            "--n-title-font-size":"16px",
                            "--n-close-size":"22px",
                            "--n-close-icon-size":"18px",
                            "--n-close-border-radius":"8px",
                            flex:"1 1 0%",
                            display:"flex",
                            flexDirection:"column"
                        }}
                    >
                        <div className={"n-card__content"} role={"none"}>
                            <div className={"phantom-main-card-header"}>
                                <Img id="6" />
                                <div className={"phantom-main-card-identity"}>
                                    <span className={"phantom-main-card-name"}>
                                        Xyrk_
                                    </span>
                                    <span className={"phantom-main-card-sep"}>
                                        ·
                                    </span>
                                    <span className={"phantom-main-card-server"}>
                                        donutsmp.net
                                    </span>
                                    <span
                                        data-v-b9cd00f9={""}
                                        className={"server-folder-glyph phantom-main-card-server-icon"}
                                        style={{"--server-icon-size":"18px"}}
                                    >
                                        <Img id="7" />
                                    </span>
                                </div>
                            </div>
                            <StatsArea locked={locked} />
                        </div>
                    </div>
                </div>
            )
        }
    

// Subcomponents

        function StatsArea({ locked }: { locked: boolean }) {
            return (
                <div className={"stats-grid-wrap"}>
                    {locked ? (
                        <div className={"locked-overlay"}>
                            <LockedText />
                        </div>
                    ) : (
                        <div className={"stats-grid"}>
                            <StatsPanel />
                        </div>
                    )}
                </div>
            )
        }
    

export default PhantomCard
