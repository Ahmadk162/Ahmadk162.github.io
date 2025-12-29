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

## 1. Standalone Control Boards

Custom PCBs integrating a microcontroller and peripheral circuits on a single
board, intended for autonomous operation.

> **Typical use cases:** embedded control, sensor acquisition, actuator driving.

### Brushless Linear Motor Control Board (Hall-Based Commutation)

**Type:** Standalone motor control interface PCB  
**Purpose:** Control and commutation of a brushless linear motor using Hall sensors  
**Sensors:** 3 Hall effect position sensors  
**Status:** Design completed – fabrication pending

This PCB is designed to control a **brushless linear motor** based on feedback
from **three Hall effect sensors**, enabling position-aware commutation and
motion control.

The board handles:
- acquisition and conditioning of Hall sensor signals
- generation of motor control signals
- interfacing with an external controller or power stage
- structured routing for time-critical motor signals

The design targets laboratory and research applications where precise motion
control and modular integration with higher-level controllers are required.

<img src="assets/images/PCB/linear-motor-pcb.png" alt="linear-motor-pcb" width="50%">

### Electromagnet Control and Ball Position Measurement Board

**Type:** Standalone control and measurement PCB  
**Purpose:** Electromagnet actuation and ball position measurement  
**Sensor:** Hall effect sensor (analog output)  
**Application:** Magnetic ball levitation control experiment  
**Status:** Design completed – fabrication pending

This PCB is designed for **closed-loop control of an electromagnet** combined
with **ball position measurement** using a Hall-effect sensor.

The board integrates:
- a power switching stage for electromagnet control (MOSFET + protection diode)
- analog signal conditioning using an **LM324 operational amplifier**
- Hall-effect sensor interface for position measurement
- analog output routed to an external controller ADC

The architecture separates power and measurement paths, making the board
well-suited for experimental control setups and real-time control validation.

<img src="assets/images/PCB/magnetic-ball-pcb.png" alt="magnetic-ball-pcb" width="50%">

---

## 2. Measurement & Signal Conditioning Boards

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

## 3. Interface & Shield Boards

PCBs designed to interface existing development boards with external modules,
communication buses, or power stages.  
These boards improve wiring reliability and system robustness compared to
breadboard-based solutions.

> **Typical use cases:** communication interfaces, protocol adapters,
laboratory test setups.

### ESP32 ↔ Arduino Motor Driver Interface Shield

**Type:** Interface / shield board  
**Purpose:** Mechanical and electrical adaptation between ESP32 and Arduino Uno motor driver boards  
**Application:** Motor control experiments using ESP32 with Arduino-compatible drivers  
**Status:** Design completed – fabrication pending

This PCB is an **interface shield** designed to connect an **Arduino Uno–footprint
motor driver board** to an **ESP32-based control system**.

The shield provides:
- footprint adaptation between Arduino Uno motor drivers and ESP32 headers
- direct signal routing for control and power connections
- a clean and reliable alternative to manual wiring

This approach enables reuse of existing Arduino motor driver hardware while
benefiting from the computational and communication capabilities of the ESP32.

<img src="assets/images/PCB/motor-driver-pcb.png" alt="motor-driver-pcb" width="50%">

### Laboratory ESP32 Development Platform

Several interface and shield boards presented in this project are designed to
work with a **custom ESP32-based development board developed in our laboratory**.

This development board provides:
- a **12 V DC input power supply**
- onboard **3.3 V and 5 V regulated outputs** (up to 2 A)
- ESP32 powered directly from the **3.3 V rail**
- a standardized **GPIO pin header (shield interface)** for hardware expansion

This platform is used as a **common control and communication core** in multiple
laboratory and research experiments.

### Shield-Based Hardware Extension Approach

To ensure modularity, reproducibility, and rapid prototyping, a **shield-based
hardware architecture** was adopted around the laboratory ESP32 development
board.

Each shield is designed to:
- connect a specific peripheral, sensor, actuator, or communication interface
- reuse the common power rails (3.3 V / 5 V) and GPIO layout
- avoid manual wiring and breadboard-based connections
- enable fast reconfiguration between experiments

As a result, **multiple dedicated shield boards** were developed to interface
the same ESP32 platform with different systems, including lighting control,
motor drivers, sensors, and actuator interfaces.

<img src="assets/images/PCB/BLDC-pcb.png" alt="BLDC" width="50%">
<img src="assets/images/PCB/bldc-fan-pcb.png" alt="bldc-fan-pcb" width="50%">
<img src="assets/images/PCB/can-pcb.png" alt="can-pcb" width="50%">
<img src="assets/images/PCB/clab-pcb.png" alt="clab-pcb" width="50%">
<img src="assets/images/PCB/solar-kit2-pcb.png" alt="solar-kit2-pcb" width="50%">
<img src="assets/images/PCB/solar-kit-pcb.png" alt="solar-kit-pcb" width="50%">

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
