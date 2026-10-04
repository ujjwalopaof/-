import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Icon from './Icon.tsx'
import ActivityDuration from './ActivityDuration.tsx'
import ActivityRam from './ActivityRam.tsx'


// Component

        function ActivityLog() {
            return (
                <div role={"none"} className={"n-scrollbar-content"}>
                    <div data-v-cef28e8e={""} className={"activity-log-list"}>
                        <ActivityLogEntry
                            type="reconnect"
                            icon="sync"
                            label="Reconnecting"
                            time="03:48:44 PM"
                            message="Already online on server proxy: waiting 3m before retry (1/3)"
                            duration={" 47m 26s"}
                            ram={551}
                        />
                        <ActivityLogEntry
                            type="kicked"
                            icon="prohibition"
                            label="Kicked"
                            time="03:48:43 PM"
                            message={
                                <span>
                                    {`Kicked: You are already online
                            You are connected to proxy: f9d3b22f8628
                            Connect reason: proxy request-join-cache login`}
                                </span>
                            }
                            minecraftMessage={true}
                            duration={" 47m 25s"}
                            ram={241}
                        />
                        <ActivityLogEntry
                            type="disconnect"
                            icon="power"
                            label="Disconnected"
                            time="03:02:51 PM"
                            message="Manually disconnected"
                            duration={" 1m 33s"}
                            ram={548}
                        />
                        <ActivityLogEntry
                            type="join"
                            icon="enter"
                            label="Manual Connection"
                            time="03:01:18 PM"
                            message="Joined server (donutsmp.net)"
                            ram={244}
                        />
                    </div>
                </div>
            )
        }
    

// Subcomponents

        function ActivityLogEntry({
            type,
            icon,
            label,
            time,
            message,
            minecraftMessage = false,
            duration,
            ram
        }: {
            type: string;
            icon: string;
            label: string;
            time: string;
            message: React.ReactNode;
            minecraftMessage?: boolean;
            duration?: string;
            ram: number;
        }) {
            return (
                <div
                    data-v-cef28e8e={""}
                    className={`activity-log-entry activity-type-${type}`}
                >
                    <div data-v-cef28e8e={""} className={"activity-icon-col"}>
                        <div
                            data-v-cef28e8e={""}
                            className={`activity-icon icon-${type}`}
                        >
                            <Icon icon={icon} />
                        </div>
                    </div>
                    <div data-v-cef28e8e={""} className={"activity-content"}>
                        <div data-v-cef28e8e={""} className={"activity-top-row"}>
                            <span data-v-cef28e8e={""} className={"activity-label"}>
                                {label}
                            </span>
                            <span data-v-cef28e8e={""} className={"activity-time"}>
                                {time}
                            </span>
                        </div>
                        <div
                            data-v-cef28e8e={""}
                            className={
                                minecraftMessage
                                    ? "activity-message activity-message-mc"
                                    : "activity-message"
                            }
                        >
                            {message}
                        </div>
                        <div data-v-cef28e8e={""} className={"activity-meta-row"}>
                            {duration !== undefined && (
                                <ActivityDuration duration={duration} />
                            )}
                            <ActivityRam ram={ram} />
                        </div>
                    </div>
                </div>
            )
        }
    

export default ActivityLog
