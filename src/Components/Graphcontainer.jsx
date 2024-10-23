import React from "react";
import BarChart from "./Barchart";
import PieChart from "./Piechart";

const GraphsContainer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 w-full p-4 ">
      {/* Bar Chart */}
      <div className="w-full md:w-1/2 p-4 bg-white rounded-lg shadow-lg">
        <BarChart />
      </div>

      {/* Pie Chart */}
      <div className="w-full md:w-1/2 p-4 bg-white rounded-lg shadow-lg">
        <PieChart />
      </div>
    </div>
  );
};

export default GraphsContainer;
