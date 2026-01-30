import React from 'react';

const TechTable = () => {
  const techData = [
    { cat: "Network & Infrastructure", tools: "Cisco ASA, Fortinet FortiGate, Palo Alto Networks, F5 Load Balancers, Juniper Networks" },
    { cat: "Server & Cloud", tools: "Windows Server, Linux (Red Hat, Ubuntu, CentOS), VMware vSphere, Hyper-V, AWS, Azure, Google Cloud" },
    { cat: "Database Management", tools: "Microsoft SQL Server, Oracle Database, PostgreSQL, MySQL, MongoDB, Redis" },
    { cat: "Monitoring & Analytics", tools: "Nagios, Zabbix, Splunk, DataDog, New Relic, Prometheus, ELK Stack" },
    { cat: "Virtualization & Containers", tools: "Docker, Kubernetes, OpenStack, Proxmox, KVM" },
    { cat: "Enterprise Systems", tools: "Active Directory, Exchange Server, SAP, Oracle ERP, Salesforce Enterprise, ServiceNow" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 mb-16">
      <div className="bg-white rounded-xl border border-blue-100 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
          <h3 className="text-2xl font-bold">Advanced Tools & Technologies We Support</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-blue-100">
                <th className="px-6 py-4 text-left font-bold text-slate-900">Category</th>
                <th className="px-6 py-4 text-left font-bold text-slate-900">Tools & Platforms</th>
              </tr>
            </thead>
            <tbody>
              {techData.map((row, idx) => (
                <tr key={idx} className="border-b border-blue-100 hover:bg-blue-50/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-700 whitespace-nowrap">{row.cat}</td>
                  <td className="px-6 py-4 text-slate-600">{row.tools}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TechTable;