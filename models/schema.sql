DROP DATABASE IF EXISTS animal_db;
CREATE DATABASE animal_db;



INSERT INTO Animal (type, name, color, size, description, lostFound, lastSeen, contactInfo, zip)
VALUES ("dog","fido", "brown", "S", "Brown dog w/spots", "Lost", "Yesterday on Independence", "Pam", "704-555-6166", "28215"),
("cat", "pixie", "orange", "S", "Orange cat similar to garfield", "Found", "Beatties Ford Rd", "Tom", "704-565-7865", "28214"),
("bunny", "bugs", "grey", "M", "Plump with rosy red cheeks", "Lost", "Freedom Park", "Sandy", "704-565-9837", "28202"),
("dog", "dallas", "grey", "M", "Pitbull with blue eyes", "Found", "NODA", "Phil", "704-875-7346", "28264"),
("turtle", "crush", "green", "S", "Looks like turtle from Finding Nemo", "Lost", "Hopewell High School", "Stacy", "704-637-7865", "28216"),
("cat", "smokey", "black", "S", "Black cat with grey highlights and yellow eyes", "Found", "Back alley near Food Lion", "Kate", "704-535-7825", "28283"),
("parrot", "eddie", "red", "S", "Red parrot with rainbow colored wings RARE BREED", "Lost", "Exotic Animals Convention", "Tyler", "704-874-0837", "28214"),
("dog", "killer", "black", "S", "weiner dog with brown feet", "Found", "Near First Ward Park", "Kim", "704-837-3425", "28235"),
("cat", "pixie", "orange", "S", "Orange cat similar to garfield", "Lost", "Beatties Ford Rd", "Tom", "704-565-7865", "28214"),
("cat", "pixie", "orange", "S", "Orange cat similar to garfield", "Found", "Beatties Ford Rd", "Tom", "704-565-7865", "28214")


/* DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb; */

INSERT INTO Animal (type, name, color, size, description, lostFound, lastSeen, contactInfo, zip)
VALUES ("dog","Fido", "black", "L", "Rotweiller", "Lost", "On my porch", "Bill, 704-555-2833", 28205),
("dog","Sasquatch", "brown", "S", "Brown dog w/spots", "Lost", "Yesterday on Independence", "Pam, 704-555-6166", 28215),
("turtle","Cecil", "green", "M", " ", "Found", "In my yard on Central Ave", "Cynthia, 704-555-4362", 28205),
("cat","Betty", "white", "S", "Has a pink nose", "Found", "Brookshire", "Amy, 704-555-3309", 28214),
("dog","Hammer", "spotted", "M", "Dalmation", "Lost", "South Charlotte", "Greg, 704-555-6698", 28273),
("parrot"," ", "multi", "S", "Mostly red with some blue", "Found", "Bird feeder on Mt Holly Huntersville", "George, 704-555-3702", 28214),
("dog","Bull", "grey", "L", "Pit Bull", "Lost", "Behind fence on North Davidson", "Bob, 704-555-1123", 28204),
("cat","Cheshire", "brown", "S", "Will scratch your eyes out", "Lost", "WT Harris Blvd", "Grady, 704-555-7752", 28213),
("cat"," ", "black", "M", "Really sneaky", "Found", "North Davidson", "Elizabeth, 704-555-7752", 28211),
("dog"," ", "brown", "L", "This is a mutt", "Found", "At Wendys", "Alice, 704-555-3543", 28209)
