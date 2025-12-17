# Exercises

These exercises are designed to test your understanding of the concepts introduced in Chapter 02: ROS 2 Fundamentals. Think critically and provide comprehensive answers.

## Conceptual Questions

1.  **Choosing the Right Communication Mechanism**:
    Imagine you are developing a robot that needs to perform the following tasks. For each task, identify the most appropriate ROS 2 communication mechanism (Topic, Service, or Action) and explain your choice:
    a) Continuously broadcasting the robot's current pose (position and orientation) to other components.
    b) Requesting a one-time calculation from a path-planning algorithm (e.g., finding the shortest path between two points) and waiting for the result.
    c) Commanding the robot to navigate to a distant goal, with the need for periodic updates on its progress and the possibility to cancel the navigation mid-way.

2.  **ROS 2 Architecture and Physical AI Integration**:
    Discuss how the modular architecture of ROS 2, particularly through the use of Nodes, facilitates the development and integration of diverse components in a complex Physical AI system. Provide examples of how different physical AI functionalities (e.g., perception, motor control, high-level reasoning) could be structured as ROS 2 nodes and communicate with each other.

3.  **Workspace Management and Development Workflow**:
    You have a ROS 2 workspace with several custom packages. You've just created a new package with a new node. Outline the steps you would take from creating the source file to being able to run your new node in a new terminal session. Explain the purpose of `colcon build` and sourcing the workspace setup file in this workflow.