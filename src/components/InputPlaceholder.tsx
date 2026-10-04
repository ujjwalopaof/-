import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


    
// Component

        function InputPlaceholder({ text }: { text: string }) {
            return (
                <div className={"n-input__placeholder"}>
                    <span>
                        {text}
                    </span>
                </div>
            )
        }
    

export default InputPlaceholder
