import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import IconButton from './IconButton.tsx'
import Icon from './Icon.tsx'


// Component
function InputSuffix() {
    return <div className={"n-input__suffix"}>
        
                <IconButton dataId="0" disabled={false} />
            
        
                <IconButton dataId="2" disabled={false} />
            
    </div>
}


export default InputSuffix
