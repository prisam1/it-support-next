import React from 'react';

const MarketDataTables = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Table 1 */}
                <div className="py-4 bg-whit">
                    <h3 className="text-2xl font-bold text-gray-900">Table 1: Cloud IT Services Industry Demand (2021-2026)</h3>
                </div>
                <div className="mb-10 overflow-hidden rounded-2xl  bg-white">

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-blue-600 text-white text-xs font-bold">
                                <tr>
                                    <th className="p-5 font-bold text-[14px]">Year</th>
                                    <th className="p-5 font-bold text-[14px]">Market Size (Billions)</th>
                                    <th className="p-5 font-bold text-[14px]">Growth Rate (%)</th>
                                    <th className="p-5 font-bold text-[14px]">MS 365 Market Share (%)</th>
                                    <th className="p-5 font-bold text-[14px]">Support Services Growth (%)</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                <tr className="border-b border-blue-50 hover:bg-blue-50 transition"><td className="p-5 font-bold">2021</td><td className="p-5 font-light">$482.3B</td><td className="p-5 font-light text-green-500">12.5%</td><td className="p-5 font-bold text-blue-500">32%</td><td className="p-5 font-light text-green-500">18%</td></tr>
                                <tr className="border-b border-blue-50 hover:bg-blue-50 transition"><td className="p-5 font-bold">2022</td><td className="p-5 font-light">$542.8B</td><td className="p-5 font-light text-green-500">12.5%</td><td className="p-5 font-bold text-blue-500">35%</td><td className="p-5 font-light text-green-500">22%</td></tr>
                                <tr className="border-b border-blue-50 hover:bg-blue-50 transition"><td className="p-5 font-bold">2023</td><td className="p-5 font-light">$612.5B</td><td className="p-5 font-light text-green-500">12.8%</td><td className="p-5 font-bold text-blue-500">38%</td><td className="p-5 font-light text-green-500">25%</td></tr>
                                <tr className="border-b border-blue-50 hover:bg-blue-50 transition"><td className="p-5 font-bold">2024</td><td className="p-5 font-light">$691.2B</td><td className="p-5 font-light text-green-500">12.8%</td><td className="p-5 font-bold text-blue-500">40%</td><td className="p-5 font-light text-green-500">28%</td></tr>
                                <tr className="bg-blue-50/50 font-bold"><td className="p-5 font-bold">2025*</td><td className="p-5 font-light">$783.8B</td><td className="p-5 font-light text-green-500">13.4%</td><td className="p-5 font-bold text-blue-500">42%</td><td className="p-5 font-light text-green-500">31%</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="py-3 text-xs text-gray-500 italic">*2025 projections based on current trajectory. Source: Gartner Cloud IT Services Market Analysis</p>
                </div>

                {/* Table 2 */}
                <div className="py-6 bg-white">
                        <h3 className="text-2xl font-bold text-gray-900">Table 2: US Regional Microsoft 365 Support Demand (2021-2026)</h3>
                    </div>
                <div className="mb-10 overflow-hidden rounded-2xl bg-white ">
                   
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-blue-600 text-white text-xs font-bold">
                                <tr>
                                    <th className="p-5 font-bold text-[14px]">Region</th>
                                    <th className="p-5 font-bold text-[14px]">2021 Adoption</th>
                                    <th className="p-5 font-bold text-[14px]">2023 Adoption</th>
                                    <th className="p-5 font-bold text-[14px]">2025 Projection</th>
                                    <th className="p-5 font-bold text-[14px]">CAGR (%)</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                <tr className="border-b border-blue-50 hover:bg-blue-50 transition"><td className="p-5 font-bold">Northeast</td><td className="p-5 font-light">58%</td><td className="p-5 font-light">78%</td><td className="p-5 font-light">89%</td><td className="p-5 font-light">7.8%</td></tr>
                                <tr className="border-b border-blue-50 hover:bg-blue-50 transition"><td className="p-5 font-bold">Midwest</td><td className="p-5 font-light">52%</td><td className="p-5 font-light">71%</td><td className="p-5 font-light">84%</td><td className="p-5 font-light">9.2%</td></tr>
                                <tr className="border-b border-blue-50 hover:bg-blue-50 transition"><td className="p-5 font-bold">South</td><td className="p-5 font-light">48%</td><td className="p-5 font-light">68%</td><td className="p-5 font-light">82%</td><td className="p-5 font-light">10.1%</td></tr>
                                <tr className="border-b border-blue-50 hover:bg-blue-50 transition"><td className="p-5 font-bold">West</td><td className="p-5 font-light">62%</td><td className="p-5 font-light">81%</td><td className="p-5 font-light">91%</td><td className="p-5 font-light">8.1%</td></tr>
                                <tr className="bg-blue-50/50 font-light"><td className="p-5 font-bold">National Average</td><td className="p-5 font-light">55%</td><td className="p-5 font-light">74.5%</td><td className="p-5 font-light">86.5%</td><td className="p-5 font-light">8.8%</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="py-3 text-xs text-gray-500 italic">Source: IDC US Cloud Market Analysis 2021-2025</p>
                </div>

                {/* Table 3 */}
                <div className="py-6 bg-white ">
                        <h3 className="text-2xl font-bold text-gray-900">Table 3: Global Microsoft 365 Users Growth (2021-2026)</h3>
                    </div>
                <div className="overflow-hidden rounded-2xl  bg-white">
                   
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-blue-600 text-white text-xs font-bold">
                                <tr>
                                    <th className="p-5 font-bold text-[14px]">Year</th>
                                    <th className="p-5 font-bold text-[14px]">Global Users (Millions)</th>
                                    <th className="p-5 font-bold text-[14px]">Enterprise Users (%)</th>
                                    <th className="p-5 font-bold text-[14px]">Support Services Demand</th>
                                    <th className="p-5 font-bold text-[14px]">YoY Growth</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                <tr className="border-b border-blue-50 hover:bg-blue-50 transition"><td className="p-5 font-bold">2021</td><td className="p-5 font-light">382M</td><td className="p-5 font-light">45%</td><td className="p-5 font-light">Moderate</td><td className="p-5 font-light">—</td></tr>
                                <tr className="border-b border-blue-50 hover:bg-blue-50 transition"><td className="p-5 font-bold">2022</td><td className="p-5 font-light">428M</td><td className="p-5 font-light">51%</td><td className="p-5 font-light">High</td><td className="p-5 font-light">+12.0%</td></tr>
                                <tr className="border-b border-blue-50 hover:bg-blue-50 transition"><td className="p-5 font-bold">2023</td><td className="p-5 font-light">512M</td><td className="p-5 font-light">58%</td><td className="p-5 font-light">Very High</td><td className="p-5 font-light">+19.6%</td></tr>
                                <tr className="border-b border-blue-50 hover:bg-blue-50 transition"><td className="p-5 font-bold">2024</td><td className="p-5 font-light">618M</td><td className="p-5 font-light">62%</td><td className="p-5 font-light">Critical</td><td className="p-5 font-light">+20.7%</td></tr>
                                <tr className="bg-blue-50/50 font-bold"><td className="p-5 font-bold">2025*</td><td className="p-5 font-light">748M</td><td className="p-5 font-light">65%</td><td className="p-5 font-light">Critical++</td><td className="p-5 font-light">+21.0%</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="py-3 text-xs text-gray-500 italic">*2025 projections. Source: Microsoft Investor Relations & IDC Market Research</p>
                </div>

            </div>
        </section>
    );
};

export default MarketDataTables;