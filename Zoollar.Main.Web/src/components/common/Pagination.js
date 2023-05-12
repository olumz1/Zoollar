import * as React from "react";
import usePagination from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";
import { Colors } from "../../styles/theme";

const List = styled("ol")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "row",
  rowGap: "8px",
  columnGap: "8px",
  justifyContent: "center",
  gridColumnStart: "3",
});

export default function UsePagination() {
  const { items } = usePagination({
    count: 10,
  });

  return (
    <nav style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
      <div style={{ gridColumnStart: "2" }}>
        <List>
          {items.map(({ page, type, selected, ...item }, index) => {
            let children = null;

            if (type === "start-ellipsis" || type === "end-ellipsis") {
              children = "…";
            } else if (type === "page") {
              children = (
                <button
                  type="button"
                  style={{
                    backgroundColor: selected ? Colors.primary : "#fff",
                    color: selected ? "#fff" : Colors.primary,
                    fontWeight: "bold",
                    borderColor: Colors.primary,
                    height: "48px",
                    width: "100%",
                    paddingRight: "0",
                    paddingLeft: "0",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  {...item}
                >
                  {page}
                </button>
              );
            } else {
              children = (
                <button
                  style={{
                    backgroundColor: selected ? Colors.primary : "#fff",
                    color: selected ? "#fff" : Colors.primary,
                    fontWeight: "bold",
                    borderColor: Colors.primary,
                    height: "48px",
                    borderStyle: "solid",
                    borderRadius: "5px",
                    width: "100px",
                    paddingRight: "16px",
                    paddingLeft: "16px",
                    transitionDuration: "0.16s",
                    transitionTimingFunction: "cubic-bezier(0.3,0,0.8,1)",
                    columnGap: "8px",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                  type="button"
                  {...item}
                >
                  {type}
                </button>
              );
            }

            return (
              <li
                style={{
                  width: "48px",
                  padding: "0",
                  boxSizing: "border-box",
                  fontWeight: "bold",
                  justifyContent: "center",
                  right: "20px",
                  marginRight: type === "previous" ? "50px" : "0px",
                }}
                key={index}
              >
                {children}
              </li>
            );
          })}
        </List>
      </div>
    </nav>
  );
}
