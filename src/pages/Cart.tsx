import { ShoppingCart, Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { items, removeFromCart, totalPrice } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-anthracite mb-8">Votre Demande de Devis</h1>
      
      {items.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
          <div className="h-24 w-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
            <ShoppingCart className="h-10 w-10 text-gray-300" />
          </div>
          <h2 className="text-2xl font-medium text-anthracite mb-2">Votre sélection est vide</h2>
          <p className="text-gray-500 mb-8 max-w-md">
            Vous n'avez pas encore ajouté de solutions Keepr à votre sélection. 
            Découvrez nos produits pour commencer.
          </p>
          <Link 
            to="/products" 
            className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-xl shadow-md transition-all hover:-translate-y-0.5"
          >
            Découvrir nos produits
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg text-anthracite group-hover:text-primary transition-colors flex items-center gap-2">
                    {item.name}
                    {item.quantity > 1 && (
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">x {item.quantity}</span>
                    )}
                  </h3>
                  <div className="text-sm text-gray-500 mt-1 flex flex-wrap gap-2">
                    {item.config.fixation && <p>Fixation : {item.config.fixation}</p>}
                    {item.config.color && <p>Couleur : {item.config.color}</p>}
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="font-black text-xl text-anthracite">{item.price * item.quantity}€</div>
                    {item.quantity > 1 && <div className="text-xs text-gray-400">{item.price}€ / unité</div>}
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 hover:text-red-600 transition-colors p-2"
                    aria-label="Supprimer"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 sticky top-28">
              <h2 className="text-xl font-bold text-anthracite mb-6">Récapitulatif</h2>
              <div className="flex justify-between items-center text-lg mb-8">
                <span className="text-gray-600">Total estimé</span>
                <span className="text-3xl font-black text-anthracite">{totalPrice}€</span>
              </div>
              <button 
                onClick={() => alert('Fonctionnalité de devis en cours de développement !')}
                className="w-full bg-anthracite text-white font-bold py-4 px-6 rounded-xl hover:bg-anthracite/90 transition-all flex items-center justify-center gap-2 group"
              >
                Demander un devis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
