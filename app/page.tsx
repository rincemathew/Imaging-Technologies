"use client";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white overflow-hidden relative">

      {/* Soft floating background circle */}
      <div className="absolute w-96 h-96 bg-[var(--primary-color)]/5 rounded-full blur-3xl animate-float"></div>

      <div className="relative text-center px-6">

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight animate-fadeIn">
          IMAGING TECHNOLOGY
          {/* Imagingtechnology */}
        </h1>
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight animate-fadeIn">
          Coming Soon
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 text-lg max-w-xl mx-auto animate-fadeIn delay-200">
          We’re working on something exciting.
          Stay tuned for updates.
        </p>

        {/* Animated Divider */}
        <div className="mt-8 flex justify-center">
          <div className="h-1 w-24 bg-[var(--primary-color)] rounded-full animate-pulse"></div>
        </div>

      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
