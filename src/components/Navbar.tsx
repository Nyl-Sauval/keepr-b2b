import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import logoUrl from '../assets/KEEPR_social_logo.svg';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <img src={logoUrl} alt="Keepr Logo" className="h-15 w-auto rounded-lg" />
              <span className="font-bold text-2xl tracking-tight text-anthracite">Keepr</span>
            </Link>
          </div>

          {/* Center Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-primary transition-colors font-medium">Accueil</Link>
            <Link to="/products" className="text-gray-600 hover:text-primary transition-colors font-medium">Nos Produits</Link>
            <Link to="/concept" className="text-gray-600 hover:text-primary transition-colors font-medium">Concept</Link>
          </div>

          {/* Cart */}
          <div className="flex items-center">
            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-primary transition-colors group">
              <ShoppingCart className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-primary rounded-full transform translate-x-1/4 -translate-y-1/4 shadow-sm">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
