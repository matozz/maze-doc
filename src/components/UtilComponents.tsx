import { useTheme } from "maze-ui";
import React from "react";

export const Item = ({ children, ...props }) => {
  const theme = useTheme();
  return (
    <div
      className="maze-demo-item"
      {...props}
      style={{
        color:
          theme.mode === "dark"
            ? "rgba(255, 255, 255, 0.7)"
            : " rgba(0, 0, 0, 0.6)",
        backgroundColor: theme.mode === "dark" ? "rgb(28, 28, 28)" : "white",
      }}
    >
      {children}
    </div>
  );
};

export const Paper = ({ children }) => {
  const theme = useTheme();

  return (
    <div
      className="maze-demo-item"
      style={{
        width: 100,
        height: 120,
        color:
          theme.mode === "dark"
            ? "rgba(255, 255, 255, 0.7)"
            : " rgba(0, 0, 0, 0.6)",
        backgroundColor: theme.mode === "dark" ? "rgb(28, 28, 28)" : "white",
      }}
    >
      {children}
    </div>
  );
};
