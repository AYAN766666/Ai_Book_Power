# Fundamentals of Reinforcement Learning

## Introduction

Reinforcement Learning (RL) is a powerful paradigm where an intelligent agent learns to make optimal decisions by interacting with an environment. Unlike supervised learning (which requires labeled data) or unsupervised learning (which finds patterns in unlabeled data), RL learns through a system of rewards and penalties, much like how humans or animals learn from experience. This section dives deeper into the fundamental components and concepts that underpin all reinforcement learning algorithms.

## The Agent-Environment Interface

The core of an RL system is the interaction between an **agent** and its **environment** over a sequence of discrete time steps.

*   **Agent**: The learner or decision-maker. It observes the environment, takes actions, and aims to maximize its cumulative reward.
*   **Environment**: Everything outside the agent. It receives actions from the agent and emits new states and rewards.

At each time step `t`:
1.  The agent observes the current **state** `S_t`.
2.  Based on `S_t`, the agent chooses an **action** `A_t` according to its **policy** `π`.
3.  The environment receives `A_t` and transitions to a new state `S_t+1`.
4.  The environment provides a **reward** `R_t+1` to the agent.
5.  The process repeats.

## Key RL Components Revisited

### 1. States (S)

*   A complete description of the environment at a given moment.
*   The agent uses the state to decide its next action.
*   Can be discrete (e.g., chessboard squares) or continuous (e.g., joint angles of a robot).

### 2. Actions (A)

*   The set of all possible moves or decisions the agent can take.
*   Can be discrete (e.g., move left/right) or continuous (e.g., torque values for a motor).

### 3. Reward Function (R)

*   Defines the goal of the RL problem. A scalar value that the environment sends to the agent after each action.
*   The agent's sole objective is to maximize the total cumulative reward over time.
*   *Example*: +1 for reaching a goal, -1 for hitting an obstacle, 0 for every other step.

### 4. Policy (π)

*   The agent's brain or strategy. It maps perceived states of the environment to actions to be taken.
*   `π(a|s)`: the probability of taking action `a` when in state `s` (stochastic policy).
*   `a = π(s)`: a specific action for each state (deterministic policy).
*   The ultimate goal of RL is to find an optimal policy `π*` that maximizes expected cumulative reward.

### 5. Value Function (V or Q)

*   Predicts future reward. It's a prediction of the expected cumulative reward an agent can expect to receive starting from a given state (or state-action pair) and following a particular policy.
    *   **State-Value Function `V(s)`**: Expected return starting from state `s` and following policy `π`.
    *   **Action-Value Function `Q(s, a)`**: Expected return starting from state `s`, taking action `a`, and then following policy `π`.
*   Value functions are crucial because they allow the agent to evaluate the "goodness" of states and actions, guiding its learning process.

### 6. Model (Optional)

*   An RL problem can have a **model** of the environment, which is the agent's representation of how the environment works.
*   **Model-based RL**: Agent uses the model to predict the next state and reward given a current state and action. This allows for planning.
*   **Model-free RL**: Agent learns directly from experience (trial and error) without explicitly building a model of the environment.

## Exploration vs. Exploitation

A key dilemma in RL:
*   **Exploration**: Trying new, potentially better actions to discover more about the environment.
*   **Exploitation**: Choosing actions that are known to yield high rewards based on current knowledge.

An effective RL agent balances these two, typically by starting with more exploration and gradually shifting towards exploitation as it gains more knowledge.

## Key Points

*   RL involves an **agent** interacting with an **environment** to maximize **cumulative reward**.
*   Core components: **State, Action, Reward, Policy, Value Function**.
*   **Policy (π)**: Agent's strategy mapping states to actions.
*   **Value Function (V/Q)**: Predicts future rewards, guides learning.
*   **Model (optional)**: Agent's understanding of environment dynamics (model-based vs. model-free RL).
*   **Exploration vs. Exploitation**: Balancing trying new actions and using known good actions.

## Mini Quiz

1.  In a Reinforcement Learning setup, what is the primary objective of the agent?
    a) To find patterns in unlabeled data.
    b) To classify labeled data.
    c) **To maximize its cumulative reward over time.**
    d) To minimize the number of actions taken.

2.  What is the function of a "policy" in Reinforcement Learning?
    a) To define the rules of the environment.
    b) To calculate the reward for each action.
    c) **To map perceived states of the environment to actions to be taken.**
    d) To store the history of all past interactions.

3.  Which of the following is an example of a "state" in an RL problem for a mobile robot?
    a) Moving forward.
    b) Receiving +1 reward.
    c) **The robot's current position and battery level.**
    d) The amount of time elapsed.

4.  The dilemma of whether to try new, potentially better actions or to choose actions known to yield high rewards is known as:
    a) State-Action Problem
    b) Policy-Reward Conflict
    c) **Exploration vs. Exploitation**
    d) Model-Free vs. Model-Based

5.  What does the Action-Value Function `Q(s, a)` predict?
    a) The value of the current state `s`.
    b) The probability of taking action `a`.
    c) **The expected cumulative reward starting from state `s`, taking action `a`, and then following a policy `π`.**
    d) The total number of rewards received.
