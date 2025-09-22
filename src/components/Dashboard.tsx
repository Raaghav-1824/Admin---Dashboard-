import React from "react";
import { OptimizedStatCard } from "./dashboard-components/StatCard";
import { useNavigate } from "react-router-dom";
import { stats } from "../data";
import { 
  RevenueChart, 
  ProjectionsChart, 
  RevenueByLocationMap, 
  TopSellingProductsTable, 
} from "./charts";
import { TotalSalesChart } from "./charts/TotalSalesChart";
// import DonutChart from "./charts/DonutChart";


export const Dashboard = () => {
  const navigate = useNavigate();

  const handleViewOrders = () => {
    navigate("/orders");
  };

  return (
    <div className="sm:p-7 animate-fade-in overflow-hidden">
      <div className="grid-dashboard h-full overflow-y-auto scrollbar-hide gap-7">
        <div className="md:col-span-6 min-h-[280px]">
          <div className="grid-stats h-full gap-7">
            {stats.map((stat, index) => (
              <div
                key={stat.title}
                className="animate-slide-up h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  onClick={
                    stat.title === "Orders" ? handleViewOrders : undefined
                  }
                  className={stat.title === "Orders" ? "cursor-pointer h-full w-full" : "h-full w-full"}
                >
                  <OptimizedStatCard
                    title={stat.title}
                    value={stat.value}
                    delta={stat.delta}
                    variant={stat.variant}
                    className="h-full p-6 space-y-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <ProjectionsChart />
        <RevenueChart />
        <RevenueByLocationMap />
        <TopSellingProductsTable />
        {/* <DonutChart data={donutData} /> */}
        <TotalSalesChart/>
      </div>
    </div>
  );
};
