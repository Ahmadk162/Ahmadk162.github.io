---
layout: default
title: PCB Design & Hardware Interfaces
---

# PCB Design & Hardware Interfaces

This project presents a collection of **custom PCB designs** developed for
embedded systems, communication interfaces, and laboratory prototypes.

The focus is on:
- hardware integration and interfacing
- rapid prototyping for research applications
- robust and reproducible electronic design

All PCBs are designed using professional CAD tools and follow good engineering
practices (signal integrity, power routing, modularity).

---

## 1. Interface & Shield Boards

PCBs designed to interface existing development boards with external modules,
communication buses, or power stages.  
These boards improve wiring reliability and system robustness compared to
breadboard-based solutions.

> **Typical use cases:** communication interfaces, protocol adapters,
laboratory test setups.

<img src="assets/images/PCB/BLDC-pcb.png" alt="BLDC" width="50%">
<img src="assets/images/PCB/bldc-fan-pcb.png" alt="bldc-fan-pcb" width="50%">
<img src="assets/images/PCB/can-pcb.png" alt="can-pcb" width="50%">
<img src="assets/images/PCB/clab-pcb.png" alt="clab-pcb" width="50%">
<img src="assets/images/PCB/solar-kit2-pcb.png" alt="solar-kit2-pcb" width="50%">
<img src="assets/images/PCB/solar-kit-pcb.png" alt="solar-kit-pcb" width="50%">


---

## 2. Standalone Control Boards

Custom PCBs integrating a microcontroller and peripheral circuits on a single
board, intended for autonomous operation.

> **Typical use cases:** embedded control, sensor acquisition, actuator driving.

---

## 3. Measurement & Signal Conditioning Boards

### TCD1304DG Linear CCD Interface Board

**Type:** Measurement and sensor interface PCB  
**Purpose:** Acquisition of position data from a TCD1304DG linear CCD sensor  
**Application:** Ball position measurement in a magnetic levitation experiment  
**Status:** Fabricated and integrated in experimental setup

This PCB interfaces a **TCD1304DG linear CCD sensor** with an **ESP32
microcontroller** to perform optical position measurement based on shadow
detection.

The board provides:
- electrical interfacing of the CCD sensor
- routing of clock and control signals
- acquisition and preprocessing on ESP32
- **UART communication** to an external controller for closed-loop control

The PCB has been fabricated and successfully integrated into a laboratory
magnetic levitation setup used for control experiments.

<img src="assets/images/PCB/TCD-pcb.png" alt="TCD-pcb" width="50%">
<img src="assets/images/PCB/TCD1.jpeg" alt="TCD1" width="50%">
<img src="assets/images/PCB/TCD2.jpeg" alt="TCD2" width="50%">
---

## 4. Design Tools & Workflow

- PCB CAD: EasyEDA / KiCad  
- Schematic-driven design  
- 3D mechanical verification  
- Design for prototyping and lab validation  

Fabrication and validation are performed when required by the project timeline.

---

## 5. Notes on Project Status

Some PCBs presented here are:
- fully fabricated and tested
- at design or layout stage
- awaiting fabrication

Each board is **clearly labeled with its current status** to distinguish between
design work and validated hardware.

This page is updated progressively as designs are fabricated and tested.
