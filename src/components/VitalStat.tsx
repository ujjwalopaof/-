import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Red_heart from './icons/Red_heart.tsx'
import Bowl_with_food from './icons/Bowl_with_food.tsx'


    
// Component

        function VitalStat({
            icon
        }: {
            icon: "heart" | "food";
        }) {
            return (
                <div className={"vital-stat"}>
                    {icon === "heart" ? <Red_heart /> : <Bowl_with_food />}
                    <span className={"vital-value vital-value--inline"}>
                        20/20
                    </span>
                </div>
            )
        }
    

export default VitalStat
