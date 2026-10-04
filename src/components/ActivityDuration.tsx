import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Stopwatch from './icons/Stopwatch.tsx'


    
// Component

        function ActivityDuration({ duration }: { duration: string }) {
            return (
                <div data-v-cef28e8e={""} className={"activity-duration"}>
                    <i
                        data-v-cef28e8e={""}
                        role={"img"}
                        className={"n-icon"}
                        style={{"--n-bezier":"cubic-bezier(.4,0,.2,1)", fontSize:"12px"}}
                    >
                        <Stopwatch />
                    </i>
                    {duration}
                </div>
            )
        }
    

export default ActivityDuration
