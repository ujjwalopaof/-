import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


// Component

        function VitalBar({ width }: { width: string }) {
            return (
                <div className={"vital-bar-wrap"}>
                    <div className={"vital-bar vital-bar--level"} style={{width}}>
                    </div>
                </div>
            )
        }
    

export default VitalBar
