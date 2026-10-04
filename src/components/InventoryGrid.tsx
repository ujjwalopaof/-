import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Img from './Img.tsx'


// Component

        function InventoryGrid() {
            return (
                <div className={"inventory-grid"}>
                    <InventorySlot imageId="9" count={64} />
                    <InventorySlot imageId="10" count={64} />
                    <InventorySlot imageId="9" count={64} />
                    <InventorySlot imageId="9" count={64} />
                    <InventorySlot imageId="10" count={64} />
                    <InventorySlot imageId="9" count={64} />
                    <InventorySlot imageId="11" count={64} />
                    <InventorySlot imageId="11" count={64} />
                    <InventorySlot imageId="9" count={64} />
                    <InventorySlot imageId="9" count={64} />
                    <InventorySlot imageId="9" count={64} />
                    <InventorySlot imageId="12" count={53} />
                    <InventorySlot imageId="10" count={5} />
                    <InventorySlot imageId="9" count={64} />
                    <InventorySlot imageId="13" count={49} />
                    <InventorySlot imageId="14" count={3} />
                    <InventorySlot imageId="9" count={64} />
                    <InventorySlot imageId="11" count={64} />
                    <InventorySlot imageId="11" count={64} />
                    <InventorySlot imageId="11" count={24} />
                    <InventorySlot imageId="9" count={64} />
                    <InventorySlot imageId="15" count={14} />
                    <InventorySlot imageId="9" count={13} />
                    <InventorySlot />
                    <InventorySlot />
                    <InventorySlot />
                    <InventorySlot />
                    <InventorySlot imageId="16" hotkey={1} hotbar active />
                    <InventorySlot imageId="17" hotkey={2} hotbar />
                    <InventorySlot imageId="9" hotkey={3} count={64} hotbar />
                    <InventorySlot imageId="11" hotkey={4} count={64} hotbar />
                    <InventorySlot imageId="11" hotkey={5} count={64} hotbar />
                    <InventorySlot imageId="9" hotkey={6} count={64} hotbar />
                    <InventorySlot imageId="9" hotkey={7} count={64} hotbar />
                    <InventorySlot imageId="10" hotkey={8} count={64} hotbar />
                    <InventorySlot imageId="9" hotkey={9} count={64} hotbar />
                </div>
            )
        }
    

// Subcomponents

        function InventorySlot({
            imageId,
            count,
            hotkey,
            hotbar = false,
            active = false
        }: {
            imageId?: string;
            count?: number;
            hotkey?: number;
            hotbar?: boolean;
            active?: boolean;
        }) {
            const className = hotbar
                ? `inv-slot hotbar droppable${active ? " active" : ""}`
                : "inv-slot droppable";

            return (
                <div className={className}>
                    {imageId !== undefined && <Img id={imageId} />}
                    {hotkey !== undefined && (
                        <span className={active ? "inv-hotkey active" : "inv-hotkey"}>
                            {hotkey}
                        </span>
                    )}
                    {count !== undefined && (
                        <span className={"inv-count"}>
                            {count}
                        </span>
                    )}
                </div>
            )
        }
    

export default InventoryGrid
