import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Puzzle_piece_close from './icons/Puzzle_piece_close.tsx'
import Icon from './Icon.tsx'


// Component
function EmptyIcon() {
    return <div className={"n-empty__icon"}>
        <i className={"n-base-icon"}>
            <Puzzle_piece_close />
        </i>
    </div>
}


export default EmptyIcon
