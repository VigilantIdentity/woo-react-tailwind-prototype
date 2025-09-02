export default function Subscriber() {
  //✅ Called in the home page
  return (
    <>
      <div className="relative space-y-4">
        <h1 className=" text-3xl md:text-5xl text-center md:text-start font-bold text-[#101517]">
          The most-trusted ecommerce platform
        </h1>

        <h1 className="text-lg md:text-2xl font-semibold md:font-bold text-center">
          Dashboard
        </h1>

        {/* ✅3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* ✅Subscribers */}
          <div className="bg-white rounded-2xl shadow p-4 h-96 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Subscribers</h2>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
              <div className="bg-[#873eff] h-4 rounded-full w-[70%]">
                <h5 className="text-xs text-white px-[50%]">70%</h5>
              </div>
            </div>
            <p className="text-gray-700">70% of subscriber goal reached.</p>
            <div className="mt-6 space-y-2">
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} className="p-2 bg-blue-50 rounded">
                  Subscriber {i + 1}
                </div>
              ))}
            </div>
          </div>

          {/*✅ E-commerce */}
          <div className="bg-white rounded-2xl shadow p-4 h-96 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">E-commerce Sales</h2>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
              <div className="bg-green-500 h-4 rounded-full w-[45%]">
                <h5 className="text-xs text-white px-[45%]">45%</h5>
              </div>
            </div>
            <p className="text-gray-700">45% of monthly target achieved.</p>
            <div className="mt-6 space-y-2">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className="p-2 bg-green-50 rounded">
                  Order #{i + 101}
                </div>
              ))}
            </div>
          </div>

          {/* ✅Online Percentage */}
          <div className="bg-white rounded-2xl shadow p-4 h-96 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Online Users</h2>
            <div className="relative flex items-center justify-center w-32 h-32 mx-auto mb-4">
              {/* ✅Circular Progress */}
              <svg className="absolute w-32 h-32 transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="54"
                  stroke="#e5e7eb"
                  strokeWidth="12"
                  fill="none"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="54"
                  stroke="#f59e0b"
                  strokeWidth="12"
                  strokeDasharray={2 * Math.PI * 54} // ✅circumference 2*PI*R
                  strokeDashoffset={2 * Math.PI * 54 * (1 - 0.6)} // ✅60%
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-xl font-bold">60%</span>
            </div>
            <p className="text-gray-700 text-center">Users Online</p>
            <div className="mt-6 space-y-2">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="p-2 bg-yellow-50 rounded">
                  Online User {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
