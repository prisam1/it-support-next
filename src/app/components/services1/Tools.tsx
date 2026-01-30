import React from "react";

type ToolItem = {
  name: string;
  bgClass: string;
};

const tools: ToolItem[] = [
  { name: "ServiceNow", bgClass: "bg-gradient-to-br from-blue-100 to-blue-200" },
  { name: "Microsoft 365", bgClass: "bg-gradient-to-br from-purple-100 to-purple-200" },
  { name: "TeamViewer", bgClass: "bg-gradient-to-br from-pink-100 to-pink-200" },
  { name: "Zendesk", bgClass: "bg-gradient-to-br from-indigo-100 to-indigo-200" },
  { name: "Active Directory", bgClass: "bg-gradient-to-br from-green-100 to-green-200" },
  { name: "Salesforce", bgClass: "bg-gradient-to-br from-yellow-100 to-yellow-200" },
  { name: "Freshdesk", bgClass: "bg-gradient-to-br from-red-100 to-red-200" },
  { name: "Jira Service Desk", bgClass: "bg-gradient-to-br from-teal-100 to-teal-200" },
];

export default function ToolsTechnologiesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Tools &amp; Technologies
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className={`p-6 rounded-xl ${tool.bgClass}`}
            >
              <p className="font-semibold text-gray-800">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
