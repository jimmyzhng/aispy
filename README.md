# AiSpy

AiSpy is a web application that provides a platform for users to manage a simulation of a network of surveillance cameras for a building. To simulate this, our program uses pre-recorded footage taken at a local facility. Along with the surveillance camera footage, this application provides real-time analytics of the footage, including an alert for when motion or sound is detected, and a chart that visualizes the detections of different people. Users also have the ability to view simulated past footage from each camera.

## Tech Stack

AiSpy was built primarily with React, Express.js, and PostgreSQL. For object detection, the project utilizes TensorFlow.js, pre-trained with the Coco-SSD model. Testing was completed with Jest. Apex Charts, a charting library built on Vue.js, was used for real-time graphing of detections. For sound detection, the Web Audio API was used to detect audio from the video source, and to obtain current frequency data in order to determine if sound is playing. Additionally, AWS S3 is used for storing simulated past broadcast videos. For secure login/signup, passwords are hashed with bcrypt, while express-session was used as middleware to manage sessions. Other notable libraries used include Axios, Bootstrap, React-Player, Dotenv, Animate.css, and many more!

## Demo

![](https://github.com/jimmyzhng/aispy/blob/master/frontend/public/aispy-demo.gif)

## Installation

There are two folders, backend and frontend. You will have to change into both directories and run "npm install", before you are able to run the application. Here are the steps for installation:

```
cd backend
npm install
cd ../frontend
npm install
```

To run the server, it is necessary to run `npm start` in both the backend and the frontend directories.

This project also uses dotenv, so environment variables must be set before the application is functional.
