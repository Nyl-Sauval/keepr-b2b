import flipSafeConceptImg from '../assets/flip_safe_concept_b2b.png';

export default function Concept() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-anthracite">La Logistique B2B, Réinventée</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          En entreprise ou dans les grandes résidences, la gestion des colis est un défi quotidien. 
          Pertes, vols, temps perdu à l'accueil... Notre technologie brevetée Flip-Safe™ automatise et sécurise 
          le flux logistique.
        </p>
        
        <div className="bg-gray-100 rounded-[3rem] p-8 md:p-16 text-left mt-16 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-anthracite">Le fonctionnement Flip-Safe™</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</span>
                <p className="text-gray-700"><strong>Dépôt libre :</strong> Le livreur ou transporteur dépose le colis ou le matériel dans le sas supérieur.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</span>
                <div className="text-gray-700">
                  <strong>Basculement sécurisé et amorti :</strong> Dès la fermeture, le fond s'abaisse. Grâce à nos vérins hydrauliques brevetés et notre coussin d'air haute densité, le matériel (même fragile, comme du matériel IT) glisse en douceur dans le coffre-fort inférieur. Zéro choc, zéro casse.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</span>
                <p className="text-gray-700"><strong>Accès contrôlé :</strong> Le destinataire est notifié et déverrouille le casier avec son badge RFID ou smartphone.</p>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl relative">
              <img src={flipSafeConceptImg} alt="Concept Flip-Safe" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
