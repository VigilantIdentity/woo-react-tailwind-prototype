import "../styles/globals.css";
import { useMemo, useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useAuth from "../hooks/useAuth";
import Subscriber from "../sections/Subscriber";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

export default function Home() {
  const { headerHeight } = useAuth();
  return (
    <div className="">
      <Navbar />

      {/*✅  No need to have style={{ top: headerHeight }} in below div section when Navbar is relative instead of fixed */}
      <div className="relative flex flex-col justify-center items-center py-4">
        {/*✅ Section of the page having components with 75% width of whole page size and centered justified*/}
        <div className="w-full md:w-[75%] py-2 space-y-4">
          <HomeHeroSection />
          <Subscriber />
          <WooHelp />
          <BuildStores />
        </div>
        {/*✅ Footer section rendered full width of the page*/}
        <div className="w-full md:w-full space-y-6">
          <ScrollingBrands />
          <BrandMarquee />
          <CaseStudiesCarousel />
          <HoverCard />
          <Footer />
        </div>
      </div>
    </div>
  );
}

function HomeHeroSection() {
  const slides = useMemo(
    () => [
      {
        img: "https://picsum.photos/id/1015/800/500",
        label: "Mountains",
        box: { top: 20, left: 20, width: 30, height: 30 },
      },
      {
        img: "https://picsum.photos/id/1025/800/500",
        label: "Dog",
        box: { top: 20, left: 20, width: 30, height: 30 },
      },
      {
        img: "https://picsum.photos/id/1035/800/500",
        label: "River",
        box: { top: 20, left: 25, width: 30, height: 30 },
      },
      {
        img: "https://picsum.photos/id/1045/800/500",
        label: "Flowers",
        box: { top: 20, left: 20, width: 30, height: 30 },
      },
      {
        img: "https://picsum.photos/id/1055/800/500",
        label: "Desert",
        box: { top: 20, left: 20, width: 30, height: 30 },
      },
      {
        img: "https://picsum.photos/id/1065/800/500",
        label: "City Lights",
        box: { top: 20, left: 20, width: 30, height: 30 },
      },
    ],
    []
  );
  const [idx, setIdx] = useState(0);

  // ✅ auto-slide every 4s
  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // ✅ active dot (after every 2 slides)
  const activeDot = Math.floor(idx / 2) % 3;

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 px-1 md:px-1">
      {/* ✅ Left Column */}
      <div
        className=""
        style={{
          width: "full",
          minWidth: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: 6,
        }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-[#101517]">
          Forget cookie-cutter ecommerce
        </h1>

        <p className="text-lg md:text-xl">
          Every business is unique, and every store should be too. WooCommerce
          empowers you to build, sell, and grow on your terms. Our
          WordPress-powered platform offers fully customizable ecommerce, for
          less.
        </p>

        <button className="px-5 py-3 mt-3  text-white shadow-md transition-colors duration-500 ease-in-out bg-[#873eff] hover:bg-purple-800 transform cursor-pointer hover:scale-102 rounded-lg">
          Start here
        </button>
      </div>

      {/*✅ Right Column (Slideshow) */}

      <div
        className=""
        style={{
          width: "full", // ✅responsive width
          minWidth: "50%",
          height: "full",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
        }}
      >
        {/*✅ Frame */}
        <div
          style={{
            position: "relative",

            height: "full",
            minHeight: "80%",
            borderRadius: 16,
            overflow: "hidden",
          }}
        >
          <img
            className=""
            key={idx}
            src={slides[idx].img}
            alt={slides[idx].label}
            style={{
              position: "relative",
              width: "full",
              minWidth: "50%",

              height: "100%",
              objectFit: "cover",
              transition: "opacity .6s ease",
            }}
          />

          {/* ✅ Rectangle drawing with stars */}
          <svg
            key={`rect-${idx}`}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
          >
            <rect
              className="trace-rect"
              x={slides[idx].box.left}
              y={slides[idx].box.top}
              width={slides[idx].box.width}
              height={slides[idx].box.height}
              rx="2"
              ry="2"
              pathLength="400"
            />
            {/* ✅ Stars at each line end */}
            <text
              className="star star-1"
              x={slides[idx].box.left + slides[idx].box.width}
              y={slides[idx].box.top}
            >
              ✦
            </text>
            <text
              className="star star-2"
              x={slides[idx].box.left + slides[idx].box.width}
              y={slides[idx].box.top + slides[idx].box.height}
            >
              ✦
            </text>
            <text
              className="star star-3"
              x={slides[idx].box.left}
              y={slides[idx].box.top + slides[idx].box.height}
            >
              ✦
            </text>
            <text
              className="star star-4"
              x={slides[idx].box.left}
              y={slides[idx].box.top}
            >
              ✦
            </text>
          </svg>
        </div>
        {/* ✅ Caption */}
        <div style={{ fontWeight: 600, color: "#333" }}>
          {slides[idx].label}
        </div>
        {/*✅  Radio buttons */}
        <div style={{ display: "flex", gap: 12 }}>
          {[0, 1, 2].map((d) => (
            <button
              key={d}
              aria-label={`Go to group ${d + 1}`}
              onClick={() => setIdx(d * 2)}
              style={{
                width: 12,
                height: 12,
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                transform: activeDot === d ? "scale(1.5)" : "scale(1)",
                transition: "all .25s ease",
                background: activeDot === d ? "#873eff" : "#d3d6de",
                outline:
                  activeDot === d
                    ? "2px solid #e6394680"
                    : "2px solid transparent",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
{
  /* ✅ How can Woo help you ? area */
}
function WooHelp() {
  return (
    <div className="relative">
      {/* ✅ Section Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        How can Woo help you?
      </h1>

      {/* ✅ Top big card */}
      <div className="relative items-center md:items-start justify-center md:justify-between  border-black gap-2 flex flex-col md:flex-row overflow-hidden bg-[#873eff] text-white rounded-xl shadow-md">
        <div className="flex-col space-y-4 px-1 md:px-1">
          <h2 className="text-2xl font-bold md:font-semibold">
            Sell with WooCommerce
          </h2>
          <p className="text-lg md:text-md">
            Sell and scale your way, with a WooCommerce store as unique as you!
          </p>

          <button className="bg-white text-[#873eff] px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
            Create your dream store
          </button>
        </div>
        <div className="justify-center w-[100%] md:w-200 h-100 px-0 md:px-30 py-0 md:py-10 ">
          <ImagePreview />
        </div>
      </div>
    </div>
  );
}

function ImagePreview() {
  const [index, setIndex] = useState(0);

  const images = [
    "https://picsum.photos/id/1018/800/450",
    "https://picsum.photos/id/1025/800/450",
    "https://picsum.photos/id/1037/800/450",
  ];

  // ✅ Auto-advance every `delay` ms
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length, 3000]);

  return (
    <div className="absolute w-[100%] md:w-full h-full rounded-2xl overflow-hidden shadow-lg bg-white">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Slide ${i + 1}`}
          className={`absolute inset-0 w-full  h-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

function BuildStores() {
  return (
    <>
      {/* ✅ Bottom row cards */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* ✅ Left card */}
        <div>
          <img
            src="src/components/assets/images/build_store_for_others.webp"
            alt="Build stores for others"
            className="rounded-lg mb-4 w-full object-cover"
          />
          <h3 className="text-xl font-bold mb-2 px-1 md:px-1">
            Build stores for others
          </h3>
          <p className="mb-4 text-gray-700 px-1 md:px-1">
            Join a global community of developers creating powerful ecommerce
            solutions.
          </p>
          <button className="border border-[#873eff] text-[#873eff] ml-1 px-4 py-2 rounded-lg font-medium hover:bg-purple-50">
            Build the future of open source
          </button>
        </div>

        {/* ✅ Right card */}
        <div>
          <img
            src="src/components/assets/images/add_new_features.webp"
            alt="Add new features"
            className="rounded-lg mb-4 w-full object-cover"
          />
          <h3 className="text-xl font-bold mb-2 px-1 md:px-1">
            Add new features
          </h3>
          <p className="mb-4 text-gray-700 px-1 md:px-1">
            Level up your WooCommerce store with hundreds of trusted extensions
            and themes.
          </p>
          <button className="border border-[#873eff] text-[#873eff] ml-1 px-4 py-2 rounded-lg font-medium hover:bg-purple-50">
            Customize my store
          </button>
        </div>
      </div>
    </>
  );
}

function ScrollingBrands() {
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);

  // ✅ Sample brand logos
  const brands = [
    {
      id: 1,
      name: "Brand 1",
      logo: "src/components/assets/brands/atholl-mobile-1.webp",
    },
    {
      id: 2,
      name: "Brand 2",
      logo: "src/components/assets/brands/atholl.webp",
    },
    {
      id: 3,
      name: "Brand 3",
      logo: "src/components/assets/brands/atholl.webp",
    },
    {
      id: 4,
      name: "Brand 4",
      logo: "src/components/assets/brands/coolhunter-mobile-1.webp",
    },
    {
      id: 5,
      name: "Brand 5",
      logo: "src/components/assets/brands/createtattoo-mobile-1.webp",
    },
    {
      id: 6,
      name: "Brand 6",
      logo: "src/components/assets/brands/jimmynelson-mobile-1.webp",
    },
    {
      id: 7,
      name: "Brand 7",
      logo: "src/components/assets/brands/la-morzocco-mobile.webp",
    },
    {
      id: 8,
      name: "Brand 8",
      logo: "src/components/assets/brands/la-morzocco.webp",
    },
    {
      id: 9,
      name: "Brand 9",
      logo: "src/components/assets/brands/lunch-mobile-1.webp",
    },
    {
      id: 10,
      name: "Brand 10",
      logo: "src/components/assets/brands/montvel-mobile-1.webp",
    },
    {
      id: 11,
      name: "Brand 11",
      logo: "src/components/assets/brands/ruby-1.webp",
    },
    {
      id: 12,
      name: "Brand 12",
      logo: "src/components/assets/brands/ruby-mobile-1.webp",
    },
    {
      id: 13,
      name: "Brand 13",
      logo: "src/components/assets/brands/wetnwild-mobile-1.webp",
    },
  ];

  // ✅ Duplicate the brands array to create a seamless loop
  const duplicatedBrands = [...brands, ...brands];

  useEffect(() => {
    //✅ Function to animate the scrolling
    const animateScroll = (element, direction) => {
      let scrollPosition = 0;
      const speed = 0.3; // ✅ Adjust scrolling speed
      const containerWidth = element.scrollWidth / 2;

      const scroll = () => {
        if (direction === "right") {
          scrollPosition += speed;

          if (scrollPosition >= containerWidth) {
            scrollPosition = 0;
          }
        } else if (direction === "left") {
          scrollPosition -= speed;
          if (scrollPosition <= 0) {
            scrollPosition = containerWidth;
          }
        }

        element.scrollLeft = scrollPosition;
        requestAnimationFrame(scroll);
      };

      scroll();
    };

    if (topRowRef.current && bottomRowRef.current) {
      animateScroll(topRowRef.current, "right");
      animateScroll(bottomRowRef.current, "left");
    }
  }, []);

  return (
    /* ✅bg-gradient-to-b from-gray-300 to-purple-600  for gradient bg color */
    <div className="relative py-12 w-full bg-black ">
      {/* ✅Adj. number of scrolling cards needed by dec/inc max-w-6xl to max-w-full  */}
      <div className="max-w-8xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          The brands you love, love <span className="text-[#873eff]">Woo</span>
        </h2>

        {/* ✅Top row - scrolls to the right */}
        <div
          ref={topRowRef}
          className="overflow-hidden flex mb-8 scrollbar-hide"
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`top-${brand.id}-${index}`}
              className="flex-shrink-0 w-65 h-50 mx-4 bg-white rounded-2xl shadow-md flex items-center justify-center p-1 transition-transform hover:scale-105 hover:shadow-lg"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-full h-full object-fill rounded-2xl"
              />
            </div>
          ))}
        </div>

        {/* ✅Bottom row - scrolls to the left */}

        <div ref={bottomRowRef} className="flex overflow-hidden scrollbar-hide">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`bottom-${brand.id}-${index}`}
              className="flex-shrink-0 w-65 h-50 mx-4 bg-white rounded-2xl shadow-md flex items-center justify-center p-1 transition-transform hover:scale-105 hover:shadow-lg"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-full h-full object-fill rounded-2xl "
              />
            </div>
          ))}
        </div>

        {/* ✅ Call to action */}
        <div className="text-center mt-6 mb-3">
          <button className="bg-[#873eff] hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-md">
            Discover More Brands
          </button>
        </div>
      </div>

      <TestimonialCard />
    </div>
  );
}
const TestimonialCard = () => {
  return (
    <div className="relative px-0 md:px-[25%] flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* ✅Left side - Photo */}
      <div className=" w-7/6 md:w-full max-h-1/2 md:max-h-full">
        <img
          src="src/components/assets/images/candy.webp"
          alt="Skye Greenfield Cohen"
          className=" w-full  h-full object-cover"
        />
      </div>

      {/* ✅Right side - Content */}
      <div className="  w-full md:h-full p-8 md:p-12 flex flex-col justify-center bg-slate-100">
        <div className="mb-6">
          <span className="text-sm font-semibold text-[#873eff] uppercase tracking-wider">
            Economy
          </span>
          <h2 className="text-lg md:text-4xl md:font-bold text-gray-800 mt-2">
            Success Stories
          </h2>
        </div>

        <div className="relative">
          {/* ✅Testimonial content */}
          <blockquote className="text-xl text-gray-700 italic relative z-10 mb-0 md:mb-4">
            "What's amazing about WooCommerce is that since it's open source,
            there's no ceiling. There's no limit to what you can do, customize,
            or create."
          </blockquote>

          <div className="border-l-4 border-[#873eff] pl-4">
            <p className="text-lg font-semibold text-gray-800">
              Skye Greenfield Cohen
            </p>
            <p className="text-gray-600">Co-Owner and Head of Marketing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

function BrandMarquee() {
  const logos = [
    "https://picsum.photos/seed/1/220/80",
    "https://picsum.photos/seed/2/220/80",
    "https://picsum.photos/seed/3/220/80",
    "https://picsum.photos/seed/4/220/80",
    "https://picsum.photos/seed/5/220/80",
    "https://picsum.photos/seed/6/220/80",
    "https://picsum.photos/seed/7/220/80",
    "https://picsum.photos/seed/8/220/80",
    "https://picsum.photos/seed/9/220/80",
    "https://picsum.photos/seed/10/220/80",
  ];

  // ✅ Duplicate for seamless loop
  const row = [...logos, ...logos];

  return (
    <div className=" relative mt-6 md:mt-30 flex items-center justify-center bg-white">
      {/* ✅Adj. number of scrolling cards needed by dec/inc max-w-6xl to max-w-8xl or max-w-full  */}
      <div className="relative w-full max-w-8xl group">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 from-white to-transparent bg-gradient-to-r" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 from-transparent to-white bg-gradient-to-l" />

        {/*✅ marquee viewport */}
        <div className="overflow-hidden">
          {/* ✅track */}
          <div
            className="
              flex items-center gap-14
              animate-marquee
              [animation-duration:40s] motion-reduce:animate-none
              group-hover:[animation-play-state:paused]
            "
          >
            {row.map((src, i) => (
              <div key={i} className="shrink-0">
                <img
                  src={src}
                  alt={`logo-${i}`}
                  className="h-12 md:h-14 lg:h-16 object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
function CaseStudiesCarousel() {
  const [activeTab, setActiveTab] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  const tabs = [
    {
      name: "Nutribullet",
      slides: [
        {
          type: "description",
          title: "Nutribullet: A site that doesn’t blend in",
          text: "Global kitchen appliance brand Nutribullet wanted a highly customized website...",
          cta: "Read full case study",
        },
        {
          type: "image",
          img: "https://picsum.photos/id/1011/600/400",
        },
        {
          type: "image",
          img: "https://picsum.photos/id/1012/600/400",
        },
        {
          type: "image",
          img: "https://picsum.photos/id/1013/600/400",
        },
      ],
    },
    {
      name: "House of Malt",
      slides: [
        {
          type: "description",
          title: "House of Malt: Premium spirits experience",
          text: "House of Malt wanted a unique brand presence...",
          cta: "Read full case study",
        },
        {
          type: "image",
          img: "https://picsum.photos/id/1035/600/400",
        },
        {
          type: "image",
          img: "https://picsum.photos/id/1036/600/400",
        },
        {
          type: "image",
          img: "https://picsum.photos/id/1037/600/400",
        },
      ],
    },
    {
      name: "Dan-O's Seasoning",
      slides: [
        {
          type: "description",
          title: "Dan-O’s Seasoning: Spice that sells",
          text: "Dan-O’s needed an eCommerce upgrade to scale faster...",
          cta: "Read full case study",
        },
        {
          type: "image",
          img: "https://picsum.photos/id/1025/600/400",
        },
        {
          type: "image",
          img: "https://picsum.photos/id/1026/600/400",
        },
        {
          type: "image",
          img: "https://picsum.photos/id/1027/600/400",
        },
      ],
    },
  ];

  const handleNext = () => {
    if (slideIndex < tabs[activeTab].slides.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else if (activeTab < tabs.length - 1) {
      setActiveTab(activeTab + 1);
      setSlideIndex(0);
    }
  };

  const handlePrev = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    } else if (activeTab > 0) {
      setActiveTab(activeTab - 1);
      setSlideIndex(tabs[activeTab - 1].slides.length - 1);
    }
  };

  return (
    <div className="w-full px-0 md:px-6 py-0 md:py-8">
      {/*✅ Tabs */}
      <div className="flex space-x-6 border-b pb-2 mb-4">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={`pb-2 ${
              activeTab === i
                ? "border-b-2 border-[#873eff] text-purple-600"
                : "text-gray-600"
            }`}
            onClick={() => {
              setActiveTab(i);
              setSlideIndex(0);
            }}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/*✅ Carousel Row */}

      <div
        className="flex flex-col md:flex-row overflow-hidden transition-transform duration-500"
        style={{ transform: `translateX(-${slideIndex * (100 / 4)}%)` }}
      >
        {tabs[activeTab].slides.map((slide, i) => (
          <div
            key={i}
            className="w-full p-3"
            style={{ flex: "0 0 25%" }} // ✅flex-grow: 0 , flex-shrink: 0 item will not grow and shrink to fill container extra space,
            // flex-basis: 25% the item base size is 25% of its parent i.e., 4 items can accomodate
            // or instead style use className="flex-[0_0_25%]""
          >
            {slide.type === "description" && (
              <div className=" bg-gray-100 p-6 rounded-xl shadow-md h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-4">{slide.title}</h3>
                <p className="text-gray-700 mb-4">{slide.text}</p>
                <button className="mt-auto px-4 py-2 border border-[#873eff] text-[#873eff] rounded-lg hover:bg-purple-50">
                  {slide.cta}
                </button>
              </div>
            )}
            {slide.type === "image" && (
              <img
                src={slide.img}
                alt=""
                className="h-full w-full object-cover rounded-xl"
              />
            )}
          </div>
        ))}
      </div>

      {/* ✅Navigation Arrows */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
function HoverCard() {
  return (
    <>
      <div className="md:mx-[25%] mx-[5%]">
        <div
          className=" bg-[#873eff] text-white p-6 rounded-xl shadow-md flex flex-col justify-center items-center duration-500 ease-in-out transform 
                       hover:-translate-y-1 hover:scale-102"
        >
          <h3 className="text-5xl mb-4">
            Take control of your success with WooCommerce
          </h3>
          <p className=" mb-4">
            No business is too complex, simple, big, or small to thrive with
            WooCommerce. Say goodbye to stores that all look the same, and say
            hello to Woo.
          </p>
          <button className="mb-5 mt-auto px-4 py-2  bg-gray-300 text-[#873eff] rounded-lg cursor-pointer ">
            Get started with WooCommerce
          </button>
        </div>
      </div>
    </>
  );
}
