import React from 'react'; 
import { Mail, MessageSquare, FolderOpen, Cloud, LayoutGrid, Shield, BarChart3, Headphones, Monitor, Zap, Bot } from 'lucide-react';

const Tools = () => {
 
  const tools = [
    { title: "Exchange Online", desc: "Enterprise email and calendar management", icon: <Mail className="w-10 h-10 text-blue-600 mb-3" /> },
    { title: "Microsoft Teams", desc: "Unified communication and collaboration", icon: <MessageSquare className="w-10 h-10 text-blue-600 mb-3" /> },
    { title: "SharePoint Online", desc: "Document management and intranet", icon: <FolderOpen className="w-10 h-10 text-blue-600 mb-3" /> },
    { title: "OneDrive", desc: "Cloud storage and file synchronization", icon: <Cloud className="w-10 h-10 text-blue-600 mb-3" /> },
    { title: "Project Online", desc: "Project and portfolio management", icon: <LayoutGrid className="w-10 h-10 text-blue-600 mb-3" /> },
    { title: "Microsoft Defender", desc: "Advanced threat protection and security", icon: <Shield className="w-10 h-10 text-blue-600 mb-3" /> },
    { title: "Power BI", desc: "Business intelligence and analytics", icon: <BarChart3 className="w-10 h-10 text-blue-600 mb-3" /> },
    { title: "ServiceNow", desc: "IT service management platform", icon: <Headphones className="w-10 h-10 text-blue-600 mb-3" /> }
  ];

  return (
    <section className="py-20 bg-white border-y border-blue-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold mb-4 text-gray-900">Tools & Technologies</h2>
      <p className="text-lg text-gray-600 mb-12 max-w-3xl">We leverage industry-leading tools and Microsoft's latest technologies for optimal performance.</p>

      {/* Standard Tools Grid - Equal Heights */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {tools.map((tool, idx) => (
          <div key={idx} className="flex">
            <div className="bg-cyan-50 p-6 rounded-xl border border-blue-100 text-center hover:-translate-y-2 transition-all duration-300 w-full flex flex-col items-center justify-center">
              {tool.icon}
              <h3 className="font-bold text-gray-900 mb-2">{tool.title}</h3>
              <p className="text-sm text-gray-600">{tool.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Advanced Management Section */}
      <div className="bg-cyan-50 border-1 border-blue-100 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center md:text-left">Advanced Monitoring & Management</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Monitoring */}
          <div className="p-6 rounded-lg   border-blue-50 flex flex-col h-full">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Monitor className="text-blue-600 w-5 h-5" /> Monitoring Tools
            </h4>
            <ul className="space-y-2 text-gray-700 flex-grow">
              <li>• Azure Monitor</li>
              <li>• Application Insights</li>
              <li>• Advanced Auditing</li>
              <li>• Custom dashboards</li>
            </ul>
          </div>

          {/* Automation */}
          <div className="p-6 flex flex-col h-full">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Zap className="text-blue-600 w-5 h-5" /> Automation
            </h4>
            <ul className="space-y-2 text-gray-700 flex-grow">
              <li>• PowerShell scripting</li>
              <li>• Power Automate flows</li>
              <li>• API integration</li>
              <li>• Scheduled tasks</li>
            </ul>
          </div>

          {/* AI */}
          <div className="p-6 flex flex-col h-full">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Bot className="text-blue-600 w-5 h-5" /> AI & Analytics
            </h4>
            <ul className="space-y-2 text-gray-700 flex-grow">
              <li>• Copilot assistance</li>
              <li>• Predictive analytics</li>
              <li>• Machine learning models</li>
              <li>• Intelligent recommendations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Tools;