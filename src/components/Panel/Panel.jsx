import React from "react";
import { pdf_list } from "../../Data/pdf.";
import { Panel__Section } from "./PanelStyles";

const Panel = ({ children }) => {
  return (
    <Panel__Section marginLeft="300px">
      {children}
    </Panel__Section>
  );
};

export default Panel;
