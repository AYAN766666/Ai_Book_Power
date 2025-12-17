# Key Terms

This section provides definitions for important terms introduced in Chapter 09: Robot Learning: Reinforcement Learning in Robotics. Understanding these terms is crucial for grasping how robots can learn new skills through interaction.

---

*   **Robot Learning**: A field that enables robots to acquire new skills and adapt their behaviors through experience, rather than explicit programming.
*   **Reinforcement Learning (RL)**: A machine learning paradigm where an agent learns to make optimal decisions by interacting with an environment to maximize a cumulative reward.
*   **Agent**: The learner or decision-maker in an RL system (e.g., the robot).
*   **Environment**: The world with which the RL agent interacts, providing states and rewards in response to actions.
*   **State (S)**: A snapshot or description of the environment at a given moment, used by the agent to decide its next action.
*   **Action (A)**: A move or decision made by the RL agent in response to a state.
*   **Reward (R)**: A scalar feedback signal from the environment indicating the desirability of an action taken in a given state; the agent aims to maximize cumulative reward.
*   **Policy (π)**: The agent's strategy or "brain," which maps perceived states of the environment to actions to be taken.
*   **Value Function (V or Q)**: A prediction of the expected cumulative reward an agent can expect to receive starting from a given state (or state-action pair) and following a particular policy.
*   **State-Value Function `V(s)`**: Expected return starting from state `s` and following policy `π`.
*   **Action-Value Function `Q(s, a)`**: Expected return starting from state `s`, taking action `a`, and then following policy `π`.
*   **Model-Based RL**: RL where the agent learns or has access to a model of the environment that predicts the next state and reward for any given state-action pair.
*   **Model-Free RL**: RL where the agent learns directly from experience without explicitly building a model of the environment.
*   **Exploration**: The act of trying new, potentially sub-optimal actions to discover more about the environment and improve future policies.
*   **Exploitation**: The act of choosing actions known to yield high rewards based on current knowledge.
*   **Deep Reinforcement Learning (DRL)**: The combination of Reinforcement Learning with Deep Learning (neural networks) to handle high-dimensional state and action spaces.
*   **Deep Q-Network (DQN)**: A DRL algorithm that uses a deep neural network to approximate the Q-function, often used for discrete action spaces.
*   **Policy Gradient Methods**: A class of DRL algorithms that directly optimize the policy function using gradient ascent to maximize expected return.
*   **Actor-Critic Methods**: DRL algorithms that combine policy-based (Actor) and value-based (Critic) approaches.
*   **DDPG (Deep Deterministic Policy Gradient)**: A DRL algorithm for continuous action spaces, an actor-critic method.
*   **PPO (Proximal Policy Optimization)**: A popular policy gradient DRL algorithm known for its balance of performance and sample efficiency.
*   **SAC (Soft Actor-Critic)**: An off-policy actor-critic DRL algorithm that encourages exploration.
*   **Sample Efficiency**: A measure of how much experience (data) an RL algorithm requires to learn an effective policy.
*   **Sim-to-Real Transfer (Reality Gap)**: The challenge of transferring policies learned in simulation to real robots, often due to discrepancies between simulation and reality.
*   **Reward Function Design**: The critical and often challenging task of defining the reward signal that effectively guides the RL agent towards the desired behavior.