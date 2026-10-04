import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Checkmark_in_circle from './icons/Checkmark_in_circle.tsx'


        type SystemMessagesData = {
            messages: Array<{
                timestamp: string;
                content: string;
                navigateRoutes?: string[];
            }>;
        };
    
// Component

        function SystemMessages({
            dataId
        }: {
            dataId: string;
        }) {
            const { messages }: SystemMessagesData = getSystemMessagesData(dataId);

            return (
                <div data-v-0a8e1c82={""} className={"messages"}>
                    {messages.map((message, index) => (
                        <SystemMessage
                            key={index}
                            timestamp={message.timestamp}
                            content={message.content}
                            navigateRoutes={message.navigateRoutes}
                        />
                    ))}
                </div>
            );
        }
    

// Subcomponents

        function SystemMessage({
            timestamp,
            content,
            navigateRoutes
        }: {
            timestamp: string;
            content: string;
            navigateRoutes?: string[];
        }) {
            return (
                <div data-v-0a8e1c82={""} className={"message msg-system"}>
                    <span data-v-0a8e1c82={""} className={"timestamp"}>
                        {timestamp}
                    </span>
                    <span data-v-0a8e1c82={""} className={"sender system-tag"}>
                        <Checkmark_in_circle />
                        {` SYSTEM • `}
                    </span>
                    <span data-v-0a8e1c82={""} className={"content"}>
                        {navigateRoutes === undefined ? (
                            <span>
                                {content}
                            </span>
                        ) : (
                            <span data-navigate-routes={JSON.stringify(navigateRoutes)}>
                                {content}
                            </span>
                        )}
                    </span>
                </div>
            );
        }
    

function getSystemMessagesData(id): SystemMessagesData  {
    switch (String(id)) {
    case "0":
        return ({
                    "messages": [
                        {
                            "timestamp": "[3:00:30 PM]",
                            "content": "Connecting to donutsmp.net:25565 via proxy...",
                            "navigateRoutes": undefined
                        },
                        {
                            "timestamp": "[3:01:14 PM]",
                            "content": "Connected to donutsmp.net:25565",
                            "navigateRoutes": undefined
                        }
                    ]
                });
    case "1":
        return ({
                    "messages": [
                        {
                            "timestamp": "[3:00:30 PM]",
                            "content": "Connecting to donutsmp.net:25565 via proxy...",
                            "navigateRoutes": undefined
                        },
                        {
                            "timestamp": "[3:01:14 PM]",
                            "content": "Connected to donutsmp.net:25565",
                            "navigateRoutes": undefined
                        },
                        {
                            "timestamp": "[3:47:58 PM]",
                            "content": "Connecting to donutsmp.net:25565 via proxy...",
                            "navigateRoutes": undefined
                        },
                        {
                            "timestamp": "[3:48:03 PM]",
                            "content": `Kicked: You are already online
                        You are connected to proxy: f9d3b22f8628
                        Connect reason: proxy request-join-cache login`,
                            "navigateRoutes": ["/dashboard?step=52"]
                        },
                        {
                            "timestamp": "[3:48:04 PM]",
                            "content": "Already online on server proxy: waiting 3m before retry (1/3)",
                            "navigateRoutes": undefined
                        },
                        {
                            "timestamp": "[3:49:03 PM]",
                            "content": "Connecting to donutsmp.net:25565 via proxy...",
                            "navigateRoutes": undefined
                        }
                    ]
                });
    case "2":
        return ({
                    "messages": [
                        {
                            "timestamp": "[3:00:30 PM]",
                            "content": "Connecting to donutsmp.net:25565 via proxy...",
                            "navigateRoutes": undefined
                        },
                        {
                            "timestamp": "[3:01:14 PM]",
                            "content": "Connected to donutsmp.net:25565",
                            "navigateRoutes": undefined
                        },
                        {
                            "timestamp": "[3:47:58 PM]",
                            "content": "Connecting to donutsmp.net:25565 via proxy...",
                            "navigateRoutes": undefined
                        },
                        {
                            "timestamp": "[3:48:03 PM]",
                            "content": `Kicked: You are already online
                        You are connected to proxy: f9d3b22f8628
                        Connect reason: proxy request-join-cache login`,
                            "navigateRoutes": ["/dashboard?step=52"]
                        },
                        {
                            "timestamp": "[3:48:04 PM]",
                            "content": "Already online on server proxy: waiting 3m before retry (1/3)",
                            "navigateRoutes": undefined
                        },
                        {
                            "timestamp": "[3:49:03 PM]",
                            "content": "Connecting to donutsmp.net:25565 via proxy...",
                            "navigateRoutes": undefined
                        },
                        {
                            "timestamp": "[3:49:47 PM]",
                            "content": "Connected to donutsmp.net:25565",
                            "navigateRoutes": undefined
                        }
                    ]
                });
    case "3":
        return ({
                    "messages": [
                        {
                            "timestamp": "[3:00:30 PM]",
                            "content": "Connecting to donutsmp.net:25565 via proxy...",
                            "navigateRoutes": undefined
                        },
                        {
                            "timestamp": "[3:01:14 PM]",
                            "content": "Connected to donutsmp.net:25565",
                            "navigateRoutes": undefined
                        },
                        {
                            "timestamp": "[3:47:58 PM]",
                            "content": "Connecting to donutsmp.net:25565 via proxy...",
                            "navigateRoutes": undefined
                        },
                        {
                            "timestamp": "[3:48:03 PM]",
                            "content": "Kicked: You are already online\nYou are connected to proxy: f9d3b22f8628\nConnect reason: proxy request-join-cache login",
                            "navigateRoutes": undefined
                        },
                        {
                            "timestamp": "[3:48:04 PM]",
                            "content": "Already online on server proxy: waiting 3m before retry (1/3)",
                            "navigateRoutes": undefined
                        },
                        {
                            "timestamp": "[3:49:03 PM]",
                            "content": "Connecting to donutsmp.net:25565 via proxy...",
                            "navigateRoutes": undefined
                        },
                        {
                            "timestamp": "[3:49:47 PM]",
                            "content": "Connected to donutsmp.net:25565",
                            "navigateRoutes": undefined
                        }
                    ]
                });
    default:
        return ({
                    "messages": [
                        {
                            "timestamp": "[3:00:30 PM]",
                            "content": "Connecting to donutsmp.net:25565 via proxy...",
                            "navigateRoutes": undefined
                        },
                        {
                            "timestamp": "[3:01:14 PM]",
                            "content": "Connected to donutsmp.net:25565",
                            "navigateRoutes": undefined
                        }
                    ]
                });
    }
}


export default SystemMessages
