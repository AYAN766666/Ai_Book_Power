# Exercises

These exercises are designed to test your understanding of the concepts introduced in Chapter 05: Robot Control Systems. Think critically and provide comprehensive answers.

## Conceptual Questions

1.  **Open-Loop vs. Closed-Loop Control in Practice**:
    Consider a simple mobile robot whose task is to drive forward exactly one meter.
    a) Describe how an open-loop control system might attempt this task. What are its likely limitations and failure modes?
    b) Describe how a closed-loop (feedback) control system would approach this task. What sensors would be crucial, and how would feedback be used to improve accuracy?
    c) Discuss a scenario where an open-loop control might still be preferable or sufficient for a robot.

2.  **PID Tuning for a Robotic Arm**:
    You are tuning a PID controller for a single joint of a robotic arm. The joint is oscillating significantly around its target position, and it takes a long time to settle.
    a) Which PID gain(s) would you consider adjusting first, and in what direction (increase/decrease), to reduce the oscillations? Explain your reasoning.
    b) After reducing oscillations, you notice that the joint always settles slightly short of the target position. Which PID gain would you adjust to eliminate this steady-state error? Explain your reasoning.

3.  **Trajectory Generation for a Humanoid Hand**:
    A humanoid robot needs to smoothly pick up a delicate object from a table. The trajectory for its hand needs to be generated. What are the key constraints and considerations you would take into account during trajectory generation (e.g., smoothness, physical limits, collision avoidance)? How would trajectory tracking ensure the hand follows this generated path accurately? What role would inverse kinematics play in this process?