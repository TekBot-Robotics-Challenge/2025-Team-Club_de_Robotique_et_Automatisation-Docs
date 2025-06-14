# TECHNICAL TEST DOCUMENTATION FOR ELECTRONICS  
---

## 📚 Table of Contents

- [TECHNICAL TEST DOCUMENTATION FOR ELECTRONICS](#technical-test-documentation-for-electronics)
  - [📚 Table of Contents](#-table-of-contents)
  - [Test 1: Gyroscope and Accelerometer](#test-1-gyroscope-and-accelerometer)
    - [Why This Test Is Critically Important](#why-this-test-is-critically-important)
  - [1. Test Objectives](#1-test-objectives)
  - [2. Understanding Orientations: Roll, Pitch, and Yaw](#2-understanding-orientations-roll-pitch-and-yaw)
    - [a) Roll](#a-roll)
    - [b) Pitch](#b-pitch)
    - [c) Yaw](#c-yaw)
  - [3. Why Are These Angles Important for Our System?](#3-why-are-these-angles-important-for-our-system)
  - [Hardware Selection for This Test](#hardware-selection-for-this-test)
    - [Microcontroller: Standalone ATmega328P](#microcontroller-standalone-atmega328p)
      - [Required Components for ATmega328P Operation](#required-components-for-atmega328p-operation)
    - [Inertial Sensor: MPU6050](#inertial-sensor-mpu6050)
      - [Why the MPU6050?](#why-the-mpu6050)
    - [Display: I2C 16x2 LCD Screen](#display-i2c-16x2-lcd-screen)
      - [Advantages of the I2C LCD](#advantages-of-the-i2c-lcd)
  - [5. Architecture and Operating Principle](#5-architecture-and-operating-principle)
    - [Data Acquisition](#data-acquisition)
    - [Data Preprocessing](#data-preprocessing)
    - [Sensor Fusion and Orientation Calculation](#sensor-fusion-and-orientation-calculation)
    - [Direction Detection](#direction-detection)
    - [Display and User Feedback](#display-and-user-feedback)
  - [6. Bill of Materials](#6-bill-of-materials)
    - [Microcontroller](#microcontroller)
    - [Power Supply](#power-supply)
    - [Oscillator](#oscillator)
    - [Reset Circuit](#reset-circuit)
    - [Programming Interface](#programming-interface)
    - [Visual Test](#visual-test)
  - [7. Circuit Implementation](#7-circuit-implementation)
    - [A. ATmega328P Microcontroller Test](#a-atmega328p-microcontroller-test)
    - [B. Bootloader Burning](#b-bootloader-burning)
    - [C. Schematic Design in KiCad](#c-schematic-design-in-kicad)
  - [8. Schematic, Components, and Assembly](#8-schematic-components-and-assembly)
    - [Component List and Description](#component-list-and-description)
    - [Overall Operation](#overall-operation)
    - [Power Supply](#power-supply-1)
    - [Communication Protocol Used](#communication-protocol-used)
    - [D. Component Soldering](#d-component-soldering)
    - [E. Programming and Testing of Assembled Circuit](#e-programming-and-testing-of-assembled-circuit)
  - [Conclusion](#conclusion)

---
---

## Test 1: Gyroscope and Accelerometer

Spatial orientation – distinguishing up, down, left, right, forward, and backward – comes naturally to humans.  
But how can a robot or automated system replicate this capability?

This is where inertial sensors come in: electronic components capable of "sensing" an object's movements and rotations in 3D space.  
We'll explore this technology using the **MPU6050** sensor, a module combining:

- A **3-axis accelerometer** to detect accelerations (including gravity)
- A **3-axis gyroscope** to measure rotational velocities

This sensor will be placed in a user's palm and connected to an **ATmega328P microcontroller**.  
During hand movements (raising, lowering, rotating), data will display in real-time on an **LCD screen**.

### Why This Test Is Critically Important

This test provides hands-on experience with embedded systems and robotics, where inertial sensors (like those in **drones**, **smartphones**, and **robots**) are essential for measuring position, velocity, and system stability.  
By combining accelerometer (linear acceleration) and gyroscope (rotational velocity) data, we can reconstruct an object's real-time trajectory and orientation in space – a process called **sensor fusion**, vital for 3D applications.

The **MPU6050**'s simplicity (standard I2C interface) and **LCD** output create an effective pedagogical approach:  
It visually demonstrates how hand gestures translate to detected directions without unnecessary complexity.

This balance of technical rigor, accessibility, and interactivity makes it an ideal starting point for understanding **motion detection**, **embedded electronics**, and **spatial orientation** before exploring advanced solutions (e.g., sophisticated filters, AHRS models).

---
---

## 1. Test Objectives

This test aims to develop and validate essential technical skills in embedded systems and motion detection:

- Identify and understand operation of a combined inertial sensor (**MPU6050**), leveraging its data to measure 3D orientation/movement
- Implement **I2C communication** between sensor and **ATmega328P** microcontroller
- Program an **Arduino-compatible** microcontroller to:
  - Read raw sensor data
  - Apply software processing (filtering, calibration)
  - Calculate orientation angles (**yaw, pitch, roll**)
- Develop direction-detection logic interpreting angle/acceleration variations to identify six primary hand movements (**up, down, left, right, forward, backward**)
- Display real-time results on an **I2C LCD**
- Understand **calibration** and **filtering** importance for measurement accuracy
- Establish methodical **testing/validation** procedures

<p align="center">
  <img src="../images/7.jpg" alt="Schéma" width="500">
</p>

---

## 2. Understanding Orientations: Roll, Pitch, and Yaw

Three fundamental angles describe object orientation in 3D space:  
**roll**, **pitch**, and **yaw**. These correspond to rotations around perpendicular axes.

### a) Roll

Rotation around the longitudinal axis (lateral tilt).

**Practical demonstration:**  
Tilt your hand sideways as if pouring water from a glass.

**System relevance:**  
Detects left/right hand tilts for lateral movement recognition.

<p align="center">
  <img src="../images/4.png" alt="Schéma" width="500">
</p>

### b) Pitch

Rotation around the transverse axis (front-back tilt).

**Practical demonstration:**  
Nod your hand forward/backward like saying "yes".

**System relevance:**  
Identifies forward/backward hand movements.

<p align="center">
  <img src="../images/5.png" alt="Schéma" width="500">
</p>

### c) Yaw

Rotation around the vertical axis (horizontal pivot).

**Practical demonstration:**  
Rotate your hand left/right horizontally without tilting.

**System relevance:**  
Detects horizontal rotations around the vertical axis.

<p align="center">
  <img src="../images/6.png" alt="Schéma" width="500">
</p>

---

## 3. Why Are These Angles Important for Our System?

The **MPU6050** measures these rotations via its gyroscope. Calculated **roll, pitch, yaw** angles determine precise hand orientation.  
Combined with **accelerometer** data (linear accelerations), the system detects hand **position**, **movement**, and **direction**.

Understanding these rotation axes is essential to:
- Interpret gestures (**lifting**, **lowering**, **rotating**)
- Detect movement directions (**up/down**, **left/right**, **forward/backward**)
- Enhance measurement accuracy through **filtering** and **sensor fusion**

---

## Hardware Selection for This Test

Component selection prioritizes reliability, precision, and final integration feasibility.

### Microcontroller: Standalone ATmega328P

<p align="center">
  <img src="https://th.bing.com/th/id/OIP.VML3Sd1b9wHLA4DsfzLHJAHaFL?r=0&rs=1&pid=ImgDetMain" alt="Schéma" width="500">
</p>
<p align="center">
  <img src="https://www.sigmaelectronica.net/wp-content/uploads/2015/06/ATMEGA328.jpg" alt="Schéma" width="500">
</p>


Using the bare ATmega328P chip (vs. full Arduino Uno) offers advantages:
- *Miniaturization*: Smaller footprint for custom enclosures
- *Cost reduction*: Lower price than complete development boards
- *Circuit customization*: Selective peripheral component integration
- *Pedagogical value*: Deepens understanding of embedded system fundamentals

#### Required Components for ATmega328P Operation
- 16 MHz crystal oscillator + capacitors
- RESET pull-up resistor (10 kΩ)
- Regulated 5V power supply + decoupling capacitors
- External USB-serial converter (e.g., FTDI module) for programming
- Precision wiring to sensors/display

### Inertial Sensor: MPU6050

<p align="center">
  <img src="https://th.bing.com/th/id/OIP.DTgBipgvFa7rrY_VBkpqBgHaGI?w=221&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="Schéma" width="500">
</p>

This 3-axis accelerometer + 3-axis gyroscope module was selected.

#### Why the MPU6050?
- *Comprehensive motion capture*: Provides linear acceleration + angular velocity
- *I2C interface*: Simplified wiring with multi-device bus capability
- *Integrated DMP*: Onboard Digital Motion Processor fuses sensor data
- *ATmega328P compatibility*: Operates at 3.3V–5V

> *Note: Key considerations*
> - Most GY-521 modules include 3.3V regulator and 5V-compatible pull-ups
> - Connect SDA/SCL to microcontroller pins A4/A5
> - Default I2C address: 0x68 (change to 0x69 by pulling AD0 high)

### Display: I2C 16x2 LCD Screen

<p align="center">
  <img src="https://th.bing.com/th/id/OIP.pTanwRr2lLg5OuN96tVoOwAAAA?w=208&h=168&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="Schéma" width="500">
</p>

For real-time visualization of results.

#### Advantages of the I2C LCD
- *Simplified wiring*: 4-wire connection (VCC, GND, SDA, SCL)
- *I2C compatibility*: Shares bus with MPU6050
- *Clear readability*: Direct movement direction visualization

---

## 5. Architecture and Operating Principle

The system uses the **MPU6050** to detect object (e.g., hand) movements and orientation:

### Data Acquisition
- **3-axis accelerometer**: Measures linear accelerations (forward/back, left/right, up/down)
- **3-axis gyroscope**: Measures angular velocities

### Data Preprocessing
- **Low-pass filter** smoothes accelerometer data (removes noise)
- **DMP** (Digital Motion Processor) prepares data and triggers interrupts when ready

### Sensor Fusion and Orientation Calculation
- **DMP fuses accelerometer/gyroscope data** using **quaternions**
- Calculates human-readable angles:
  - **Roll**: Left-right tilt
  - **Pitch**: Front-back tilt
  - **Yaw**: Horizontal rotation
- **Gravity compensation** isolates true motion acceleration

### Direction Detection
- Monitors **Z-axis acceleration** for up/down movements
- Analyzes **roll/pitch/yaw** variations for:
  - Forward/backward motion
  - Left/right motion
  - Rotations
- Flags **stable state** when no significant motion detected

### Display and User Feedback
- Real-time direction display on **16×2 I2C LCD**
- Optional serial monitor output for calibration/debugging

## 6. Bill of Materials

| Component               | Key Specifications                   | Role                                   |
|-------------------------|--------------------------------------|----------------------------------------|
| **ATmega328P**          | 16 MHz, 32 KB Flash                 | Main MCU (data processing/control)     |
| **MPU6050 (GY-521)**    | I2C, Integrated DMP, 3.3V–5V        | Inertial measurement unit              |
| **I²C 16×2 LCD**        | Address 0x27/0x3F                   | Real-time user interface               |
| **FTDI Module**         | USB-TTL interface                   | MCU programming/serial debug           |
| **Veroboard/PCB**       | 24×16 strips, Eurorack format       | Component mounting platform            |
| **Soldering Iron**      | Fine tip (0.4 mm)                   | Component assembly                    |
| **Multimeter**          | Continuity/voltage/resistance tests | Electrical verification                |
| **Breadboard + Jumper Wires** | Rapid prototyping              | Pre-soldering validation               |

### Microcontroller
- **ATmega328P-PU** (DIP28 package)

### Power Supply
- **5V regulator** (AMS1117 or 7805)
- **Input**: 7–12V
- **Filtering capacitors**:
  - 1 × 10 μF electrolytic (VCC-GND)
  - 2 × 100 nF ceramic (VCC-GND, AVCC-GND)

### Oscillator
- **16 MHz crystal**
- 2 × 22 pF capacitors

### Reset Circuit
- 10 kΩ pull-up resistor (RESET to +5V)
- Reset push button (to GND)

### Programming Interface
- Arduino UNO (for bootloader)
- USB-TTL converter

### Visual Test
- LED + 220Ω–330Ω resistor (for blink test)

---

## 7. Circuit Implementation

### A. ATmega328P Microcontroller Test
- **Minimal setup on breadboard**:
  - 5V power
  - 16 MHz crystal + 22 pF capacitors
  - 10 kΩ RESET pull-up
- **Functional test**: Upload basic code (e.g., `blink`)

### B. Bootloader Burning
Required for Arduino-compatible programming:
- Use Arduino as ISP programmer
- **Connections**: MOSI, MISO, SCK, RESET, Vcc, GND
- **In Arduino IDE**:
  - Select `Arduino as ISP`
  - Burn bootloader:
    - `ATmega328 on a breadboard (8 MHz)` for internal oscillator
    - `Arduino Uno` for 16 MHz crystal

### C. Schematic Design in KiCad
- Measures movements via **MPU6050**
- Processes/formats data with **ATmega328P**
- Displays results on **LCD**
- **I2C communication** minimizes connections

---

## 8. Schematic, Components, and Assembly

<p align="center">
  <img src="../images/3.png" alt="Schéma" width="500">
</p>

### Component List and Description
- **ATmega328P**: 8-bit MCU (data acquisition/processing)
- **MPU6050**: 6-DoF inertial sensor (I2C)
- **I2C LCD**: 16×2 alphanumeric display
- **Crystal/capacitors/resistor**: Clock generation
- **Push button**: Manual reset

### Overall Operation
1. MCU initializes MPU6050 via I2C
2. Continuous reading of acceleration/rotation data
3. Data processing/conversion
4. Output to LCD

### Power Supply

<p align="center">
  <img src="../images/8.jpg" alt="Schéma" width="500">
</p>

- All components powered at **+5V (VCC)**
- MPU6050 **VLOGIC** pin handles 3.3V/5V logic
- Powered via adapter or battery

### Communication Protocol Used
- **I2C bus** handles all sensor/display communication:
  - **SDA**: Data line
  - **SCL**: Clock synchronization

### D. Component Soldering
- **Preparation**:
  - Preheat iron (300–350°C)
  - Clean tip
  - Organize components/veroboard
- **Through-hole soldering**:
  - Position components → solder one pin → adjust → solder remaining pins
  - Trim leads
- **SMD soldering** (if applicable):
  - Use solder paste/flux
  - Secure corner → solder remaining pins
> **Note**:  
> Use fine solder wire (0.38 mm),  
> Avoid bridges,  
> Ensure shiny/conical joints,  
> Visually inspect all connections

### E. Programming and Testing of Assembled Circuit
- **Connect USB-serial converter** to RX, TX, Vcc, GND (and DTR/RESET if available)
- **Upload test code** via Arduino IDE (e.g., sensor read)
- **Functional validation**:
  - Microcontroller operation
  - I2C communication (MPU6050 + LCD)
  - Power stability

---
---

## Conclusion

This orientation/motion detection project using the **MPU6050** and **ATmega328P** provides practical introduction to **intelligent embedded systems**. It demonstrates how raw sensor data can be filtered, fused, interpreted, and displayed in real-time.

Through its accessible architecture (I2C protocol, LCD output, software filtering, gesture detection), it covers fundamentals essential for understanding:
- Sensor-microcontroller communication
- Inertial signal processing
- Embedded data visualization

Serving as both **educational foundation** and **development starting point**, it enables future advancement in:
- Gestural interfaces
- Wearable devices
- Autonomous robots
- Assistance systems

The project highlights the importance of **rigorous documentation**, **structured experimentation**, and **progressive mastery** of embedded hardware/software tools.
