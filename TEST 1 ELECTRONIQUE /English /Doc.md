# Test Objectives and Understanding Orientations

## Table of Contents

- [1. Objectives of this test](#1-objectives-of-this-test)
- [2. Understanding orientations: roll, pitch, and yaw](#2-understanding-orientations-roll-pitch-and-yaw)
  - [a) Roll](#a-roll)
  - [b) Pitch](#b-pitch)
  - [c) Yaw](#c-yaw)
- [3. Why are these angles important in our system?](#3-why-are-these-angles-important-in-our-system)

---

## 1. Objectives of this test

This test aims to develop and validate several essential technical and practical skills in the field of embedded systems and motion detection. Specifically, it consists of:

- Identifying and understanding the functioning of a combined inertial sensor (**MPU6050**) integrating an **accelerometer and a gyroscope**, and knowing how to use its data to measure orientation and movement in space.
- Implementing **I2C communication** between the sensor and the **ATmega328P microcontroller**, mastering the exchange of digital data via this standardized protocol.
- Programming an **Arduino microcontroller** to read raw sensor data, apply software processing (filtering, calibration), and calculate orientation angles (**yaw, pitch, roll**).
- Developing a **direction detection logic** capable of interpreting variations in angles and acceleration to determine hand movements in six main directions (**up, down, left, right, forward, backward**).
- Ensuring **real-time display** of the results on an **I2C LCD screen**, allowing clear and intuitive visualization of detected movements.
- Understanding the importance of **calibration and filtering** to improve the accuracy and reliability of measurements from the inertial sensor.
- Acquiring a **methodical testing and validation approach**, by verifying the system’s correct functioning under real-world conditions.

---

## 2. Understanding orientations: roll, pitch, and yaw

To accurately describe how an object (such as your hand equipped with the **MPU6050** sensor) is oriented and moves in space, we use three fundamental angles called **roll**, **pitch**, and **yaw**. These three movements correspond to rotations around three perpendicular axes and allow us to define the position and orientation of an object in three-dimensional space.

---

### a) Roll

This is the rotation around the **longitudinal axis**, that is, a side-to-side tilt movement, as if your hand were leaning to the right or left.

**Practical demonstration:**  
Imagine you're holding your hand in front of you and you tilt it to the side, as if pouring a glass of water. This movement is a **roll**.

**Importance in our system:**  
Roll detects whether the hand is tilting to the left or right, which is essential for understanding lateral movements.

---

### b) Pitch

This is the rotation around the **transverse axis**, corresponding to a forward-backward tilt movement.

**Practical demonstration:**  
Imagine you're nodding your head to say "yes", tilting your hand forward or backward. This movement is a **pitch**.

**Importance in our system:**  
Pitch detects whether the hand is leaning forward or backward, corresponding to forward/backward translation movements.

---

### c) Yaw

This is the rotation around the **vertical axis**, meaning a horizontal rotation movement, as if your hand were turning on itself while staying flat.

**Practical demonstration:**  
Imagine turning your hand left or right without tilting it — just rotating it on itself. This movement is a **yaw**.

**Importance in our system:**  
Yaw detects horizontal rotations, which is crucial to understanding rotations around the vertical axis.

---

## 3. Why are these angles important in our system?

The **MPU6050** measures these three rotations via its **gyroscope**, and the corresponding angles (**roll**, **pitch**, **yaw**) are calculated to precisely determine the orientation of the hand in space.  
By combining this data with that from the **accelerometer** (which measures linear accelerations), the system can detect not only the **position**, but also the **movement** and **direction** of the hand.

This understanding of the three axes of rotation is essential to:

- Correctly interpret gestures (raising, lowering, turning the hand),
- Detect movement directions (up, down, left, right, forward, backward),
- Improve the accuracy of measurements by filtering and **fusing sensor data**.
