---
layout: default
title: Lévitation de balle – Système de contrôle non linéaire
---

# Lévitation de balle – Système de contrôle non linéaire

## 1. Contexte du projet
Ce projet consiste à développer un **système de lévitation de balle** destiné à l’**enseignement du contrôle-commande** et à l’**expérimentation de lois de contrôle** sur un système réel.

Le dispositif met en œuvre un système **non linéaire instable**, couramment utilisé comme banc d’essai pour illustrer les différences fondamentales entre **commande en boucle ouverte** et **commande en boucle fermée**.

---

## 2. Description du système physique
Le système est composé de :

- Un **tube vertical transparent**
- Un **ventilateur DC** placé à la base du tube
- Une **balle de ping-pong** à l’intérieur du tube
- Un **capteur de distance** mesurant la position verticale de la balle
- Un **ruban LED** intégré au tube pour la visualisation en temps réel de la position

L’objectif est de **maintenir la balle à une position verticale désirée** en contrôlant la vitesse de rotation du ventilateur.

---

## 3. Architecture embarquée

### Matériel
- Microcontrôleur : **ESP32**
- Actionneur : ventilateur DC (commande PWM)
- Capteur : capteur de distance
- Interface visuelle : ruban LED adressable

### Logiciel embarqué
- Développement en **C / C++**
- Boucle de contrôle exécutée **directement sur l’ESP32**
- Le contrôle est entièrement embarqué afin de garantir le **temps réel**

---

## 4. Stratégies de contrôle implémentées

### Boucle ouverte
Plusieurs scénarios de commande en boucle ouverte ont été implémentés :
- Réponse à un échelon (step response)
- Excitation sinusoïdale
- Excitation de type signal carré

Ces scénarios permettent d’observer le comportement non linéaire et instable du système.

---

### Boucle fermée
Des stratégies de commande en boucle fermée ont été développées :

- **PID avec consigne fixe**
- **PID avec consigne variable sinusoïdale**

Ces modes permettent d’analyser :
- la stabilité du système
- la précision de suivi
- la dynamique transitoire

---

## 5. Interface graphique et communication

Une **interface graphique (GUI)** a été développée sous **MATLAB App Designer**.

### Communication
- Protocole : **HTTP**
- L’ESP32 joue le rôle de serveur
- MATLAB agit comme client de supervision

⚠️ Le calcul de la commande est **réalisé exclusivement sur l’ESP32**.  
MATLAB est utilisé uniquement pour :
- définir les paramètres (PID, durée de l’expérience, type de scénario)
- lancer les expériences
- récupérer les données mesurées

---

## 6. Acquisition et exploitation des données
À la fin de chaque expérience :
- Les données mesurées sont transmises à MATLAB
- Les données sont sauvegardées sous forme de fichiers **.txt**
- Les courbes sont générées automatiquement (position, consigne, commande)

L’utilisateur peut ensuite exploiter ces données pour :
- l’analyse du système
- la comparaison des stratégies de contrôle
- l’enseignement du contrôle-commande

---

## 7. Objectifs pédagogiques et scientifiques

### Objectifs pédagogiques
- Illustration concrète des différences entre boucle ouverte et boucle fermée
- Compréhension du rôle du correcteur PID
- Sensibilisation aux systèmes non linéaires

### Objectifs scientifiques
- Banc d’essai pour tester et comparer des lois de contrôle
- Plateforme expérimentale pour la validation de stratégies de commande

---

## 8. Points clés du projet
- Système **non linéaire**
- Contrôle **temps réel embarqué**
- Séparation claire supervision / contrôle
- Architecture pédagogique et réutilisable

---

🔗 **Code source et documentation** : disponibles sur demande ou via GitHub
