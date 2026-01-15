import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

function SeverityChart() {
    const data = [
        { severity: "Low", count: 8 },
        { severity: "Medium", count: 15 },
        { severity: "High", count: 6 },
        { severity: "Critical", count: 3 },
    ];

    return (
        <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">
                Alerts by Severity
            </h2>

            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data}>
                    <XAxis dataKey="severity" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip />
                    <Bar dataKey="count" fill="#3B82F6" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default SeverityChart;
