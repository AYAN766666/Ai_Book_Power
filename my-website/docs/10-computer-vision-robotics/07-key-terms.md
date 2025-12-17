# Key Terms

This section provides definitions for important terms introduced in Chapter 10: Computer Vision for Robotics. Understanding these terms is crucial for grasping how robots "see" and interpret their environment.

---

*   **Computer Vision**: A field of artificial intelligence that enables computers to interpret and understand visual information from images and videos.
*   **Pixel**: The smallest individual unit of an image, typically represented as a grid, with each pixel holding a color or intensity value.
*   **Grayscale Image**: An image where each pixel's color information is represented by a single intensity value, typically ranging from black (0) to white (255).
*   **RGB-D Camera**: A type of camera that provides both color (Red, Green, Blue) and depth information simultaneously, often used for 3D perception.
*   **Event Camera**: A novel vision sensor that records only changes in pixel intensity ("events") rather than full image frames, offering very high temporal resolution and robustness to motion blur.
*   **Image Filtering**: Techniques applied to images to modify or enhance them, often for noise reduction or feature highlighting.
*   **Gaussian Filter**: A linear image filter used for noise reduction and blurring, employing a Gaussian function for pixel weighting.
*   **Median Filter**: A non-linear image filter effective at removing salt-and-pepper noise while preserving edges, by replacing pixels with the median value of their neighbors.
*   **Edge Detection**: Techniques (e.g., Canny, Sobel) used to identify sharp discontinuities in image intensity, which correspond to the boundaries of objects.
*   **Canny Edge Detector**: A popular multi-stage edge detection algorithm known for producing good, single-pixel-wide edges.
*   **Image Segmentation**: The process of partitioning a digital image into multiple segments (sets of pixels) to simplify or change the representation of an image into something more meaningful and easier to analyze.
*   **Feature Extraction**: The process of identifying and describing interesting points or regions in an image that are robust to variations like scale, rotation, and illumination.
*   **Keypoints**: Distinctive points in an image that can be reliably detected and tracked across different views.
*   **Feature Descriptors**: Unique "signatures" (vectors) that describe the local appearance of a keypoint, used for matching keypoints between images.
*   **SIFT (Scale-Invariant Feature Transform)**: A robust algorithm for detecting and describing local features in images, invariant to scale and rotation changes.
*   **ORB (Oriented FAST and Rotated BRIEF)**: A fast and efficient alternative to SIFT/SURF for feature detection and description, suitable for real-time applications.
*   **Object Recognition (Classification)**: The task of identifying *what* object is present in an image, typically assigning a label from a predefined set of categories.
*   **Convolutional Neural Network (CNN)**: A type of deep neural network particularly well-suited for processing image data, excelling in tasks like object recognition and detection.
*   **Object Detection**: The task of identifying instances of semantic objects in an image or video and localizing them with bounding boxes.
*   **Two-Stage Detectors**: Object detection models (e.g., Faster R-CNN) that first propose regions of interest and then classify/refine objects within those regions.
*   **Single-Shot Detectors**: Object detection models (e.g., YOLO, SSD) that perform localization and classification in a single pass through the neural network, prioritizing speed.
*   **Object Tracking**: The process of following the movement of detected objects across a sequence of images or video frames.
*   **Visual Odometry (VO)**: A technique to estimate the position and orientation of a robot (or camera) by analyzing the changes in successive camera images.
*   **Scale Ambiguity (Monocular VO)**: The inability of a single camera to determine the absolute size or distance of objects, resulting in pose estimates that are only accurate up to an unknown scale factor.
*   **Drift (VO/SLAM)**: The accumulation of small errors over time in pose estimation, leading to a growing discrepancy between the estimated and true position.
*   **RANSAC (Random Sample Consensus)**: A robust estimation algorithm used to identify and remove outliers from a set of data (e.g., feature matches) to accurately fit a model.
*   **Essential Matrix**: A 3x3 matrix that relates corresponding points in two stereo images and describes the relative rotation and translation between two calibrated cameras.