import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Info_circle from './icons/Info_circle.tsx'
import SuffixArrow from './SuffixArrow.tsx'
import TextInput from './TextInput.tsx'
import PrimaryButton from './PrimaryButton.tsx'
import FocusSentinel from './FocusSentinel.tsx'
import CloseButton from './CloseButton.tsx'
import FormItemLabel from './FormItemLabel.tsx'
import FormItemFeedback from './FormItemFeedback.tsx'
import CancelButton from './CancelButton.tsx'
import DurationInput from './DurationInput.tsx'


    
// Component

        function ScheduledTaskModal({
            showMask,
            hidden,
            taskNameFocused
        }: {
            showMask: boolean;
            hidden: boolean;
            taskNameFocused: boolean;
        }) {
            return (
                <div role={"none"} className={"n-scrollbar-content n-modal-scroll-content"}>
                    {showMask ? <div className={"n-modal-mask"}></div> : null}
                    <FocusSentinel tabIndex="0" />
                    <div
                        className={"n-dialog n-dialog--closable n-dialog--icon-left n-modal"}
                        role={"dialog"}
                        style={getDialogStyle(hidden)}
                        data-navigate-routes={JSON.stringify(["/dashboard?step=10"])}
                    >
                        <CloseButton className="n-base-close n-dialog__close" iconVariant="dialog" />
                        <div className={"n-dialog__title"}>
                            <i className={"n-base-icon n-dialog__icon"}>
                                <Info_circle />
                            </i>
                            Add Scheduled Task
                        </div>
                        <div className={"n-dialog__content"}>
                            <ScheduledTaskForm taskNameFocused={taskNameFocused} />
                        </div>
                        <div className={"n-dialog__action"}>
                            <CancelButton
                                scope="d9c23b5c"
                                route="/dashboard?step=11"
                                routeOnButton={false}
                                waveActive={false}
                            />
                            <PrimaryButton
                                label="Add Task"
                                disabled={false}
                                scope="data-v-d9c23b5c"
                            />
                        </div>
                    </div>
                    <FocusSentinel tabIndex="0" />
                </div>
            )
        }
    

