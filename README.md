# AiSpy

AiSpy is a web application that provides a platform for users to manage a simulation of a network of surveillance cameras for a building. To simulate this, our program uses pre-recorded footage taken at a local facility. Along with the surveillance camera footage, this application provides real-time analytics of the footage, including an alert for when motion or sound is detected, and a chart that visualizes the detections of different people. Users also have the ability to view simulated past footage from each camera.

## Functionality

Once a user logs in and selects their view of choice, they have access to the details of that current view. When a video is playing, the user is informed that the video is live. Any object detections that occur at the current state of the video will alert the user that movement is detected. When sound is outputted in the video, the user is informed that audio has been detected. The graph below takes in the current state of person detections, and displays it in a real-time graph.

A user is also able to watch their past broadcasts that are stored in AWS S3. Instead of showing the user that the video is live, it displays the date of the replay.

## Tech Stack

AiSpy was built primarily with React, Express.js, and PostgreSQL. For object detection, the project utilizes TensorFlow.js, pre-trained with the Coco-SSD model. Testing was completed with Jest. Apex Charts, a charting library built on Vue.js, was used for real-time graphing of detections. For sound detection, the Web Audio API is used to detect audio from the video source, and to obtain current frequency data in order to determine if sound is playing. Additionally, AWS S3 is used for storing simulated past broadcast videos. For secure login/signup, passwords are hashed with bcrypt, while express-session was used as middleware to manage sessions. Other notable libraries used include Axios, Bootstrap, React-Player, Dotenv, Animate.css, and many more!

## Demo

![](https://github.com/jimmyzhng/aispy/blob/master/frontend/public/aispy-demo.gif)

## Installation

1. Clone the Repository

```
git clone git@github.com:jimmyzhng/aispy.git
```

2. Installing Dependencies

There are two folders, backend and frontend. You will have to change into both directories and run "npm install", before you are able to run the application. Here are the steps for installation:

```

cd backend
npm install
cd ../frontend
npm install

```

3. Create the Environment Variables

This project uses dotenv, so environment variables must be set before the application is functional. To configure these variables, create a .env file in the backend directory.

```
cd backend
touch .env
```

This project uses PostgreSQL, so you may use your own database information if you would like.

```
DB_HOST=localhost
DB_USER=labber
DB_PASS=3313
DB_NAME=aispy
DB_PORT=5432
```

For our sessions, we have a session key, and a max age. I used an arbitrary number for the key, and our max age is set to 60 minutes.

```
SESSION_KEY=12345
SESSION_MAX_AGE=3600000
```

To access our project videos, I used AWS S3. This requires my access key ID and the secret access key ID in order to access my Aispy bucket. Please contact me if you need this!

```
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=
```

## Using the application

1. Before you first run the server, it is optimal to reset the database. Once you navigate to the backend directory, run:

```
npm run db:reset
```

2. Next, you would have to launch the backend server, and our frontend client. This requires us to run `npm start` in both of our project directories.

3. By default, all of our videos belong to the first user that is seeded into our database. Login with credentials:

```
Username: user1
Password: 123
```

## Testing

1. Testing is completed with Jest, and there are tests both in the frontend and backend directories. In the relevant directory, run `npm test`
