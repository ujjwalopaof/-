import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Vertical_ellipsis from './icons/Vertical_ellipsis.tsx'
import Vertical_ellipsis_menu from './icons/Vertical_ellipsis_menu.tsx'
import Vertical_ellipsis_menu1 from './icons/Vertical_ellipsis_menu1.tsx'


    
// Component

        function MacroDragHandle({ locked }: { locked: boolean }) {
            if (locked) {
                return (
                    <button
                        data-v-04074ca5={""}
                        type={"button"}
                        className={"macro-drag-handle macro-drag-handle--locked"}
                        title={"Triggers stay at the top"}
                        disabled={""}
                    >
                        <Vertical_ellipsis_menu />
                    </button>
                )
            }

            return (
                <button
                    data-v-04074ca5={""}
                    type={"button"}
                    className={"macro-drag-handle"}
                    title={"Drag to reorder"}
                >
                    <Vertical_ellipsis_menu1 />
                </button>
            )
        }
    

export default MacroDragHandle