// Subcomponents

        function getDialogStyle(hidden: boolean): React.CSSProperties {
            return {
                "--n-font-size": "14px",
                "--n-icon-color": "#8a63d2",
                "--n-bezier": "cubic-bezier(.4, 0, .2, 1)",
                "--n-close-margin": "20px 26px 0 0",
                "--n-icon-margin-top": "0",
                "--n-icon-margin-right": "4px",
                "--n-icon-margin-bottom": "0",
                "--n-icon-margin-left": "0",
                "--n-icon-size": "28px",
                "--n-close-size": "22px",
                "--n-close-icon-size": "18px",
                "--n-close-border-radius": "8px",
                "--n-close-color-hover": "rgba(255, 255, 255, .12)",
                "--n-close-color-pressed": "rgba(255, 255, 255, .08)",
                "--n-close-icon-color": "rgba(255, 255, 255, 0.52)",
                "--n-close-icon-color-hover": "rgba(255, 255, 255, 0.52)",
                "--n-close-icon-color-pressed": "rgba(255, 255, 255, 0.52)",
                "--n-color": "#080808",
                "--n-text-color": "rgba(255, 255, 255, 0.85)",
                "--n-border-radius": "8px",
                "--n-padding": "16px 28px 20px 28px",
                "--n-line-height": "1.6",
                "--n-border": "1px solid rgba(255, 255, 255, 0.09)",
                "--n-content-margin": "8px 0 16px 0",
                "--n-title-font-size": "18px",
                "--n-title-font-weight": "500",
                "--n-title-text-color": "#ffffff",
                "--n-action-space": "12px",
                transformOrigin: "1451px 300px",
                ...(hidden ? { display: "none" } : {})
            } as React.CSSProperties
        }

        function getFormItemStyle(): React.CSSProperties {
            return {
                "--n-bezier": "cubic-bezier(.4,0,.2,1)",
                "--n-line-height": "1.6",
                "--n-blank-height": "40px",
                "--n-label-font-size": "14px",
                "--n-label-text-align": "flex-start",
                "--n-label-height": "28px",
                "--n-label-padding": "0 0 6px 2px",
                "--n-label-font-weight": "400",
                "--n-asterisk-color": "#e88080",
                "--n-label-text-color": "#ffffff",
                "--n-feedback-padding": "4px 0 0 2px",
                "--n-feedback-font-size": "14px",
                "--n-feedback-height": "26px",
                "--n-feedback-text-color": "rgba(255,255,255,0.6)",
                "--n-feedback-text-color-warning": "#f2c97d",
                "--n-feedback-text-color-error": "#e88080"
            } as React.CSSProperties
        }

        function getInputStyle(): React.CSSProperties {
            return {
                "--n-bezier": "cubic-bezier(.4,0,.2,1)",
                "--n-count-text-color": "rgba(255,255,255,0.6)",
                "--n-count-text-color-disabled": "rgba(255,255,255,0.38)",
                "--n-color": "rgba(255,255,255,0.1)",
                "--n-font-size": "15px",
                "--n-font-weight": "400",
                "--n-border-radius": "8px",
                "--n-height": "40px",
                "--n-padding-left": "14px",
                "--n-padding-right": "14px",
                "--n-text-color": "rgba(255,255,255,0.85)",
                "--n-caret-color": "#8a63d2",
                "--n-text-decoration-color": "rgba(255,255,255,0.85)",
                "--n-border": "1px solid #0000",
                "--n-border-disabled": "1px solid #0000",
                "--n-border-hover": "1px solid #9b75db",
                "--n-border-focus": "1px solid #9b75db",
                "--n-placeholder-color": "rgba(255,255,255,0.38)",
                "--n-placeholder-color-disabled": "rgba(255,255,255,0.28)",
                "--n-icon-size": "16px",
                "--n-line-height-textarea": "1.6",
                "--n-color-disabled": "rgba(255,255,255,0.06)",
                "--n-color-focus": "rgba(138,99,210,0.1)",
                "--n-text-color-disabled": "rgba(255,255,255,0.38)",
                "--n-box-shadow-focus": "0 0 8px 0 rgba(138,99,210,0.3)",
                "--n-loading-color": "#8a63d2",
                "--n-caret-color-warning": "#f2c97d",
                "--n-color-focus-warning": "rgba(242,201,125,0.1)",
                "--n-box-shadow-focus-warning": "0 0 8px 0 rgba(242,201,125,0.3)",
                "--n-border-warning": "1px solid #f2c97d",
                "--n-border-focus-warning": "1px solid #f5d599",
                "--n-border-hover-warning": "1px solid #f5d599",
                "--n-loading-color-warning": "#f2c97d",
                "--n-caret-color-error": "#e88080",
                "--n-color-focus-error": "rgba(232,128,128,0.1)",
                "--n-box-shadow-focus-error": "0 0 8px 0 rgba(232,128,128,0.3)",
                "--n-border-error": "1px solid #e88080",
                "--n-border-focus-error": "1px solid #e98b8b",
                "--n-border-hover-error": "1px solid #e98b8b",
                "--n-loading-color-error": "#e88080",
                "--n-clear-color": "rgba(255,255,255,0.38)",
                "--n-clear-size": "16px",
                "--n-clear-color-hover": "rgba(255,255,255,0.48)",
                "--n-clear-color-pressed": "rgba(255,255,255,0.3)",
                "--n-icon-color": "rgba(255,255,255,0.38)",
                "--n-icon-color-hover": "rgba(255,255,255,0.475)",
                "--n-icon-color-pressed": "rgba(255,255,255,0.30400000000000005)",
                "--n-icon-color-disabled": "rgba(255,255,255,0.28)",
                "--n-suffix-text-color": "rgba(255,255,255,0.85)"
            } as React.CSSProperties
        }

        function getSelectStyle(): React.CSSProperties {
            return {
                "--n-bezier": "cubic-bezier(.4,0,.2,1)",
                "--n-border": "1px solid #0000",
                "--n-border-active": "1px solid #8a63d2",
                "--n-border-focus": "1px solid #9b75db",
                "--n-border-hover": "1px solid #9b75db",
                "--n-border-radius": "8px",
                "--n-box-shadow-active": "0 0 8px 0 rgba(138,99,210,0.4)",
                "--n-box-shadow-focus": "0 0 8px 0 rgba(138,99,210,0.4)",
                "--n-box-shadow-hover": "none",
                "--n-caret-color": "#8a63d2",
                "--n-color": "rgba(255,255,255,0.1)",
                "--n-color-active": "rgba(138,99,210,0.1)",
                "--n-color-disabled": "rgba(255,255,255,0.06)",
                "--n-font-size": "15px",
                "--n-height": "40px",
                "--n-padding-single-top": "0",
                "--n-padding-multiple-top": "3px",
                "--n-padding-single-right": "26px",
                "--n-padding-multiple-right": "26px",
                "--n-padding-single-left": "12px",
                "--n-padding-multiple-left": "12px",
                "--n-padding-single-bottom": "0",
                "--n-padding-multiple-bottom": "0",
                "--n-placeholder-color": "rgba(255,255,255,0.38)",
                "--n-placeholder-color-disabled": "rgba(255,255,255,0.28)",
                "--n-text-color": "rgba(255,255,255,0.85)",
                "--n-text-color-disabled": "rgba(255,255,255,0.38)",
                "--n-arrow-color": "rgba(255,255,255,0.38)",
                "--n-arrow-color-disabled": "rgba(255,255,255,0.28)",
                "--n-loading-color": "#8a63d2",
                "--n-color-active-warning": "rgba(242,201,125,0.1)",
                "--n-box-shadow-focus-warning": "0 0 8px 0 rgba(242,201,125,0.4)",
                "--n-box-shadow-active-warning": "0 0 8px 0 rgba(242,201,125,0.4)",
                "--n-box-shadow-hover-warning": "none",
                "--n-border-warning": "1px solid #f2c97d",
                "--n-border-focus-warning": "1px solid #f5d599",
                "--n-border-hover-warning": "1px solid #f5d599",
                "--n-border-active-warning": "1px solid #f2c97d",
                "--n-color-active-error": "rgba(232,128,128,0.1)",
                "--n-box-shadow-focus-error": "0 0 8px 0 rgba(232,128,128,0.4)",
                "--n-box-shadow-active-error": "0 0 8px 0 rgba(232,128,128,0.4)",
                "--n-box-shadow-hover-error": "none",
                "--n-border-error": "1px solid #e88080",
                "--n-border-focus-error": "1px solid #e98b8b",
                "--n-border-hover-error": "1px solid #e98b8b",
                "--n-border-active-error": "1px solid #e88080",
                "--n-clear-size": "16px",
                "--n-clear-color": "rgba(255,255,255,0.38)",
                "--n-clear-color-hover": "rgba(255,255,255,0.48)",
                "--n-clear-color-pressed": "rgba(255,255,255,0.3)",
                "--n-arrow-size": "16px",
                "--n-font-weight": "400"
            } as React.CSSProperties
        }

        function ScheduledTaskTextField({
            label,
            dataId,
            placeholder,
            focused = false
        }: {
            label: string;
            dataId: string;
            placeholder: string;
            focused?: boolean;
        }) {
            return (
                <div
                    data-v-d9c23b5c={""}
                    className={"n-form-item n-form-item--large-size n-form-item--top-labelled"}
                    style={getFormItemStyle()}
                >
                    <FormItemLabel label={label} />
                    <div className={"n-form-item-blank"}>
                        <div
                            data-v-d9c23b5c={""}
                            className={
                                focused
                                    ? "n-input n-input--resizable n-input--focus n-input--stateful"
                                    : "n-input n-input--resizable n-input--stateful"
                            }
                            style={getInputStyle()}
                        >
                            <div className={"n-input-wrapper"}>
                                <div className={"n-input__input"}>
                                    <TextInput dataId={dataId} />
                                    <div className={"n-input__placeholder"}>
                                        <span>{placeholder}</span>
                                    </div>
                                </div>
                            </div>
                            <div className={"n-input__border"}></div>
                            <div className={"n-input__state-border"}></div>
                        </div>
                    </div>
                    <FormItemFeedback />
                </div>
            )
        }

        function ScheduledTaskTypeField() {
            return (
                <div
                    data-v-d9c23b5c={""}
                    className={"n-form-item n-form-item--large-size n-form-item--top-labelled"}
                    style={getFormItemStyle()}
                >
                    <FormItemLabel label="Type" />
                    <div className={"n-form-item-blank"}>
                        <div data-v-d9c23b5c={""} className={"n-select"}>
                            <div
                                className={"n-base-selection n-base-selection--selected"}
                                style={getSelectStyle()}
                            >
                                <div className={"n-base-selection-label"} tabIndex={"0"}>
                                    <div className={"n-base-selection-input"} title={"Command"}>
                                        <div className={"n-base-selection-input__content"}>
                                            Command
                                        </div>
                                    </div>
                                    <div className={"n-base-loading n-base-suffix"} role={"img"}>
                                        <div className={"n-base-loading__placeholder"}>
                                            <div className={"n-base-clear"}>
                                                <div className={"n-base-clear__placeholder"}>
                                                    <SuffixArrow />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={"n-base-selection__border"}></div>
                                <div className={"n-base-selection__state-border"}></div>
                            </div>
                        </div>
                    </div>
                    <FormItemFeedback />
                </div>
            )
        }

        function ScheduledTaskIntervalField() {
            return (
                <div
                    data-v-d9c23b5c={""}
                    className={"n-form-item n-form-item--large-size n-form-item--top-labelled"}
                    style={getFormItemStyle()}
                >
                    <FormItemLabel label="Interval" />
                    <DurationInput />
                    <FormItemFeedback />
                </div>
            )
        }

        function ScheduledTaskForm({
            taskNameFocused
        }: {
            taskNameFocused: boolean;
        }) {
            return (
                <form
                    data-v-d9c23b5c={""}
                    className={"n-form"}
                    style={{ marginTop: "24px" }}
                >
                    <ScheduledTaskTextField
                        label="Task Name"
                        dataId="10"
                        placeholder="e.g. Sell"
                        focused={taskNameFocused}
                    />
                    <ScheduledTaskTypeField />
                    <ScheduledTaskTextField
                        label="Command"
                        dataId="11"
                        placeholder="/sell"
                    />
                    <ScheduledTaskIntervalField />
                </form>
            )
        }
    

export default ScheduledTaskModal
