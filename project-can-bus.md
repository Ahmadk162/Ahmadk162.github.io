---
layout: default
title: Réseau CAN multi-nœuds et communication OBD-II
---

# Réseau CAN multi-nœuds et communication OBD-II

---

## 1. Contexte du projet
Ce projet vise à concevoir et mettre en œuvre un **réseau CAN (Controller Area Network) multi-nœuds**, inspiré des architectures utilisées dans les **systèmes automobiles et industriels**.

L’objectif est de démontrer :
- la communication **CAN bas niveau** entre microcontrôleurs,
- la conception de **messages applicatifs**,
- l’intégration d’un **tableau de bord OBD-II** simulant un ECU,
- et la supervision du système via une **application MATLAB**.

Le système repose sur des composants réels et fonctionne sur un **bus CAN physique**.

---

## 2. Architecture globale du système

![CANbus structure](assets/images/CAN_structure.drawio.png)

Le réseau CAN est composé de **trois nœuds principaux** :
- deux microcontrôleurs **ESP32**,
- un **tableau de bord OBD-II (F12)**.

Les nœuds sont interconnectés via un **bus différentiel CANH / CANL**.

---

## 3. Description des nœuds CAN

### Node 1 – ESP32 (nœud principal)
- Contrôle de LEDs locales (R, G, B, RGB)
- **Transmission et réception CAN**
- Simulation d’un **ECU OBD-II**
- Envoi de trames CAN vers le tableau de bord F12

### Node 2 – ESP32 (nœud pair)
- Contrôle de LEDs locales
- **Transmission et réception CAN**
- Communication bidirectionnelle avec Node 1

### Node 3 – Tableau de bord OBD-II (F12)
- Envoi de requêtes **OBD-II PID**
- Affichage de données véhicule :
  - vitesse
  - régime moteur (RPM)
  - température moteur
  - consommation

---

## 4. Couche matérielle et interface CAN

Chaque ESP32 est connecté au bus CAN via un **transceiver MCP2551**, assurant l’interface entre :
- le microcontrôleur (niveau logique),
- le bus CAN différentiel (CANH / CANL).

### Paramètres du bus CAN
- Identifiants : **11 bits**
- Débit : **500 kbps**
- Longueur des trames : **8 octets**

Cette configuration est conforme aux standards automobiles.

---

## 5. Communication inter-nœuds (ESP32 ⇄ ESP32)

Les deux ESP32 communiquent de manière **bidirectionnelle**, sans hiérarchie maître/esclave.

### Fonctionnalités implémentées
- Envoi de commandes CAN pour le **pilotage distant des LEDs**
- Réception et décodage des trames
- Gestion de la luminosité (PWM) et des couleurs (RGB)

Les messages CAN applicatifs sont structurés afin de transporter :
- des bits d’activation/désactivation,
- des valeurs PWM,
- des codes couleur.

---

## 6. Communication OBD-II et simulation ECU

### Requêtes OBD-II
Le tableau de bord F12 envoie des requêtes CAN standardisées :
- ID `0x7DF` (broadcast)
- Mode `0x01`
- PIDs multiples (RPM, vitesse, température, consommation)

### Réponses ECU simulées
Node 1 agit comme un **ECU simulé** :
- analyse des requêtes OBD-II,
- génération de **réponses multi-trames** (ISO 15765-4),
- envoi des données vers le tableau de bord.

Cette partie du projet démontre la compréhension :
- des **PIDs OBD-II**,
- des mécanismes de **flow control**,
- des trames consécutives CAN.

---

## 7. Supervision via MATLAB

Une application développée sous **MATLAB** permet :
- la supervision du réseau CAN,
- l’envoi de commandes aux deux ESP32,
- l’observation des échanges de messages.

⚠️ MATLAB n’est **pas** un nœud CAN :
- il agit uniquement comme **interface de supervision**,
- le traitement temps réel et la communication CAN sont assurés par les ESP32.

Cette séparation reflète une **architecture industrielle réaliste**.

![CANbus matlab](assets/images/CANbus_matlab.png)
---

## 8. Résultats et apports techniques

Ce projet a permis de :
- concevoir un **réseau CAN fonctionnel multi-nœuds**,
- implémenter une communication **pair-à-pair** entre microcontrôleurs,
- développer des **protocoles applicatifs CAN**,
- comprendre et décoder les **messages OBD-II**,
- intégrer matériel, firmware et supervision logicielle.

---

## 9. Perspectives d’évolution
- Ajout de nouveaux nœuds CAN
- Filtrage matériel des trames
- Extension à CAN FD
- Intégration avec un système de diagnostic avancé
- Enregistrement et analyse des trames CAN

---

🔗 **Code source et documentation** : disponibles sur demande ou via GitHub
