import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Img from './Img.tsx'
import SuffixArrow from './SuffixArrow.tsx'


        type SelectionLabelData = {
            title: string;
            imageId: string;
            text: string;
            valueVariant: "dedicated" | "region";
            tagVariant: "plain" | "micro";
            hasSuffixArrow: boolean;
        };
    
// Component

        function SelectionLabel({
            dataId,
            focusable = false
        }: {
            dataId: string;
            focusable?: boolean;
        }) {
            const data: SelectionLabelData = getSelectionLabelData(dataId);

            return (
                <div
                    className={"n-base-selection-label"}
                    {...(focusable ? { tabIndex: "0" } : {})}
                >
                    <div className={"n-base-selection-input"} title={data.title}>
                        <div className={"n-base-selection-input__content"}>
                            <SelectionValue
                                imageId={data.imageId}
                                text={data.text}
                                variant={data.valueVariant}
                                tagVariant={data.tagVariant}
                            />
                        </div>
                    </div>
                    <SelectionSuffix hasArrow={data.hasSuffixArrow} />
                </div>
            );
        }
    

// Subcomponents

        function SelectionValue({
            imageId,
            text,
            variant,
            tagVariant
        }: {
            imageId: string;
            text: string;
            variant: "dedicated" | "region";
            tagVariant: "plain" | "micro";
        }) {
            if (variant === "region") {
                return (
                    <span style={{display:"flex", alignItems:"center", gap:"8px"}}>
                        <Img id={imageId} />
                        <span>
                            {text}
                        </span>
                    </span>
                );
            }

            return (
                <span style={{display:"flex", alignItems:"center", gap:"6px", width:"100%", minWidth:"0px"}}>
                    <Img id={imageId} />
                    <span style={{overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", minWidth:"0px"}}>
                        {text}
                    </span>
                    {tagVariant === "micro" ? (
                        <span
                            className={"cts-micro-tag cts-micro-tag--green"}
                            style={{display:"inline-flex", alignItems:"center", lineHeight:"1", whiteSpace:"nowrap", fontSize:"10px", padding:"1px 5px", borderRadius:"3px", fontWeight:"600", flexShrink:"0", background:"rgba(99,226,183,0.15)", color:"rgb(99,226,183)"}}
                        >
                            Default
                        </span>
                    ) : (
                        <span style={{fontSize:"10px", padding:"1px 5px", borderRadius:"3px", background:"rgba(99,226,183,0.15)", color:"rgb(99,226,183)", fontWeight:"600", flexShrink:"0"}}>
                            Default
                        </span>
                    )}
                </span>
            );
        }

        function SelectionSuffix({
            hasArrow
        }: {
            hasArrow: boolean;
        }) {
            return (
                <div className={"n-base-loading n-base-suffix"} role={"img"}>
                    <div className={"n-base-loading__placeholder"}>
                        <div className={"n-base-clear"}>
                            {hasArrow ? (
                                <div className={"n-base-clear__placeholder"}>
                                    <SuffixArrow />
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            );
        }
    


        function getSelectionLabelData(id: string): SelectionLabelData {
            const stringId = String(id);

            switch (stringId) {
                case "0":
                case "1":
                    return {
                        title: "dedicated-de",
                        imageId: "18",
                        text: "dedicated-de",
                        valueVariant: "dedicated",
                        tagVariant: "plain",
                        hasSuffixArrow: true
                    };
                case "2":
                case "3":
                    return {
                        title: "North America",
                        imageId: "19",
                        text: "North America",
                        valueVariant: "region",
                        tagVariant: "plain",
                        hasSuffixArrow: true
                    };
                case "4":
                    return {
                        title: "dedicated-de",
                        imageId: "18",
                        text: "dedicated-de",
                        valueVariant: "dedicated",
                        tagVariant: "micro",
                        hasSuffixArrow: true
                    };
                case "5":
                    return {
                        title: "dedicated-de",
                        imageId: "18",
                        text: "dedicated-de",
                        valueVariant: "dedicated",
                        tagVariant: "micro",
                        hasSuffixArrow: false
                    };
                default:
                    return {
                        title: "dedicated-de",
                        imageId: "18",
                        text: "dedicated-de",
                        valueVariant: "dedicated",
                        tagVariant: "plain",
                        hasSuffixArrow: true
                    };
            }
        }
    

export default SelectionLabel
