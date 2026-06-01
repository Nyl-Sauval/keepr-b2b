export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="bg-white p-12 rounded-[2rem] shadow-sm border border-gray-100">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-anthracite mb-4">Demander un Devis</h1>
          <p className="text-gray-500">Parlez-nous de vos locaux, nous concevrons la solution Keepr adaptée à vos flux logistiques.</p>
        </div>
        
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Demande envoyée !'); }}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Nom de l'entreprise</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Votre Nom</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none" required />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Type de structure</label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none" required>
              <option value="">Sélectionnez une option</option>
              <option value="tpe">TPE / PME</option>
              <option value="ge">Grande Entreprise</option>
              <option value="copro">Copropriété / Résidence</option>
              <option value="coworking">Espace de Coworking</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Message / Besoins spécifiques</label>
            <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none" required></textarea>
          </div>
          
          <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all shadow-md">
            Envoyer ma demande
          </button>
        </form>
      </div>
    </div>
  );
}
