import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Gear_settings from './icons/Gear_settings.tsx'
import Chat_message from './icons/Chat_message.tsx'
import User_group from './icons/User_group.tsx'
import Calendar_event from './icons/Calendar_event.tsx'
import Code_tags from './icons/Code_tags.tsx'
import Lightning_bolt from './icons/Lightning_bolt.tsx'
import History_clock from './icons/History_clock.tsx'
import Gear_settings1 from './icons/Gear_settings1.tsx'
import Automation from './Automation.tsx'


    
// Component

        function DashboardTabs({
            activeTab
        }: {
            activeTab: "chat" | "tab" | "commands" | "macros" | "automations" | "activity" | "settings";
        }) {
            return (
                <div className={"n-tabs-wrapper"}>
                    <div className={"n-tabs-scroll-padding"} style={{width:"0px"}}>
                    </div>
                    <TabsItem
                        active={activeTab === "chat"}
                        label=" Chat"
                        icon={<Chat_message />}
                        labelRoutes={["/dashboard?step=50", "/dashboard?step=51", "/dashboard?step=54"]}
                    />
                    <TabsItem
                        active={activeTab === "tab"}
                        padded={true}
                        label=" Tab"
                        icon={<User_group />}
                        tabRoutes={["/dashboard?step=6", "/dashboard?step=53", "/dashboard?step=55"]}
                        labelRoutes={["/dashboard?step=2", "/dashboard?step=4", "/dashboard?step=57"]}
                    />
                    <TabsItem
                        active={activeTab === "commands"}
                        padded={true}
                        label=" Commands"
                        icon={<Calendar_event />}
                        tabRoutes={["/dashboard?step=5"]}
                        labelRoutes={["/dashboard?step=3", "/dashboard?step=7", "/dashboard?step=22"]}
                    />
                    <TabsItem
                        active={activeTab === "macros"}
                        padded={true}
                        label=" Macros"
                        icon={<Code_tags />}
                        labelRoutes={["/dashboard?step=12"]}
                    />
                    <TabsItem
                        active={activeTab === "automations"}
                        padded={true}
                        label=" Automations"
                        icon={<Lightning_bolt />}
                        tabRoutes={["/dashboard?step=23"]}
                    />
                    <TabsItem
                        active={activeTab === "activity"}
                        padded={true}
                        label=" Activity Log"
                        icon={<History_clock />}
                        labelRoutes={["/dashboard?step=46"]}
                    />
                    <TabsItem
                        active={activeTab === "settings"}
                        padded={true}
                        label=" Settings"
                        icon={<Gear_settings1 />}
                        tabRoutes={["/dashboard?step=47"]}
                    />
                    <div className={"n-tabs-scroll-padding"} style={{width:"0px"}}>
                    </div>
                </div>
            )
        }
    

// Subcomponents

        function TabsItem({
            active,
            padded = false,
            label,
            icon,
            tabRoutes,
            labelRoutes
        }: {
            active: boolean;
            padded?: boolean;
            label: string;
            icon: React.ReactNode;
            tabRoutes?: string[];
            labelRoutes?: string[];
        }) {
            const tabProps = tabRoutes
                ? {"data-navigate-routes": JSON.stringify(tabRoutes)}
                : {};
            const labelProps = labelRoutes
                ? {"data-navigate-routes": JSON.stringify(labelRoutes)}
                : {};

            return (
                <div className={"n-tabs-tab-wrapper"}>
                    {padded && (
                        <div className={"n-tabs-tab-pad"}>
                        </div>
                    )}
                    <div
                        className={active ? "n-tabs-tab n-tabs-tab--active" : "n-tabs-tab"}
                        {...tabProps}
                    >
                        <span className={"n-tabs-tab__label"} {...labelProps}>
                            {icon}
                            {label}
                        </span>
                    </div>
                </div>
            )
        }
    

export default DashboardTabs
