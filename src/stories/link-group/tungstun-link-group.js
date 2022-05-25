import React, { useEffect } from "react";

import "./tungstun-link-group.scss";

const LinkGroup = ({ children, width }) => {

  useEffect(() => {
    
  });

  return (
    <div className="link-group__container" style={{ width: width && width }}>
      {children}
    </div>
  );
}

export default LinkGroup;
