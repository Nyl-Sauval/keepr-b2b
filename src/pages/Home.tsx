import { Link } from 'react-router-dom';
import { ShieldCheck, ScanLine, Smartphone, ArrowRight } from 'lucide-react';
import heroSituationImg from '../assets/hero_b2b_situation.png';
import flipSafeConceptImg from '../assets/flip_safe_concept_b2b.png';
import useCaseOfficeImg from '../assets/use_case_office.png';

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-white pt-20 pb-32">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[600px] h-[600px] bg-gray-200/50 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full bg-anthracite/5 text-anthracite font-medium text-sm border border-anthracite/10 mb-2">
                La révolution de la livraison
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-anthracite tracking-tighter leading-[1.1]">
                Drop it.<br />
                <span className="text-primary">Keep it.</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-light text-gray-500">
                Déposé. Sécurisé. Récupéré.
              </h2>
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                Ne choisissez plus entre la sécurité des livraisons et l'efficacité. 
                Keepr réceptionne les colis et matériels de vos collaborateurs ou résidents en toute sécurité.
              </p>
              
              <div className="pt-4">
                <Link 
                  to="/products" 
                  className="group relative inline-flex items-center justify-center gap-3 bg-anthracite text-white px-8 py-4 rounded-full font-bold text-lg overflow-hidden transition-transform hover:scale-105 shadow-[0_10px_40px_-10px_rgba(30,41,59,0.5)]"
                >
                  <span className="absolute inset-0 w-full h-full bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-anthracite transition-colors duration-300">
                    Découvrir nos solutions
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="relative group perspective">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2.5rem] transform rotate-3 scale-105 group-hover:rotate-6 transition-transform duration-500" />
              <div className="relative aspect-[4/5] rounded-[2.5rem] flex items-center justify-center shadow-2xl overflow-hidden border border-white/50 backdrop-blur-sm transform transition-transform duration-500 group-hover:-translate-y-2">
                <img
                  src={heroSituationImg}
                  alt="Keepr Box en situation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Pourquoi Keepr ? */}
      <section className="py-32 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-anthracite tracking-tight">Pourquoi choisir Keepr pour vos locaux ?</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">Une technologie de pointe pensée pour la tranquillité de vos résidents et collaborateurs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: ShieldCheck,
                title: 'Anti-vol',
                desc: 'Fini les colis volés grâce à notre double compartiment mécanique exclusif.',
                delay: '0'
              },
              {
                icon: ScanLine,
                title: 'Universel',
                desc: 'Compatible avec tous les livreurs via le scan ultra-rapide du code-barres.',
                delay: '100'
              },
              {
                icon: Smartphone,
                title: 'Multi-utilisateurs',
                desc: 'Gestion centralisée et notifications en temps réel pour chaque résident ou employé.',
                delay: '200'
              }
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-anthracite mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5 Cas d'usage */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-2">
              Ils utilisent Keepr
            </div>
            <h2 className="text-4xl font-bold text-anthracite tracking-tight">Des solutions pour chaque structure</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                {
                  title: 'Espaces de Coworking',
                  desc: 'Gérez les livraisons de dizaines d\'entreprises locataires sans surcharger le personnel d\'accueil.',
                },
                {
                  title: 'Copropriétés Modernes',
                  desc: 'Valorisez votre hall d\'immeuble et offrez un service premium de conciergerie automatisée aux résidents.',
                },
                {
                  title: 'Bureaux & Sièges Sociaux',
                  desc: 'Protégez le matériel informatique entrant et facilitez la vie de votre Office Manager au quotidien.',
                }
              ].map((useCase, idx) => (
                <div key={idx} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-primary/30 transition-colors">
                  <h3 className="text-xl font-bold text-anthracite mb-2">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.desc}</p>
                </div>
              ))}
            </div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
               <img src={useCaseOfficeImg} alt="Keepr en entreprise" className="w-full h-full object-cover" />
               <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Notre Concept (Innovation Flip-Safe) */}
      <section className="py-32 bg-[#f8fafc] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8 pr-8">
              <div className="flex items-center gap-4">
                <span className="w-12 h-0.5 bg-primary rounded-full"></span>
                <span className="text-primary font-bold tracking-wider uppercase text-sm">Notre Concept</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-anthracite leading-tight tracking-tight">
                L'innovation <br />
                <span className="text-primary relative inline-block">
                  Flip-Safe™
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                </span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Le système breveté <strong className="text-anthracite font-semibold">Flip-Safe™</strong> révolutionne la gestion des flux logistiques. 
                </p>
                <p>
                  Dès que le livreur dépose le colis sur la trappe supérieure et la referme, le fond bascule automatiquement. 
                  Le colis glisse en douceur dans une <strong className="text-anthracite font-semibold">zone inférieure ultra-sécurisée</strong>, inaccessible de l'extérieur.
                </p>
                <p>
                  Le livreur suivant peut ainsi déposer un autre colis sans aucun risque. Seul le destinataire légitime peut déverrouiller son compartiment via l'application ou son badge d'accès.
                </p>
              </div>
              
              <ul className="pt-4 space-y-4">
                {['Protection mécanique infaillible', 'Amortissement hydraulique : objets fragiles préservés à 100%', 'Accepte plusieurs livraisons successives'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Concept Image Placeholder */}
            <div className="relative group">
              <div className="absolute inset-0 bg-anthracite rounded-[3rem] transform -rotate-3 scale-105 transition-transform duration-500 group-hover:-rotate-6" />
              <div className="relative aspect-square rounded-[3rem] flex items-center justify-center shadow-2xl overflow-hidden border-8 border-white group-hover:scale-[1.02] transition-transform duration-500">
                <img
                  src={flipSafeConceptImg}
                  alt="Démonstration système Flip-Safe"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
