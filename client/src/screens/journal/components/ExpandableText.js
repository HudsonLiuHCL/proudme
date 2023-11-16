import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import styled from "styled-components";

const ExpandableTextWrapper = styled.div`
  .expand-icon {
    width: 80%;
    height: 20px;
    border-radius: 5px;
    cursor: pointer;
  }

  .expand-icon:hover {
    transition: background 0.4s;
    background-color: #ccc;
  }
  
  max-height: 100px;
`;

function ExpandableText({ text, maxLines }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // const toggleExpand = () => {
  //   setIsExpanded(!isExpanded);
  // };

  const textStyles = {
    maxHeight: isExpanded ? "none" : `${maxLines * 1.2}em`,
    overflow: "clip",
  };

  return (
    <ExpandableTextWrapper style={styles.feedback}>
      <p style={textStyles}>{text}</p>
      {/* {isExpanded ? (
        <ExpandLessIcon
          className="expand-icon"
          onClick={() => toggleExpand()}
        />
      ) : (
        <ExpandMoreIcon
          className="expand-icon"
          onClick={() => toggleExpand()}
        />
      )} */}
    </ExpandableTextWrapper>
  );
}

export default ExpandableText;

const styles = {
  feedback: {
    color: "#000080",
    padding: 5,
    overflowY: "scroll",
    maxHeight: 101,
    marginRight: -45,
    fontSize: 12,
    width: "110%",
  },
};
