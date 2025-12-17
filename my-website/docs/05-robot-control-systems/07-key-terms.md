# Key Terms

This section provides definitions for important terms introduced in Chapter 05: Robot Control Systems. Understanding these terms is crucial for grasping how robots achieve precise and desired movements.

---

*   **Robot Control**: The discipline of designing algorithms that enable robots to behave in a desired manner, involving managing motion and interaction with the environment.
*   **Open-Loop Control**: A control system where the control action is independent of the system's output. No feedback from sensors is used to adjust the control input.
*   **Closed-Loop Control (Feedback Control)**: A control system where the control action depends on the system's output. Sensors provide feedback, which is used to calculate an error and adjust the control input to minimize that error.
*   **Setpoint (Reference)**: The desired target value or behavior that a control system aims to achieve.
*   **Measured Value**: The actual current value of a system variable, obtained from sensors.
*   **Error**: The difference between the setpoint (desired value) and the measured value (actual value).
*   **PID Controller (Proportional-Integral-Derivative Controller)**: A widely used feedback control mechanism that calculates an error and attempts to minimize it by adjusting the control output based on three terms: proportional, integral, and derivative.
*   **Proportional Term (P)**: The part of the PID controller output that is directly proportional to the current error. It influences the response time.
*   **Integral Term (I)**: The part of the PID controller output that is proportional to the accumulated sum of past errors. It helps eliminate steady-state error.
*   **Derivative Term (D)**: The part of the PID controller output that is proportional to the rate of change of the error. It helps to dampen oscillations and improve stability.
*   **Tuning**: The process of adjusting the `K_p`, `K_i`, and `K_d` gains of a PID controller to achieve desired performance characteristics (e.g., speed, accuracy, stability).
*   **Steady-State Error**: A persistent, non-zero error that remains after the transient response of a control system has died out. Often addressed by the integral term.
*   **Overshoot**: The extent to which a system's output exceeds its final, steady-state value after a change in input.
*   **Trajectory Generation**: The process of computing a time-parameterized path, defining the desired position, velocity, and acceleration of a robot over time, connecting a start and end point.
*   **Trajectory Tracking**: The process by which a robot's control system attempts to make the robot follow a pre-generated trajectory as accurately as possible.
*   **Anti-Windup**: A technique used in PID controllers to prevent the integral term from accumulating excessive error when the actuator is saturated, which can lead to large overshoots.
*   **Actuator Saturation**: The condition where an actuator reaches its maximum physical limit (e.g., maximum motor voltage or torque) and cannot produce any further output.