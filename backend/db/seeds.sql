INSERT INTO users (username, email, password)
VALUES ('user1', 'user@test.ca', '$2b$10$pYjHOY9D69WH5qyAPHHKV.FGGWeS/cPMei/77YNkLmgeMnKWp76I6');

INSERT INTO videos (preview, name, date, building, user_id)
VALUES 
('north-prev.jpg', 'north.mp4', '2023-04-26', 'North', 1),
('south-prev.jpg', 'south.mp4', '2023-04-26', 'South', 1),
('west-prev.jpg', 'west.mp4', '2023-04-26', 'West', 1),
('pb-north-prev.jpg', 'pb-north.mp4', '2023-04-23', 'North', 1),
('pb-south-prev.jpg', 'pb-south.mp4', '2023-04-24', 'South', 1),
('pb-west-prev.jpg', 'pb-west.mp4', '2023-04-25', 'West', 1);



