# Walkthrough: Creating Your First ROS 2 Package

## Introduction

Creating a ROS 2 package is a fundamental skill for any roboticist. A package is the primary unit of organization in ROS 2, containing your source code, build scripts, message definitions, and other resources. This walkthrough will guide you through creating a simple C++ publisher/subscriber package, demonstrating how to set up the package, write a basic publisher node that sends "Hello World" messages, and a subscriber node that receives them.

**Prerequisites**: You should have a ROS 2 development environment set up and sourced, as covered in the previous section. Make sure your workspace is also sourced.

## Step-by-Step Guide

### 1. Navigate to Your Workspace Source Directory

First, ensure you are in the `src` directory of your ROS 2 workspace.

```bash
cd ~/ros2_ws/src
```

### 2. Create a New ROS 2 Package

Use the `ros2 pkg create` command to create a new package. We'll create a package named `my_ros2_pkg` with `rclcpp` (ROS Client Library for C++) as a build dependency.

```bash
ros2 pkg create --build-type ament_cmake --dependencies rclcpp -- my_ros2_pkg
```

*   `--build-type ament_cmake`: Specifies the build system (standard for C++ packages).
*   `--dependencies rclcpp`: Declares a dependency on the C++ client library.
*   `my_ros2_pkg`: The name of your new package.

This command creates a directory `my_ros2_pkg` containing a basic `CMakeLists.txt`, `package.xml`, and an `include` and `src` directory.

### 3. Create a Publisher Node

Navigate into your new package and create a C++ file for your publisher.

```bash
cd my_ros2_pkg/src
touch simple_publisher.cpp
```

Open `simple_publisher.cpp` with your preferred text editor and add the following code:

```cpp
#include <chrono>
#include <functional>
#include <memory>
#include <string>

#include "rclcpp/rclcpp.hpp"
#include "std_msgs/msg/string.hpp"

using namespace std::chrono_literals;

class SimplePublisher : public rclcpp::Node
{
public:
  SimplePublisher()
  : Node("simple_publisher"), count_(0)
  {
    publisher_ = this->create_publisher<std_msgs::msg::String>("topic", 10);
    timer_ = this->create_wall_timer(500ms, std::bind(&SimplePublisher::timer_callback, this));
  }

private:
  void timer_callback()
  {
    auto message = std_msgs::msg::String();
    message.data = "Hello, ROS 2! This is message " + std::to_string(count_++);
    RCLCPP_INFO(this->get_logger(), "Publishing: '%s'", message.data.c_str());
    publisher_->publish(message);
  }
  rclcpp::TimerBase::SharedPtr timer_;
  rclcpp::Publisher<std_msgs::msg::String>::SharedPtr publisher_;
  size_t count_;
};

int main(int argc, char * argv[])
{
  rclcpp::init(argc, argv);
  rclcpp::spin(std::make_shared<SimplePublisher>());
  rclcpp::shutdown();
  return 0;
}
```

This node publishes a "Hello, ROS 2!" message every 500 milliseconds to a topic named "topic".

### 4. Create a Subscriber Node

In the same `src` directory, create a C++ file for your subscriber.

```bash
touch simple_subscriber.cpp
```

Open `simple_subscriber.cpp` and add the following code:

```cpp
#include <memory>

#include "rclcpp/rclcpp.hpp"
#include "std_msgs/msg/string.hpp"

class SimpleSubscriber : public rclcpp::Node
{
public:
  SimpleSubscriber()
  : Node("simple_subscriber")
  {
    subscription_ = this->create_subscription<std_msgs::msg::String>(
      "topic", 10, std::bind(&SimpleSubscriber::topic_callback, this, std::placeholders::_1));
  }

private:
  void topic_callback(const std_msgs::msg::String::SharedPtr msg) const
  {
    RCLCPP_INFO(this->get_logger(), "I heard: '%s'", msg->data.c_str());
  }
  rclcpp::Subscription<std_msgs::msg::String>::SharedPtr subscription_;
};

int main(int argc, char * argv[])
{
  rclcpp::init(argc, argv);
  rclcpp::spin(std::make_shared<SimpleSubscriber>());
  rclcpp::shutdown();
  return 0;
}
```

