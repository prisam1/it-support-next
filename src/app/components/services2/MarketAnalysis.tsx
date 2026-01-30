

type ITDemandRow = {
  year: number;
  marketSize: string;
  growthRate: string;
  tier2Required: string;
  remoteAdoption: string;
  highlight?: boolean;
};

type CountryDemandRow = {
  country: string;
  marketShare: string;
  avgResponseTime: string;
  primaryIndustries: string;
};

const itDemandRows: ITDemandRow[] = [
  { year: 2021, marketSize: "$285.4", growthRate: "8.2%", tier2Required: "412,000", remoteAdoption: "67%" },
  { year: 2022, marketSize: "$312.8", growthRate: "9.6%", tier2Required: "458,000", remoteAdoption: "74%" },
  { year: 2023, marketSize: "$347.6", growthRate: "11.1%", tier2Required: "521,000", remoteAdoption: "81%" },
  { year: 2024, marketSize: "$391.2", growthRate: "12.5%", tier2Required: "597,000", remoteAdoption: "86%" },
  { year: 2025, marketSize: "$445.8", growthRate: "13.9%", tier2Required: "682,000", remoteAdoption: "91%", highlight: true },
];

const countryDemandRows: CountryDemandRow[] = [
  { country: "United States", marketShare: "32.4%", avgResponseTime: "2.1", primaryIndustries: "Tech, Finance, Healthcare" },
  { country: "India", marketShare: "18.7%", avgResponseTime: "3.2", primaryIndustries: "IT Services, E-commerce" },
  { country: "United Kingdom", marketShare: "9.8%", avgResponseTime: "2.5", primaryIndustries: "Finance, Retail" },
  { country: "Germany", marketShare: "7.6%", avgResponseTime: "2.8", primaryIndustries: "Manufacturing, Auto" },
  { country: "Canada", marketShare: "6.2%", avgResponseTime: "2.3", primaryIndustries: "Tech, Government" },
  { country: "Australia", marketShare: "5.4%", avgResponseTime: "2.7", primaryIndustries: "Mining, Education" },
  { country: "Others", marketShare: "19.9%", avgResponseTime: "3.5", primaryIndustries: "Various" },
];

type TableColumn<T> = {
  key: keyof T;
  label: string;
  className?: string;
};

function DataTable<T extends Record<string, unknown>>(props: {
  caption: string;
  headerBgClass: string;
  headerBorderClass: string;
  columns: TableColumn<T>[];
  rows: T[];
  getRowClassName?: (row: T) => string;
}) {
  const { caption, headerBgClass, headerBorderClass, columns, rows, getRowClassName } = props;

  return (
    <div className="overflow-x-auto rounded-xl bg-white p-6 shadow-lg sm:p-8">
      <h3 className="mb-6 text-xl font-bold sm:text-2xl">{caption}</h3>

      <div className="min-w-[720px]">
        <table className="w-full border-collapse text-left">
          <thead className={`sticky top-0 ${headerBgClass}`}>
            <tr>
              {columns.map((col) => (
                <th
                  key={String(col.key)}
                  className={`border p-4 font-semibold ${headerBorderClass} ${col.className ?? ""}`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={idx}
                className={[
                  "transition-colors hover:bg-gray-50",
                  getRowClassName ? getRowClassName(row) : "",
                ].join(" ")}
              >
                {columns.map((col) => (
                  <td key={String(col.key)} className="border border-gray-200 p-4">
                    {String(row[col.key])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function MarketDemandAnalysis() {
  return (
    <section className="bg-gray-50 py-20" id="case-study">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text sm:text-4xl">
          Market Demand Analysis
        </h2>

        {/* 5-Year IT Support Demand */}
        <div className="mb-8">
          <DataTable<ITDemandRow>
            caption="IT Support Services Demand (2021-2025)"
            headerBgClass="bg-purple-100"
            headerBorderClass="border-purple-200"
            columns={[
              { key: "year", label: "Year", className: "w-[120px]" },
              { key: "marketSize", label: "Market Size (USD Billion)" },
              { key: "growthRate", label: "Growth Rate (%)" },
              { key: "tier2Required", label: "Tier-2 Specialists Required" },
              { key: "remoteAdoption", label: "Remote Support Adoption (%)" },
            ]}
            rows={itDemandRows}
            getRowClassName={(row) =>
              row.highlight ? "bg-purple-50 font-semibold" : ""
            }
          />
        </div>

        {/* Country Demand Table */}
        <DataTable<CountryDemandRow>
          caption="Country-wise IT Support Demand (2025)"
          headerBgClass="bg-blue-100"
          headerBorderClass="border-blue-200"
          columns={[
            { key: "country", label: "Country", className: "w-[220px]" },
            { key: "marketShare", label: "Market Share (%)" },
            { key: "avgResponseTime", label: "Avg Response Time (hrs)" },
            { key: "primaryIndustries", label: "Primary Industries" },
          ]}
          rows={countryDemandRows}
        />
      </div>
    </section>
  );
}
