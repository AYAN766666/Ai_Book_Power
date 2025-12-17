# ROS 2 Concepts: Nodes, Topics, Services, Actions

## Introduction

ROS 2 organizes robot software into a modular, distributed architecture. Understanding its core communication concepts—Nodes, Topics, Services, and Actions—is fundamental to developing applications. These concepts define how different parts of a robot's software interact, allowing for flexible, scalable, and robust system designs.

## 1. Nodes

### Definition

A **Node** is an executable process that performs computation. In ROS 2, every functional unit of a robot's software, such as a sensor driver, a motor controller, a navigation algorithm, or a planning module, is typically implemented as a node. Nodes are designed to be modular and single-purpose, promoting reusability and easier debugging.

### Characteristics

*   **Modular**: Each node has a specific role.
*   **Decentralized**: Nodes can run independently and communicate with each other.
*   **Language-agnostic**: Can be written in Python, C++, or other ROS 2-supported languages.

### Example

*   A `camera_driver` node that publishes image data.
*   A `navigation_planner` node that computes paths.
*   A `motor_controller` node that sends commands to motors.

## 2. Topics

### Definition

**Topics** are the primary means for nodes to exchange data asynchronously in a publish/subscribe model. A node can **publish** messages to a topic, and other nodes can **subscribe** to that topic to receive those messages. This is a one-to-many communication pattern, where multiple subscribers can receive data from a single publisher.

### Characteristics

*   **Asynchronous**: Data is streamed continuously.
*   **One-to-many**: One publisher can have multiple subscribers.
*   **Typed Messages**: Data exchanged on topics must conform to a predefined message type (e.g., `sensor_msgs/Image`, `geometry_msgs/Twist`).

### Example

*   A `camera_driver` node publishes image data to the `/camera/image_raw` topic.
*   A `face_detector` node subscribes to `/camera/image_raw` to process images.
*   A `teleop_node` publishes `geometry_msgs/Twist` messages to the `/cmd_vel` topic to control robot movement.

## 3. Services

### Definition

**Services** enable synchronous request/reply communication between nodes. When a node requires a specific computation or action from another node, it makes a **service call**. The serving node then performs the requested task and returns a **response**. This is a one-to-one communication pattern, analogous to a function call in a distributed system.

### Characteristics

*   **Synchronous**: The client waits for a response from the server.
*   **One-to-one**: A client requests from a specific server.
*   **Request/Reply**: Involves a defined request message and a defined response message.

### Example

*   A `navigation_planner` node makes a service call to a `map_server` node, requesting a map of the environment.
*   A `gripper_control` node offers a service `open_gripper` which, when called, makes the gripper open and returns a success/failure response.

## 4. Actions

### Definition

**Actions** are designed for long-running, goal-oriented tasks that may be preempted (cancelled) and provide periodic feedback. They are built on a client/server model, but unlike services, action clients can receive **feedback** during the execution of a goal and can **cancel** the goal if needed.

### Characteristics

*   **Goal-oriented**: Defined by a specific goal to achieve.
*   **Feedback**: Provides continuous updates on the progress of the goal.
*   **Preemptible**: The client can cancel an ongoing goal.
*   **Result**: Returns a final result when the goal is completed or cancelled.

### Example

*   A `navigation_client` sends a goal to a `navigate_to_pose` action server to move the robot to a specific location. During navigation, the client receives feedback on the robot's current position and remaining distance. The client could cancel the navigation if a new, higher-priority goal emerges.

## Key Points

*   **Nodes**: Executable processes, modular and single-purpose, forming the computational units of a robot system.
*   **Topics**: Asynchronous, one-to-many communication for streaming data (publish/subscribe model) using typed messages.
*   **Services**: Synchronous, one-to-one request/reply communication for immediate computations or actions.
*   **Actions**: Asynchronous, goal-oriented communication for long-running, preemptible tasks with periodic feedback.

## Mini Quiz

1.  In ROS 2, what is an executable process that performs computation, often designed to be modular and single-purpose?
    a) Topic
    b) Service
    c) Action
    d) **Node**

2.  Which ROS 2 communication concept uses a publish/subscribe model to exchange data asynchronously?
    a) Node
    b) Service
    c) Action
    d) **Topic**

3.  If a node needs to request a specific computation from another node and wait for an immediate response, which communication concept should it use?
    a) Topic
    b) Action
    c) **Service**
    d) Parameter

4.  Which ROS 2 communication concept is best suited for long-running tasks that provide periodic feedback and can be cancelled?
    a) Topic
    b) Service
    c) **Action**
    d) Node

5.  A `teleop_node` sending continuous `geometry_msgs/Twist` messages to control a robot's movement is an example of what kind of communication?
    a) Service call
    b) Action goal
    c) **Publishing to a topic**
    d) Node parameter setting
