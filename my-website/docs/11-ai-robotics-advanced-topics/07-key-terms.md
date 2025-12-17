# Key Terms

This section provides definitions for important terms introduced in Chapter 11: Artificial Intelligence in Robotics: Advanced Topics. Understanding these terms is crucial for grasping how AI enables more intelligent and autonomous robotic behaviors.

---

*   **Cognitive Robotics**: An interdisciplinary field that aims to equip robots with human-like cognitive abilities such as reasoning, learning, planning, and understanding complex situations.
*   **Knowledge Representation**: How information about the world, the robot itself, and tasks is stored and structured within a robot for computational processing and reasoning.
*   **Ontology**: A formal representation of knowledge as a set of concepts within a domain and relationships between those concepts, used for structured knowledge representation.
*   **Semantic Map**: A map that combines geometric information about an environment with semantic labels (e.g., object types, room names), providing a richer understanding.
*   **Symbolic Representation**: Using abstract symbols to represent objects, properties, and relations, allowing for logical manipulation and reasoning.
*   **Logical Reasoning**: A reasoning mechanism that uses formal logic (e.g., first-order logic) to derive conclusions from a set of axioms and facts.
*   **Probabilistic Reasoning**: A reasoning mechanism that deals with uncertainty by assigning probabilities to events or beliefs, often using models like Bayesian networks.
*   **Planning Algorithms**: Algorithms that generate sequences of actions to transform an initial state into a desired goal state, based on a model of actions and the environment.
*   **Cognitive Architectures**: Frameworks that specify how different cognitive modules (perception, memory, planning, reasoning) are organized and interact within a robot system.
*   **Multi-Robot Systems (MRS)**: Systems composed of multiple robots that collaborate to achieve common goals, often leading to enhanced capabilities.
*   **Centralized Control (MRS)**: An architecture where a single central controller collects all information, plans actions for all robots, and sends commands.
*   **Decentralized Control (MRS)**: An architecture where each robot makes its own decisions based on local information, promoting robustness and scalability.
*   **Swarm Intelligence**: An approach to decentralized multi-robot systems inspired by collective behaviors in nature (e.g., ants, bees), where complex global behaviors emerge from simple local interactions.
*   **Emergent Behavior**: Complex, intelligent behavior that arises from the interaction of many simple, local rules or agents, without explicit central control.
*   **Learning from Demonstration (LfD)**: A paradigm where a robot learns to reproduce a desired behavior by observing and imitating human demonstrations. Also known as Imitation Learning.
*   **Imitation Learning (IL)**: Synonym for Learning from Demonstration, where a robot learns a policy from expert demonstrations.
*   **Kinesthetic Teaching**: A method of demonstration acquisition where a human physically guides a robot's arm through a desired trajectory, and the robot records the motion.
*   **Teleoperation**: Controlling a robot remotely, often with a human operator using a joystick, haptic device, or VR controller, with the robot recording the demonstrated actions.
*   **Behavior Cloning**: A straightforward LfD approach where a neural network is trained to directly map observed states to demonstrated actions, mimicking the demonstrator.
*   **Correspondence Problem (LfD)**: The challenge in LfD of mapping human body movements and intentions to the corresponding actions and capabilities of a robot.
*   **Generalization (LfD)**: The ability of a robot to perform a learned task successfully in situations that are slightly different from the original demonstrations.
*   **Inverse Reinforcement Learning (IRL)**: A technique used to infer the reward function that best explains an expert's demonstrated behavior.