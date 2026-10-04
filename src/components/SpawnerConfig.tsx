import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Switch from './Switch.tsx'
import Switch1 from './Switch1.tsx'
import ResizableInput from './ResizableInput.tsx'


type SpawnerConfigData = {
    description: string;
    firstField: {
        label: string;
        description: string;
        textInputDataId: string;
        isFocused: boolean;
    };
    secondField: {
        label: string;
        description: string;
        textInputDataId: string;
        isFocused: boolean;
    };
    thirdField: {
        label: string;
        description: string;
        textInputDataId: string;
        isFocused: boolean;
    };
    feature: {
        label: string;
        description: string;
        isActive: boolean;
        switchDataId: string;
    } | null;
};
    
// Component

function SpawnerConfig({
    dataId
}: {
    dataId: string;
}) {
    const {
        description,
        firstField,
        secondField,
        thirdField,
        feature
    }: SpawnerConfigData = getSpawnerConfigData(dataId);

    return (
        <div data-v-830291ff={""} role={"none"} className={"n-space config-form"} style={{display:"flex", flexFlow:"column", justifyContent:"flex-start", gap:"14px"}}>
            <div role={"none"} style={{maxWidth:"100%"}}>
                <p data-v-830291ff={""} className={"config-detail-desc"}>
                    {description}
                </p>
            </div>
            <div role={"none"} style={{maxWidth:"100%"}}>
                <div data-v-0cbfd3bc={""} data-v-830291ff={""} className={"config-fields"}>
                    <NumericConfigField
                        label={firstField.label}
                        description={firstField.description}
                        textInputDataId={firstField.textInputDataId}
                        isFocused={firstField.isFocused}
                    />
                    <NumericConfigField
                        label={secondField.label}
                        description={secondField.description}
                        textInputDataId={secondField.textInputDataId}
                        isFocused={secondField.isFocused}
                    />
                    <NumericConfigField
                        label={thirdField.label}
                        description={thirdField.description}
                        textInputDataId={thirdField.textInputDataId}
                        isFocused={thirdField.isFocused}
                    />
                    {feature ? (
                        <FeatureConfigField
                            label={feature.label}
                            description={feature.description}
                            isActive={feature.isActive}
                            switchDataId={feature.switchDataId}
                        />
                    ) : null}
                </div>
            </div>
        </div>
    );
}
    

// Subcomponents

function NumericConfigField({
    label,
    description,
    textInputDataId,
    isFocused
}: {
    label: string;
    description: string;
    textInputDataId: string;
    isFocused: boolean;
}) {
    return (
        <div data-v-92c44818={""} data-v-0cbfd3bc={""} className={"config-field"}>
            <div data-v-92c44818={""} className={"config-field-header"}>
                <span data-v-92c44818={""} className={"config-field-label"}>
                    {label}
                </span>
                <p data-v-92c44818={""} className={"config-field-desc"}>
                    {description}
                </p>
            </div>
            <div data-v-92c44818={""} className={"n-input-number"} style={{width:"100%"}}>
                <ResizableInput textInputDataId={textInputDataId} isFocused={isFocused} />
            </div>
        </div>
    );
}

function FeatureConfigField({
    label,
    description,
    isActive,
    switchDataId
}: {
    label: string;
    description: string;
    isActive: boolean;
    switchDataId: string;
}) {
    return (
        <div data-v-92c44818={""} data-v-0cbfd3bc={""} className={"config-field"}>
            <div data-v-92c44818={""} className={"feature-toggle-panel"}>
                <div data-v-92c44818={""} className={"feature-toggle-header"}>
                    <span data-v-92c44818={""} className={"feature-toggle-label"}>
                        {label}
                    </span>
                    <Switch1 isActive={isActive} dataId={switchDataId} />
                </div>
                <p data-v-92c44818={""} className={"feature-toggle-desc"}>
                    {description}
                </p>
            </div>
        </div>
    );
}
    

function getSpawnerConfigData(id): SpawnerConfigData  {
    switch (String(id)) {
    case "0":
        return ({
                    "description": "Sells DonutSMP spawner contents by opening the menu, clicking sell, confirming, and closing.\n            Smart Mode can path to nearby spawners and sell from each one automatically.",
                    "firstField": {
                        "label": "Run Every (seconds)",
                        "description": "Time between automatic sell cycles.",
                        "textInputDataId": "23",
                        "isFocused": true
                    },
                    "secondField": {
                        "label": "Click Delay (ms)",
                        "description": "Base delay between GUI clicks.",
                        "textInputDataId": "17",
                        "isFocused": false
                    },
                    "thirdField": {
                        "label": "Click Randomization (ms)",
                        "description": "Random extra delay added to each click.",
                        "textInputDataId": "26",
                        "isFocused": false
                    },
                    "feature": {
                        "label": "Smart Mode",
                        "description": "Finds nearby spawners, sells each one, then idles near the last spawner.",
                        "isActive": false,
                        "switchDataId": "4"
                    }
                });
    case "1":
        return ({
                    "description": "Opens a DonutSMP spawner, empties staging slot 45, then drops remaining loot via slot 50.\nRepeats on your timer to keep spawner storage clear automatically.",
                    "firstField": {
                        "label": "Run Every (seconds)",
                        "description": "Time between each automated drop cycle.",
                        "textInputDataId": "23",
                        "isFocused": true
                    },
                    "secondField": {
                        "label": "Click Delay (ms)",
                        "description": "Base delay between GUI clicks during drop actions.",
                        "textInputDataId": "17",
                        "isFocused": false
                    },
                    "thirdField": {
                        "label": "Click Randomization (ms)",
                        "description": "Adds random extra delay so click timing is less uniform.",
                        "textInputDataId": "26",
                        "isFocused": false
                    },
                    "feature": null
                });
    default:
        return ({
                    "description": "Sells DonutSMP spawner contents by opening the menu, clicking sell, confirming, and closing.\n            Smart Mode can path to nearby spawners and sell from each one automatically.",
                    "firstField": {
                        "label": "Run Every (seconds)",
                        "description": "Time between automatic sell cycles.",
                        "textInputDataId": "23",
                        "isFocused": true
                    },
                    "secondField": {
                        "label": "Click Delay (ms)",
                        "description": "Base delay between GUI clicks.",
                        "textInputDataId": "17",
                        "isFocused": false
                    },
                    "thirdField": {
                        "label": "Click Randomization (ms)",
                        "description": "Random extra delay added to each click.",
                        "textInputDataId": "26",
                        "isFocused": false
                    },
                    "feature": {
                        "label": "Smart Mode",
                        "description": "Finds nearby spawners, sells each one, then idles near the last spawner.",
                        "isActive": false,
                        "switchDataId": "4"
                    }
                });
    }
}


export default SpawnerConfig
