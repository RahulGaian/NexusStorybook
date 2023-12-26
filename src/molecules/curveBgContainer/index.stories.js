import React from "react";
import CurveContainer from ".";
import { curveContainerData } from "./data";

export default {
    title: 'components/CurveContainer',
    component: CurveContainer
}

export const curveContainer1 = () => <CurveContainer data={curveContainerData.curveContainer1}/>
export const curveContainer2 = () => <CurveContainer data={curveContainerData.curveContainer2}/>