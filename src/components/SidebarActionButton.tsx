import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Img from './Img.tsx'
import Electric_plug_spark from './icons/Electric_plug_spark.tsx'
import Sidebar from './Sidebar.tsx'


        type SidebarActionButtonData = {
            route: string;
            label: string;
            icon: React.ReactNode;
        }
    
// Component

        function SidebarActionButton({
            dataId
        }: {
            dataId: string;
        }) {
            const { route, label, icon }: SidebarActionButtonData = getSidebarActionButtonData(dataId);

            return (
                <button
                    data-v-856b3794={""}
                    type={"button"}
                    className={"sidebar-action-btn"}
                    data-navigate-routes={JSON.stringify([route])}
                >
                    {icon}
                    {` ${label} `}
                </button>
            );
        }
    


        function getSidebarActionButtonData(id: string): SidebarActionButtonData {
            const dataId = String(id);

            switch (dataId) {
                case "0":
                    return {
                        route: "/dashboard?step=58",
                        label: "Add Account",
                        icon: <Img id="4" />
                    };
                case "1":
                    return {
                        route: "/dashboard?step=61",
                        label: "Add New Server",
                        icon: <Electric_plug_spark />
                    };
                default:
                    return {
                        route: "/dashboard?step=58",
                        label: "Add Account",
                        icon: <Img id="4" />
                    };
            }
        }
    

export default SidebarActionButton
