"use client";

import React from "react";
import { TrendingUp, MapPin } from "lucide-react";

interface YearData {
  year: string;
  marketSize: string;
  growthRate: string;
  contracts: string;
  impact: string;
}

interface CountyData {
  rank: number;
  county: string;
  state: string;
  businesses: string;
  contracts: string;
  spend: string;
}

interface SegmentData {
  userSegment: string;
  totalUsers: string;
  avgRequestsPerUser: string;
  topServiceNeed: string;
  satisfactionRate: string;
}

const YEAR_DATA: readonly YearData[] = [
  { year: "2021", marketSize: "$48.2B", growthRate: "+12.4%", contracts: "284,000", impact: "High (COVID-19)" },
  { year: "2022", marketSize: "$54.8B", growthRate: "+13.7%", contracts: "319,000", impact: "Very High" },
  { year: "2023", marketSize: "$62.3B", growthRate: "+13.9%", contracts: "358,000", impact: "Sustained High" },
  { year: "2024", marketSize: "$71.1B", growthRate: "+14.1%", contracts: "402,000", impact: "Normalized High" },
  { year: "2025", marketSize: "$81.4B", growthRate: "+14.5%", contracts: "453,000", impact: "Hybrid Model Dominant" },
] as const;

const COUNTY_DATA: readonly CountyData[] = [
  { rank: 1, county: "Santa Clara County", state: "CA", businesses: "47,200", contracts: "38,400", spend: "$8,950" },
  { rank: 2, county: "New York County", state: "NY", businesses: "52,800", contracts: "36,900", spend: "$7,800" },
  { rank: 3, county: "Los Angeles County", state: "CA", businesses: "68,500", contracts: "35,200", spend: "$6,400" },
  { rank: 4, county: "King County", state: "WA", businesses: "34,100", contracts: "28,700", spend: "$7,200" },
  { rank: 5, county: "Cook County", state: "IL", businesses: "42,300", contracts: "26,800", spend: "$5,900" },
  { rank: 6, county: "Travis County", state: "TX", businesses: "28,900", contracts: "24,100", spend: "$6,800" },
  { rank: 7, county: "Middlesex County", state: "MA", businesses: "31,500", contracts: "23,400", spend: "$7,100" },
  { rank: 8, county: "Orange County", state: "CA", businesses: "36,200", contracts: "22,900", spend: "$6,200" },
  { rank: 9, county: "Fairfax County", state: "VA", businesses: "25,700", contracts: "21,800", spend: "$6,500" },
  { rank: 10, county: "Maricopa County", state: "AZ", businesses: "38,400", contracts: "20,600", spend: "$5,400" },
] as const;

const SEGMENT_DATA: readonly SegmentData[] = [
  {
    userSegment: "Enterprise (500+ employees)",
    totalUsers: "1,240",
    avgRequestsPerUser: "48.2",
    topServiceNeed: "Cloud Migration & Security",
    satisfactionRate: "98.5%",
  },
  {
    userSegment: "Mid-Market (100-499 employees)",
    totalUsers: "3,680",
    avgRequestsPerUser: "22.7",
    topServiceNeed: "M365 Administration",
    satisfactionRate: "97.2%",
  },
  {
    userSegment: "Small Business (10-99 employees)",
    totalUsers: "8,920",
    avgRequestsPerUser: "12.4",
    topServiceNeed: "24/7 Technical Support",
    satisfactionRate: "96.8%",
  },
  {
    userSegment: "Startups (1-9 employees)",
    totalUsers: "12,450",
    avgRequestsPerUser: "6.8",
    topServiceNeed: "Initial Setup & Training",
    satisfactionRate: "95.4%",
  },
  {
    userSegment: "Non-Profit Organizations",
    totalUsers: "2,180",
    avgRequestsPerUser: "15.3",
    topServiceNeed: "Cost Optimization",
    satisfactionRate: "97.9%",
  },
] as const;

