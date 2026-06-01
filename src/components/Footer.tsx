import { Link } from 'react-router-dom';
import logoUrl from '../assets/KEEPR_social_logo.svg';

export default function Footer() {
  return (
    <footer className="bg-anthracite text-white mt-auto border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoUrl} alt="Keepr Logo" className="h-8 w-auto rounded grayscale opacity-80" />
              <span className="font-bold text-xl tracking-tight">Keepr B2B</span>
            </div>
            <p className="text-gray-400 text-sm">
              La solution logistique connectée pour les entreprises et les résidences.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Liens utiles</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ B2B</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Demander un devis</Link></li>
              <li><Link to="/legal" className="hover:text-primary transition-colors">Mentions légales</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Contact Pro</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>b2b@keepr.fr</li>
              <li>+33 1 23 45 67 89</li>
              <li>123 Avenue de la Tech, Paris</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2026 Keepr. Projet fictif B2B.</p>
        </div>
      </div>
    </footer>
  );
}
