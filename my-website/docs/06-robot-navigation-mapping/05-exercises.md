# Exercises

These exercises are designed to test your understanding of the concepts introduced in Chapter 06: Robot Navigation and Mapping. Think critically and provide comprehensive answers.

## Conceptual Questions

1.  **SLAM in an Unknown Dynamic Environment**:
    Imagine you are tasked with deploying an autonomous robot to explore and map a building that has never been mapped before. Additionally, some furniture within the building might be moved occasionally. Discuss the challenges this scenario poses for a SLAM system. What sensor modalities would be crucial, and what techniques would the SLAM system need to employ to handle both the unknown environment and dynamic obstacles?

2.  **Path Planning for a Delivery Robot**:
    A delivery robot needs to navigate through a crowded office building. The path planner must prioritize safety (avoiding collisions with people and objects) and efficiency (delivering packages quickly).
    a) Discuss which types of path planning algorithms (grid-based, sampling-based, potential fields) would be suitable for this task and why.
    b) What are the trade-offs between these different approaches in terms of computational cost, optimality, and ability to handle dynamic obstacles?

3.  **Limitations of Occupancy Grid Maps**:
    While occupancy grid maps are widely used, they have certain limitations. Discuss at least three significant drawbacks or challenges associated with using occupancy grid maps for complex robotic navigation tasks (e.g., in very large environments, highly dynamic scenes, or for robots with complex kinematics). How might these limitations be addressed or mitigated by other mapping representations or complementary techniques?