import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import MacroBack from './MacroBack.tsx'
import MacroOption from './MacroOption.tsx'


        type WorkflowPickerData = {
            title: string;
            groups: Array<{
                title: string;
                optionIds: string[];
            }>;
        };
    
// Component

        function WorkflowPicker({ dataId }: { dataId: string }) {
            const data: WorkflowPickerData = getWorkflowPickerData(dataId);

            return (
                <section data-v-83bc3aca={""} className={"config-section config-section--workflow"}>
                    <div data-v-83bc3aca={""} className={"config-section-header"}>
                        <h3 data-v-83bc3aca={""} className={"config-section-title"}>
                            Workflow
                        </h3>
                    </div>
                    <div data-v-04074ca5={""} data-v-83bc3aca={""} className={"macro-builder"}>
                        <div data-v-04074ca5={""} className={"macro-picker"} role={"dialog"}>
                            <MacroBack />
                            <div data-v-04074ca5={""} className={"macro-picker-intro"}>
                                <p data-v-04074ca5={""} className={"macro-picker-title"}>
                                    {data.title}
                                </p>
                            </div>
                            {data.groups.map((group) => (
                                <PickerGroup
                                    key={group.title}
                                    title={group.title}
                                    optionIds={group.optionIds}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            );
        }
    

// Subcomponents

        function PickerGroup({
            title,
            optionIds
        }: {
            title: string;
            optionIds: string[];
        }) {
            return (
                <div data-v-04074ca5={""} className={"macro-picker-group"}>
                    <h4 data-v-04074ca5={""} className={"macro-picker-group-title"}>
                        {title}
                    </h4>
                    <div data-v-04074ca5={""} className={"macro-picker-grid"}>
                        {optionIds.map((optionId) => (
                            <MacroOption key={optionId} dataId={optionId} />
                        ))}
                    </div>
                </div>
            );
        }
    


        function getWorkflowPickerData(id: string): WorkflowPickerData {
            const dataId = String(id);

            const data: Record<string, WorkflowPickerData> = {
                "1": {
                    title: "Choose a trigger",
                    groups: [
                        { title: "Connection", optionIds: ["0", "1", "2"] },
                        { title: "Timing", optionIds: ["3"] },
                        { title: "Chat", optionIds: ["4"] },
                        { title: "Health", optionIds: ["5", "6"] }
                    ]
                },
                "3": {
                    title: "Choose an action",
                    groups: [
                        { title: "Clicks", optionIds: ["7", "8", "9"] },
                        { title: "Chat", optionIds: ["10"] },
                        { title: "GUI & Inventory", optionIds: ["11", "12", "13", "14"] },
                        { title: "Held Item & Drops", optionIds: ["15", "16", "17", "18", "19"] },
                        { title: "Movement", optionIds: ["20", "21", "22", "23"] },
                        { title: "World", optionIds: ["24", "25"] },
                        { title: "Flow", optionIds: ["26", "27"] }
                    ]
                },
                "5": {
                    title: "Choose an action",
                    groups: [
                        { title: "Clicks", optionIds: ["7", "28", "29"] },
                        { title: "Chat", optionIds: ["10"] },
                        { title: "GUI & Inventory", optionIds: ["11", "12", "13", "14"] },
                        { title: "Held Item & Drops", optionIds: ["15", "16", "17", "18", "19"] },
                        { title: "Movement", optionIds: ["20", "21", "22", "23"] },
                        { title: "World", optionIds: ["24", "25"] },
                        { title: "Flow", optionIds: ["26", "27"] }
                    ]
                },
                "7": {
                    title: "Choose an action",
                    groups: [
                        { title: "Clicks", optionIds: ["7", "28", "9"] },
                        { title: "Chat", optionIds: ["10"] },
                        { title: "GUI & Inventory", optionIds: ["11", "12", "13", "14"] },
                        { title: "Held Item & Drops", optionIds: ["15", "16", "17", "18", "19"] },
                        { title: "Movement", optionIds: ["20", "21", "22", "23"] },
                        { title: "World", optionIds: ["24", "25"] },
                        { title: "Flow", optionIds: ["26", "27"] }
                    ]
                }
            };

            return data[dataId] ?? data["1"];
        }
    

export default WorkflowPicker
