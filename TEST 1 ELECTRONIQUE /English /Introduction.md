# TECHNICAL DOCUMENTATION OF ELECTRONICS TESTS

## Table of Contents

- [Test 1: Gyroscope and Accelerometer](#test-1-gyroscope-and-accelerometer)
- [Why is this test crucial?](#why-is-this-test-crucial)

## Test 1: Gyroscope and Accelerometer

Finding your way in space, knowing how to distinguish up from down, left from right, front from back, is a natural skill for humans.  
But how can a robot or an automated system replicate this ability?

This is where **inertial sensors** come in: electronic components capable of "feeling" the movements and rotations of an object in space.  
We chose to explore this technology with the **MPU6050** sensor, a module that combines:

- a **3-axis accelerometer**, to detect acceleration (including gravity),
- a **3-axis gyroscope**, to measure rotation speed around the 3 axes.

This sensor will be placed in the palm of a hand and connected to an **ATmega328P** microcontroller.  
With each gesture — lifting, lowering, or rotating the hand — information will be displayed in real time on an **LCD screen**.

---

### Why is this test crucial?

This test is a hands-on immersion into embedded systems and robotics, where inertial sensors — like those found in **drones**, **smartphones**, or **robots** — are essential for measuring the position, speed, and stability of the system.  
By combining an accelerometer (measuring linear accelerations) and a gyroscope (measuring rotation speed), one can **reconstruct in real time the orientation and trajectory** of an object in space — this is called **sensor fusion**, a critical process in 3D applications.

Thanks to the simplicity of the **MPU6050** module (standard I2C interface) and the output displayed on an **LCD screen**, this test provides an effective educational approach:  
it directly shows how a manual gesture is interpreted as a direction, with no unnecessary complexity.

This balance of technique, accessibility, and interactivity makes it an excellent starting point for anyone wishing to understand **motion detection**, **embedded electronics**, and **spatial orientation**, before moving on to more advanced solutions (advanced filters, AHRS models, etc.).

