import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import MacroStartCard from './MacroStartCard.tsx'


// Component
function EmptyWorkflow() {
    return <section data-v-83bc3aca={""} className={"config-section config-section--workflow"}>
        <div data-v-83bc3aca={""} className={"config-section-header"}>
            <h3 data-v-83bc3aca={""} className={"config-section-title"}>
                Workflow
            </h3>
        </div>
        <div data-v-04074ca5={""} data-v-83bc3aca={""} className={"macro-builder"}>
            <div data-v-04074ca5={""} className={"macro-empty"}>
                <div data-v-04074ca5={""} className={"macro-empty-cards"}>
                    
                                <MacroStartCard
                                    title="Add Trigger"
                                    description="When something happens"
                                    navigateRoute="/dashboard?step=14"
                                />
                            
                    
                                <MacroStartCard
                                    title="Add Action"
                                    description="What the bot should do"
                                />
                            
                </div>
            </div>
        </div>
    </section>
}


export default EmptyWorkflow
