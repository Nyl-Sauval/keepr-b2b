import { Building2, Box, Settings2, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

import keeprBoxImg from '../assets/keepr_box_3d.png';
import keeprHubImg from '../assets/Keepr_hub_3d.png';

export default function Products() {
  const products = [
    {
      id: 'keepr-hub',
      name: 'Keepr Hub',
      tagline: 'L\'esprit collectif',
      description: 'La colonne de casiers modulaire pensée pour les copropriétés, résidences partagées et grandes entreprises. Juxtaposez plusieurs colonnes pour créer un mur de réception sur mesure.',
      priceFull: 2999,
      subPriceFull: 89,
      priceLease: 499,
      subPriceLease: 199,
      icon: Building2,
      imageUrl: keeprHubImg,
      features: [
        'Jusqu\'à 4 casiers indépendants',
        'Gestion multi-utilisateurs',
        'Raccordement électrique direct',
        'Caméra de sécurité intégrée'
      ],
      popular: true,
    },
    {
      id: 'keepr-box',
      name: 'Keepr Box',
      tagline: 'Volume maximal',
      description: 'Format XXL pour la réception de matériel imposant. Idéal pour les TPE/PME et artisans.',
      priceFull: 1499,
      subPriceFull: 39,
      priceLease: 299,
      subPriceLease: 99,
      icon: Box,
      imageUrl: keeprBoxImg,
      features: [
        'Capacité de 120 Litres',
        'Design modulaire encastrable',
        'Ouverture double battant',
        'Fermeture renforcée'
      ],
      popular: false,
    }
  ];

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-20 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-2">
            Notre Catalogue B2B
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-anthracite tracking-tight">
            Choisissez votre solution <span className="text-primary">Keepr</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Des solutions adaptées aux professionnels, entreprises et gestionnaires de résidences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className={`relative bg-white rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col group ${product.popular ? 'ring-2 ring-primary border-transparent' : 'border border-gray-100'
                }`}
            >
              {product.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg">
                    Le plus populaire
                  </span>
                </div>
              )}

              {/* Image Placeholder */}
              <div className="relative p-2">
                <div className="relative h-64 bg-gray-100 rounded-[1.5rem] overflow-hidden flex flex-col items-center justify-center group-hover:bg-gray-200 transition-colors duration-500">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5" />
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <div className="mb-6">
                  <div className="text-primary font-semibold text-sm mb-1">{product.tagline}</div>
                  <h3 className="text-3xl font-bold text-anthracite mb-3">{product.name}</h3>
                  <p className="text-gray-600 leading-relaxed min-h-[5rem]">
                    {product.description}
                  </p>
                </div>

                <div className="mb-8">
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 font-medium">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-100">
                  <div className="mb-6 space-y-4">
                    <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                      <div className="text-sm text-primary font-bold uppercase tracking-wider mb-1">Offre Location (Recommandé)</div>
                      <div className="flex items-end gap-2">
                        <span className="text-3xl font-black text-anthracite">{product.subPriceLease}€ <span className="text-sm text-gray-500 font-medium">/ mois</span></span>
                      </div>
                      <div className="text-xs text-gray-500 mt-2">Matériel + Logiciel. Frais de dossier initiaux : {product.priceLease}€</div>
                    </div>
                    
                    <div className="px-4">
                      <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Ou Achat Matériel</div>
                      <div className="flex items-end gap-1">
                        <span className="text-xl font-bold text-gray-400">{product.priceFull}€</span>
                        <span className="text-xs text-gray-400 font-medium pb-0.5">+ {product.subPriceFull}€/mois (Logiciel)</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    to={`/configure/${product.id}`}
                    className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all duration-300 ${product.popular
                      ? 'bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30'
                      : 'bg-anthracite text-white hover:bg-anthracite/90 hover:shadow-lg'
                      }`}
                  >
                    <Settings2 className="w-5 h-5" />
                    Configurer
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
