import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Memory_chip from './icons/Memory_chip.tsx'


    
// Component

        function ActivityRam({ ram }: { ram: number }) {
            return (
                <div data-v-cef28e8e={""} className={"activity-ram"}>
                    <i
                        data-v-cef28e8e={""}
                        role={"img"}
                        className={"n-icon"}
                        style={{"--n-bezier":"cubic-bezier(.4,0,.2,1)", fontSize:"12px"}}
                    >
                        <Memory_chip />
                    </i>
                    {` ${ram} MB RAM `}
                </div>
            )
        }
    

export default ActivityRam
