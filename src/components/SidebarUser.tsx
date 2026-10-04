import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Img from './Img.tsx'
import Gear_settings from './icons/Gear_settings.tsx'
import Sidebar from './Sidebar.tsx'


// Component

        function SidebarUser({
            username,
            imageId
        }: {
            username: string;
            imageId: string;
        }) {
            return (
                <button data-v-067a1f02={""} type={"button"} className={"sidebar-user-row"}>
                    <Img id={imageId} />
                    <span data-v-067a1f02={""} className={"sidebar-user-name"}>
                        {username}
                    </span>
                    <span data-v-067a1f02={""} className={"sidebar-settings-icon"}>
                        <Gear_settings />
                    </span>
                </button>
            )
        }
    

export default SidebarUser
