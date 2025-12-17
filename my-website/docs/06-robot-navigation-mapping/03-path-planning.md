# Path Planning Algorithms

## Introduction

Once a robot knows where it is (localization) and what its environment looks like (mapping), the next crucial step is to figure out **how to get to a desired goal location**. This is the domain of **path planning**. Path planning algorithms generate a sequence of poses (a path) from a robot's starting point to its goal, typically while avoiding obstacles and optimizing for criteria such as shortest distance, shortest time, or minimal energy consumption. Effective path planning is vital for enabling autonomous navigation in complex and dynamic environments.

## Key Concepts

*   **Configuration Space (C-space)**: The space of all possible configurations (positions and orientations) of a robot. For path planning, obstacles in the physical world are "grown" into C-space obstacles, representing configurations where the robot would collide.
*   **Occupancy Grid Map**: A common map representation where the environment is discretized into a grid of cells, each indicating its probability of being occupied (obstacle) or free.
*   **Waypoints**: Intermediate points or nodes that define a path.
*   **Path vs. Trajectory**: A path is a purely geometric description of movement. A trajectory adds a time component (velocity, acceleration) to the path. Path planning focuses on the geometry.

## Types of Path Planning Algorithms

Path planning algorithms can be broadly categorized based on their approach:

### 1. Grid-Based Search Algorithms

These algorithms work on discretized representations of the environment, such as occupancy grid maps. They search for a path by exploring neighboring grid cells.

*   **Dijkstra's Algorithm**: Finds the shortest path from a single source node to all other nodes in a graph with non-negative edge weights. Guaranteed to find the optimal path.
*   **A* (A-star) Algorithm**: An extension of Dijkstra's that is more efficient because it uses a heuristic function to guide its search towards the goal. It finds the shortest path while exploring fewer nodes than Dijkstra's.
*   **Breadth-First Search (BFS) / Depth-First Search (DFS)**: Simpler search algorithms, often used for unweighted graphs or for exploring all reachable nodes.

### 2. Sampling-Based Algorithms

These algorithms are particularly effective in high-dimensional configuration spaces (e.g., robots with many degrees of freedom) where grid-based approaches become computationally prohibitive. They work by randomly sampling configurations in the C-space and connecting them to build a roadmap.

*   **Probabilistic Roadmap (PRM)**: Constructs a roadmap in the C-space by randomly sampling configurations and connecting them if a collision-free path exists between them. Once the roadmap is built, path planning becomes a graph search problem.
*   **Rapidly-exploring Random Tree (RRT/RRT*)**: Incremental algorithms that build a space-filling tree by randomly sampling points and extending the tree towards them. RRT* is an extension that aims for asymptotic optimality.

### 3. Potential Field Methods

These methods model the robot's environment as an electrical potential field. The goal exerts an attractive force on the robot, while obstacles exert repulsive forces. The robot moves along the gradient of this potential field.

*   **Advantages**: Simple to implement, generates smooth paths, computationally inexpensive.
*   **Disadvantages**: Can get stuck in local minima (e.g., between two obstacles), may not find a path if one exists.

### 4. Hybrid Approaches

Many modern path planners combine elements from different categories to leverage their strengths and mitigate weaknesses. For instance, a global planner might use A* on a grid map to find a coarse path, which is then refined by a local planner that uses potential fields or sampling-based methods for smoother, collision-free movement.

## Key Points

*   **Path Planning**: Generates collision-free paths from start to goal, optimizing criteria.
*   **Configuration Space (C-space)**: Robot configurations where physical obstacles are represented.
*   **Occupancy Grid Map**: Discretized environment map showing occupied/free cells.
*   **Grid-Based Algorithms**: Work on discretized maps (e.g., **Dijkstra's**, **A*** for optimal paths).
*   **Sampling-Based Algorithms**: Effective in high-dimensional spaces (e.g., **PRM**, **RRT/RRT***).
*   **Potential Field Methods**: Simple, generate smooth paths, but can get stuck in local minima.
*   Often used in **hybrid approaches** combining global and local planning.

## Mini Quiz

1.  What is the primary goal of path planning algorithms in robotics?
    a) To determine the robot's current location within a map.
    b) To build a map of an unknown environment.
    c) **To generate a sequence of poses from start to goal while avoiding obstacles.**
    d) To control the robot's joint movements directly.

2.  In path planning, obstacles in the physical world are "grown" into what to represent configurations where the robot would collide?
    a) Waypoints
    b) Occupancy Grid Cells
    c) **Configuration Space (C-space) obstacles**
    d) Potential Fields

3.  Which grid-based path planning algorithm uses a heuristic function to guide its search towards the goal, making it more efficient than Dijkstra's while still finding the shortest path?
    a) Breadth-First Search
    b) Depth-First Search
    c) **A* (A-star) Algorithm**
    d) Probabilistic Roadmap (PRM)

4.  Which type of path planning algorithm is particularly effective in high-dimensional configuration spaces and works by randomly sampling configurations?
    a) Grid-Based Search
    b) Potential Field Methods
    c) **Sampling-Based Algorithms (e.g., PRM, RRT)**
    d) Deterministic Algorithms

5.  A path planning method that models the robot's environment as an electrical potential field, where the goal attracts and obstacles repel, is known as:
    a) A* Algorithm
    b) PRM
    c) **Potential Field Method**
    d) RRT*
