import React from "react";

import TungstunTooltip from "./tungstun-tooltip";

export default {
    title: "Tooltip",
    component: TungstunTooltip
};

export const Primary = () => {
    return <TungstunTooltip text="this is a tooltip" active />;
}

Primary.storyName = "Primary tooltip";