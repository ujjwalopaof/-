import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Switch from './Switch.tsx'


        type MacroOptionData = {
            name: string;
            description: string;
            navigateRoutes?: string[];
        };
    
// Component

        function MacroOption({ dataId }: { dataId: string }) {
            const { name, description, navigateRoutes }: MacroOptionData = getMacroOptionData(dataId);

            return (
                <button
                    data-v-04074ca5={""}
                    type={"button"}
                    className={"macro-option"}
                    {...(navigateRoutes !== undefined
                        ? { "data-navigate-routes": JSON.stringify(navigateRoutes) }
                        : {})}
                >
                    <span data-v-04074ca5={""} className={"macro-option-name"}>
                        {name}
                    </span>
                    <span data-v-04074ca5={""} className={"macro-option-desc"}>
                        {description}
                    </span>
                </button>
            );
        }
    

function getMacroOptionData(id): MacroOptionData  {
    switch (String(id)) {
    case "0":
        return ({
                  "name": "Death",
                  "description": "When the bot dies",
                  "navigateRoutes": ["/dashboard?step=15"]
                });
    case "1":
        return ({
                  "name": "Join",
                  "description": "On join or transfer",
                  "navigateRoutes": undefined
                });
    case "2":
        return ({
                  "name": "Leave",
                  "description": "On disconnect",
                  "navigateRoutes": undefined
                });
    case "3":
        return ({
                    "name": "Interval",
                    "description": "Repeating timer",
                    "navigateRoutes": undefined
                });
    case "4":
        return ({
                    "name": "Chat Message",
                    "description": "Message matches filter",
                    "navigateRoutes": undefined
                });
    case "5":
        return ({
                    "name": "Damage",
                    "description": "When taking damage",
                    "navigateRoutes": undefined
                });
    case "6":
        return ({
                  "name": "Low Health",
                  "description": "Health at or below threshold",
                  "navigateRoutes": undefined
                });
    case "7":
        return ({
                  "name": "Left Click",
                  "description": "One click: breaks a block, hits a mob, or swings",
                  "navigateRoutes": undefined
                });
    case "8":
        return ({
                  "name": "Use Held Item",
                  "description": "One right click with whatever is in hand",
                  "navigateRoutes": ["/dashboard?step=17"]
                });
    case "9":
        return ({
                  "name": "Attack",
                  "description": "Hit whatever the bot is looking at",
                  "navigateRoutes": undefined
                });
    case "10":
        return ({
                  "name": "Chat",
                  "description": "Send a message or command",
                  "navigateRoutes": undefined
                });
    case "11":
        return ({
                  "name": "Use GUI",
                  "description": "Click a slot in an open container",
                  "navigateRoutes": undefined
                });
    case "12":
        return ({
                    "name": "Use Inventory",
                    "description": "Click a slot in the bot's own inventory",
                    "navigateRoutes": undefined
                });
    case "13":
        return ({
                    "name": "Click Item",
                    "description": "Find and click a specific item",
                    "navigateRoutes": undefined
                });
    case "14":
        return ({
                    "name": "Close GUI",
                    "description": "Close an open container",
                    "navigateRoutes": undefined
                });
    case "15":
        return ({
                    "name": "Hold Item",
                    "description": "Switch to an item or hotbar slot",
                    "navigateRoutes": undefined
                });
    case "16":
        return ({
                    "name": "Swap Hands",
                    "description": "Swap main hand and off hand",
                    "navigateRoutes": undefined
                });
    case "17":
        return ({
                    "name": "Stop Using",
                    "description": "Release right click (fires bow, lowers shield)",
                    "navigateRoutes": undefined
                });
    case "18":
        return ({
                  "name": "Drop",
                  "description": "Drop one item or a whole stack",
                  "navigateRoutes": undefined
                });
    case "19":
        return ({
                  "name": "Drop All",
                  "description": "Drop the inventory, or only matching items",
                  "navigateRoutes": undefined
                });
    case "20":
        return ({
                  "name": "Move",
                  "description": "Walk forward, back, left or right",
                  "navigateRoutes": undefined
                });
    case "21":
        return ({
                  "name": "Look",
                  "description": "Rotate to a yaw and pitch",
                  "navigateRoutes": undefined
                });
    case "22":
        return ({
                  "name": "Sneak",
                  "description": "Start or stop sneaking",
                  "navigateRoutes": undefined
                });
    case "23":
        return ({
                  "name": "Jump",
                  "description": "Hold or release jump",
                  "navigateRoutes": undefined
                });
    case "24":
        return ({
                    "name": "Break Block",
                    "description": "Mine the block ahead or at coordinates",
                    "navigateRoutes": undefined
                });
    case "25":
        return ({
                    "name": "Place Block",
                    "description": "Hold a block, then right click to place it",
                    "navigateRoutes": undefined
                });
    case "26":
        return ({
                    "name": "Wait",
                    "description": "Pause before the next action",
                    "navigateRoutes": undefined
                });
    case "27":
        return ({
                  "name": "Disconnect",
                  "description": "Log the account off",
                  "navigateRoutes": undefined
                });
    case "28":
        return ({
                  "name": "Use Held Item",
                  "description": "One right click with whatever is in hand",
                  "navigateRoutes": undefined
                });
    case "29":
        return ({
                  "name": "Attack",
                  "description": "Hit whatever the bot is looking at",
                  "navigateRoutes": ["/dashboard?step=19"]
                });
    default:
        return ({
                  "name": "Death",
                  "description": "When the bot dies",
                  "navigateRoutes": ["/dashboard?step=15"]
                });
    }
}


export default MacroOption
