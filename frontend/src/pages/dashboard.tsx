import PieChart from "@/components/charts/pieChart";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-6">
        <PieChart
          data={[
            { name: "A", value: 30 },
            { name: "B", value: 70 },
          ]}
        />
        <PieChart
          data={[
            { name: "C", value: 40 },
            { name: "D", value: 60 },
          ]}
        />
        <PieChart
          data={[
            { name: "E", value: 20 },
            { name: "F", value: 80 },
          ]}
        />
      </div>
      {/* Second row: 3 charts */}
      <div className="flex gap-6">
        <PieChart
          data={[
            { name: "G", value: 50 },
            { name: "H", value: 50 },
          ]}
        />
        <PieChart
          data={[
            { name: "I", value: 10 },
            { name: "J", value: 90 },
          ]}
        />
        <PieChart
          data={[
            { name: "K", value: 60 },
            { name: "L", value: 40 },
          ]}
        />
      </div>
      {/* Third row: 1 chart */}
      <div className="flex justify-center">
        <PieChart
          data={[
            { name: "M", value: 75 },
            { name: "N", value: 25 },
          ]}
        />
      </div>
    </div>
  );
};

export default Dashboard;
