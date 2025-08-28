import * as d3 from "d3";
import { useEffect, useRef } from "react";

type PieChartProps = {
  data: { name: string; value: number }[];
  width?: number;
  height?: number;
  innerRadius?: number;
  outerRadius?: number;
};

const PieChart: React.FC<PieChartProps> = ({
  data,
  width = 400,
  height = 400,
  innerRadius = 0,
  outerRadius = 150,
}) => {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Clear previous contents
    d3.select(ref.current).selectAll("*").remove();

    const svg = d3
      .select(ref.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    const pie = d3.pie<{ name: string; value: number }>().value((d) => d.value);
    const arcs = pie(data);

    const arc = d3
      .arc<d3.PieArcDatum<{ name: string; value: number }>>()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);

    const color = d3
      .scaleOrdinal<string>()
      .domain(data.map((d) => d.name))
      .range(d3.schemeCategory10);

    svg
      .selectAll("path")
      .data(arcs)
      .enter()
      .append("path")
      .attr("d", arc as any) // TypeScript fix
      .attr("fill", (d) => color(d.data.name))
      .append("title")
      .text((d) => `${d.data.name}: ${d.data.value}`);
  }, [data, width, height, innerRadius, outerRadius]);

  return <svg ref={ref}></svg>;
};

export default PieChart;
