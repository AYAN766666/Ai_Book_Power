# Key Terms

This section provides definitions for important terms introduced in Chapter 06: Robot Navigation and Mapping. Understanding these terms is crucial for grasping how autonomous robots perceive, understand, and move through their environments.

---

*   **Navigation**: The process by which a robot determines its position, plans a path to a goal, and executes that path while avoiding obstacles.
*   **Mapping**: The process of creating a spatial representation (map) of a robot's environment.
*   **Localization**: The robot's ability to determine its own position and orientation within a known map.
*   **Path Planning**: The process of finding an optimal or feasible path from a robot's current location to a desired goal location, typically avoiding obstacles.
*   **Simultaneous Localization and Mapping (SLAM)**: The computational problem of building a map of an unknown environment while simultaneously keeping track of an agent's location within that map.
*   **Loop Closure**: In SLAM, the detection that a robot has returned to a previously visited location, used to correct accumulated errors (drift) in the map and trajectory.
*   **Configuration Space (C-space)**: The space of all possible configurations (positions and orientations) of a robot. Obstacles are "grown" in C-space to represent collision states.
*   **Occupancy Grid Map**: A map representation where the environment is discretized into a grid of cells, each storing a probability of being occupied by an obstacle.
*   **Log-Odds**: A representation often used in occupancy grid mapping to update cell probabilities, where new sensor readings are simply added or subtracted.
*   **Dijkstra's Algorithm**: A grid-based path planning algorithm that finds the shortest path from a single source node to all other nodes in a graph with non-negative edge weights.
*   **A* (A-star) Algorithm**: An extension of Dijkstra's algorithm that uses a heuristic function to guide its search, making it more efficient for finding optimal paths.
*   **Probabilistic Roadmap (PRM)**: A sampling-based path planning algorithm that constructs a roadmap in the C-space by randomly sampling configurations and connecting collision-free ones.
*   **Rapidly-exploring Random Tree (RRT/RRT*)**: Sampling-based path planning algorithms that incrementally build a space-filling tree by randomly sampling points and extending the tree towards them. RRT* aims for asymptotic optimality.
*   **Potential Field Methods**: Path planning methods that model the environment with attractive forces towards the goal and repulsive forces from obstacles, guiding the robot along the gradient. Can get stuck in local minima.
*   **Lidar SLAM**: SLAM systems that primarily use Lidar sensor data to build accurate geometric maps.
*   **Visual SLAM (VSLAM)**: SLAM systems that primarily use camera data (monocular, stereo, RGB-D) for mapping and localization.
*   **Visual-Inertial SLAM (VINS)**: SLAM systems that combine camera data with IMU readings for more robust and accurate mapping and localization.