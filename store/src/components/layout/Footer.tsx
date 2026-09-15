export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-16 text-sm text-neutral-400">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4 md:col-span-1">
          <h3 className="font-bold text-2xl tracking-tighter text-white">
            CULT<span className="text-[#fb21ff]">.</span>STORE
          </h3>
          <p className="max-w-xs leading-relaxed">
            Premium inverters and next-generation batteries designed for ultimate reliability. Power your life.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-white mb-4 tracking-wide uppercase text-xs">Shop</h4>
          <ul className="space-y-3">
            <li><a href="/products?category=inverters" className="hover:text-white transition-colors">Inverters</a></li>
            <li><a href="/products?category=batteries" className="hover:text-white transition-colors">Batteries</a></li>
            <li><a href="/products?category=bundles" className="hover:text-white transition-colors">Power Bundles</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4 tracking-wide uppercase text-xs">Support</h4>
          <ul className="space-y-3">
            <li><a href="/support" className="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="/faq" className="hover:text-white transition-colors">FAQs</a></li>
            <li><a href="/shipping" className="hover:text-white transition-colors">Shipping & Returns</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4 tracking-wide uppercase text-xs">Company</h4>
          <ul className="space-y-3">
            <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Cult Energy. All rights reserved.</p>
        <p className="flex items-center gap-2">
          Designed with <span className="text-[#fb21ff]">♥</span> using Cult UI
        </p>
      </div>
    </footer>
  );
}
