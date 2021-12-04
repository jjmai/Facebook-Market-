-- Dummy Data --
INSERT INTO dummy (created) VALUES (current_timestamp);

-- Populate Your Tables Here --
-- ----------------------------
-- Records of categories
-- ----------------------------
INSERT INTO categories OVERRIDING SYSTEM VALUE VALUES (1, 'Vehicles', NULL, NULL);
INSERT INTO categories OVERRIDING SYSTEM VALUE VALUES (2, 'Apparel', NULL, NULL);
INSERT INTO categories OVERRIDING SYSTEM VALUE VALUES (3, 'Property Rentals', NULL, NULL);
INSERT INTO categories OVERRIDING SYSTEM VALUE VALUES (4, 'Electronics', NULL, NULL);
INSERT INTO categories OVERRIDING SYSTEM VALUE VALUES (5, 'Classifieds', NULL, NULL);
INSERT INTO categories OVERRIDING SYSTEM VALUE VALUES (6, 'Entertainment', NULL, NULL);
INSERT INTO categories OVERRIDING SYSTEM VALUE VALUES (7, 'Family', NULL, NULL);
INSERT INTO categories OVERRIDING SYSTEM VALUE VALUES (8, 'Free Stuff', NULL, NULL);
INSERT INTO categories OVERRIDING SYSTEM VALUE VALUES (9, 'Garden & Outdoor', NULL, NULL);
INSERT INTO categories OVERRIDING SYSTEM VALUE VALUES (10, 'Hobbies', NULL, NULL);
INSERT INTO categories OVERRIDING SYSTEM VALUE VALUES (11, 'Home Goods', NULL, NULL);
INSERT INTO categories OVERRIDING SYSTEM VALUE VALUES (12, 'Home Improvement Supplies', NULL, NULL);
INSERT INTO categories OVERRIDING SYSTEM VALUE VALUES (13, 'Home Sales', NULL, NULL);
INSERT INTO categories OVERRIDING SYSTEM VALUE VALUES (14, 'Musical Instruments', NULL, NULL);
INSERT INTO categories OVERRIDING SYSTEM VALUE VALUES (15, 'Boats', NULL, 1);
INSERT INTO categories OVERRIDING SYSTEM VALUE VALUES (16, 'Cars', NULL, 1);
INSERT INTO categories OVERRIDING SYSTEM VALUE VALUES (17, 'Motorcycles', NULL, 1);

-- ----------------------------
-- Records of listing_categories
-- ----------------------------
INSERT INTO listing_categories VALUES (15, 13);
INSERT INTO listing_categories VALUES (15, 14);
INSERT INTO listing_categories VALUES (16, 15);
INSERT INTO listing_categories VALUES (16, 16);
INSERT INTO listing_categories VALUES (17, 18);
INSERT INTO listing_categories VALUES (17, 17);
INSERT INTO listing_categories VALUES (1, 28);

