---
layout: default
title: Système embarqué IoT – ESP32
---

# Système embarqué IoT basé sur ESP32

## 1. Contexte du projet
Ce projet vise à concevoir un **système embarqué IoT complet**, basé sur un microcontrôleur ESP32, capable d’acquérir des données capteurs, de les traiter localement et de les transmettre via des protocoles de communication réseau standard.

L’objectif principal est de démontrer une **maîtrise globale de l’ingénierie embarquée**, incluant le matériel, le firmware temps réel et les communications.

---

## 2. Rôle et responsabilités
Dans ce projet, j’ai assuré :

- La **conception de l’architecture matérielle**
- Le **développement firmware** sur ESP32
- L’implémentation de **communications réseau IoT**
- La structuration logicielle pour un fonctionnement robuste et extensible

---

## 3. Architecture du système

### Matériel
- Microcontrôleur : **ESP32**
- Capteurs : température / courant / entrées analogiques (selon configuration)
- Alimentation : régulation locale
- Interfaces : GPIO, ADC, bus série

### Logiciel embarqué
- Architecture modulaire en **C / C++**
- Gestion des tâches avec **FreeRTOS**
- Séparation claire :
  - acquisition
  - traitement
  - communication
  - supervision

---

## 4. Communication & IoT
Le système supporte plusieurs protocoles :

- **MQTT** pour la remontée de données
- **HTTP(S)** pour la configuration
- **TCP/IP / UDP** pour les échanges réseau
- **Modbus** pour l’interopérabilité industrielle

Les données sont structurées pour être exploitables par une application distante (PC, serveur ou cloud).

---

## 5. Outils et technologies utilisés

- **Microcontrôleur :** ESP32  
- **RTOS :** FreeRTOS  
- **Langages :** C / C++, Arduino C  
- **Protocoles :** MQTT, Modbus, TCP/IP  
- **Outils :** Git, VS Code, Arduino IDE  

---

## 6. Résultats et acquis techniques

- Développement d’un firmware temps réel stable
- Gestion fiable des communications réseau
- Architecture logicielle réutilisable
- Compréhension approfondie des contraintes embarquées (temps réel, mémoire, latence)

---

## 7. Évolutions possibles
- Ajout d’une interface web embarquée
- Sécurisation avancée (TLS, authentification)
- Intégration avec un jumeau numérique
- Déploiement multi-nœuds

---

🔗 **Code source :** disponible sur demande ou via GitHub
