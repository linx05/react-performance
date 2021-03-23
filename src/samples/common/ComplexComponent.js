import { useState } from "react";
import toHex from "colornames";

const generateData = (dimensions) => {
  return Array.from({ length: dimensions }, () =>
    Array.from({ length: dimensions }, () => Math.random() * 100)
  );
};

const initialRowsColumns = (dimensions) => Math.floor(dimensions / 2);

function hexToRGBA(h, alpha) {
  let r = 0,
    g = 0,
    b = 0;

  // 3 digits
  if (h.length === 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

    // 6 digits
  } else if (h.length === 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }

  return `rgb(${+r},${+g},${+b},${+alpha})`;
}

export function ComplexComponent({
  color,
  config: { dimensions } = { dimensions: 100 },
}) {
  const [rows, setRows] = useState(initialRowsColumns(dimensions));
  const [columns, setColumns] = useState(initialRowsColumns(dimensions));
  const data = generateData(dimensions);

  console.log("%cRendering complex component", "color: red;");

  const hexColor = (color && toHex(color)) || "#000000";

  return (
    <div>
      <div>
        <form>
          <div>
            <label>Rows to display: </label>
            <input
              value={rows}
              type="number"
              min={1}
              max={dimensions}
              onChange={(e) => setRows(e.target.value)}
            />
            {` (max: ${dimensions})`}
          </div>
          <div>
            <label>Columns to display: </label>
            <input
              value={columns}
              type="number"
              min={1}
              max={dimensions}
              onChange={(e) => setColumns(e.target.value)}
            />
            {` (max: ${dimensions})`}
          </div>
        </form>
      </div>
      <br />
      <div
        style={{
          width: data.length * 40,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {data.slice(0, rows).map((row, i) => (
          <div key={i} style={{ display: "flex" }}>
            {row.slice(0, columns).map((cell, i) => (
              <div
                key={i}
                style={{
                  outline: `1px solid black`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 40,
                  height: 40,
                  color: cell > 50 ? "white" : "black",
                  backgroundColor: hexToRGBA(hexColor, cell / 100),
                }}
              >
                {Math.floor(cell)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export const renderItems = (
  item,
  color,
  { dimensions } = { dimensions: 100 }
) => {
  const rows = initialRowsColumns(dimensions);
  const columns = initialRowsColumns(dimensions);
  const data = generateData(dimensions);

  console.log("%cRendering complex component", "color: red;");

  const hexColor = color || "#000000";

  return data.slice(0, rows).map((row, i) => (
    <div key={i} style={{ display: "flex" }}>
      {row.slice(0, columns).map((cell, i) => (
        <div
          key={i}
          style={{
            outline: `1px solid black`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 40,
            height: 40,
            color: cell > 50 ? "white" : "black",
            backgroundColor: hexToRGBA(hexColor, cell / 100),
          }}
        >
          {item}
        </div>
      ))}
    </div>
  ));
};
