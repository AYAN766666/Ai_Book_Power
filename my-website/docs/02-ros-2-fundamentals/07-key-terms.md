# Key Terms

This section provides definitions for important terms introduced in Chapter 02: ROS 2 Fundamentals. Understanding these terms is crucial for developing applications within the ROS 2 ecosystem.

---

*   **Robot Operating System 2 (ROS 2)**: A flexible framework for writing robot software, providing a collection of tools, libraries, and conventions to simplify robot software development.
*   **Node**: An executable process that performs a specific computation within the ROS 2 graph. Nodes are modular units of a robot's software.
*   **Topic**: A communication channel used for asynchronous, one-to-many data streaming in a publish/subscribe model. Nodes publish messages to topics, and other nodes subscribe to receive them.
*   **Publish/Subscribe (Pub/Sub)**: A messaging pattern where senders (publishers) do not programmatically send messages directly to specific receivers (subscribers), but instead characterize published messages into classes (topics), without knowledge of which subscribers, if any, there may be.
*   **Message**: A simple data structure used to send data over topics. Messages are strictly typed.
*   **Service**: A communication mechanism for synchronous, one-to-one request/reply interactions between nodes. A client node sends a request and waits for a response from a server node.
*   **Action**: A communication mechanism for long-running, goal-oriented tasks that provide periodic feedback and can be preempted or cancelled. It involves a goal, feedback, and result.
*   **Data Distribution Service (DDS)**: The underlying middleware that ROS 2 uses for its inter-process communication, offering features like quality of service (QoS) policies.
*   **Quality of Service (QoS)**: Configurable policies in DDS (and thus ROS 2) that determine the behavior of communication, such as reliability, durability, history, and deadline settings.
*   **Workspace**: A directory structure (`~/ros2_ws`) where ROS 2 source packages are located, built, and installed.
*   **Package**: The primary unit of organization in ROS 2, containing source code, build scripts, message definitions, and other resources for a specific robot functionality.
*   **`colcon`**: The build system used in ROS 2 to compile packages within a workspace.
*   **`rclcpp`**: The ROS Client Library for C++, providing an API for C++ applications to interact with ROS 2.
*   **`rclpy`**: The ROS Client Library for Python, providing an API for Python applications to interact with ROS 2.
*   **`rosdep`**: A command-line tool that helps install system dependencies for ROS packages.
*   **`rviz2`**: A 3D visualization tool for ROS 2 that displays sensor data, robot models, and other information.
*   **`rqt`**: A GUI framework for ROS 2 that provides various plugins for debugging, introspection, and configuration.
*   **`ros2 run`**: A command-line tool to run an executable from a ROS 2 package.
*   **`ros2 pkg create`**: A command-line tool to create a new ROS 2 package.