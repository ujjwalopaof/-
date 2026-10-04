import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Switch from './Switch.tsx'
import ConfigureButton from './ConfigureButton.tsx'
import RunButton from './RunButton.tsx'


        type AutomationData = {
            title: string;
            description: string;
            configureDataId: string;
            activeConfigureDataId?: string;
            activeSteps: number[];
            routeSensitive: boolean;
            hasRunButton: boolean;
        };
    
// Component

        function Automation({ dataId }: { dataId: string }) {
            const location = useLocation()
            const data: AutomationData = getAutomationData(dataId)
            const route = location.pathname + location.search + location.hash
            const stepMatch = route.match(/^\/dashboard\?step=(\d+)$/)
            const step = stepMatch ? Number(stepMatch[1]) : null
            const isSupportedStep = step !== null && step >= 23 && step <= 45
            const isWaveActive = step !== null && data.activeSteps.includes(step)

            return (
                <div data-v-830291ff={""} className={"automation-body"}>
                    <div data-v-830291ff={""} className={"automation-header"}>
                        <div data-v-830291ff={""} className={"automation-title-block"}>
                            <span data-v-830291ff={""} className={"automation-name"}>
                                {data.title}
                            </span>
                        </div>
                        <Switch />
                    </div>
                    <p data-v-830291ff={""} className={"automation-desc"}>
                        {data.description}
                    </p>
                    <div data-v-830291ff={""} className={"automation-actions"}>
                        {data.routeSensitive ? (
                            isSupportedStep ? (
                                <ConfigureButton
                                    dataId={
                                        isWaveActive
                                            ? data.activeConfigureDataId!
                                            : data.configureDataId
                                    }
                                    isWaveActive={isWaveActive}
                                />
                            ) : null
                        ) : (
                            <ConfigureButton
                                dataId={data.configureDataId}
                                isWaveActive={false}
                            />
                        )}
                        {data.hasRunButton ? <RunButton /> : null}
                    </div>
                </div>
            )
        }
    


        function getAutomationData(id: string): AutomationData {
            const stringId = String(id)

            const data: Record<string, AutomationData> = {
                "0": {
                    title: "Auto Disconnect Near Players",
                    description: "Disconnects when someone you don't trust gets too close.",
                    configureDataId: "0",
                    activeConfigureDataId: "1",
                    activeSteps: [36],
                    routeSensitive: true,
                    hasRunButton: false
                },
                "1": {
                    title: "Leave Area Alert",
                    description: "Disconnects or runs a command if you leave a set area.",
                    configureDataId: "2",
                    activeConfigureDataId: "3",
                    activeSteps: [38],
                    routeSensitive: true,
                    hasRunButton: true
                },
                "2": {
                    title: "Auto Eat",
                    description: "Eats food from your inventory or offhand when hunger gets low.",
                    configureDataId: "4",
                    activeConfigureDataId: "5",
                    activeSteps: [40, 42],
                    routeSensitive: true,
                    hasRunButton: true
                },
                "3": {
                    title: "Custom GUI Command",
                    description: "Opens a menu via command, block right-click, or hotbar right-click on a timer or server event.",
                    configureDataId: "6",
                    activeSteps: [],
                    routeSensitive: false,
                    hasRunButton: true
                },
                "4": {
                    title: "DonutSMP Auto Sell",
                    description: "Sells items from your inventory on a timer.",
                    configureDataId: "7",
                    activeSteps: [],
                    routeSensitive: false,
                    hasRunButton: true
                },
                "5": {
                    title: "Sell Axe",
                    description: "Holds left click with your sell axe and keeps the loop running.",
                    configureDataId: "8",
                    activeSteps: [],
                    routeSensitive: false,
                    hasRunButton: false
                },
                "6": {
                    title: "DonutSMP Spawner Sell",
                    description: "Opens your spawner and sells stored drops on a timer.",
                    configureDataId: "9",
                    activeSteps: [],
                    routeSensitive: false,
                    hasRunButton: true
                },
                "7": {
                    title: "DonutSMP Spawner Drop",
                    description: "Empties spawner slot 45, then drops remaining loot on a timer.",
                    configureDataId: "10",
                    activeConfigureDataId: "11",
                    activeSteps: [32],
                    routeSensitive: true,
                    hasRunButton: true
                },
                "8": {
                    title: "DonutSMP Staff Check",
                    description: "Watches the tab list for staff and notifies your Discord webhook.",
                    configureDataId: "12",
                    activeSteps: [],
                    routeSensitive: false,
                    hasRunButton: false
                }
            }

            return data[stringId] ?? {
                title: "",
                description: "",
                configureDataId: "",
                activeSteps: [],
                routeSensitive: false,
                hasRunButton: false
            }
        }
    

export default Automation
