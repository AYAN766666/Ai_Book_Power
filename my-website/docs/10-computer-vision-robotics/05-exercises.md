# Exercises

These exercises are designed to test your understanding of the concepts introduced in Chapter 10: Computer Vision for Robotics. Think critically and provide comprehensive answers.

## Conceptual Questions

1.  **Computer Vision for an Autonomous Mobile Robot**:
    You are designing an autonomous mobile robot that needs to navigate a dynamic indoor environment (e.g., a hospital) and avoid obstacles, including moving people.
    a) What key computer vision capabilities (e.g., object detection, scene understanding, localization) would be essential for this robot?
    b) What types of vision sensors would you equip the robot with, and how would each contribute to fulfilling the necessary computer vision tasks?
    c) Discuss the main challenges this robot would face in its visual perception due to the dynamic environment (e.g., lighting changes, occlusions).

2.  **Trade-offs in Object Detection Algorithms**:
    Compare and contrast two-stage object detectors (e.g., Faster R-CNN) with single-shot detectors (e.g., YOLO) in the context of robotic applications.
    a) Discuss their respective advantages and disadvantages in terms of accuracy, speed, and computational requirements.
    b) For which specific robotic tasks would you choose a two-stage detector, and for which would a single-shot detector be more appropriate? Provide examples.

3.  **Monocular Visual Odometry for a Drone**:
    A small drone is designed to fly autonomously indoors, in an environment where GPS signals are unavailable. It relies primarily on a single downward-facing camera for navigation.
    a) Explain the fundamental limitation of monocular visual odometry that this drone would face.
    b) Propose a method or an additional sensor that could be integrated with the monocular camera to overcome this limitation and enable robust indoor navigation. Justify your choice.
    c) Discuss how accumulated errors (drift) in visual odometry would manifest in the drone's estimated trajectory over a long flight path.