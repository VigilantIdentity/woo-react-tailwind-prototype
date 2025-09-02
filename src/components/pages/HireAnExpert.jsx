import useAuth from "../hooks/useAuth";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function HireAnExpert() {
  const { headerHeight } = useAuth();
  return (
    <div>
      <Navbar />

      {/* ✅ No need to have style={{ top: headerHeight }} in below div section when Navbar is relative instead of fixed */}
      <div className="relative flex flex-col justify-center items-center py-4">
        {/*✅ Footer section rendered full width of the page*/}
        <div className="w-full md:w-full space-y-6">
          <ExpertHeroSection />
        </div>
        {/*✅ Section of the page having components with 75% width of whole page size and centered justified*/}
        <div className="w-full md:w-[75%] py-2 space-y-4">
          {" "}
          <WooAgencyPartners />
        </div>
        {/*✅ Footer section rendered full width of the page*/}
        <div className="w-full md:w-full space-y-6">
          <Footer />
        </div>
      </div>
    </div>
  );
}

function ExpertHeroSection() {
  return (
    <section className="bg-purple-400">
      <div className="container mx-auto px-1 space-y-12 lg:flex lg:items-center lg:gap-12">
        {/* ✅ Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-900 leading-snug md:text-5xl">
            Get expert help <br />
            creating the store of <br />
            your dreams
          </h1>
          <p className="mt-6 text-lg text-gray-800 leading-relaxed">
            Need help building, migrating, or maintaining your store? Woo Agency
            Partners are the world’s best WooCommerce development services,
            vetted and verified by our team.
          </p>

          {/* ✅ Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#"
              className="px-6 py-3 rounded-md bg-black text-white font-medium shadow hover:bg-gray-800 transition"
            >
              Hire an expert
            </a>
            <a
              href="#"
              className="px-6 py-3 rounded-md bg-white border border-purple-700 text-purple-700 font-medium shadow hover:bg-purple-100 transition"
            >
              Get matched with an agency
            </a>
          </div>
        </div>

        {/* ✅ Right Image */}
        <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center relative">
          <div className="absolute -z-10 w-3/4 h-3/4 bg-purple-500 rounded-tr-[80px] top-6 left-6"></div>
          <img
            src="src/components/assets/images/expert_hero.webp"
            alt="Expert working on laptop"
            className="rounded-lg shadow-lg relative"
          />
        </div>
      </div>
    </section>
  );
}

const WooAgencyPartners = () => {
  const benefits = [
    {
      title: "Enjoy total peace of mind",
      description:
        "All agency partners must pass our rigorous technical and design review for verification. Trust that your business is in safe hands.",
      highlight: "your business is in safe hands",
    },
    {
      title: "Get solutions tailored to you",
      description:
        "Unique businesses call for one-of-a-kind solutions. Our agency partners will craft custom functionality to meet your specific needs.",
      highlight: "custom functionality",
    },
    {
      title: "Send time on what matters",
      description:
        "Lean on agency expertise to deliver efficient, high-quality results — so you can focus on growing your business, rather than building your site.",
      highlight: "focus on growing your business",
    },
    {
      title: "Cut down on costs",
      description:
        "WooCommerce development services can be less expensive than bringing on a full-time employee, delivering you professional results for less.",
      highlight: "less expensive",
    },
    {
      title: "Scale up when you need to",
      description:
        "Working with an agency means scalability from the start — and a flexible platform that can adapt and expand at your pace, without costly overhauls later on.",
      highlight: "scalability from the start",
    },
    {
      title: "Secure ongoing support",
      description:
        "The build is just the beginning: get ongoing post-launch support for your technical, marketing, and development needs as your business grows.",
      highlight: "ongoing post-launch support",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        Why work with a Woo Agency Partner?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              {benefit.title}
            </h2>
            <p className="text-gray-600">
              {benefit.description.split(benefit.highlight).map((part, i) => (
                <span key={i}>
                  {part}
                  {i <
                    benefit.description.split(benefit.highlight).length - 1 && (
                    <span className="font-bold text-blue-600">
                      {benefit.highlight}
                    </span>
                  )}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
