import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Banner de site fictif */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 text-center border-b border-slate-800 font-medium tracking-wide flex justify-center items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
        <span>PROJET FICTIF DE DÉMONSTRATION B2B — Aucun service ou produit réel n'est commercialisé.</span>
      </div>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
