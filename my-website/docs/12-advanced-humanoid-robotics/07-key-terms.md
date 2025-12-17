# Key Terms

This section provides definitions for important terms introduced in Chapter 12: Advanced Humanoid Robotics: Locomotion and Dexterity. Understanding these terms is crucial for grasping the complex capabilities of humanoid robots.

---

*   **Bipedal Locomotion**: The ability of a robot to walk or run on two legs, a highly complex and inherently unstable form of movement.
*   **Dynamic Balancing**: The ability of a robot to maintain its equilibrium while it is in motion, continuously adjusting to counteract gravitational and inertial forces.
*   **Whole-Body Control (WBC)**: A sophisticated control framework that coordinates all joints and limbs of a robot to simultaneously achieve multiple, often competing, control objectives (e.g., balance, task execution, collision avoidance).
*   **Zero Moment Point (ZMP)**: A theoretical point on the ground where the sum of all moments due to gravity and inertial forces is zero. Maintaining the ZMP within the support polygon is crucial for stable dynamic locomotion.
*   **Center of Mass (CoM)**: The average position of all the mass in the robot. Its trajectory is carefully controlled for stable motion.
*   **Support Polygon**: The convex hull of the points of contact between the robot's feet (or other contact points) and the ground.
*   **Underactuation**: A condition where a robot has fewer independent control inputs (actuators) than its degrees of freedom, making control more challenging. Often occurs during the single support phase of bipedal locomotion.
*   **Gait Generation**: The process of creating a sequence of foot placements and body movements that results in stable and efficient locomotion.
*   **ZMP-Based Control**: A control strategy for bipedal locomotion that primarily aims to keep the ZMP within the support polygon by manipulating the robot's CoM trajectory.
*   **Model Predictive Control (MPC)**: A control strategy that uses a dynamic model of the robot to predict its future behavior and optimizes control inputs over a short future horizon to achieve objectives while respecting constraints.
*   **Reinforcement Learning (RL) in Locomotion**: Using RL to enable robots to learn optimal walking gaits and balance strategies through trial and error, often in simulation.
*   **Flight Phase**: A characteristic of running (compared to walking) where both feet of a bipedal robot are simultaneously off the ground.
*   **Momentum Control**: Actively managing the robot's angular and linear momentum to achieve more agile and dynamic movements.
*   **Hierarchical Control (WBC)**: An approach in WBC where tasks are prioritized, with higher-priority tasks satisfied first and lower-priority tasks optimized in the null space of the higher ones.
*   **Optimization-Based Control (WBC)**: An approach in WBC where all tasks are formulated as objectives in an optimization problem, minimizing a cost function.
*   **Redundancy Resolution**: In robotics, utilizing the extra degrees of freedom of a manipulator (beyond what is strictly necessary for a primary task) to achieve secondary objectives (e.g., obstacle avoidance).
*   **Humanoid Inverse Kinematics (IK)**: The complex problem of determining the joint angles of a humanoid robot required to achieve a desired end-effector pose while simultaneously considering whole-body balance and multi-contact constraints.
*   **Dexterous Manipulation**: The ability of a robot to perform fine motor tasks with high skill and precision, often involving multi-fingered hands.