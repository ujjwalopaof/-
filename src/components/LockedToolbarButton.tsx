import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


// Component

        function LockedToolbarButton({
            icon
        }: {
            icon: React.ReactNode;
        }) {
            return (
                <button data-v-0a8e1c82={""} className={"toolbar-btn locked"}>
                    {icon}
                </button>
            )
        }
    

export default LockedToolbarButton
