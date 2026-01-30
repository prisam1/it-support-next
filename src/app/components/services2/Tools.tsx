
type ToolCard = {
  title: string;
  description: string;
  color: "purple" | "blue" | "pink" | "indigo";
};

const tools: ToolCard[] = [
  {
    title: "Ticketing Systems",
    description: "ServiceNow, Jira, Zendesk, Freshdesk",
    color: "purple",
  },
  {
    title: "Remote Access",
    description: "TeamViewer, AnyDesk, RDP, VNC",
    color: "blue",
  },
  {
    title: "Monitoring Tools",
    description: "Nagios, Zabbix, SolarWinds, PRTG",
    color: "pink",
  },
  {
    title: "Scripting",
    description: "PowerShell, Bash, Python, JavaScript",
    color: "indigo",
  },
];

function colorClass(color: ToolCard["color"]) {
  switch (color) {
    case "purple":
      return "text-purple-600";
    case "blue":
      return "text-blue-600";
    case "pink":
      return "text-pink-600";
    case "indigo":
      return "text-indigo-600";
    default:
      return "text-purple-600";
  }
}

export default function ToolsTechnologiesSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text sm:text-4xl">
          Tools &amp; Technologies
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tools.map((item) => (
            <div
              key={item.title}
              className="rounded-lg bg-white p-6 text-center shadow transition hover:shadow-xl"
            >
              <h4 className={`mb-3 font-bold ${colorClass(item.color)}`}>
                {item.title}
              </h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
