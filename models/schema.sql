#DROP DATABASE IF EXISTS animal_db;
#CREATE DATABASE animal_db;

USE animal_db;

INSERT INTO Animals (type, name, color, size, description, lostFound, lastSeen, contactInfo, zip)
VALUES ("dog","fido", "brown", "S", "Brown dog w/spots", true, "Yesterday on Independence", "Pam 704-555-6166", "28215"),
("cat", "pixie", "orange", "S", "Orange cat similar to garfield", false, "Beatties Ford Rd", "Tom 704-565-7865", "28214"),
("bunny", "bugs", "grey", "M", "Plump with rosy red cheeks", true, "Freedom Park", "Sandy 704-565-9837", "28202"),
("dog", "dallas", "grey", "M", "Pitbull with blue eyes", false, "NODA", "Phil 704-875-7346", "28264"),
("turtle", "crush", "green", "S", "Looks like turtle from Finding Nemo", true, "Hopewell High School", "Stacy 704-637-7865", "28216"),
("cat", "smokey", "black", "S", "Black cat with grey highlights and yellow eyes", false, "Back alley near Food Lion", "Kate 704-535-7825", "28283"),
("parrot", "eddie", "red", "S", "Red parrot with rainbow colored wings RARE BREED", true, "Exotic Animals Convention", "Tyler 704-874-0837", "28214"),
("dog", "killer", "black", "S", "weiner dog with brown feet", false, "Near First Ward Park", "Kim 704-837-3425", "28235"),
("cat", "pixie", "orange", "S", "Orange cat similar to garfield", true, "Beatties Ford Rd", "Tom 704-565-7865", "28214"),
("dog","Fido", "black", "L", "Rotweiller", true, "On my porch", "Bill, 704-555-2833", 28205),
("dog","Sasquatch", "brown", "S", "Brown dog w/spots", true, "Yesterday on Independence", "Pam, 704-555-6166", 28215),
("turtle","Cecil", "green", "M", " ", false, "In my yard on Central Ave", "Cynthia, 704-555-4362", 28205),
("cat","Betty", "white", "S", "Has a pink nose", false, "Brookshire", "Amy, 704-555-3309", 28214),
("dog","Hammer", "spotted", "M", "Dalmation", true, "South Charlotte", "Greg, 704-555-6698", 28273),
("parrot"," ", "multi", "S", "Mostly red with some blue", false, "Bird feeder on Mt Holly Huntersville", "George, 704-555-3702", 28214),
("dog","Bull", "grey", "L", "Pit Bull", true, "Behind fence on North Davidson", "Bob, 704-555-1123", 28204),
("cat","Cheshire", "brown", "S", "Will scratch your eyes out", true, "WT Harris Blvd", "Grady, 704-555-7752", 28213),
("cat"," ", "black", "M", "Really sneaky", false, "North Davidson", "Elizabeth, 704-555-7752", 28211),
("dog"," ", "brown", "L", "This is a mutt", false, "At Wendys", "Alice, 704-555-3543", 28209)
