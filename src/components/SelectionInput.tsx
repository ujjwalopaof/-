import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


// Component
function SelectionInput() {
    return <input tabIndex={"-1"} className={"n-base-selection-input-tag__input"} value={""}>
    </input>
}


export default SelectionInput
