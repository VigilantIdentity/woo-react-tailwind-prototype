import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 ">
      <div className="max-w-7xl mx-auto p-2">
        <img
          src="src/components/assets/images/woo-logo.png"
          className="h-5 w-auto"
          alt="logo"
        />
      </div>
      {/* ✅ Top Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
        {/*✅ Sell */}
        <div>
          <h3 className="font-semibold mb-3">Sell</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                WooCommerce
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Payments
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                No-code customization
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Marketing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Checkout
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Mobile app
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Enterprise ecommerce
              </a>
            </li>
          </ul>
        </div>

        {/*✅ Marketplace */}
        <div>
          <h3 className="font-semibold mb-3">Marketplace</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                WooCommerce extensions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                WooCommerce themes
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                New
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Essentials
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Collections
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Developed by Woo
              </a>
            </li>
          </ul>
        </div>

        {/* ✅Build */}
        <div>
          <h3 className="font-semibold mb-3">Build</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Woo for developers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Developer resources
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Become a Woo agency
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Become a Marketplace partner
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Become an affiliate
              </a>
            </li>
          </ul>
        </div>
        {/*✅ Woo */}
        <div>
          <h3 className="font-semibold mb-3">Woo</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Press
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Join the Woo community
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Woo trademark guidelines
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Brand and logo guidelines
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Email newsletter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Feature requests
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                WooCommerce hosting
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Customer showcase
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Hire an agency
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Support policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Refund policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Participate in customer research
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Accessibility
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Support forums
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ✅Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between text-sm">
        {/* ✅App Store & Google Play */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10"
            />
          </a>
          <a href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10"
            />
          </a>
        </div>

        {/* ✅Social Links */}
        <div className="flex space-x-4 text-gray-600 text-lg">
          <a href="#" className="hover:text-black">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-black">
            <FaXTwitter />
          </a>
          <a href="#" className="hover:text-black">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-black">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/*✅ Legal */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        <div className="space-x-4">
          <a href="#" className="hover:underline">
            Terms and Conditions
          </a>
          <a href="#" className="hover:underline">
            Privacy policy
          </a>
          <a href="#" className="hover:underline">
            Privacy Notice for California Users
          </a>
        </div>
        <div className="space-x-4">
          <a href="#" className="hover:underline">
            $ USD
          </a>
          <a href="#" className="hover:underline">
            English
          </a>
        </div>
      </div>
    </footer>
  );
}
