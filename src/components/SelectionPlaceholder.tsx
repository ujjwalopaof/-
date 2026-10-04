import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


// Component

        function SelectionPlaceholder({ text }: { text: string }) {
            return (
                <div className={"n-base-selection-placeholder n-base-selection-overlay"}>
                    <div className={"n-base-selection-placeholder__inner"}>
                        {text}
                    </div>
                </div>
            )
        }
    

export default SelectionPlaceholder
