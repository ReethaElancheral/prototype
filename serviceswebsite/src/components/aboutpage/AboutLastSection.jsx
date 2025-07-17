const AboutLastSection = () => {
  const stats = [
    { number: "13+", label: "Years Experience" },
    { number: "100+", label: "Emergency Repairs" },
    { number: "99%", label: "Customer Satisfaction" },
    { number: "500+", label: "Skilled Professionals" },
  ];

  return (
    <section className="bg-[#f6f9fc] py-10 px-4 md:px-20">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center">
            {/* Stat Block */}
            <div className="flex flex-col items-center md:items-start px-4">
              <h3 className="text-5xl font-bold text-[#37474F]">{stat.number}</h3>
              <p className="text-[#37474F] mt-1 font-semibold">{stat.label}</p>
            </div>

            {/* Divider: show only if not the last item */}
            {index < stats.length - 1 && (
              <div className="hidden md:block h-16 w-[2px] bg-black mx-6" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutLastSection;
