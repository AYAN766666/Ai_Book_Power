# Walkthrough: Denavit-Hartenberg (DH) Parameters for a Simple Arm

## Introduction

The Denavit-Hartenberg (DH) convention provides a systematic way to assign coordinate frames to each link of a serial robot manipulator and to define the geometric relationship between adjacent links using four parameters. This method simplifies the derivation of the forward kinematics equations. In this walkthrough, we will apply the DH convention to a simple 2-link planar robotic arm to illustrate the process.

## The DH Convention Rules

Before starting, it's crucial to understand the DH parameter assignment rules:

1.  **Assign Z-axis**: Align the `z_i-1` axis with the `i`-th joint axis (the axis of motion).
2.  **Assign X-axis**: Assign the `x_i` axis to be the common normal between `z_i-1` and `z_i`. If `z_i-1` and `z_i` are parallel, `x_i` is chosen along the line connecting the `z` axes.
3.  **Assign Y-axis**: Orient the `y_i` axis to complete a right-handed coordinate system.
4.  **Define Parameters**: For each link `i`, define the four parameters (`a_i`, `alpha_i`, `d_i`, `theta_i`).

    *   `a_i`: Distance from `z_i-1` to `z_i` measured along `x_i` (link length).
    *   `alpha_i`: Angle from `z_i-1` to `z_i` measured about `x_i` (link twist).
    *   `d_i`: Distance from `x_i-1` to `x_i` measured along `z_i-1` (link offset).
    *   `theta_i`: Angle from `x_i-1` to `x_i` measured about `z_i-1` (joint angle).

## Walkthrough Example: 2-Link Planar Robotic Arm

Consider a simple 2-link robotic arm constrained to move in a plane. Both joints are revolute.

*   **Link 0 (Base)**: Fixed.
*   **Link 1**: Length `L1`, connected by joint 1 (revolute).
*   **Link 2**: Length `L2`, connected by joint 2 (revolute).

Assume both joints rotate about an axis perpendicular to the plane of motion (e.g., the Z-axis).

### Step 1: Establish Base Frame (Frame 0)

*   Place the `z_0` axis along the axis of joint 1.
*   The `x_0` axis can be chosen arbitrarily, often pointing along the first link or perpendicular to it in the plane of motion. Let's align `x_0` with the direction of `L1`.
*   `y_0` completes the right-hand rule.

### Step 2: Assign Frame 1 (at Joint 2)

*   `z_1` axis aligns with the axis of joint 2.
*   `x_1` is the common normal between `z_0` and `z_1`. Since `z_0` and `z_1` are parallel (both perpendicular to the plane of motion), `x_1` is typically drawn from `z_0` to `z_1`, along link 1.
*   `y_1` completes the right-hand rule.

### Step 3: Assign Frame 2 (at End-Effector)

*   `z_2` axis aligns with the axis of the "joint" that would be at the end-effector (often chosen parallel to `z_1`).
*   `x_2` is chosen along link 2.
*   `y_2` completes the right-hand rule.

### Step 4: Populate the DH Table

| Link `i` | `alpha_i-1` | `a_i-1` | `d_i` | `theta_i` |
| :------- | :---------- | :------ | :---- | :-------- |
| 1        | 0           | 0       | 0     | `theta_1` |
| 2        | 0           | `L1`    | 0     | `theta_2` |

**Explanation**:

*   **Link 1**:
    *   `alpha_0 = 0`: `z_0` and `z_1` are parallel.
    *   `a_0 = 0`: No offset along `x_0` to reach `z_1`.
    *   `d_1 = 0`: No offset along `z_0` to reach `x_1`.
    *   `theta_1`: This is the joint variable for joint 1.
*   **Link 2**:
    *   `alpha_1 = 0`: `z_1` and `z_2` are parallel.
    *   `a_1 = L1`: The length of link 1, measured along `x_1`.
    *   `d_2 = 0`: No offset along `z_1` to reach `x_2`.
    *   `theta_2`: This is the joint variable for joint 2.

### Step 5: Construct Homogeneous Transformation Matrices

Using the DH parameters, we can write the transformation matrix from frame `i-1` to frame `i` as:

```
        [ cos(theta_i)  -sin(theta_i)cos(alpha_i-1)   sin(theta_i)sin(alpha_i-1)    a_i-1*cos(theta_i)  ]
T_i-1_i = [ sin(theta_i)   cos(theta_i)cos(alpha_i-1)  -cos(theta_i)sin(alpha_i-1)   a_i-1*sin(theta_i)  ]
        [ 0              sin(alpha_i-1)               cos(alpha_i-1)                d_i               ]
        [ 0              0                            0                             1                 ]
```

By substituting the parameters from the DH table into this general matrix for each link, we get `T_0_1` and `T_1_2`.

### Step 6: Calculate Overall Forward Kinematics

The end-effector pose relative to the base frame is then `T_0_2 = T_0_1 * T_1_2`. This resulting matrix will contain the `(x, y, z)` position of the end-effector and its `(Rx, Ry, Rz)` orientation relative to the base frame, all as functions of `theta_1` and `theta_2`.

## Key Points

*   **Denavit-Hartenberg (DH) convention** systematically assigns coordinate frames and parameters to robot links.
*   **Four parameters** (`a`, `alpha`, `d`, `theta`) describe the relationship between adjacent link frames.
*   The **Z-axis** is aligned with the joint axis.
*   The **X-axis** is the common normal between adjacent Z-axes.
*   Homogeneous transformation matrices are constructed using these parameters and multiplied to find the **overall end-effector pose**.

## Mini Quiz

1.  What is the primary purpose of the Denavit-Hartenberg (DH) convention?
    a) To solve inverse kinematics problems.
    b) To calculate the dynamic forces on a robot.
    c) **To systematically assign coordinate frames and parameters for forward kinematics.**
    d) To optimize robot motor efficiency.

2.  In the DH convention, the `z_i-1` axis is typically aligned with what?
    a) The link length.
    b) The common normal between links.
    c) **The `i`-th joint axis.**
    d) The end-effector direction.

3.  How many parameters are used in the Denavit-Hartenberg convention to describe the geometric relationship between adjacent links?
    a) Two
    b) Three
    c) **Four**
    d) Five

4.  Which DH parameter represents the distance from `z_i-1` to `z_i` measured along the `x_i` axis?
    a) `alpha_i` (link twist)
    b) `d_i` (link offset)
    c) `theta_i` (joint angle)
    d) **`a_i` (link length)**

5.  If you have `T_0_1` and `T_1_2` (transformation matrices from frame 0 to 1, and 1 to 2 respectively), how would you find the overall transformation `T_0_2` (from frame 0 to 2)?
    a) `T_0_2 = T_1_2 / T_0_1`
    b) `T_0_2 = T_0_1 + T_1_2`
    c) `T_0_2 = T_1_2 * T_0_1`
    d) **`T_0_2 = T_0_1 * T_1_2`**
