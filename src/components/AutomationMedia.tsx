import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Img from './Img.tsx'
import Automation from './Automation.tsx'


    
// Component

        function AutomationMedia({ imgId }: { imgId: string }) {
            return (
                <div data-v-830291ff={""} className={"automation-media automation-media--logo"}>
                    <Img id={imgId} />
                </div>
            )
        }
    

export default AutomationMedia
