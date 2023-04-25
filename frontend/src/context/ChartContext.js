import React, { useState, useContext } from "react";

const ChartContext = React.createContext();

export function useChart() {
  return useContext(ChartContext);
}

export function ChartProvider({ children }) {
  const [dataStream, setDataStream] = useState([{ x: 0, y: 0 }]);
  return (
    <ChartContext.Provider value={{ dataStream, setDataStream }}>
      {children}
    </ChartContext.Provider>
  );
}