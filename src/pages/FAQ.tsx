export default function FAQ() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-4xl font-bold text-anthracite mb-12 text-center">Questions Fréquentes (B2B)</h1>
      <div className="space-y-8">
        {[
          {
            q: "Combien de collaborateurs un Keepr Hub peut-il gérer ?",
            a: "Le Keepr Hub est conçu de manière modulaire. Un seul système peut gérer jusqu'à 500 collaborateurs grâce à notre système de notifications groupées et d'attribution dynamique des casiers."
          },
          {
            q: "Proposez-vous des contrats de maintenance ?",
            a: "Oui, tous nos produits B2B incluent la possibilité de souscrire à un contrat de maintenance préventive et curative avec une garantie d'intervention sous 24h ouvrées."
          },
          {
            q: "Est-il possible d'intégrer l'application Keepr à notre intranet ?",
            a: "Absolument. Nous fournissons une API RESTful qui permet à votre DSI d'intégrer facilement la gestion des colis dans vos outils internes."
          }
        ].map((faq, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-3">{faq.q}</h3>
            <p className="text-gray-600 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
