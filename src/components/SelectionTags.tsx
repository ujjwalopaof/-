import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import SuffixArrow from './SuffixArrow.tsx'
import SelectionInput from './SelectionInput.tsx'


// Component
function SelectionTags() {
    return <div className={"n-base-selection-tags"} tabIndex={"0"}>
        <div className={"n-base-selection-input-tag"}>
            <SelectionInput />
            <span className={"n-base-selection-input-tag__mirror"}>
            </span>
        </div>
        <div className={"n-base-loading n-base-suffix"} role={"img"}>
            <div className={"n-base-loading__placeholder"}>
                <div className={"n-base-clear"}>
                    <div className={"n-base-clear__placeholder"}>
                        <SuffixArrow />
                    </div>
                </div>
            </div>
        </div>
    </div>
}


export default SelectionTags
