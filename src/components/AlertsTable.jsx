import { useState } from "react";

function AlertsTable() {
    const initialAlerts = [
        { id: 1, name: "Suspicious Login", severity: "High", status: "Open" },
        { id: 2, name: "Malware Detected", severity: "Critical", status: "Open" },
        { id: 3, name: "Port Scan Detected", severity: "Medium", status: "Resolved" },
        { id: 4, name: "Failed Login Attempts", severity: "Low", status: "Resolved" },
    ];

    const [alerts, setAlerts] = useState(initialAlerts);
    const [severityFilter, setSeverityFilter] = useState("All");
    const [statusFilter, setStatusFilter] = useState("All");

    const severityColor = {
        Low: "bg-green-500",
        Medium: "bg-yellow-500",
        High: "bg-orange-500",
        Critical: "bg-red-600",
    };

    const statusColor = {
        Open: "bg-red-500",
        Resolved: "bg-green-600",
    };

    const filteredAlerts = alerts.filter(
        (alert) =>
            (severityFilter === "All" || alert.severity === severityFilter) &&
            (statusFilter === "All" || alert.status === statusFilter)
    );

    const resolveAlert = (id) => {
        setAlerts((prev) =>
            prev.map((alert) =>
                alert.id === id ? { ...alert, status: "Resolved" } : alert
            )
        );
    };

    return (
        <div className="mt-8 bg-gray-800 rounded-lg shadow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between p-4 border-b border-gray-700 gap-4">
                <h2 className="text-xl font-semibold">Recent Alerts</h2>

                <div className="flex gap-4">
                    <select
                        value={severityFilter}
                        onChange={(e) => setSeverityFilter(e.target.value)}
                        className="bg-gray-700 text-white px-3 py-2 rounded"
                    >
                        <option>All</option>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                        <option>Critical</option>
                    </select>

                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="bg-gray-700 text-white px-3 py-2 rounded"
                    >
                        <option>All</option>
                        <option>Open</option>
                        <option>Resolved</option>
                    </select>
                </div>
            </div>

            <table className="w-full text-left">
                <thead className="bg-gray-700 text-gray-300">
                    <tr>
                        <th className="p-3">Alert</th>
                        <th className="p-3">Severity</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredAlerts.map((alert) => (
                        <tr
                            key={alert.id}
                            className="border-t border-gray-700 hover:bg-gray-700"
                        >
                            <td className="p-3">{alert.name}</td>

                            <td className="p-3">
                                <span
                                    className={`px-2 py-1 text-sm rounded ${severityColor[alert.severity]}`}
                                >
                                    {alert.severity}
                                </span>
                            </td>

                            <td className="p-3">
                                <span
                                    className={`px-2 py-1 text-sm rounded ${statusColor[alert.status]}`}
                                >
                                    {alert.status}
                                </span>
                            </td>

                            <td className="p-3">
                                {alert.status === "Open" && (
                                    <button
                                        onClick={() => resolveAlert(alert.id)}
                                        className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm"
                                    >
                                        Mark Resolved
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}

                    {filteredAlerts.length === 0 && (
                        <tr>
                            <td colSpan="4" className="p-4 text-center text-gray-400">
                                No alerts match the selected filters
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default AlertsTable;
