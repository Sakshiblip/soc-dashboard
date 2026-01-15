import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Sidebar() {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <div className="w-64 bg-gray-800 min-h-screen p-6">
            <h2 className="text-xl font-bold mb-8 text-blue-400">
                SOC Panel
            </h2>

            <ul className="space-y-4 text-gray-300 mb-8">
                <li className="hover:text-white cursor-pointer">Dashboard</li>
                <li className="hover:text-white cursor-pointer">Alerts</li>
                <li className="hover:text-white cursor-pointer">Incidents</li>
                <li className="hover:text-white cursor-pointer">Reports</li>
                <li className="hover:text-white cursor-pointer">Settings</li>
            </ul>

            <button
                onClick={toggleTheme}
                className="bg-blue-600 hover:bg-blue-700 w-full py-2 rounded"
            >
                Toggle Theme
            </button>
        </div>
    );
}

export default Sidebar;
