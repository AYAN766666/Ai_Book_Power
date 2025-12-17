# Key Terms

This section provides definitions for important terms introduced in Chapter 13: Digital Twins and Simulation-to-Real Transfer. Understanding these terms is crucial for grasping how virtual environments accelerate physical AI development.

---

*   **Digital Twin**: A virtual model of a physical object, system, or process that is continuously updated with data from its real-world counterpart, enabling monitoring, analysis, and simulation.
*   **Simulation-to-Real (Sim-to-Real) Transfer**: The process of taking policies, controllers, or models developed and trained in a simulated environment and effectively deploying them on a real physical robot.
*   **Reality Gap**: The discrepancy between a simulated environment and the real physical world, which often causes policies or models trained in simulation to perform poorly when transferred to a real robot.
*   **Robotic Simulation**: A virtual environment that models robots, their sensors, and their environments for safe, efficient, and cost-effective testing, debugging, and training.
*   **Physics Engine**: A software component within a simulator that models physical interactions such as rigid body dynamics, contact forces, friction, and gravity.
*   **Robot Model**: A digital representation of a robot's physical structure, including links, joints, masses, and inertial properties (often using URDF or SDFormat).
*   **Sensor Model**: A simulated representation of a robot's sensors, including their output characteristics, noise, and limitations.
*   **Actuator Model**: A simulated representation of a robot's actuators, including their dynamics, limits, and imperfections.
*   **Ground Truth Data**: Perfect, noise-free, and exactly known data (e.g., robot pose, object positions) available in simulations, invaluable for algorithm evaluation.
*   **Domain Randomization (DR)**: A technique to mitigate the reality gap by explicitly randomizing various parameters of the simulation (e.g., textures, physics properties, sensor noise) during training, making learned policies robust to real-world variations.
*   **Domain Adaptation**: Techniques that aim to align the data distributions of simulated and real-world environments to improve sim-to-real transfer.
*   **System Identification**: The process of using real-world data from a physical system to learn or refine the parameters of its mathematical model, often used to make simulations more accurate.
*   **Transfer Learning (Sim-to-Real Context)**: Applying knowledge gained from training in simulation (e.g., a pre-trained policy) to a real-world task, often with a small amount of fine-tuning on real data.
*   **Curriculum Learning (Simulation Context)**: A training strategy where the complexity of the simulated environment or task is gradually increased to help a learning agent acquire skills more effectively.
*   **Gazebo**: A popular open-source 3D robot simulator known for its robust physics engine and integration with ROS.
*   **MuJoCo (Multi-Joint dynamics with Contact)**: A physics engine and simulator known for its accuracy in simulating complex contacts and rich joint dynamics, particularly popular for Reinforcement Learning research.
*   **Isaac Sim**: A robotics simulation platform by NVIDIA, built on Omniverse, offering high-fidelity physics and photorealistic rendering for AI training and synthetic data generation.