import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Close_x_mark from './icons/Close_x_mark.tsx'
import Close_x_mark1 from './icons/Close_x_mark1.tsx'


    
// Component

        function CloseButton({
            className,
            iconVariant
        }: {
            className: string;
            iconVariant: "dialog" | "card";
        }) {
            return (
                <button type={"button"} tabIndex={"-1"} className={className}>
                    <i className={"n-base-icon"}>
                        {iconVariant === "dialog" ? <Close_x_mark /> : <Close_x_mark1 />}
                    </i>
                </button>
            )
        }
    

export default CloseButton
