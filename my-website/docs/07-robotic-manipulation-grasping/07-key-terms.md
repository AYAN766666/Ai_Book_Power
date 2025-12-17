# Key Terms

This section provides definitions for important terms introduced in Chapter 07: Robotic Manipulation and Grasping. Understanding these terms is crucial for grasping how robots physically interact with objects.

---

*   **Robotic Manipulation**: The ability of a robot to physically interact with objects in its environment, typically by grasping, holding, and moving them.
*   **End-Effector**: A device or tool attached to the end of a robot arm that allows it to interact with its environment.
*   **Gripper**: A type of end-effector specifically designed for grasping and holding objects.
*   **Jawed Gripper (Fingered Gripper)**: A common type of gripper that uses two or more "jaws" or "fingers" to close around an object. Can be parallel or angular.
*   **Soft Gripper**: A gripper made from compliant, deformable materials that conform to the shape of an object, ideal for delicate or irregularly shaped items.
*   **Underactuated Gripper**: A gripper with fewer actuators than degrees of freedom, designed to passively conform to object shapes for simpler control.
*   **Vacuum Gripper**: A gripper that uses suction cups to create a vacuum, suitable for flat, smooth, non-porous objects.
*   **Grasping Strategy**: The methodology and algorithms used by robots to approach, contact, and secure objects in a stable manner.
*   **Grasp Planning**: The computational process of determining suitable grasp configurations (where and how to grip an object) based on object properties and task requirements.
*   **Force Closure Grasp**: A grasp where the gripper applies forces such that the object cannot move, regardless of external forces (within limits). Requires multiple contact points.
*   **Form Closure Grasp**: A grasp where the gripper completely encompasses the object's geometry, constraining all its degrees of freedom purely through shape. Extremely stable.
*   **Power Grasp (Enveloping Grasp)**: A robust grasp where gripper fingers conform to and enclose a significant portion of the object's surface area using distributed contact and friction.
*   **Precision Grasp (Pinch Grasp)**: A grasp involving fingertip contact with an object, allowing for fine manipulation and dexterity.
*   **Object Pose Estimation**: The process of determining the precise 3D position and orientation of an object relative to the robot's reference frame.
*   **Pre-Grasp Pose**: A safe intermediate position for the end-effector near an object, prior to initiating the actual grasp.
*   **Pick-and-Place Task**: A fundamental robotic manipulation task involving the steps of perceiving, grasping, transporting, and releasing an object from one location to another.
*   **Tactile Sensor**: A sensor that detects physical contact and measures pressure distribution or contact forces, often integrated into grippers.
*   **Tool Changer**: A mechanism that allows a robot arm to automatically switch between different end-effectors or tools.