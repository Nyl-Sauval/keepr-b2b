export default function Legal() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-4xl font-bold text-anthracite mb-8">Mentions Légales</h1>
      <div className="prose prose-slate max-w-none text-gray-600 bg-white p-12 rounded-[2rem] shadow-sm border border-gray-100">
        <h2>1. Éditeur du site</h2>
        <p>Le site Keepr est un projet fictif conçu à des fins de démonstration.</p>
        <p><strong>Keepr SAS</strong> (Entreprise fictive)<br/>
        123 Avenue de la Tech<br/>
        75000 Paris, France</p>
        
        <h2>2. Hébergement</h2>
        <p>Ce site de démonstration est hébergé localement ou sur une plateforme de déploiement tierce, sans base de données persistante.</p>
        
        <h2>3. Données personnelles (RGPD)</h2>
        <p>En tant que site vitrine fictif, aucune donnée personnelle réelle n'est collectée, stockée ou traitée. Les formulaires (contact, devis) ne sont connectés à aucun serveur distant et n'envoient pas d'emails.</p>
        
        <h2>4. Propriété intellectuelle</h2>
        <p>Tous les éléments graphiques, textes et composants (hors librairies open-source) de ce projet fictif sont créés pour illustrer le concept Flip-Safe™.</p>
      </div>
    </div>
  );
}
