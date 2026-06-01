import { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Shield, Settings2, Info, Building2, Box } from 'lucide-react';
import { useCart } from '../context/CartContext';

const PRODUCT_DATA: Record<string, any> = {
  'keepr-box': {
    name: 'Keepr Box',
    priceFull: 1499,
    subPriceFull: 39,
    priceLease: 299,
    subPriceLease: 99,
    description: 'Format XXL pour la réception de matériel imposant. Idéal pour les TPE/PME et artisans.',
    icon: Box,
    disabledOptions: ['pot']
  },
  'keepr-hub': {
    name: 'Keepr Hub',
    priceFull: 2999,
    subPriceFull: 89,
    priceLease: 499,
    subPriceLease: 199,
    description: 'Configurez la colonne de casiers pour votre résidence ou entreprise.',
    icon: Building2,
    disabledOptions: ['pot', 'mural', 'encastre']
  }
};

export default function ProductConfigurator() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const productKey = id || 'keepr-hub';
  const product = PRODUCT_DATA[productKey];

  const [paymentModel, setPaymentModel] = useState<'sub' | 'full'>('sub');
  const [quantity, setQuantity] = useState(1);
  const [fixation, setFixation] = useState(productKey === 'keepr-hub' ? 'sol' : 'mural');
  const [color, setColor] = useState('noir-mat');
  
  // Multiple choices state (Checkboxes)
  const [finitions, setFinitions] = useState({
    bois: false,
    pot: false,
  });
  
  const [tech, setTech] = useState({
    camera: false,
    wifi: false,
    alarme: false,
  });
  
  const [service, setService] = useState({
    installation: false,
  });

  // Redirect if invalid product
  useEffect(() => {
    if (!PRODUCT_DATA[productKey]) {
      navigate('/products');
    }
  }, [productKey, navigate]);

  // Reset incompatible options when changing products (just in case)
  useEffect(() => {
    if (product?.disabledOptions.includes('pot')) setFinitions(f => ({ ...f, pot: false }));
    if (productKey === 'keepr-hub') setFixation('sol');
  }, [productKey, product]);

  // Derived Price Calculation
  const totalPrice = useMemo(() => {
    if (!product) return 0;
    
    let total = paymentModel === 'sub' ? product.priceLease : product.priceFull;
    
    if (fixation === 'encastre' && productKey !== 'keepr-hub') total += 50;
    
    if (finitions.bois) total += 40;
    if (finitions.pot && !product.disabledOptions.includes('pot')) total += 30;
    
    if (tech.camera) total += 80;
    if (tech.wifi) total += 20;
    if (tech.alarme) total += 50;
    
    if (service.installation) total += 349;
    
    return total;
  }, [paymentModel, fixation, finitions, tech, service, product, productKey]);

  const handleAddToCart = () => {
    if (!product) return;
    const newItem = {
      id: crypto.randomUUID(),
      productId: productKey,
      name: product.name,
      price: totalPrice,
      quantity: quantity,
      config: {
        paymentModel,
        fixation,
        color,
        finitions,
        tech,
        service
      }
    };
    addToCart(newItem);
    navigate('/cart');
  };

  if (!product) return null;

  const Icon = product.icon;

  return (
    <div className="min-h-screen bg-gray-50/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-anthracite">Configurer {product.name}</h1>
          <p className="text-gray-500 mt-2">{product.description}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column: Image Placeholder */}
          <div className="lg:w-5/12">
            <div className="sticky top-28 bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col items-center justify-center min-h-[500px] overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-gray-50 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
               <Icon className="w-24 h-24 text-gray-300 mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500" />
               <span className="text-gray-400 font-bold uppercase tracking-widest text-sm relative z-10 text-center">
                 Aperçu 3D en temps réel<br/>(Bientôt disponible)
               </span>
               <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-100 shadow-sm z-10 flex justify-between items-center">
                  <div>
                    <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Prix Initial</div>
                    <div className="text-3xl font-black text-anthracite">{totalPrice}€</div>
                    <div className="text-sm font-bold text-primary mt-1">
                      + {paymentModel === 'sub' ? product.subPriceLease : product.subPriceFull}€ / mois
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-green-600 font-bold uppercase tracking-wider mb-1 flex items-center justify-end gap-1">
                      <Shield className="w-3 h-3" /> Garanti 2 ans
                    </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Column: Configuration Options */}
          <div className="lg:w-7/12 space-y-10 bg-white rounded-[2rem] p-8 sm:p-12 shadow-sm border border-gray-100">
            
            {/* 0. Modèle Économique */}
            <section>
              <h2 className="text-xl font-bold text-anthracite mb-4">Offre & Financement</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <label 
                  className={`relative flex flex-col p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                    paymentModel === 'sub' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input type="radio" name="paymentModel" value="sub" checked={paymentModel === 'sub'} onChange={() => setPaymentModel('sub')} className="sr-only" />
                  <div className="flex justify-between items-start mb-2">
                    <span className={`font-bold ${paymentModel === 'sub' ? 'text-primary' : 'text-gray-700'}`}>Offre Location</span>
                    <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded">Recommandé</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">Location du matériel + abonnement logiciel & maintenance complet.</div>
                  <div className="mt-auto pt-2 border-t border-gray-100 flex justify-between items-center">
                     <span className="font-bold text-anthracite">Frais: {product.priceLease}€</span>
                     <span className="font-bold text-primary">{product.subPriceLease}€/mois</span>
                  </div>
                </label>

                <label 
                  className={`relative flex flex-col p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                    paymentModel === 'full' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input type="radio" name="paymentModel" value="full" checked={paymentModel === 'full'} onChange={() => setPaymentModel('full')} className="sr-only" />
                  <div className="font-bold text-gray-700 mb-2">Achat Matériel</div>
                  <div className="text-sm text-gray-600 mb-2">Acquisition totale du matériel. L'accès logiciel reste sous forme d'abonnement.</div>
                  <div className="mt-auto pt-2 border-t border-gray-100 flex justify-between items-center">
                     <span className="font-bold text-anthracite">Achat: {product.priceFull}€</span>
                     <span className="font-bold text-primary">+{product.subPriceFull}€/mois</span>
                  </div>
                </label>
              </div>
            </section>

            {/* 1. Fixation */}
            <section>
              <h2 className="text-xl font-bold text-anthracite mb-4 flex items-center gap-2">
                <Settings2 className="w-5 h-5 text-primary" />
                Type de fixation
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { id: 'mural', label: 'Mural', price: 0 },
                  { id: 'sol', label: 'Posé au sol', price: 0 },
                  { id: 'encastre', label: 'Encastré', price: 50 },
                ].map((opt) => {
                  const isDisabled = product.disabledOptions.includes(opt.id);
                  return (
                    <label 
                      key={opt.id} 
                      className={`relative flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all ${
                        isDisabled ? 'opacity-40 cursor-not-allowed bg-gray-50 border-gray-100' :
                        fixation === opt.id ? 'border-primary bg-primary/5 text-primary cursor-pointer' : 'border-gray-200 hover:border-gray-300 text-gray-600 cursor-pointer'
                      }`}
                    >
                      <input 
                        type="radio" 
                        name="fixation" 
                        value={opt.id} 
                        checked={fixation === opt.id} 
                        onChange={(e) => !isDisabled && setFixation(e.target.value)} 
                        disabled={isDisabled}
                        className="sr-only" 
                      />
                      <span className="font-semibold text-center">{opt.label}</span>
                      <span className="text-sm mt-1">{isDisabled ? 'Indisponible' : opt.price === 0 ? 'Inclus' : `+${opt.price}€`}</span>
                    </label>
                  );
                })}
              </div>
            </section>

            {/* 2. Couleur */}
            <section>
              <h2 className="text-xl font-bold text-anthracite mb-4">Couleur extérieure</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { id: 'noir-mat', label: 'Noir Mat', colorCode: 'bg-gray-900' },
                  { id: 'gris', label: 'Gris Anthracite', colorCode: 'bg-slate-700' },
                  { id: 'blanc', label: 'Blanc Pur', colorCode: 'bg-white border-2 border-gray-200' },
                ].map((opt) => (
                  <label key={opt.id} className={`flex items-center gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all ${color === opt.id ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}>
                    <input type="radio" name="color" value={opt.id} checked={color === opt.id} onChange={(e) => setColor(e.target.value)} className="sr-only" />
                    <span className={`w-6 h-6 rounded-full shadow-inner ${opt.colorCode}`}></span>
                    <span className={`font-semibold ${color === opt.id ? 'text-primary' : 'text-gray-600'}`}>{opt.label}</span>
                  </label>
                ))}
              </div>
            </section>

            {/* 3. Finitions Premium */}
            <section>
              <h2 className="text-xl font-bold text-anthracite mb-4">Finitions Premium</h2>
              <div className="space-y-3">
                <label className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${finitions.bois ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" checked={finitions.bois} onChange={(e) => setFinitions({...finitions, bois: e.target.checked})} className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary" />
                    <span className="font-semibold text-gray-700">Porte en bois véritable</span>
                  </div>
                  <span className="font-bold text-anthracite">+40€</span>
                </label>
                
                {!product.disabledOptions.includes('pot') && (
                  <label className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${finitions.pot ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" checked={finitions.pot} onChange={(e) => setFinitions({...finitions, pot: e.target.checked})} className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary" />
                      <span className="font-semibold text-gray-700">Top avec Pot de fleur intégré</span>
                    </div>
                    <span className="font-bold text-anthracite">+30€</span>
                  </label>
                )}
              </div>
            </section>

            {/* 4. Options Tech */}
            <section>
              <h2 className="text-xl font-bold text-anthracite mb-4">Options Technologiques</h2>
              <div className="space-y-3">
                <label className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${tech.camera ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" checked={tech.camera} onChange={(e) => setTech({...tech, camera: e.target.checked})} className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary" />
                    <span className="font-semibold text-gray-700">Caméra intégrée</span>
                  </div>
                  <span className="font-bold text-anthracite">+80€</span>
                </label>
                <label className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${tech.wifi ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" checked={tech.wifi} onChange={(e) => setTech({...tech, wifi: e.target.checked})} className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary" />
                    <span className="font-semibold text-gray-700">Module Wi-Fi</span>
                  </div>
                  <span className="font-bold text-anthracite">+20€</span>
                </label>
                <label className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${tech.alarme ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" checked={tech.alarme} onChange={(e) => setTech({...tech, alarme: e.target.checked})} className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary" />
                    <span className="font-semibold text-gray-700">Alarme volumétrique anti-intrusion</span>
                  </div>
                  <span className="font-bold text-anthracite">+50€</span>
                </label>
              </div>
            </section>

            {/* 5. Service */}
            <section>
              <h2 className="text-xl font-bold text-anthracite mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-primary" />
                Service Premium
              </h2>
              <div className="bg-primary/5 rounded-2xl p-1">
                <label className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all ${service.installation ? 'bg-white shadow-sm ring-1 ring-primary/20' : 'hover:bg-primary/10'}`}>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" checked={service.installation} onChange={(e) => setService({installation: e.target.checked})} className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary" />
                    <div>
                      <span className="font-bold text-anthracite block">Service d'installation à domicile</span>
                      <span className="text-sm text-gray-500">Un expert Keepr installe et configure votre produit.</span>
                    </div>
                  </div>
                  <span className="font-bold text-primary">+349€</span>
                </label>
              </div>
            </section>

            {/* Checkout Sticky Bottom on Mobile or inline on Desktop */}
            <div className="pt-8 border-t border-gray-100 space-y-6">
              
              {/* Selector de quantité */}
              <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl">
                <span className="font-bold text-anthracite">Quantité :</span>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-gray-600 hover:border-primary hover:text-primary transition-colors"
                  >
                    -
                  </button>
                  <span className="font-black text-xl w-6 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <button 
                onClick={handleAddToCart}
                className="w-full bg-anthracite text-white font-bold text-lg py-5 px-8 rounded-2xl hover:bg-anthracite/90 transition-all hover:shadow-[0_10px_40px_-10px_rgba(30,41,59,0.5)] hover:-translate-y-1 flex items-center justify-between group"
              >
                <span>Ajouter à ma demande</span>
                <span className="bg-white/10 px-4 py-1.5 rounded-xl group-hover:bg-white/20 transition-colors">
                  {totalPrice * quantity}€
                </span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
