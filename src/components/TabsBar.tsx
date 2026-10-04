import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


    
// Component

        function TabsBar({
            left,
            maxWidth
        }: {
            left: string;
            maxWidth: string;
        }) {
            return (
                <div
                    className={"n-tabs-bar"}
                    style={{left, maxWidth, width:"8192px"}}
                >
                </div>
            )
        }
    

export default TabsBar
