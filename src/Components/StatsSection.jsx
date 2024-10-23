function StatsSection({ stats, toggleCalendar }) {
  return (
    <section className="grid gap-6 mb-6 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map(([label, value], index) => (
        <div
          key={index}
          className="p-4 bg-white shadow rounded-lg flex flex-col items-start justify-between hover:bg-slate-300"
        >
          {/* Title Section */}
          <div className="font-medium text-gray-900 mb-2">
            <span>{label}</span>
          </div>

          {/* Value Section */}
          <div>
            {label === "Upcoming test" ? (
              <button
                onClick={toggleCalendar}
                className="text-blue-500 hover:text-blue-800 transition-colors duration-200"
              >
                {value}
              </button>
            ) : (
              <span className="text-gray-900 font-semibold">{value}</span>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

export default StatsSection;

