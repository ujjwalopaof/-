import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


        type TextInputData = {
            type: "text" | "password";
            placeholder: string;
            value: string;
            disabled: boolean;
            maxLength?: string;
        };
    
// Component

        function TextInput({ dataId }: { dataId: string }) {
            const data: TextInputData = getTextInputData(dataId);

            return (
                <input
                    type={data.type}
                    className={"n-input__input-el"}
                    placeholder={data.placeholder}
                    {...(data.maxLength !== undefined ? { maxLength: data.maxLength } : {})}
                    size={"20"}
                    value={data.value}
                    {...(data.disabled ? { disabled: "" } : {})}
                >
                </input>
            );
        }
    


        function getTextInputData(id: string): TextInputData {
            const key = String(id);
            const data: Record<string, TextInputData> = {
                "0": { type: "text", placeholder: "host", value: "donutsmp.net", disabled: false },
                "1": { type: "text", placeholder: "host", value: "donutsmp.net", disabled: true },
                "2": { type: "password", placeholder: "host", value: "donutsmp.net", disabled: true },
                "3": { type: "text", placeholder: "25565", value: "25565", disabled: false },
                "4": { type: "text", placeholder: "25565", value: "25565", disabled: true },
                "5": { type: "text", placeholder: "Please Input", value: "5", disabled: false },
                "6": { type: "text", placeholder: "Type a message or /command...", value: "", disabled: true },
                "7": { type: "text", placeholder: "Search logs...", value: "", disabled: false },
                "8": { type: "text", placeholder: "Search activity...", value: "", disabled: false },
                "9": { type: "text", placeholder: "Type a message or /command...", value: "", disabled: false },
                "10": { type: "text", placeholder: "e.g. Sell", value: "", disabled: false },
                "11": { type: "text", placeholder: "/sell", value: "", disabled: false },
                "12": { type: "text", placeholder: "Please Input", value: "10", disabled: false },
                "13": { type: "text", placeholder: "e.g. Home on death", value: "New Macro", disabled: false, maxLength: "64" },
                "14": { type: "text", placeholder: "Please Input", value: "400", disabled: false },
                "15": { type: "text", placeholder: "Please Input", value: "14", disabled: false },
                "16": { type: "text", placeholder: "Please Input", value: "40", disabled: false },
                "17": { type: "text", placeholder: "Please Input", value: "50", disabled: false },
                "18": { type: "text", placeholder: "e.g. 23h+", value: "", disabled: false },
                "19": { type: "text", placeholder: "e.g. 30h", value: "", disabled: false },
                "20": { type: "text", placeholder: "Please Input", value: "/ah sell axe", disabled: false },
                "21": { type: "text", placeholder: "Search items... (e.g. cobblestone, sweet berries)", value: "", disabled: false },
                "22": { type: "text", placeholder: "Please Input", value: "/sell", disabled: false },
                "23": { type: "text", placeholder: "Please Input", value: "60", disabled: false },
                "24": { type: "text", placeholder: "Please Input", value: "0", disabled: false },
                "25": { type: "text", placeholder: "Please Input", value: "100", disabled: false },
                "26": { type: "text", placeholder: "Please Input", value: "15", disabled: false },
                "27": { type: "text", placeholder: "Please Input", value: "200", disabled: false },
                "28": { type: "text", placeholder: "Please Input", value: "8", disabled: false },
                "29": { type: "text", placeholder: "Please Input", value: "", disabled: false },
                "30": { type: "text", placeholder: "Please Input", value: "32", disabled: false },
                "31": { type: "text", placeholder: "Add player by name...", value: "", disabled: false },
                "32": { type: "text", placeholder: "Radius", value: "32", disabled: false },
                "33": { type: "text", placeholder: "Please Input", value: "/shop", disabled: false },
                "34": { type: "text", placeholder: "Please Input", value: "1", disabled: false }
            };

            return data[key] ?? {
                type: "text",
                placeholder: "Please Input",
                value: "",
                disabled: false
            };
        }
    

export default TextInput
