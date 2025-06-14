# Detailed Explanation of MPU6050 + I2C LCD Code with ATmega328P

This file aims to explain in detail the functioning of code using a **MPU6050** sensor to detect orientation/movement and display the information on an **I2C LCD screen**.

## Libraries Used

```cpp
#include <Wire.h>                          // Communication I2C
#include <LiquidCrystal_I2C.h>             // Gestion de l’écran LCD I2C
#include "I2Cdev.h"                        // Interface avec les capteurs I2C
#include "MPU6050_6Axis_MotionApps20.h"   // Accès au DMP du MPU6050
```

### Why These Libraries?
- `Wire.h`: necessary for using the I2C pins (SDA/SCL).
- `LiquidCrystal_I2C.h`: handles display on a 16x2 screen via I2C.
- `I2Cdev.h` and `MPU6050_6Axis_MotionApps20.h`: enable leveraging the DMP (Digital Motion Processor) of the MPU6050 to easily calculate orientation (Yaw, Pitch, Roll).

---

## Object Initialization

```cpp
LiquidCrystal_I2C lcd(0x27, 16, 2);  // Adresse I2C de l'écran LCD
MPU6050 mpu;                         // Objet MPU6050
```

- The address `0x27` is the most common for I2C LCDs. It may vary.
- The MPU6050 is instantiated without additional parameters.

---

## Interrupt

```cpp
#define INTERRUPT_PIN 2
volatile bool mpuInterrupt = false;
void dmpDataReady() { mpuInterrupt = true; }
```

- Pin 2 of the ATmega328P is used to receive interrupts from the MPU6050.
- `mpuInterrupt` is triggered as soon as new data is ready.

---

## Global Variables for the DMP

```cpp
bool dmpReady = false;
uint8_t mpuIntStatus;
uint8_t devStatus;
uint16_t packetSize, fifoCount;
uint8_t fifoBuffer[64];
```

- These variables manage the data packets from the DMP (contained in the FIFO).

```cpp
Quaternion q;
VectorFloat gravity;
float ypr[3];
VectorInt16 aa, aaReal;
```

- `q`: quaternion representing the orientation.
- `gravity`: gravity vector, calculated from `q`.
- `ypr`: array containing Yaw (heading), Pitch (tilt), Roll (roll) angles.
- `aa`: raw acceleration.
- `aaReal`: linear acceleration, without gravity.

---

## Thresholds and Filters

```cpp
float prevYaw = 0, prevPitch = 0, prevRoll = 0;
const float seuilAngle = 5.0;
const int seuilAccZ = 600;
float accZ_filtered = 0;
const float alpha = 0.3;
String direction = "";
```

- `thresholdAngle`: minimum variation threshold to consider a rotation.
- `thresholdAccZ`: used to detect vertical movement.
- `alpha`: low-pass filter coefficient to smooth Z data.

---

## Function `setup()`: Initialization

```cpp
Wire.begin();
lcd.begin(16, 2);
lcd.init();
lcd.backlight();
lcd.clear();
lcd.print("Init MPU6050...");
```

- Initialization of the I2C bus, the LCD screen, and displaying a startup message.

```cpp
Serial.begin(115200);
mpu.initialize();
pinMode(INTERRUPT_PIN, INPUT);
```

- Serial communication for debugging.
- Initialization of the MPU6050.

```cpp
mpu.setXAccelOffset(...); // Offsets calibrés
```

- Hardware correction of measurements.

```cpp
devStatus = mpu.dmpInitialize();
if (devStatus == 0) {
  mpu.CalibrateAccel(6);
  mpu.CalibrateGyro(6);
  mpu.setDMPEnabled(true);
  attachInterrupt(...);
  packetSize = mpu.dmpGetFIFOPacketSize();
  dmpReady = true;
}
```

- If everything is okay, the DMP is enabled.
- The interrupt is attached to notify the microcontroller when new data is available.

---

## Function `loop()`: Continuous Reading

```cpp
if (!dmpReady) return;
if (!mpuInterrupt && fifoCount < packetSize) return;
```

- Nothing is done if the DMP is not ready or there’s no new data.

```cpp
fifoCount = mpu.getFIFOCount();
if ((mpuIntStatus & 0x10) || fifoCount == 1024) {
  mpu.resetFIFO();
  lcd.print("Overflow FIFO!");
  return;
}
```

- Checking for an overflow of the FIFO buffer.

```cpp
mpu.getFIFOBytes(fifoBuffer, packetSize);
fifoCount -= packetSize;
```

- Reading the FIFO packet.

```cpp
mpu.dmpGetQuaternion(&q, fifoBuffer);
mpu.dmpGetGravity(&gravity, &q);
mpu.dmpGetYawPitchRoll(ypr, &q, &gravity);
```

- Retrieving YPR angles from the quaternions.

```cpp
mpu.dmpGetAccel(&aa, fifoBuffer);
mpu.dmpGetLinearAccel(&aaReal, &aa, &gravity);
accZ_filtered = alpha * aaReal.z + (1 - alpha) * accZ_filtered;
```

- Reading the linear acceleration without gravity, then filtering.

```cpp
detectDirection(yaw, pitch, roll, accZ_filtered);
```

- Determining the direction of movement based on thresholds.

```cpp
lcd.clear();
lcd.print("Dir: "); lcd.print(direction);
Serial.print("Dir="); Serial.println(direction);
```

- Displaying the detected direction.

---

## Function `detectDirection(...)`

This function compares current values with previous ones to estimate the direction of movement.

```cpp
if (abs(accZf) > seuilAccZ) direction = (accZf > 0) ? "Haut" : "Bas";
else if (abs(dPitch) > abs(dRoll) && abs(dPitch) > seuilAngle) direction = (dPitch > 0) ? "Avant" : "Arriere";
else if (abs(dRoll) > seuilAngle) direction = (dRoll > 0) ? "Droite" : "Gauche";
else if (abs(dYaw) > seuilAngle) direction = (dYaw > 0) ? "Rot Droite" : "Rot Gauche";
else direction = "Stable";
```

- This allows detecting **up/down**, **forward/backward**, **left/right**, or a **rotation**.

---

## CONCLUSION

This C/C++ code is structured to:
- Read data from the MPU6050 sensor via its DMP (for higher precision)
- Determine the direction of movement or tilt
- Display the result on an I2C LCD screen
- Use interrupts for better efficiency
- Offer a reactive, filtered, and educational system

---


