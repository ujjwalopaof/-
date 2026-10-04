import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


    
// Component

        function TimingDisplay({ duration }: { duration?: string }) {
            return (
                <div style={{display:"flex", alignItems:"center", gap:"8px"}}>
                    {duration !== undefined && (
                        <span style={{color:"rgb(239, 68, 68)", fontSize:"12px", fontWeight:"600", fontVariantNumeric:"tabular-nums"}}>
                            {duration}
                        </span>
                    )}
                </div>
            )
        }
    

export default TimingDisplay