This node subscribes to the "topic" and prints any received messages.

### 5. Update `CMakeLists.txt`

Navigate back to your package's root directory (`~/ros2_ws/src/my_ros2_pkg`).

```bash
cd ..
```

Open the `CMakeLists.txt` file and add the following lines at the end to build your executables:

```cmake
add_executable(simple_publisher src/simple_publisher.cpp)
ament_target_dependencies(simple_publisher rclcpp std_msgs)

add_executable(simple_subscriber src/simple_subscriber.cpp)
ament_target_dependencies(simple_subscriber rclcpp std_msgs)

install(TARGETS
  simple_publisher
  simple_subscriber
  DESTINATION lib/${PROJECT_NAME}
)
```

You also need to ensure that `std_msgs` is listed as a dependency. Find the `find_package` block and add `std_msgs` if it's not already there:

```cmake
find_package(ament_cmake REQUIRED)
find_package(rclcpp REQUIRED)
find_package(std_msgs REQUIRED) # Ensure this line is present
# ... other find_package calls
```

### 6. Update `package.xml`

Open `package.xml` and ensure `std_msgs` is listed as a dependency. Add the following lines within the `<package>` tags if they are not already present:

```xml
  <depend>rclcpp</depend>
  <depend>std_msgs</depend>
```

### 7. Build Your Workspace

Navigate back to the root of your workspace:

```bash
cd ~/ros2_ws/
```

Then, build your package:

```bash
colcon build --packages-select my_ros2_pkg
```

*   `--packages-select my_ros2_pkg`: This option tells `colcon` to only build your specific package, saving time if you have many packages in your workspace.

### 8. Source Your Workspace

After a successful build, you must source your workspace's setup file to make the new executables available:

```bash
source install/setup.bash
```

### 9. Run Your Nodes

Open two separate terminals. In the first terminal, run the publisher:

```bash
ros2 run my_ros2_pkg simple_publisher
```

In the second terminal, run the subscriber:

```bash
ros2 run my_ros2_pkg simple_subscriber
```

You should see "Publishing: 'Hello, ROS 2! This is message X'" in the first terminal and "I heard: 'Hello, ROS 2! This is message X'" in the second terminal, demonstrating successful communication.

## Key Points

*   ROS 2 packages are created using `ros2 pkg create`.
*   C++ packages typically use `ament_cmake` as the build type and `rclcpp` for the client library.
*   `CMakeLists.txt` is configured to define executables and their dependencies.
*   `package.xml` declares package information and dependencies.
*   `colcon build` compiles packages in a workspace.
*   **Sourcing the workspace** after building is crucial to make executables discoverable.
*   Nodes communicate via topics using `ros2 run`.

## Mini Quiz

1.  Which command is used to create a new ROS 2 package?
    a) `ros2 create package`
    b) `ros2 new pkg`
    c) **`ros2 pkg create`**
    d) `colcon create package`

2.  For a C++ ROS 2 package, which build type is typically specified?
    a) `catkin`
    b) `cmake`
    c) **`ament_cmake`**
    d) `make`

3.  If you want to create a C++ publisher node, which ROS Client Library would you declare as a dependency?
    a) `rclpy`
    b) `std_msgs`
    c) **`rclcpp`**
    d) `sensor_msgs`

4.  After modifying your `CMakeLists.txt` and C++ source files, what command do you use from the root of your workspace to compile your package?
    a) `make`
    b) `cmake .`
    c) **`colcon build`**
    d) `ros2 build`

5.  What is the purpose of the `source install/setup.bash` command executed from the root of your workspace after building new packages?
    a) To delete old build artifacts.
    b) To start all nodes in the workspace automatically.
    c) **To make the newly built executables and libraries discoverable by ROS 2.**
    d) To upload your code to a remote repository.