-- ----------------------------
-- Records of listings
-- ----------------------------
INSERT INTO listings OVERRIDING SYSTEM VALUE VALUES (18, 2, '2021-04-23', 'Motorcycle', 'https://media.istockphoto.com/photos/motorcycle-in-blurred-motion-picture-id1282555618?b=1&k=20&m=1282555618&s=170667a&w=0&h=e24oCHMG_t1eZpM-_4toiiBFxUAVCXCfhXTNnNoi-go=');
INSERT INTO listings OVERRIDING SYSTEM VALUE VALUES (17, 2, '2021-11-30', 'Custom bobber motorbike', 'https://media.istockphoto.com/photos/custom-bobber-motorbike-in-an-workshop-garage-picture-id1280454995?b=1&k=20&m=1280454995&s=170667a&w=0&h=xFJOghbvmGrxwDdZrI4CoPgpDUvCIgLo5W7O2nuHHiY=');
INSERT INTO listings OVERRIDING SYSTEM VALUE VALUES (16, 2, '2021-12-02', '2016 Mustang Gt', 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fA%3D%3D&w=1000&q=80');
INSERT INTO listings OVERRIDING SYSTEM VALUE VALUES (15, 2, '2021-07-16', 'Generic modern SUV', 'https://media.istockphoto.com/photos/generic-modern-suv-car-in-concrete-garage-picture-id1307086567?b=1&k=20&m=1307086567&s=170667a&w=0&h=NjcM6LIOkmfhyqH-zrbFU7pHCPxIABvNhWaOElm_P-E=');
INSERT INTO listings OVERRIDING SYSTEM VALUE VALUES (14, 2, '2021-12-08', 'Luxury yachts docked', 'https://media.istockphoto.com/photos/luxury-yachts-docked-in-puerto-banus-banus-bay-marbella-spain-picture-id1271566262?b=1&k=20&m=1271566262&s=170667a&w=0&h=hsgWtGzPUq8tdfZPysrA0mbwwJAHFUtyPiD1NsLv9Do=');
INSERT INTO listings OVERRIDING SYSTEM VALUE VALUES (13, 2, '2021-12-09', '3D LNG tanker', 'https://media.istockphoto.com/photos/rendering-of-lng-tanker-sailing-in-sea-at-night-picture-id1317779408?b=1&k=20&m=1317779408&s=170667a&w=0&h=w6opHukzcZfp0f092BMg8AGReJtp8JAugur6d3tTd2U=');
INSERT INTO listings OVERRIDING SYSTEM VALUE VALUES (12, 2, '2021-12-08', 'Bike', 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6');
INSERT INTO listings OVERRIDING SYSTEM VALUE VALUES (11, 2, '2021-12-16', 'Sea star', 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1');
INSERT INTO listings OVERRIDING SYSTEM VALUE VALUES (10, 2, '2021-12-17', 'Tomato basil', 'https://images.unsplash.com/photo-1567306301408-9b74779a11af');
INSERT INTO listings OVERRIDING SYSTEM VALUE VALUES (9, 2, '2021-12-15', 'Mushrooms', 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25');
INSERT INTO listings OVERRIDING SYSTEM VALUE VALUES (8, 2, '2021-12-17', 'Fern', 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f');
INSERT INTO listings OVERRIDING SYSTEM VALUE VALUES (7, 2, '2021-12-01', 'Basketball', 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6');
INSERT INTO listings OVERRIDING SYSTEM VALUE VALUES (6, 2, '2021-12-24', 'Honey', 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62');
INSERT INTO listings OVERRIDING SYSTEM VALUE VALUES (5, 2, '2021-12-02', 'Hats', 'https://images.unsplash.com/photo-1533827432537-70133748f5c8');
INSERT INTO listings OVERRIDING SYSTEM VALUE VALUES (4, 2, '2021-12-08', 'Coffee', 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c');
INSERT INTO listings OVERRIDING SYSTEM VALUE VALUES (3, 2, '2021-12-04', 'Camera', 'https://images.unsplash.com/photo-1522770179533-24471fcdba45');
INSERT INTO listings OVERRIDING SYSTEM VALUE VALUES (2, 2, '2021-12-04', 'Burger', 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d');
INSERT INTO listings OVERRIDING SYSTEM VALUE VALUES (1, 2, '2021-12-04', 'Breakfast', 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e');
INSERT INTO listings OVERRIDING SYSTEM VALUE VALUES (28, 2, '2021-12-05', 'Surface lapto', 'https://images.unsplash.com/photo-1633113211800-4acbb59fc254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&w=1000&q=80');

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO users OVERRIDING SYSTEM VALUE VALUES (2, 'xluo41', 'xluo41@ucsc.edu', '$2b$10$sp3N80BivHnzLpV69/6IweFP6ktg5ZcWl8W/9vYvcZZ4Y5rvMPzuW');

