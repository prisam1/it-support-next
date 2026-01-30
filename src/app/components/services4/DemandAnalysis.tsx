import React from "react";
type Column<T> = {
  key: keyof T;
  label: string;
  tdClassName?: string;
};

function TableBlock<T extends Record<string, string>>(props: {
  title: string;
  headGradient: string;
  columns: readonly Column<T>[];
  rows: readonly T[];
  highlightRowKey?: string; 
  highlightClassName?: string;
}) {
  const {
    title,
    headGradient,
    columns,
    rows,
    highlightRowKey,
    highlightClassName = "bg-purple-50",
  } = props;

  return (
    <div className="mb-12 overflow-x-auto">
      <h3 className="mb-6 text-2xl font-bold text-gray-800">{title}</h3>

      <table className="w-full overflow-hidden rounded-lg bg-white shadow-lg">
        <thead className={`${headGradient} text-white`}>
          <tr>
            {columns.map((c) => (
              <th key={String(c.key)} className="px-6 py-4 text-left">
                {c.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {rows.map((row) => {
            const rowKey = String(row[columns[0].key]); // first column value as stable key
            const isHighlight = highlightRowKey && rowKey === highlightRowKey;

            return (
              <tr
                key={rowKey}
                className={`hover:bg-gray-50 ${isHighlight ? highlightClassName : ""}`}
              >
                {columns.map((c) => (
                  <td
                    key={String(c.key)}
                    className={`px-6 py-4 ${c.tdClassName ?? ""} ${
                      c.key === columns[0].key ? "font-semibold" : ""
                    }`}
                  >
                    {row[c.key]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

type DemandRow = {
  year: string;
  vpn: string;
  network: string;
  cloud: string;
  growth: string;
};

const DEMAND_ROWS: readonly DemandRow[] = [
  { year: "2021", vpn: "12,500 requests", network: "8,300 requests", cloud: "4,200 requests", growth: "+28%" },
  { year: "2022", vpn: "18,700 requests", network: "11,900 requests", cloud: "7,100 requests", growth: "+42%" },
  { year: "2023", vpn: "26,400 requests", network: "16,800 requests", cloud: "11,300 requests", growth: "+38%" },
  { year: "2024", vpn: "35,200 requests", network: "22,500 requests", cloud: "16,800 requests", growth: "+35%" },
  { year: "2025 (Projected)", vpn: "47,800 requests", network: "29,400 requests", cloud: "23,100 requests", growth: "+32%" },
] as const;

type CountryRow = {
  country: string;
  users: string;
  tickets: string;
  share: string;
};

const COUNTRY_ROWS: readonly CountryRow[] = [
  { country: "United States", users: "45,000", tickets: "12,300", share: "32%" },
  { country: "United Kingdom", users: "28,500", tickets: "7,800", share: "19%" },
  { country: "India", users: "32,000", tickets: "8,900", share: "22%" },
  { country: "Germany", users: "18,200", tickets: "4,600", share: "12%" },
  { country: "Australia", users: "12,800", tickets: "3,200", share: "8%" },
  { country: "Others", users: "9,500", tickets: "2,700", share: "7%" },
] as const;

type OrgRow = {
  size: string;
  orgs: string;
  avgRemote: string;
  hours: string;
};

const ORG_ROWS: readonly OrgRow[] = [
  { size: "Enterprise (1000+ employees)", orgs: "180", avgRemote: "2,400", hours: "450 hours" },
  { size: "Mid-Market (250-999)", orgs: "340", avgRemote: "580", hours: "180 hours" },
  { size: "Small Business (50-249)", orgs: "820", avgRemote: "120", hours: "65 hours" },
  { size: "Startups (10-49)", orgs: "1,450", avgRemote: "28", hours: "22 hours" },
] as const;


export default function DemandAnalysis() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
          IT Support Services Demand Analysis
        </h2>

        {/* 5-Year Demand */}
        <TableBlock<DemandRow>
          title="Last 5 Years IT Support Demand"
          headGradient="bg-gradient-to-r from-purple-600 to-blue-600"
          columns={[
            { key: "year", label: "Year" },
            { key: "vpn", label: "VPN Services" },
            { key: "network", label: "Network Support" },
            { key: "cloud", label: "Cloud Integration" },
            { key: "growth", label: "Growth Rate", tdClassName: "text-green-600 font-semibold" },
          ]}
          rows={DEMAND_ROWS}
          highlightRowKey="2025 (Projected)"
          highlightClassName="bg-purple-50"
        />

        {/* Country Demand */}
        <TableBlock<CountryRow>
          title="Demand by Country (2024)"
          headGradient="bg-gradient-to-r from-blue-600 to-indigo-600"
          columns={[
            { key: "country", label: "Country" },
            { key: "users", label: "Active Users" },
            { key: "tickets", label: "Support Tickets" },
            { key: "share", label: "Market Share" },
          ]}
          rows={COUNTRY_ROWS}
        />

        {/* User Demand */}
        <TableBlock<OrgRow>
          title="User Demand by Organization Size (2024)"
          headGradient="bg-gradient-to-r from-indigo-600 to-purple-600"
          columns={[
            { key: "size", label: "Organization Size" },
            { key: "orgs", label: "Number of Organizations" },
            { key: "avgRemote", label: "Avg. Remote Users" },
            { key: "hours", label: "Monthly Support Hours" },
          ]}
          rows={ORG_ROWS}
        />
      </div>
    </section>
  );
}
