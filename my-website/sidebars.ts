import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Chapter 01: Introduction to Physical AI',
      items: [
        'chapter-01', // overview
        'introduction-to-physical-ai/defining-physical-ai',
        'introduction-to-physical-ai/embodied-intelligence-and-robotics',
        'introduction-to-physical-ai/sensors-overview',
        'introduction-to-physical-ai/walkthrough-balancing-a-humanoid',
        'introduction-to-physical-ai/exercises',
        'introduction-to-physical-ai/summary',
        'introduction-to-physical-ai/key-terms',
        'introduction-to-physical-ai/mini-quiz',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 02: ROS 2 Fundamentals',
      items: [
        'chapter-02',
        'ros-2-fundamentals/introduction-to-ros2',
        'ros-2-fundamentals/ros2-concepts',
        'ros-2-fundamentals/ros2-dev-environment',
        'ros-2-fundamentals/walkthrough-ros2-package',
        'ros-2-fundamentals/exercises',
        'ros-2-fundamentals/summary',
        'ros-2-fundamentals/key-terms',
        'ros-2-fundamentals/mini-quiz',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 03: Actuators and Mechanisms',
      items: [
        'chapter-03',
        'actuators-and-mechanisms/introduction-to-actuators',
        'actuators-and-mechanisms/electric-motors',
        'actuators-and-mechanisms/hydraulic-pneumatic-systems',
        'actuators-and-mechanisms/walkthrough-gear-ratios',
        'actuators-and-mechanisms/exercises',
        'actuators-and-mechanisms/summary',
        'actuators-and-mechanisms/key-terms',
        'actuators-and-mechanisms/mini-quiz',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 04: Robot Kinematics and Dynamics',
      items: [
        'chapter-04',
        'robot-kinematics-dynamics/introduction-kinematics-dynamics',
        'robot-kinematics-dynamics/forward-kinematics',
        'robot-kinematics-dynamics/inverse-kinematics',
        'robot-kinematics-dynamics/walkthrough-dh-parameters',
        'robot-kinematics-dynamics/exercises',
        'robot-kinematics-dynamics/summary',
        'robot-kinematics-dynamics/key-terms',
        'robot-kinematics-dynamics/mini-quiz',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 05: Robot Control Systems',
      items: [
        'chapter-05',
        'robot-control-systems/introduction-robot-control',
        'robot-control-systems/feedback-control-pid',
        'robot-control-systems/trajectory-generation-tracking',
        'robot-control-systems/walkthrough-pid-controller',
        'robot-control-systems/exercises',
        'robot-control-systems/summary',
        'robot-control-systems/key-terms',
        'robot-control-systems/mini-quiz',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 06: Robot Navigation and Mapping',
      items: [
        'chapter-06',
        'robot-navigation-mapping/introduction-navigation-mapping',
        'robot-navigation-mapping/slam',
        'robot-navigation-mapping/path-planning',
        'robot-navigation-mapping/walkthrough-occupancy-grid',
        'robot-navigation-mapping/exercises',
        'robot-navigation-mapping/summary',
        'robot-navigation-mapping/key-terms',
        'robot-navigation-mapping/mini-quiz',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 07: Robotic Manipulation and Grasping',
      items: [
        'chapter-07',
        'robotic-manipulation-grasping/introduction-manipulation',
        'robotic-manipulation-grasping/grippers-end-effectors',
        'robotic-manipulation-grasping/grasping-strategies',
        'robotic-manipulation-grasping/walkthrough-pick-place',
        'robotic-manipulation-grasping/exercises',
        'robotic-manipulation-grasping/summary',
        'robotic-manipulation-grasping/key-terms',
        'robotic-manipulation-grasping/mini-quiz',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 08: Human-Robot Interaction (HRI)',
      items: [
        'chapter-08',
        'human-robot-interaction/introduction-hri',
        'human-robot-interaction/communication-modalities',
        'human-robot-interaction/safety-trust-hri',
        'human-robot-interaction/walkthrough-cobot',
        'human-robot-interaction/exercises',
        'human-robot-interaction/summary',
        'human-robot-interaction/key-terms',
        'human-robot-interaction/mini-quiz',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 09: Robot Learning: RL in Robotics',
      items: [
        'chapter-09',
        'robot-learning-rl-robotics/introduction-robot-learning-rl',
        'robot-learning-rl-robotics/fundamentals-rl',
        'robot-learning-rl-robotics/deep-rl-robotics',
        'robot-learning-rl-robotics/walkthrough-rl-task',
        'robot-learning-rl-robotics/exercises',
        'robot-learning-rl-robotics/summary',
        'robot-learning-rl-robotics/key-terms',
        'robot-learning-rl-robotics/mini-quiz',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 10: Computer Vision for Robotics',
      items: [
        'chapter-10',
        'computer-vision-robotics/introduction-cv-robotics',
        'computer-vision-robotics/image-processing-fundamentals',
        'computer-vision-robotics/object-detection-recognition',
        'computer-vision-robotics/walkthrough-visual-odometry',
        'computer-vision-robotics/exercises',
        'computer-vision-robotics/summary',
        'computer-vision-robotics/key-terms',
        'computer-vision-robotics/mini-quiz',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 11: AI in Robotics: Advanced Topics',
      items: [
        'chapter-11',
        'ai-robotics-advanced-topics/cognitive-robotics-reasoning',
        'ai-robotics-advanced-topics/multi-robot-swarm-intelligence',
        'ai-robotics-advanced-topics/learning-from-demonstration',
        'ai-robotics-advanced-topics/walkthrough-knowledge-representation',
        'ai-robotics-advanced-topics/exercises',
        'ai-robotics-advanced-topics/summary',
        'ai-robotics-advanced-topics/key-terms',
        'ai-robotics-advanced-topics/mini-quiz',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 12: Advanced Humanoid Robotics',
      items: [
        'chapter-12',
        'advanced-humanoid-robotics/introduction-advanced-humanoid',
        'advanced-humanoid-robotics/bipedal-locomotion',
        'advanced-humanoid-robotics/dynamic-balancing-whole-body',
        'advanced-humanoid-robotics/walkthrough-humanoid-ik',
        'advanced-humanoid-robotics/exercises',
        'advanced-humanoid-robotics/summary',
        'advanced-humanoid-robotics/key-terms',
        'advanced-humanoid-robotics/mini-quiz',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 13: Digital Twins & Sim-to-Real',
      items: [
        'chapter-13',
        'digital-twins-sim-to-real/introduction-digital-twins',
        'digital-twins-sim-to-real/robotic-simulation',
        'digital-twins-sim-to-real/reality-gap-challenges',
        'digital-twins-sim-to-real/walkthrough-sim2real',
        'digital-twins-sim-to-real/exercises',
        'digital-twins-sim-to-real/summary',
        'digital-twins-sim-to-real/key-terms',
        'digital-twins-sim-to-real/mini-quiz',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 14: Ethical & Societal Implications',
      items: [
        'chapter-14',
        'ethical-societal-implications/introduction-ai-ethics',
        'ethical-societal-implications/employment-automation',
        'ethical-societal-implications/privacy-surveillance-data',
        'ethical-societal-implications/walkthrough-ethical-design',
        'ethical-societal-implications/exercises',
        'ethical-societal-implications/summary',
        'ethical-societal-implications/key-terms',
        'ethical-societal-implications/mini-quiz',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 15: Future Trends & Research',
      items: [
        'chapter-15',
        'future-trends-research/introduction-future-trends',
        'future-trends-research/embodied-ai-beyond-limits',
        'future-trends-research/soft-bio-inspired-robotics',
        'future-trends-research/walkthrough-bci',
        'future-trends-research/exercises',
        'future-trends-research/summary',
        'future-trends-research/key-terms',
        'future-trends-research/mini-quiz',
      ],
    },
  ],
};

export default sidebars;
