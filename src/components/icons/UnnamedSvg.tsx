import type { JSX } from 'react/jsx-runtime'


import React from 'react';

export const UnnamedSvg = () => {
    return (
<svg className={"n-base-loading__icon"} viewBox={"0 0 200 200"} xmlns={"http://www.w3.org/2000/svg"}>
<g>
<animateTransform attributeName={"transform"} type={"rotate"} values={"0 100 100;270 100 100"} begin={"0s"} dur={"1.6s"} fill={"freeze"} repeatCount={"indefinite"}></animateTransform>
<circle className={"n-base-loading__icon"} fill={"none"} stroke={"currentColor"} strokeWidth={"20"} strokeLinecap={"round"} cx={"100"} cy={"100"} r={"90"} strokeDasharray={"567"} strokeDashoffset={"1848"}>
<animateTransform attributeName={"transform"} type={"rotate"} values={"0 100 100;135 100 100;450 100 100"} begin={"0s"} dur={"1.6s"} fill={"freeze"} repeatCount={"indefinite"}></animateTransform>
<animate attributeName={"stroke-dashoffset"} values={"567;142;567"} begin={"0s"} dur={"1.6s"} fill={"freeze"} repeatCount={"indefinite"}></animate>
</circle>
</g>
</svg>    );
}



export default UnnamedSvg
