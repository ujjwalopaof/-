import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Img from './Img.tsx'
import TinyButton from './TinyButton.tsx'


// Component

        function InventoryArmor() {
            return (
                <div className={"inventory-armor-col"} style={{position:"relative"}}>
                    <ArmorSlot />
                    <ArmorSlot />
                    <ArmorSlot />
                    <ArmorSlot />
                    <div className={"inv-slot offhand droppable"}>
                        <Img id="12" />
                        <span className={"inv-count"}>
                            58
                        </span>
                    </div>
                    <TinyButton dataId="0" />
                </div>
            )
        }
    

// Subcomponents

        function ArmorSlot() {
            return (
                <div className={"inv-slot armor droppable"}>
                </div>
            )
        }
    

export default InventoryArmor
