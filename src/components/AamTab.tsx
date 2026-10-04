import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Img from './Img.tsx'


    
// Component

        function AamTab({
            imageId,
            label,
            active = false
        }: {
            imageId: string;
            label: string;
            active?: boolean;
        }) {
            return (
                <button
                    data-v-eee196c5={""}
                    type={"button"}
                    className={active ? "aam-tab aam-tab--active" : "aam-tab"}
                >
                    <Img id={imageId} />
                    <span data-v-eee196c5={""} className={"aam-tab-label"}>
                        {label}
                    </span>
                </button>
            )
        }
    

export default AamTab
