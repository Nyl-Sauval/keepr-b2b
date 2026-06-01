# Keepr B2B - Smart Parcel Lockers

![Keepr Concept](src/assets/hero_b2b_situation.png)

**Keepr** est un site vitrine fictif (MVP) développé avec React, Vite et Tailwind CSS. Il présente une solution B2B innovante de consignes à colis intelligentes équipées de la technologie brevetée **Flip-Safe™**.

Ce projet a été conçu pour illustrer un parcours d'achat B2B complet, incluant la présentation des produits, un configurateur dynamique multi-options et un système de demande de devis.

## 🚀 Fonctionnalités Clés

- **Catalogue B2B ciblé :** Présentation du *Keepr Hub* (Copropriétés & Grandes Entreprises) et de la *Keepr Box* (TPE/PME).
- **Technologie Flip-Safe™ :** Explication du concept d'amortissement hydraulique et de sécurité mécanique antivol.
- **Configurateur de Produit Dynamique :** 
  - Sélection des finitions (couleur, bois, métal).
  - Ajout d'options technologiques (WiFi, Caméra, Alarme).
  - Choix du modèle de financement (Achat comptant vs Location/Hardware-as-a-Service).
  - Sélecteur de quantité pour les déploiements multi-colonnes.
- **Panier & Devis (State Management) :** Utilisation de l'API React Context (`CartContext`) pour gérer les devis en temps réel à travers l'application.

## 🛠️ Stack Technique

- **Framework :** React 18 + Vite
- **Styling :** Tailwind CSS (v4)
- **Routing :** React Router DOM
- **Icônes :** Lucide React

## 📦 Installation & Lancement

1. Clonez le dépôt :
```bash
git clone https://github.com/votre-nom/keepr-b2b.git
```

2. Installez les dépendances :
```bash
cd keepr-b2b
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez [http://localhost:5173](http://localhost:5173) dans votre navigateur.

## 📁 Structure du Projet

- `/src/pages` : Les vues principales (Home, Products, Configurator, Cart, Concept, FAQ, etc.)
- `/src/components` : Composants réutilisables (Navbar, Footer, etc.)
- `/src/context` : Gestion d'état global (`CartContext.tsx`)
- `/src/assets` : Ressources statiques, visuels générés par IA et logos.

---
*Note : Ce projet est une démonstration fictive (Proof of Concept) visant à illustrer des compétences en développement Frontend et en conception de parcours utilisateur B2B.*