const getRankStyle = (rank: number) => {
  switch (rank) {
    case 1:
      return "text-yellow-500 font-bold text-xl";
    case 2:
      return "text-gray-400 font-bold text-xl";
    case 3:
      return "text-orange-500 font-bold text-xl";
    default:
      return "font-semibold text-gray-700";
  }
};

export default function MarketDemandAnalysis() {
  return (
    <section className="bg-gray-50 py-16" id="case-studies">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 md:text-5xl">
          IT Support Services Market Demand Analysis
        </h2>

        {/* 5-Year Demand Trend Table */}
        <div className="mb-8 overflow-x-auto rounded-2xl bg-white p-8 shadow-lg">
          <div className="mb-6 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            <h3 className="text-2xl font-bold text-blue-900">
              5-Year IT Support Services Demand Growth (USA)
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-[800px] w-full text-left">
              {/* ✅ thead now solid blue */}
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 rounded-tl-lg">Year</th>
                  <th className="px-6 py-4">Market Size (USD Billion)</th>
                  <th className="px-6 py-4">Annual Growth Rate</th>
                  <th className="px-6 py-4">Active Support Contracts</th>
                  <th className="px-6 py-4 rounded-tr-lg">Remote Work Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {YEAR_DATA.map((d) => (
                  <tr key={d.year} className="transition-colors hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">{d.year}</td>
                    <td className="px-6 py-4">{d.marketSize}</td>
                    <td className="px-6 py-4 font-semibold text-green-600">{d.growthRate}</td>
                    <td className="px-6 py-4">{d.contracts}</td>
                    <td className="px-6 py-4">{d.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* County Demand Table */}
        <div className="mb-8 overflow-x-auto rounded-2xl bg-white p-8 shadow-lg">
          <div className="mb-6 flex items-center gap-2">
            <MapPin className="h-6 w-6 text-purple-600" />
            <h3 className="text-2xl font-bold text-purple-900">
              Top 10 US Counties by IT Support Demand (2025)
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-[800px] w-full text-left">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 rounded-tl-lg">Rank</th>
                  <th className="px-6 py-4">County, State</th>
                  <th className="px-6 py-4">Active Businesses</th>
                  <th className="px-6 py-4">Support Contracts</th>
                  <th className="px-6 py-4 rounded-tr-lg">Avg. Monthly Spend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {COUNTY_DATA.map((d) => (
                  <tr key={`${d.rank}-${d.county}`} className="transition-colors hover:bg-blue-50">
                    <td className={`px-6 py-4 ${getRankStyle(d.rank)}`}>{d.rank}</td>
                    <td className="px-6 py-4">
                      {d.county}, {d.state}
                    </td>
                    <td className="px-6 py-4">{d.businesses}</td>
                    <td className="px-6 py-4">{d.contracts}</td>
                    <td className="px-6 py-4 font-semibold">{d.spend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ✅ User Segments Demand Analysis (added) */}
        <div className="overflow-x-auto rounded-2xl bg-white p-8 shadow-lg">
          <h3 className="mb-6 text-2xl font-bold text-gray-900">
            User Segments Demand Analysis (2024)
          </h3>

          <div className="overflow-x-auto">
            <table className="min-w-[800px] w-full text-left">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 rounded-tl-lg">User Segment</th>
                  <th className="px-6 py-4">Total Users</th>
                  <th className="px-6 py-4">Avg. Requests/User</th>
                  <th className="px-6 py-4">Top Service Need</th>
                  <th className="px-6 py-4 rounded-tr-lg">Satisfaction Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {SEGMENT_DATA.map((d) => (
                  <tr key={d.userSegment} className="transition-colors hover:bg-blue-50">
                    <td className="px-6 py-4 font-semibold">{d.userSegment}</td>
                    <td className="px-6 py-4">{d.totalUsers}</td>
                    <td className="px-6 py-4">{d.avgRequestsPerUser}</td>
                    <td className="px-6 py-4">{d.topServiceNeed}</td>
                    <td className="px-6 py-4 font-semibold text-green-600">{d.satisfactionRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
