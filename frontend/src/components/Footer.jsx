function Footer() {
  return (
    <footer className="bg-gray-300 text-gray-800 mt-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 border-b-2 border-solid border-black">
        {/* About */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">About</h3>
          <p className="text-sm hover:text-orange-500 cursor-pointer">
            How it works
          </p>
          <p className="text-sm hover:text-orange-500 cursor-pointer">
            Newsroom
          </p>
          <p className="text-sm hover:text-orange-500 cursor-pointer">
            Investors
          </p>
          <p className="text-sm hover:text-orange-500 cursor-pointer">
            Careers
          </p>
        </div>

        {/* Community */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Community</h3>
          <p className="text-sm hover:text-orange-500 cursor-pointer">
            Diversity & Belonging
          </p>
          <p className="text-sm hover:text-orange-500 cursor-pointer">
            Accessibility
          </p>
          <p className="text-sm hover:text-orange-500 cursor-pointer">
            Frontline Stays
          </p>
          <p className="text-sm hover:text-orange-500 cursor-pointer">
            Airbnb Associates
          </p>
        </div>

        {/* Host */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Host</h3>
          <p className="text-sm hover:text-orange-500 cursor-pointer">
            Host your home
          </p>
          <p className="text-sm hover:text-orange-500 cursor-pointer">
            Host an Experience
          </p>
          <p className="text-sm hover:text-orange-500 cursor-pointer">
            Responsible hosting
          </p>
        </div>

        {/* Support */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Support</h3>
          <p className="text-sm hover:text-orange-500 cursor-pointer">
            Help Center
          </p>
          <p className="text-sm hover:text-orange-500 cursor-pointer">
            Cancellation Options
          </p>
          <p className="text-sm hover:text-orange-500 cursor-pointer">
            Safety Information
          </p>
          <p className="text-sm hover:text-orange-500 cursor-pointer">
            COVID-19 Updates
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© 2025 YourWebsite, Inc. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <p className="hover:text-orange-500 cursor-pointer">Privacy</p>
            <p className="hover:text-orange-500 cursor-pointer">Terms</p>
            <p className="hover:text-orange-500 cursor-pointer">Sitemap</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
