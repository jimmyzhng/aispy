INSERT INTO users (username, email, password)
VALUES ('user1', 'user@test.ca', '123');

INSERT INTO videos (url, date, building, user_id)
VALUES 
('https://aispy.s3.us-west-2.amazonaws.com/pb-north.mp4','2023-04-23', 'North', 1),
('https://aispy.s3.us-west-2.amazonaws.com/pb-south.mp4','2023-04-24', 'South', 1),
('https://aispy.s3.us-west-2.amazonaws.com/pb-west.mp4', '2023-04-25', 'West', 1);



