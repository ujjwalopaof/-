import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


        type ConfigFieldHeaderData = {
            label: string;
            description: string;
        };
    
// Component

        function ConfigFieldHeader({ dataId }: { dataId: string }) {
            const { label, description }: ConfigFieldHeaderData = getConfigFieldHeaderData(dataId);

            return (
                <div data-v-92c44818={""} className={"config-field-header"}>
                    <span data-v-92c44818={""} className={"config-field-label"}>
                        {label}
                    </span>
                    <p data-v-92c44818={""} className={"config-field-desc"}>
                        {description}
                    </p>
                </div>
            );
        }
    


        function getConfigFieldHeaderData(id: string): ConfigFieldHeaderData {
            const key = String(id);

            const data: Record<string, ConfigFieldHeaderData> = {
                "0": {
                    label: "Sell Command",
                    description: "Command used to open the sell menu."
                },
                "1": {
                    label: "Run Every (seconds)",
                    description: "Base interval between automatic sell runs."
                },
                "2": {
                    label: "Max stacks per run (0 = all)",
                    description: "Limits stacks sold per run; set 0 to sell all matches."
                },
                "3": {
                    label: "Delay between clicks (ms)",
                    description: "Base delay between shift-click actions."
                },
                "4": {
                    label: "Click randomization (ms)",
                    description: "Random extra delay added to each click gap."
                },
                "5": {
                    label: "Interval jitter (%)",
                    description: "Adds random variance to the run interval."
                },
                "6": {
                    label: "Pause between item types (ms)",
                    description: "Pause inserted when switching to the next item type."
                },
                "7": {
                    label: "Hesitation chance (%)",
                    description: "Chance to add an extra pause after each stack click."
                },
                "8": {
                    label: "Hesitation pause (ms)",
                    description: "Length of the extra hesitation pause when triggered."
                }
            };

            return data[key] ?? data["0"];
        }
    

export default ConfigFieldHeader
