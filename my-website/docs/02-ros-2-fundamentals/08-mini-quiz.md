# Mini Quiz: Chapter 02

Test your knowledge of the concepts covered in Chapter 02: ROS 2 Fundamentals. Choose the best answer for each question.

---

1.  Which of the following best describes a ROS 2 Node?
    a) A communication channel for data streams.
    b) A synchronous request/reply mechanism.
    c) A long-running, goal-oriented task.
    d) **An executable process that performs a specific computation.**

2.  If you want to send continuous sensor data (e.g., IMU readings) from one part of your robot's software to multiple other parts, which ROS 2 communication mechanism would be most appropriate?
    a) Service
    b) Action
    c) **Topic**
    d) Parameter

3.  A robot needs to ask a mapping server for the current map of its environment and wait until the map data is received before proceeding. Which ROS 2 communication mechanism should be used for this interaction?
    a) Topic
    b) Action
    c) **Service**
    d) Message

4.  What is a key advantage of using ROS 2 Actions compared to Services for tasks like robot navigation to a distant goal?
    a) Actions are simpler to implement.
    b) Actions are always faster.
    c) **Actions provide periodic feedback and can be preempted.**
    d) Actions can only be used with Python.

5.  What command is used to install system dependencies for ROS packages, often recommended after setting up a new ROS 2 environment?
    a) `sudo apt install`
    b) `pip install`
    c) **`rosdep install`**
    d) `colcon build`

---

**Answer Key:**
1.  d
2.  c
3.  c
4.  c
5.  c
