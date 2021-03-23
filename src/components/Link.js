import React from "react";
import { Link } from "@reach/router";

export const NavLink = ({ partial = false, ...props }) => (
  <Link
    {...props}
    getProps={({ isCurrent, isPartiallyCurrent }) => {
      const isActive = partial ? isPartiallyCurrent : isCurrent;
      return {
        style: {
          backgroundColor: isActive && "var(--secondary-color)",
        },
      };
    }}
  />
);
