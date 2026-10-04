import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Img from './Img.tsx'
import AutomationMedia1 from './AutomationMedia1.tsx'
import AutomationMedia from './AutomationMedia.tsx'
import Automation from './Automation.tsx'


        type AutomationSectionData = {
            featured: boolean;
            title?: string;
            cards: Array<
                | {
                    mediaType: "default";
                    automationDataId: string;
                }
                | {
                    mediaType: "image";
                    mediaImgId: string;
                    automationDataId: string;
                }
            >;
        };
    
// Component

        function AutomationSection({
            dataId
        }: {
            dataId: string;
        }) {
            const data: AutomationSectionData = getAutomationSectionData(dataId);

            return (
                <section
                    data-v-830291ff={""}
                    {...(data.featured ? { className: "automation-featured" } : {})}
                >
                    {data.title !== undefined && (
                        <h3 data-v-830291ff={""} className={"featured-title"}>
                            {data.title}
                        </h3>
                    )}
                    <div data-v-830291ff={""} className={"automations-grid"}>
                        {data.cards.map((card, index) => (
                            <AutomationCard
                                key={index}
                                mediaType={card.mediaType}
                                mediaImgId={
                                    card.mediaType === "image"
                                        ? card.mediaImgId
                                        : undefined
                                }
                                automationDataId={card.automationDataId}
                            />
                        ))}
                    </div>
                </section>
            );
        }
    

// Subcomponents

        const automationCardStyle = {
            "--n-bezier": "cubic-bezier(.4,0,.2,1)",
            "--n-border-radius": "8px",
            "--n-color": "#080808",
            "--n-color-modal": "#080808",
            "--n-color-popover": "rgba(0,0,0,0.94)",
            "--n-color-embedded": "#080808",
            "--n-color-embedded-modal": "#080808",
            "--n-color-embedded-popover": "rgba(0,0,0,0.94)",
            "--n-color-target": "#8a63d2",
            "--n-text-color": "rgba(255,255,255,0.85)",
            "--n-line-height": "1.6",
            "--n-action-color": "rgba(255,255,255,0.06)",
            "--n-title-text-color": "#ffffff",
            "--n-title-font-weight": "500",
            "--n-close-icon-color": "rgba(255,255,255,0.52)",
            "--n-close-icon-color-hover": "rgba(255,255,255,0.52)",
            "--n-close-icon-color-pressed": "rgba(255,255,255,0.52)",
            "--n-close-color-hover": "rgba(255,255,255,.12)",
            "--n-close-color-pressed": "rgba(255,255,255,.08)",
            "--n-border-color": "#222222",
            "--n-box-shadow": "0 1px 2px -2px rgba(0,0,0,.24),0 3px 6px 0 rgba(0,0,0,.18),0 5px 12px 4px rgba(0,0,0,.12)",
            "--n-padding-top": "12px",
            "--n-padding-bottom": "12px",
            "--n-padding-left": "16px",
            "--n-font-size": "14px",
            "--n-title-font-size": "16px",
            "--n-close-size": "22px",
            "--n-close-icon-size": "18px",
            "--n-close-border-radius": "8px"
        } as React.CSSProperties;

        function AutomationCard({
            mediaType,
            mediaImgId,
            automationDataId
        }: {
            mediaType: "default" | "image";
            mediaImgId?: string;
            automationDataId: string;
        }) {
            return (
                <div
                    data-v-830291ff={""}
                    className={"n-card n-card--bordered automation-card"}
                    style={automationCardStyle}
                >
                    <div className={"n-card__content"} role={"none"}>
                        <div
                            data-v-830291ff={""}
                            className={"automation-card-inner"}
                        >
                            {mediaType === "default" ? (
                                <AutomationMedia1 />
                            ) : (
                                <AutomationMedia imgId={mediaImgId!} />
                            )}
                            <Automation dataId={automationDataId} />
                        </div>
                    </div>
                </div>
            );
        }
    

function getAutomationSectionData(id): AutomationSectionData  {
    switch (String(id)) {
    case "0":
        return ({
                    "featured": false,
                    "title": undefined,
                    "cards": [
                        { "mediaType": "default", "automationDataId": "0" },
                        { "mediaType": "default", "automationDataId": "1" },
                        { "mediaType": "default", "automationDataId": "2" },
                        { "mediaType": "default", "automationDataId": "3" }
                    ]
                });
    case "1":
        return ({
                    "featured": true,
                    "title": "Featured Automations For donutsmp.net",
                    "cards": [
                        {
                            "mediaType": "image",
                            "mediaImgId": "20",
                            "automationDataId": "4"
                        },
                        {
                            "mediaType": "image",
                            "mediaImgId": "21",
                            "automationDataId": "5"
                        },
                        {
                            "mediaType": "image",
                            "mediaImgId": "22",
                            "automationDataId": "6"
                        },
                        {
                            "mediaType": "image",
                            "mediaImgId": "23",
                            "automationDataId": "7"
                        },
                        {
                            "mediaType": "image",
                            "mediaImgId": "24",
                            "automationDataId": "8"
                        }
                    ]
                });
    default:
        return ({
                    "featured": false,
                    "title": undefined,
                    "cards": [
                        { "mediaType": "default", "automationDataId": "0" },
                        { "mediaType": "default", "automationDataId": "1" },
                        { "mediaType": "default", "automationDataId": "2" },
                        { "mediaType": "default", "automationDataId": "3" }
                    ]
                });
    }
}


export default AutomationSection
