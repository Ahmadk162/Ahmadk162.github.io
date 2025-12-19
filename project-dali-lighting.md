---
layout: default
title: Système d’éclairage intelligent basé sur DALI
---

# Système d’éclairage intelligent basé sur DALI

## 1. Contexte du projet
Ce projet porte sur le développement d’un **système d’éclairage intelligent** utilisant le protocole **DALI (Digital Addressable Lighting Interface)**, largement employé dans les bâtiments tertiaires et industriels.

L’objectif est de concevoir une solution **embarquée et interopérable** permettant le pilotage individuel et collectif de luminaires, avec intégration de capteurs et de scénarios d’automatisation.

---

## 2. Objectifs techniques
- Implémenter la communication **DALI** sur microcontrôleur
- Piloter des luminaires adressables (ON/OFF, variation)
- Intégrer des capteurs pour un éclairage adaptatif
- Développer une architecture robuste et évolutive

---

## 3. Architecture du système

### Matériel
- Microcontrôleur : **ESP32**
- Interface DALI (transmission Manchester, bus 16 V)
- Capteurs :
  - détecteur de mouvement
  - capteur de luminosité (LDR)
- Alimentation et interface de puissance adaptées au bus DALI

### Logiciel embarqué
- Développement en **C / C++**
- Gestion des trames DALI :
  - adressage court et de groupe
  - commandes directes et scénarios
- Séparation claire :
  - acquisition capteurs
  - communication DALI
  - logique de contrôle

---

## 4. Fonctionnalités implémentées
- Commande individuelle des luminaires
- Variation d’intensité lumineuse
- Détection de présence
- Ajustement automatique en fonction de la luminosité ambiante
- Scénarios d’éclairage programmables

---

## 5. Communication et supervision
Le système peut être supervisé via :
- une interface locale embarquée
- une communication réseau (selon configuration)

L’architecture est conçue pour être compatible avec des systèmes de gestion technique du bâtiment (GTB).
![MATLABApp DALI](assets/images/DALI_matlab.png)
---

## 6. Outils et technologies utilisés
- **Microcontrôleur :** ESP32  
- **Protocole :** DALI  
- **Langages :** C / C++  
- **Capteurs :** PIR, LDR  
- **Outils :** Arduino IDE, Git  

---

## 7. Résultats et acquis techniques
- Maîtrise du protocole DALI et de ses contraintes physiques
- Implémentation d’une communication temps réel fiable
- Conception d’un système d’éclairage modulaire
- Compréhension des problématiques d’éclairage intelligent en bâtiment

---

## 8. Perspectives d’évolution
- Intégration d’une interface utilisateur avancée
- Connexion à une plateforme IoT
- Gestion énergétique et statistiques d’usage
- Extension à des installations multi-zones

---

🔗 **Code source et documentation** : disponibles sur demande ou via GitHub
