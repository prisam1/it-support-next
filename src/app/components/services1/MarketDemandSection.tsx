// components/MarketDemandSection.tsx
import React from "react";

type GrowthRow = {
  year: string;
  marketSize: string;
  growthRate: string;
  activeContracts: string;
  keyDriver: string;
  highlight?: boolean;
};

type CountyRow = {
  countyState: string;
  activeUsers: string;
  avgTicketsMonth: string;
  primaryIndustry: string;
};

type DemographicsRow = {
  userSegment: string;
  percentTotal: string;
  commonIssues: string;
  avgResolutionTime: string;
  satisfactionRate: string;
};

const growthRows: GrowthRow[] = [
  {
    year: "2021",
    marketSize: "$248.3B",
    growthRate: "+7.2%",
    activeContracts: "142,500",
    keyDriver: "Remote work transition",
  },
  {
    year: "2022",
    marketSize: "$267.1B",
    growthRate: "+7.6%",
    activeContracts: "156,800",
    keyDriver: "Cloud migration surge",
  },
  {
    year: "2023",
    marketSize: "$288.4B",
    growthRate: "+8.0%",
    activeContracts: "173,200",
    keyDriver: "Cybersecurity focus",
  },
  {
    year: "2024",
    marketSize: "$312.5B",
    growthRate: "+8.4%",
    activeContracts: "191,600",
    keyDriver: "AI integration",
  },
  {
    year: "2025",
    marketSize: "$339.8B",
    growthRate: "+8.7%",
    activeContracts: "208,400",
    keyDriver: "Automation adoption",
    highlight: true,
  },
];

const countyRows: CountyRow[] = [
  { countyState: "Santa Clara, CA", activeUsers: "487,200", avgTicketsMonth: "152,400", primaryIndustry: "Technology" },
  { countyState: "New York, NY", activeUsers: "623,100", avgTicketsMonth: "198,700", primaryIndustry: "Finance" },
  { countyState: "King, WA", activeUsers: "312,500", avgTicketsMonth: "94,300", primaryIndustry: "Technology" },
  { countyState: "Cook, IL", activeUsers: "289,400", avgTicketsMonth: "87,200", primaryIndustry: "Healthcare" },
  { countyState: "Harris, TX", activeUsers: "267,800", avgTicketsMonth: "80,100", primaryIndustry: "Energy" },
  { countyState: "Los Angeles, CA", activeUsers: "401,200", avgTicketsMonth: "119,500", primaryIndustry: "Entertainment" },
  { countyState: "Middlesex, MA", activeUsers: "198,600", avgTicketsMonth: "61,400", primaryIndustry: "Biotech" },
  { countyState: "Maricopa, AZ", activeUsers: "176,300", avgTicketsMonth: "52,900", primaryIndustry: "Retail" },
  { countyState: "Orange, CA", activeUsers: "165,700", avgTicketsMonth: "49,800", primaryIndustry: "Manufacturing" },
  { countyState: "Miami-Dade, FL", activeUsers: "154,200", avgTicketsMonth: "46,300", primaryIndustry: "Hospitality" },
];

const demographicsRows: DemographicsRow[] = [
  {
    userSegment: "Executive Level",
    percentTotal: "8%",
    commonIssues: "Mobile device, VPN access",
    avgResolutionTime: "6 minutes",
    satisfactionRate: "97%",
  },
  {
    userSegment: "Knowledge Workers",
    percentTotal: "42%",
    commonIssues: "Password resets, software issues",
    avgResolutionTime: "11 minutes",
    satisfactionRate: "94%",
  },
  {
    userSegment: "Remote Workers",
    percentTotal: "31%",
    commonIssues: "VPN, connectivity, home setup",
    avgResolutionTime: "14 minutes",
    satisfactionRate: "92%",
  },
  {
    userSegment: "Field Technicians",
    percentTotal: "12%",
    commonIssues: "Mobile device, app access",
    avgResolutionTime: "9 minutes",
    satisfactionRate: "96%",
  },
  {
    userSegment: "New Hires",
    percentTotal: "7%",
    commonIssues: "Account setup, onboarding",
    avgResolutionTime: "18 minutes",
    satisfactionRate: "89%",
  },
];

export default function MarketDemandSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          IT Support Services Market Demand
        </h2>

        {/* 5-Year Demand Table */}
        <div className="mb-12 overflow-x-auto">
          <h3 className="text-2xl font-bold mb-4">Last 5 Years Demand Growth</h3>

          <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left">Year</th>
                <th className="px-6 py-4 text-left">Market Size (USD Billion)</th>
                <th className="px-6 py-4 text-left">Growth Rate (%)</th>
                <th className="px-6 py-4 text-left">Active Contracts</th>
                <th className="px-6 py-4 text-left">Key Driver</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {growthRows.map((row) => (
                <tr
                  key={row.year}
                  className={`hover:bg-gray-50 ${row.highlight ? "bg-blue-50" : ""}`}
                >
                  <td className="px-6 py-4 font-semibold">{row.year}</td>
                  <td className={`px-6 py-4 ${row.highlight ? "font-bold" : ""}`}>
                    {row.marketSize}
                  </td>
                  <td className={`px-6 py-4 text-green-600 ${row.highlight ? "font-bold" : ""}`}>
                    {row.growthRate}
                  </td>
                  <td className="px-6 py-4">{row.activeContracts}</td>
                  <td className="px-6 py-4">{row.keyDriver}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* County Demand Table */}
        <div className="mb-12 overflow-x-auto">
          <h3 className="text-2xl font-bold mb-4">US County-Wise Demand (Top 10)</h3>

          <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left">County, State</th>
                <th className="px-6 py-4 text-left">Active Users</th>
                <th className="px-6 py-4 text-left">Avg Tickets/Month</th>
                <th className="px-6 py-4 text-left">Primary Industry</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {countyRows.map((row) => (
                <tr key={row.countyState} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold">{row.countyState}</td>
                  <td className="px-6 py-4">{row.activeUsers}</td>
                  <td className="px-6 py-4">{row.avgTicketsMonth}</td>
                  <td className="px-6 py-4">{row.primaryIndustry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* User Demographics Table */}
        <div className="overflow-x-auto">
          <h3 className="text-2xl font-bold mb-4">User Demographics &amp; Support Patterns</h3>

          <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left">User Segment</th>
                <th className="px-6 py-4 text-left">% of Total</th>
                <th className="px-6 py-4 text-left">Common Issues</th>
                <th className="px-6 py-4 text-left">Avg Resolution Time</th>
                <th className="px-6 py-4 text-left">Satisfaction Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {demographicsRows.map((row) => (
                <tr key={row.userSegment} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold">{row.userSegment}</td>
                  <td className="px-6 py-4">{row.percentTotal}</td>
                  <td className="px-6 py-4">{row.commonIssues}</td>
                  <td className="px-6 py-4">{row.avgResolutionTime}</td>
                  <td className="px-6 py-4 text-green-600">{row.satisfactionRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
