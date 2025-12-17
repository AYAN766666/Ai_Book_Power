# Feedback Control: PID Controllers

## Introduction

Among the most widely used and effective feedback control mechanisms in robotics and automation is the **PID controller**. PID stands for Proportional, Integral, and Derivative. It's a control loop feedback mechanism that calculates an "error" value as the difference between a measured process variable and a desired setpoint. The controller then attempts to minimize this error by adjusting the process control inputs. Understanding PID control is fundamental to achieving precise and stable motion in robotic systems.

## The PID Controller Formula

The output of a PID controller, which is typically the command sent to an actuator (e.g., motor voltage/current), is given by:

`Output = K_p * e(t) + K_i * ∫e(t)dt + K_d * de(t)/dt`

Where:
*   `e(t)` is the instantaneous error (setpoint - measured value).
*   `K_p` is the **Proportional gain**.
*   `K_i` is the **Integral gain**.
*   `K_d` is the **Derivative gain**.

## Components of PID Control

### 1. Proportional Term (P)

*   **Action**: Responds to the current error. The larger the error, the larger the proportional response.
*   **Effect**: Reduces the rise time to reach the setpoint. A high `K_p` can lead to oscillations and instability if too aggressive.
*   **Drawback**: Often results in a **steady-state error** (offset) where the system never quite reaches the setpoint, especially with friction or external loads.

### 2. Integral Term (I)

*   **Action**: Accumulates past errors over time. It "remembers" the offset.
*   **Effect**: Eliminates steady-state error. It works to drive the system to the setpoint exactly.
*   **Drawback**: Can cause overshoot and make the system less stable if `K_i` is too high, leading to "integral windup" if not properly managed.

### 3. Derivative Term (D)

*   **Action**: Responds to the rate of change of the error. It predicts future error based on the current trend.
*   **Effect**: Improves system stability, reduces overshoot, and dampens oscillations. Acts like a brake.
*   **Drawback**: Can amplify noise in the system if `K_d` is too high, as it reacts to rapid changes in error.

## Tuning a PID Controller

Tuning is the process of adjusting the `K_p`, `K_i`, and `K_d` gains to achieve desired performance (e.g., fast response, minimal overshoot, no steady-state error, stability). Common tuning methods include:

*   **Trial and Error**: Adjusting gains manually, often starting with `K_p`, then `K_d`, then `K_i`.
*   **Ziegler-Nichols Method**: A more systematic empirical method.
*   **Software-based Auto-tuning**: Algorithms that automatically find optimal PID gains.

### General Tuning Approach (Trial and Error):

1.  Set `K_i` and `K_d` to zero. Increase `K_p` until oscillations start. Then reduce `K_p` slightly.
2.  Increase `K_d` to reduce overshoot and oscillations.
3.  Increase `K_i` to eliminate steady-state error.

## Applications in Robotics

PID controllers are ubiquitous in robotics for:
*   **Joint Position Control**: Ensuring robot joints reach and maintain desired angles.
*   **Motor Speed Control**: Maintaining a constant speed despite varying loads.
*   **Mobile Robot Velocity/Position Control**: Controlling wheel speeds to follow paths.
*   **Balance Control**: For platforms like inverted pendulums or humanoid robots (often augmented with feedforward or more advanced models).

## Key Points

*   **PID Controller**: A feedback mechanism that uses Proportional, Integral, and Derivative terms to minimize error.
*   **Proportional (P) Term**: Responds to current error, affects rise time, can cause steady-state error.
*   **Integral (I) Term**: Accumulates past error, eliminates steady-state error, can cause overshoot.
*   **Derivative (D) Term**: Responds to error rate, improves stability, reduces overshoot, sensitive to noise.
*   **Tuning**: Adjusting `K_p`, `K_i`, `K_d` to achieve desired performance (e.g., trial and error, Ziegler-Nichols).
*   Widely used for **joint position, motor speed, and mobile robot control**.

## Mini Quiz

1.  Which term in a PID controller is primarily responsible for responding to the current error and reducing the rise time?
    a) Integral term
    b) Derivative term
    c) **Proportional term**
    d) Feedback term

2.  What is a common drawback of using only a proportional controller (high `K_p`) without an integral term?
    a) Increased oscillations.
    b) Reduced stability.
    c) **Steady-state error (offset).**
    d) Slow response time.

3.  Which component of the PID controller helps to eliminate steady-state error by accumulating past errors over time?
    a) Proportional term
    b) **Integral term**
    c) Derivative term
    d) Gain term

4.  If a PID controlled system is exhibiting significant overshoot and oscillations, which gain should you typically increase to improve stability and reduce these effects?
    a) `K_p` (Proportional)
    b) `K_i` (Integral)
    c) **`K_d` (Derivative)**
    d) All of the above

5.  What is the process of adjusting the `K_p`, `K_i`, and `K_d` gains to achieve desired control performance called?
    a) Calibration
    b) Stabilization
    c) **Tuning**
    d) Optimization
