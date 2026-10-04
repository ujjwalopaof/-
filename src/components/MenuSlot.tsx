import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


        type MenuSlotData = {
            slotNumber: number;
            windowNumber: number;
        };
    
// Component

        function MenuSlot({
            dataId,
            isSelected = false
        }: {
            dataId: string;
            isSelected?: boolean;
        }) {
            const { slotNumber, windowNumber }: MenuSlotData = getMenuSlotData(dataId);

            return (
                <button
                    data-v-92fb65f8={""}
                    type={"button"}
                    className={isSelected ? "slot-cell selected" : "slot-cell"}
                    title={`Menu slot ${slotNumber} (window ${windowNumber})`}
                >
                    <span data-v-92fb65f8={""} className={"slot-num"}>
                        {slotNumber}
                    </span>
                </button>
            );
        }
    


        function getMenuSlotData(id: string): MenuSlotData {
            const key = String(id);
            const slotNumber = Number(key) + 1;

            if (!Number.isInteger(slotNumber) || slotNumber < 1 || slotNumber > 27) {
                return {
                    slotNumber: 1,
                    windowNumber: 0
                };
            }

            return {
                slotNumber,
                windowNumber: slotNumber - 1
            };
        }
    

export default MenuSlot
