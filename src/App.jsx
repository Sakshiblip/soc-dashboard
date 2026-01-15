import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Sidebar from "./components/Sidebar";
import ThreatCards from "./components/ThreatCards";
import AlertsTable from "./components/AlertsTable";
import SeverityChart from "./components/SeverityChart";

function App() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div
            className={`flex min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
                }`}
        >
            <Sidebar />

            <main className="flex-1 p-6">
                <h1 className="text-3xl font-bold mb-6">
                    SOC Dashboard
                </h1>

                <ThreatCards />
                <SeverityChart />
                <AlertsTable />
            </main>
        </div>
    );
}

export default App;