# Mini Quiz: Chapter 05

Test your knowledge of the concepts covered in Chapter 05: Robot Control Systems. Choose the best answer for each question.

---

1.  What is the main characteristic of an open-loop control system?
    a) It uses sensor feedback to adjust its output.
    b) **It operates without feedback, making its control action independent of the output.**
    c) It is typically used for precise and stable control.
    d) It only controls robot position, not velocity.

2.  Which component of a PID controller is primarily responsible for eliminating steady-state error?
    a) Proportional term
    b) **Integral term**
    c) Derivative term
    d) Gain term

3.  If a control system is exhibiting excessive overshoot and oscillations, which PID term is usually adjusted to dampen these effects and improve stability?
    a) `K_p` (Proportional gain)
    b) `K_i` (Integral gain)
    c) **`K_d` (Derivative gain)**
    d) Setpoint

4.  The process of defining a time-parameterized path for a robot, including desired positions, velocities, and accelerations over time, is called:
    a) Path Planning
    b) **Trajectory Generation**
    c) Trajectory Tracking
    d) Inverse Kinematics

5.  What is the purpose of "anti-windup" in a PID controller implementation?
    a) To make the controller respond faster to errors.
    b) To increase the overall gain of the system.
    c) **To prevent the integral term from accumulating excessive error when the actuator is saturated.**
    d) To introduce deliberate oscillations for better exploration.

---

**Answer Key:**
1.  b
2.  b
3.  c
4.  b
5.  c
