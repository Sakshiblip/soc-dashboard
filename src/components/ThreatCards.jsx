function ThreatCards() {
    const cards = [
        { title: "Total Alerts", value: 128, color: "text-blue-400" },
        { title: "Critical Alerts", value: 12, color: "text-red-500" },
        { title: "Open Incidents", value: 5, color: "text-yellow-400" },
        { title: "Resolved Incidents", value: 90, color: "text-green-400" },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card) => (
                <div
                    key={card.title}
                    className="bg-gray-800 p-5 rounded-lg shadow hover:scale-105 transition-transform"
                >
                    <p className="text-gray-400 text-sm mb-2">
                        {card.title}
                    </p>
                    <p className={`text-3xl font-bold ${card.color}`}>
                        {card.value}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default ThreatCards;
