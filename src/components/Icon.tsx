import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Arrows_sync from './icons/Arrows_sync.tsx'
import Prohibition_circle from './icons/Prohibition_circle.tsx'
import Power_button from './icons/Power_button.tsx'
import Arrow_enter from './icons/Arrow_enter.tsx'


    
// Component

        function Icon({
            icon
        }: {
            icon: "sync" | "prohibition" | "power" | "enter";
        }) {
            return (
                <i
                    data-v-cef28e8e={""}
                    role={"img"}
                    className={"n-icon"}
                    style={{"--n-bezier":"cubic-bezier(.4,0,.2,1)", fontSize:"16px"}}
                >
                    {icon === "sync" ? (
                        <Arrows_sync />
                    ) : icon === "prohibition" ? (
                        <Prohibition_circle />
                    ) : icon === "power" ? (
                        <Power_button />
                    ) : (
                        <Arrow_enter />
                    )}
                </i>
            )
        }
    

export default Icon
