import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import MacroDot from './MacroDot.tsx'
import MacroDragHandle from './MacroDragHandle.tsx'
import MacroCardTitle from './MacroCardTitle.tsx'
import MacroMiniButton from './MacroMiniButton.tsx'
import AddActionButton from './AddActionButton.tsx'
import MacroLine from './MacroLine.tsx'
import MacroCardActions from './MacroCardActions.tsx'


        type WorkflowTimelineData = {
            nodes: Array<{
                label: string;
                kind: "Trigger" | "Action";
                title: string;
                summary: string;
                hasLine: boolean;
            }>;
            addRoute: string;
            actionsHeaderIsAdd: boolean;
        };
    
// Component

        function WorkflowTimeline({ dataId }: { dataId: string }) {
            const data: WorkflowTimelineData = getWorkflowTimelineData(dataId);
            const trigger = data.nodes[0];
            const actions = data.nodes.slice(1);

            return (
                <section data-v-83bc3aca={""} className={"config-section config-section--workflow"}>
                    <div data-v-83bc3aca={""} className={"config-section-header"}>
                        <h3 data-v-83bc3aca={""} className={"config-section-title"}>
                            Workflow
                        </h3>
                    </div>
                    <div data-v-04074ca5={""} data-v-83bc3aca={""} className={"macro-builder"}>
                        <div data-v-04074ca5={""} className={"macro-timeline"}>
                            <div data-v-04074ca5={""} className={"macro-phase-header"}>
                                <span data-v-04074ca5={""} className={"macro-phase-label"}>
                                    Trigger
                                </span>
                            </div>
                            <TimelineNode node={trigger} />
                            <div
                                data-v-04074ca5={""}
                                className={
                                    data.actionsHeaderIsAdd
                                        ? "macro-phase-header macro-phase-header--add"
                                        : "macro-phase-header"
                                }
                            >
                                <span data-v-04074ca5={""} className={"macro-phase-label"}>
                                    Actions
                                </span>
                            </div>
                            {actions.map((node) => (
                                <TimelineNode key={node.label} node={node} />
                            ))}
                            <TimelineAddRow route={data.addRoute} />
                        </div>
                    </div>
                </section>
            );
        }
    

// Subcomponents

        function TimelineNode({
            node
        }: {
            node: {
                label: string;
                kind: "Trigger" | "Action";
                title: string;
                summary: string;
                hasLine: boolean;
            };
        }) {
            const isTrigger = node.kind === "Trigger";

            return (
                <div data-v-04074ca5={""} className={"macro-node"}>
                    <div data-v-04074ca5={""} className={"macro-rail"}>
                        {isTrigger ? (
                            <MacroDot label={node.label} variant="trigger" />
                        ) : (
                            <MacroDot label={node.label} />
                        )}
                        {node.hasLine ? <MacroLine /> : null}
                    </div>
                    <div data-v-04074ca5={""} className={"macro-drag-col"}>
                        <MacroDragHandle locked={isTrigger} />
                    </div>
                    <div
                        data-v-04074ca5={""}
                        className={isTrigger ? "macro-card macro-card--trigger" : "macro-card"}
                    >
                        <span data-v-04074ca5={""} className={"macro-kind"}>
                            {node.kind}
                        </span>
                        <MacroCardTitle title={node.title} />
                        <p data-v-04074ca5={""} className={"macro-card-summary"}>
                            {node.summary}
                        </p>
                        {isTrigger ? (
                            <div data-v-04074ca5={""} className={"macro-card-actions"}>
                                <MacroMiniButton variant="remove" />
                            </div>
                        ) : (
                            <MacroCardActions />
                        )}
                    </div>
                </div>
            );
        }

        function TimelineAddRow({ route }: { route: string }) {
            return (
                <div data-v-04074ca5={""} className={"macro-add-row"}>
                    <div data-v-04074ca5={""} className={"macro-rail macro-rail--add"}>
                        <MacroDot label="+" variant="add" />
                    </div>
                    <div data-v-04074ca5={""} className={"macro-drag-spacer"}>
                    </div>
                    <div data-v-04074ca5={""} className={"macro-add-btns"}>
                        <AddActionButton route={route} />
                    </div>
                </div>
            );
        }
    


        function getWorkflowTimelineData(id: string): WorkflowTimelineData {
            const dataId = String(id);

            const data: Record<string, WorkflowTimelineData> = {
                "2": {
                    nodes: [
                        {
                            label: "1",
                            kind: "Trigger",
                            title: "Death",
                            summary: "When the bot dies",
                            hasLine: false
                        }
                    ],
                    addRoute: "/dashboard?step=16",
                    actionsHeaderIsAdd: true
                },
                "4": {
                    nodes: [
                        {
                            label: "1",
                            kind: "Trigger",
                            title: "Death",
                            summary: "When the bot dies",
                            hasLine: true
                        },
                        {
                            label: "2",
                            kind: "Action",
                            title: "Use Held Item",
                            summary: "One right click with whatever is in hand",
                            hasLine: false
                        }
                    ],
                    addRoute: "/dashboard?step=18",
                    actionsHeaderIsAdd: false
                },
                "6": {
                    nodes: [
                        {
                            label: "1",
                            kind: "Trigger",
                            title: "Death",
                            summary: "When the bot dies",
                            hasLine: true
                        },
                        {
                            label: "2",
                            kind: "Action",
                            title: "Use Held Item",
                            summary: "One right click with whatever is in hand",
                            hasLine: true
                        },
                        {
                            label: "3",
                            kind: "Action",
                            title: "Attack",
                            summary: "Hit whatever the bot is looking at",
                            hasLine: false
                        }
                    ],
                    addRoute: "/dashboard?step=20",
                    actionsHeaderIsAdd: false
                }
            };

            return data[dataId] ?? data["2"];
        }
    

export default WorkflowTimeline
