import React from "react";
import { OptimizedStatCard } from "./dashboard-components/StatCard";
import { useNavigate } from "react-router-dom";
import { stats } from "../data";
import { 
  RevenueChart, 
  ProjectionsChart, 
  RevenueByLocationMap, 
  TopSellingProductsTable, 
  TotalSalesChart 
} from "./charts";


export const Dashboard = () => {
  const navigate = useNavigate();

  const handleViewOrders = () => {
    navigate("/orders");
  };

  return (
    <div className="p-4 sm:p-6 animate-fade-in overflow-hidden">
      <div className="grid-dashboard h-full overflow-y-auto scrollbar-hide">
        <div className="md:col-span-6 min-h-[280px]">
          <div className="grid-stats h-full">
            {stats.map((stat, index) => (
              <div
                key={stat.title}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  onClick={
                    stat.title === "Orders" ? handleViewOrders : undefined
                  }
                  className={stat.title === "Orders" ? "cursor-pointer" : ""}
                >
                  <OptimizedStatCard
                    title={stat.title}
                    value={stat.value}
                    delta={stat.delta}
                    variant={stat.variant}
                    className="h-full"
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
        <TotalSalesChart />
      </div>
    </div>
  );
};
