import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import SidebarSupportButton from './SidebarSupportButton.tsx'
import SidebarUser from './SidebarUser.tsx'
import SupportButton from './SupportButton.tsx'
import Sidebar from './Sidebar.tsx'


// Component

        function PhantomSidebar({
            username,
            imageId
        }: {
            username: string;
            imageId: string;
        }) {
            return (
                <aside
                    data-v-067a1f02={""}
                    className={"n-layout-sider n-layout-sider--static-positioned n-layout-sider--left-placement n-layout-sider--bordered n-layout-sider--show-content phantom-sidebar"}
                    style={{
                        "--n-bezier": "cubic-bezier(.4,0,.2,1)",
                        "--n-toggle-button-color": "rgba(0,0,0,0.94)",
                        "--n-toggle-button-border": "1px solid transparent",
                        "--n-toggle-bar-color": "rgba(51,51,51,1)",
                        "--n-toggle-bar-color-hover": "rgba(77,77,77,1)",
                        "--n-color": "#050505",
                        "--n-text-color": "rgba(255,255,255,0.85)",
                        "--n-border-color": "rgba(255,255,255,0.09)",
                        "--n-toggle-button-icon-color": "rgba(255,255,255,0.85)",
                        maxWidth: "350px",
                        width: "350px"
                    }}
                >
                    <div
                        role={"none"}
                        className={"n-scrollbar"}
                        style={{
                            "--n-scrollbar-bezier": "cubic-bezier(.4,0,.2,1)",
                            "--n-scrollbar-color": "rgba(255,255,255,0.2)",
                            "--n-scrollbar-color-hover": "rgba(255,255,255,0.3)",
                            "--n-scrollbar-border-radius": "5px",
                            "--n-scrollbar-width": "5px",
                            "--n-scrollbar-height": "5px",
                            "--n-scrollbar-rail-top-horizontal-top": "4px",
                            "--n-scrollbar-rail-right-horizontal-top": "2px",
                            "--n-scrollbar-rail-bottom-horizontal-top": "auto",
                            "--n-scrollbar-rail-left-horizontal-top": "2px",
                            "--n-scrollbar-rail-top-horizontal-bottom": "auto",
                            "--n-scrollbar-rail-right-horizontal-bottom": "2px",
                            "--n-scrollbar-rail-bottom-horizontal-bottom": "4px",
                            "--n-scrollbar-rail-left-horizontal-bottom": "2px",
                            "--n-scrollbar-rail-top-vertical-right": "2px",
                            "--n-scrollbar-rail-right-vertical-right": "4px",
                            "--n-scrollbar-rail-bottom-vertical-right": "2px",
                            "--n-scrollbar-rail-left-vertical-right": "auto",
                            "--n-scrollbar-rail-top-vertical-left": "2px",
                            "--n-scrollbar-rail-right-vertical-left": "auto",
                            "--n-scrollbar-rail-bottom-vertical-left": "2px",
                            "--n-scrollbar-rail-left-vertical-left": "4px",
                            "--n-scrollbar-rail-color": "transparent"
                        }}
                    >
                        <div role={"none"} className={"n-scrollbar-container"}>
                            <div
                                role={"none"}
                                className={"n-scrollbar-content"}
                                style={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    minHeight: "0px"
                                }}
                            >
                                <div data-v-067a1f02={""} className={"phantom-sidebar-inner"}>
                                    <Sidebar />
                                    <div data-v-067a1f02={""} className={"sidebar-bottom"}>
                                        <SidebarSupportButton />
                                    </div>
                                    <div data-v-067a1f02={""} className={"phantom-sidebar-footer"}>
                                        <div data-v-067a1f02={""} className={"sidebar-user-footer"}>
                                            <SidebarUser username={username} imageId={imageId} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"n-scrollbar-rail n-scrollbar-rail--vertical n-scrollbar-rail--vertical--right n-scrollbar-rail--disabled"}>
                        </div>
                    </div>
                    <div className={"n-layout-sider__border"}>
                    </div>
                </aside>
            )
        }
    

export default PhantomSidebar
