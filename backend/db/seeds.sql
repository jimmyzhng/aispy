INSERT INTO users (username, email, password)
VALUES ('user1', 'user@test.ca', '$2b$10$pYjHOY9D69WH5qyAPHHKV.FGGWeS/cPMei/77YNkLmgeMnKWp76I6');

INSERT INTO videos (preview, name, date, building, user_id, past_broadcast)
VALUES 
('north-prev.jpg', 'north.mp4', '2023-04-26', 'North', 1, false),
('south-prev.jpg', 'south.mp4', '2023-04-26', 'South', 1, false),
('west-prev.jpg', 'west.mp4', '2023-04-26', 'West', 1, false),
('pb-north-prev.jpg', 'pb-north.mp4', '2023-04-23', 'North', 1, true),
('pb-south-prev.jpg', 'pb-south.mp4', '2023-04-24', 'South', 1, true),
('pb-west-prev.jpg', 'pb-west.mp4', '2023-04-25', 'West', 1, true);



