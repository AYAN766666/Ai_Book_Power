# Walkthrough: Occupancy Grid Maps

## Introduction

Occupancy grid maps are a widely used and intuitive representation of a robot's environment, particularly for mobile robots operating in indoor or structured settings. They discretize the environment into a grid of cells, where each cell stores a probability or likelihood of being occupied by an obstacle. This walkthrough will explain the concept of occupancy grid maps, how they are constructed from sensor data (conceptually), and how they are used for basic robot navigation.

## Concept of Occupancy Grids

*   **Discretization**: The continuous environment is divided into a grid of equally sized cells (e.g., 5cm x 5cm).
*   **Occupancy Probability**: Each cell `(i, j)` stores a value `P(Occupied_ij)`, representing the probability that the cell contains an obstacle.
    *   Values close to 1 (or 0.99) indicate high probability of being occupied.
    *   Values close to 0 (or 0.01) indicate high probability of being free.
    *   Values around 0.5 indicate unknown or uncertain status.
*   **Log-Odds Representation**: Often, instead of probabilities, log-odds are used (e.g., `L(Occupied_ij) = log(P / (1-P))`). This allows for easier updating, as new sensor readings can be simply added or subtracted.

## Conceptual Map Building Process

Imagine a mobile robot equipped with a Lidar sensor moving through an environment.

### Step 1: Initial Map

*   Start with an empty map where all cells are marked as "unknown" (e.g., `P=0.5` or `L=0`).

### Step 2: Integrate Sensor Readings (e.g., Lidar Scan)

*   **Robot Pose**: At each time step, the robot knows its approximate pose (`x, y, theta`) within the map (from odometry and/or localization).
*   **Lidar Scan**: The Lidar emits rays and measures distances to obstacles.
*   **Ray Tracing**: For each Lidar ray:
    *   **Occupied Cells**: The cell at the end of the Lidar beam (where it hits an object) is likely occupied. Its `P(Occupied)` is increased.
    *   **Free Cells**: All cells along the path of the Lidar beam, from the robot to the obstacle, are likely free. Their `P(Occupied)` is decreased.

### Step 3: Update Cell Probabilities (Inverse Sensor Model)

*   Each sensor reading provides evidence for a cell being occupied or free.
*   Bayes' theorem is used to update the cell's probability:
    `P(Occupied_ij | Z) = P(Z | Occupied_ij) * P(Occupied_ij) / P(Z)`
    Where `Z` is the new sensor reading.
*   In log-odds form, this becomes simpler: `L_new = L_old + L_sensor_reading`.

### Step 4: Iterative Refinement

*   As the robot moves and takes more sensor readings from different viewpoints, the occupancy probabilities of cells are iteratively refined. Free spaces become more certain to be free, and occupied spaces become more certain to be occupied. Unknown areas (not yet observed) remain at 0.5.

## Using Occupancy Grids for Navigation

### 1. Localization

*   **Monte Carlo Localization (MCL)** or **Kalman Filters** can use the occupancy grid to determine the robot's most likely position. By comparing the robot's current sensor readings with what is expected given the map and a hypothesized pose, the robot can estimate its true location.

### 2. Path Planning

*   Occupancy grids are directly usable by **grid-based path planning algorithms** like Dijkstra's or A*.
*   **Cost Map**: The occupancy grid can be converted into a cost map, where free cells have low cost and occupied cells have high cost. A* then finds the lowest-cost path.
*   **Obstacle Avoidance**: The planner simply avoids paths that pass through cells marked as occupied (or too close to them, often by "inflating" obstacles to give the robot a safety margin).

## Key Points

*   **Occupancy Grid Maps**: Discretize the environment into cells, each storing a probability of being occupied.
*   **Construction**: Integrates sensor readings (e.g., Lidar) by "ray tracing" to update cell probabilities (occupied at beam end, free along beam path).
*   **Log-odds**: A common representation for efficient probability updates.
*   **Usage**: Crucial for **localization** (e.g., MCL) and **path planning** (e.g., A* on a cost map).
*   **Iterative Refinement**: Map certainty improves with more sensor data.

## Mini Quiz

1.  In an occupancy grid map, what does a value close to 1 for a cell typically indicate?
    a) The cell is definitely free.
    b) The cell is of unknown status.
    c) **High probability of being occupied by an obstacle.**
    d) The robot is currently in that cell.

2.  When a Lidar sensor ray hits an object and measures a distance, how are the cells along the path of that beam, from the robot to the object, typically updated in an occupancy grid?
    a) Their probability of being occupied is increased.
    b) Their status remains unknown.
    c) **Their probability of being occupied is decreased (marked as free).**
    d) They are marked as inaccessible.

3.  What mathematical concept is often used to update cell probabilities in an occupancy grid map when new sensor readings become available?
    a) Newton's Laws
    b) Fourier Transform
    c) **Bayes' Theorem**
    d) Pythagorean Theorem

4.  Which path planning algorithm can directly use an occupancy grid map to find the lowest-cost path by treating occupied cells as high-cost areas?
    a) RRT
    b) PRM
    c) **A***
    d) Potential Field Methods

5.  What is a common representation used instead of raw probabilities in occupancy grid mapping for easier updating, where new sensor readings can be simply added or subtracted?
    a) Cartesian coordinates
    b) Gaussian distributions
    c) **Log-odds**
    d) Probability density functions
