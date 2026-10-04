import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


// Component

        function TabsScroll() {
            return (
                <div className={"v-x-scroll"}>
                    <div className={"n-tabs-nav-scroll-content"}>
                        <div className={"n-tabs-wrapper"}>
                            <div className={"n-tabs-scroll-padding"} style={{width:"0px"}}>
                            </div>
                            <Tab label="Scheduled" active={true} />
                            <Tab label="World Change" active={false} />
                            <div className={"n-tabs-scroll-padding"} style={{width:"0px"}}>
                            </div>
                        </div>
                        <div className={"n-tabs-bar"} style={{left:"0px", maxWidth:"995px", width:"8192px"}}>
                        </div>
                    </div>
                </div>
            )
        }
    

// Subcomponents

        function Tab({ label, active }: { label: string; active: boolean }) {
            return (
                <div className={"n-tabs-tab-wrapper"}>
                    {!active && (
                        <div className={"n-tabs-tab-pad"}>
                        </div>
                    )}
                    <div className={active ? "n-tabs-tab n-tabs-tab--active" : "n-tabs-tab"}>
                        <span className={"n-tabs-tab__label"}>
                            {label}
                        </span>
                    </div>
                </div>
            )
        }
    

export default TabsScroll
