import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import PrimaryButton from './PrimaryButton.tsx'
import PrimaryButton1 from './PrimaryButton1.tsx'
import TableHeader from './TableHeader.tsx'
import TaskTableHeader from './TaskTableHeader.tsx'


// Component

        function ScheduledTasks({ dataId }: { dataId: string }) {
            return (
                <div role={"none"} style={{maxWidth:"100%"}}>
                    <div data-v-d9c23b5c={""} className={"n-card n-card--bordered"} style={{"--n-bezier":"cubic-bezier(.4,0,.2,1)", "--n-border-radius":"8px", "--n-color":"#080808", "--n-color-modal":"#080808", "--n-color-popover":"rgba(0,0,0,0.94)", "--n-color-embedded":"#080808", "--n-color-embedded-modal":"#080808", "--n-color-embedded-popover":"rgba(0,0,0,0.94)", "--n-color-target":"#8a63d2", "--n-text-color":"rgba(255,255,255,0.85)", "--n-line-height":"1.6", "--n-action-color":"rgba(255,255,255,0.06)", "--n-title-text-color":"#ffffff", "--n-title-font-weight":"500", "--n-close-icon-color":"rgba(255,255,255,0.52)", "--n-close-icon-color-hover":"rgba(255,255,255,0.52)", "--n-close-icon-color-pressed":"rgba(255,255,255,0.52)", "--n-close-color-hover":"rgba(255,255,255,.12)", "--n-close-color-pressed":"rgba(255,255,255,.08)", "--n-border-color":"#222222", "--n-box-shadow":"0 1px 2px -2px rgba(0,0,0,.24),0 3px 6px 0 rgba(0,0,0,.18),0 5px 12px 4px rgba(0,0,0,.12)", "--n-padding-top":"19px", "--n-padding-bottom":"20px", "--n-padding-left":"24px", "--n-font-size":"14px", "--n-title-font-size":"18px", "--n-close-size":"22px", "--n-close-icon-size":"18px", "--n-close-border-radius":"8px"}}>
                        <div className={"n-card-header"} role={"heading"}>
                            <div className={"n-card-header__main"} role={"heading"}>
                                Scheduled Tasks
                            </div>
                            <div className={"n-card-header__extra"}>
                                <PrimaryButton1 dataId={dataId} />
                            </div>
                        </div>
                        <div className={"n-card__content"} role={"none"}>
                            <div data-v-8420aa6b={""} data-v-d9c23b5c={""} className={"n-data-table n-data-table--bordered n-data-table--single-line"} style={{"--n-font-size":"14px", "--n-th-padding":"8px", "--n-td-padding":"8px", "--n-bezier":"cubic-bezier(.4,0,.2,1)", "--n-border-radius":"8px", "--n-line-height":"1.6", "--n-border-color":"rgba(30,30,30,1)", "--n-border-color-modal":"rgba(30,30,30,1)", "--n-border-color-popover":"rgba(24,24,24,0.95)", "--n-th-color":"rgba(23,23,23,1)", "--n-th-color-hover":"rgba(37,37,37,1)", "--n-th-color-modal":"rgba(23,23,23,1)", "--n-th-color-hover-modal":"rgba(37,37,37,1)", "--n-th-color-popover":"rgba(16,16,16,0.94)", "--n-th-color-hover-popover":"rgba(31,31,31,0.94)", "--n-td-color":"#080808", "--n-td-color-hover":"rgba(23,23,23,1)", "--n-td-color-modal":"#080808", "--n-td-color-hover-modal":"rgba(23,23,23,1)", "--n-td-color-popover":"rgba(0,0,0,0.94)", "--n-td-color-hover-popover":"rgba(16,16,16,0.94)", "--n-th-text-color":"#ffffff", "--n-td-text-color":"rgba(255,255,255,0.85)", "--n-th-font-weight":"500", "--n-th-button-color-hover":"rgba(255,255,255,0.06)", "--n-th-icon-color":"rgba(255,255,255,0.38)", "--n-th-icon-color-active":"#8a63d2", "--n-filter-size":"15px", "--n-pagination-margin":"12px 0 0 0", "--n-empty-padding":"48px 0", "--n-box-shadow-before":"inset -12px 0 8px -12px rgba(0,0,0,.36)", "--n-box-shadow-after":"inset 12px 0 8px -12px rgba(0,0,0,.36)", "--n-sorter-size":"15px", "--n-resizable-container-size":"8px", "--n-resizable-size":"2px", "--n-loading-size":"28px", "--n-loading-color":"#8a63d2", "--n-opacity-loading":"0.38", "--n-td-color-striped":"rgba(20,20,20,1)", "--n-td-color-striped-modal":"rgba(20,20,20,1)", "--n-td-color-striped-popover":"rgba(14,14,14,0.94)", "--n-td-color-sorting":"rgba(23,23,23,1)", "--n-td-color-sorting-modal":"rgba(23,23,23,1)", "--n-td-color-sorting-popover":"rgba(16,16,16,0.94)", "--n-th-color-sorting":"rgba(37,37,37,1)", "--n-th-color-sorting-modal":"rgba(37,37,37,1)", "--n-th-color-sorting-popover":"rgba(31,31,31,0.94)"}}>
                                <div className={"n-data-table-wrapper"}>
                                    <div className={"n-data-table-base-table"}>
                                        <div className={"n-data-table-base-table-body n-scrollbar"} role={"none"} style={{"--n-scrollbar-bezier":"cubic-bezier(.4,0,.2,1)", "--n-scrollbar-color":"rgba(255,255,255,0.2)", "--n-scrollbar-color-hover":"rgba(255,255,255,0.3)", "--n-scrollbar-border-radius":"5px", "--n-scrollbar-width":"5px", "--n-scrollbar-height":"5px", "--n-scrollbar-rail-top-horizontal-top":"4px", "--n-scrollbar-rail-right-horizontal-top":"2px", "--n-scrollbar-rail-bottom-horizontal-top":"auto", "--n-scrollbar-rail-left-horizontal-top":"2px", "--n-scrollbar-rail-top-horizontal-bottom":"auto", "--n-scrollbar-rail-right-horizontal-bottom":"2px", "--n-scrollbar-rail-bottom-horizontal-bottom":"4px", "--n-scrollbar-rail-left-horizontal-bottom":"2px", "--n-scrollbar-rail-top-vertical-right":"2px", "--n-scrollbar-rail-right-vertical-right":"4px", "--n-scrollbar-rail-bottom-vertical-right":"2px", "--n-scrollbar-rail-left-vertical-right":"auto", "--n-scrollbar-rail-top-vertical-left":"2px", "--n-scrollbar-rail-right-vertical-left":"auto", "--n-scrollbar-rail-bottom-vertical-left":"2px", "--n-scrollbar-rail-left-vertical-left":"4px", "--n-scrollbar-rail-color":"transparent"}}>
                                            <div role={"none"} className={"n-scrollbar-container"}>
                                                <div role={"none"} className={"n-scrollbar-content"} style={{width:"fit-content", minWidth:"100%"}}>
                                                    <table className={"n-data-table-table"} style={{tableLayout:"auto"}}>
                                                        <colgroup>
                                                            <col></col>
                                                            <col></col>
                                                            <col></col>
                                                            <col></col>
                                                            <col></col>
                                                            <col></col>
                                                        </colgroup>
                                                        <thead className={"n-data-table-thead"}>
                                                            <TaskTableHeader />
                                                        </thead>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className={"n-scrollbar-rail n-scrollbar-rail--vertical n-scrollbar-rail--vertical--right n-scrollbar-rail--disabled"} style={{zIndex:"3"}}>
                                            </div>
                                            <div className={"n-scrollbar-rail n-scrollbar-rail--horizontal n-scrollbar-rail--horizontal--bottom n-scrollbar-rail--disabled"} style={{zIndex:"3"}}>
                                            </div>
                                        </div>
                                        <div className={"n-data-table-empty"}>
                                            {` No Scheduled Tasks `}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    

export default ScheduledTasks
