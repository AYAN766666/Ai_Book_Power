# ROS 2 Development Environment Setup

## Introduction

Setting up a robust development environment is the first critical step for anyone embarking on robotics development with ROS 2. A properly configured environment ensures that you can install ROS 2, create and build your own packages, and seamlessly interact with the ROS 2 ecosystem. This section provides a general guide to setting up a ROS 2 development environment, focusing on common Linux distributions (Ubuntu being the most widely used for ROS 2).

While the exact steps might vary slightly depending on your operating system and chosen ROS 2 distribution (e.g., Humble Hawksbill, Iron Irwini), the fundamental process involves installing core ROS 2 packages, configuring your shell, and setting up a workspace for your projects.

## Prerequisites

*   **Operating System**: Ubuntu 22.04 (Jammy Jellyfish) is highly recommended for ROS 2 Humble Hawksbill. Other Linux distributions might be supported, but official documentation typically targets Ubuntu LTS releases.
*   **Internet Connection**: Required for downloading packages.
*   **Basic Linux Command Line Knowledge**: Familiarity with `apt`, `mkdir`, `cd`, `echo`, `source`, etc.

## Step-by-Step Setup Guide (Ubuntu 22.04 for ROS 2 Humble)

### 1. Set up Locales

Ensure your locale settings are correct to prevent issues with Unicode handling.

```bash
sudo apt update && sudo apt install locales
sudo locale-gen en_US en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
export LANG=en_US.UTF-8
```

### 2. Set up Sources

Add the ROS 2 apt repository to your system's software sources list.

```bash
sudo apt update && sudo apt install software-properties-common -y
sudo add-apt-repository universe -y
sudo apt update && sudo apt install curl -y
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://
packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo UBUNTU_CODENAME) main" | sudo tee /etc/apt/
sources.list.d/ros2.list > /dev/null
```

### 3. Install ROS 2 Packages

Install the full desktop installation, which includes ROS 2, `rviz2`, demos, and tutorials.

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install ros-humble-desktop -y
```

### 4. Environment Setup

Source the ROS 2 setup script to make ROS 2 commands available in your current shell. For convenience, add it to your `~/.bashrc` (or equivalent for other shells).

```bash
# Source ROS 2 setup for current shell
source /opt/ros/humble/setup.bash

# Add to your .bashrc for permanent setup
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
```

### 5. Install `rosdep` (Optional but Recommended)

`rosdep` helps you install system dependencies for ROS packages.

```bash
sudo apt install python3-rosdep -y
sudo rosdep init
rosdep update
```

### 6. Create a ROS 2 Workspace

A workspace is a directory where you develop your own ROS 2 packages.

```bash
mkdir -p ~/ros2_ws/src
cd ~/ros2_ws/
colcon build
```
*   `mkdir -p ~/ros2_ws/src`: Creates a directory named `ros2_ws` in your home folder, and a `src` subdirectory inside it. `src` is where your source packages will reside.
*   `colcon build`: This command builds the packages in your workspace. On the first run, it won't find any packages to build, but it will create necessary `install`, `log`, and `build` directories.

### 7. Source Your Workspace

After building packages in your workspace, you need to source its setup file to make your packages discoverable by ROS 2.

```bash
source install/setup.bash
```
*   **Important**: This command must be run every time you open a new terminal or after you `colcon build` new packages. For convenience, you can add it to your `~/.bashrc` *after* sourcing the main ROS 2 setup.

```bash
echo "source ~/ros2_ws/install/setup.bash" >> ~/.bashrc
```

## Verifying Your Setup

After completing these steps, open a new terminal and try running some basic ROS 2 commands:

```bash
ros2 run turtlesim turtlesim_node
ros2 run turtlesim turtle_teleop_key
```
You should see a turtlesim window appear and be able to control the turtle with your keyboard.

## Key Points

*   ROS 2 development requires a specific **operating system** (Ubuntu LTS recommended) and **locale** configuration.
*   Adding the **ROS 2 apt repository** is essential for package installation.
*   Installing `ros-humble-desktop` provides the **full ROS 2 environment** including tools.
*   **Sourcing the ROS 2 setup script** (`/opt/ros/humble/setup.bash`) makes ROS 2 commands available.
*   A **ROS 2 workspace** (`~/ros2_ws/src`) is where you develop custom packages, built using `colcon build`.
*   **Sourcing the workspace setup script** (`~/ros2_ws/install/setup.bash`) makes your custom packages discoverable.
*   `rosdep` is highly recommended for **installing system dependencies**.

## Mini Quiz

1.  Which Ubuntu version is highly recommended for ROS 2 Humble Hawksbill?
    a) Ubuntu 18.04
    b) Ubuntu 20.04
    c) **Ubuntu 22.04**
    d) Ubuntu 24.04

2.  What is the purpose of adding `source /opt/ros/humble/setup.bash` to your `~/.bashrc` file?
    a) To uninstall ROS 2 every time you log in.
    b) To compile all your ROS 2 packages automatically.
    c) **To make ROS 2 commands available in your shell permanently.**
    d) To change your system's default programming language.

3.  What is the command used to build packages within a ROS 2 workspace?
    a) `catkin_make`
    b) `make`
    c) `cmake`
    d) **`colcon build`**

4.  After creating new packages in your workspace and running `colcon build`, what must you do to make these new packages discoverable by ROS 2 in a new terminal?
    a) Restart your computer.
    b) Reinstall ROS 2.
    c) **Source your workspace's setup file (e.g., `~/ros2_ws/install/setup.bash`).**
    d) Run `ros2 install`.

5.  Which command is used to install system dependencies for ROS packages?
    a) `apt install`
    b) `npm install`
    c) **`rosdep install`**
    d) `pip install`
