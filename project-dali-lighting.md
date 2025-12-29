---
layout: default
title: Système d’éclairage intelligent basé sur DALI
---

# Système d’éclairage intelligent basé sur DALI

## 1. Contexte du projet
Ce projet porte sur le développement d’un **système d’éclairage intelligent** utilisant le protocole **DALI (Digital Addressable Lighting Interface)**, largement employé dans les bâtiments tertiaires et industriels.

L’objectif est de concevoir une solution **embarquée et interopérable** permettant le pilotage individuel et collectif de luminaires, avec intégration de capteurs et de scénarios d’automatisation.

![DALI_frame](assets/images/DALI-PCB_3D.png)

![DALI_structure](assets/images/DALI_structure.PNG)

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

## 4 Conception du PCB (Shield ESP32 → DALI-2 Click)

Pour faciliter l’intégration matérielle et obtenir un montage reproductible, j’ai conçu un **PCB shield** permettant de connecter la carte **ESP32 du laboratoire** (déjà développée) au module **DALI-2 Click**.

Ce shield assure :
- une **interconnexion propre** (connecteurs, signaux, alimentation)
- une **réduction des erreurs de câblage** par rapport à un montage sur breadboard
- une meilleure **robustesse mécanique** pour les tests et démonstrations
![DALI_PCB_3D](assets/images/DALI-frame.png)
![DALI_PCB](assets/images/DALI-PCB.png)
---

## 5. Fonctionnalités implémentées

- **Commande individuelle des luminaires** via adressage court (short address)
- **Commande groupée des luminaires** (group addressing)
- **Variation de l’intensité lumineuse** (dimming)
- **Détection de présence** pour l’activation automatique de l’éclairage
- **Scan automatique du bus DALI** pour la détection des drivers connectés
- **Attribution et modification des adresses courtes (short addresses)** des drivers
- **Création et gestion des groupes DALI**
- **Ajustement automatique de l’éclairage** en fonction de la luminosité ambiante


---

## 6. Communication et supervision
Le système peut être supervisé via :
- une interface MATLABApp
- une communication réseau (selon configuration)

L’architecture est conçue pour être compatible avec des systèmes de gestion technique du bâtiment (GTB).

![MATLABApp DALI](assets/images/DALI_matlab.png)

---

## 7. Outils et technologies utilisés
- **Microcontrôleur :** ESP32  
- **Protocole :** DALI  
- **Langages :** C / C++  
- **Capteurs :** PIR, LDR  
- **Outils :** Arduino IDE, Git  

---

## 8. Résultats et acquis techniques
- Maîtrise du protocole DALI et de ses contraintes physiques
- Implémentation d’une communication temps réel fiable
- Conception d’un système d’éclairage modulaire
- Compréhension des problématiques d’éclairage intelligent en bâtiment

![DALI_result](assets/images/DALI_result.png)

---

## 9. Perspectives d’évolution
- Intégration d’une interface utilisateur avancée
- Connexion à une plateforme IoT
- Gestion énergétique et statistiques d’usage
- Extension à des installations multi-zones
