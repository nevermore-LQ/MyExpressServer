create table flights
(
  id text primary key not null,
  name varchar(30),
  spaceship boolean,
  broomstick boolean,
  price int,
  img text,
  description text
);

create table booking
(
  bookingId text primary key not null,
  customerName varchar(30) not null,
  destination varchar(30) not null,
  price int not null,
  transportation varchar(10) not null,
  date DATE not null,
  ticketNumber int not null,
  totalCost int not null
);

insert into flights
  (id, name, spaceship, broomstick, price, img, description)
values
  ('111111111', 'Mars', true, true, 800, '/images/stars/Mars.jpg', 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being only larger than Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet"');

insert into flights
  (id, name, spaceship, broomstick, price, img, description)
values
  ('222222222', 'Aldebaran', true, true, 200, '/images/stars/Aldebaran.jpg', 'Aldebaran, designated α Tauri, is an orange giant star measured to be about 65 light-years from the Sun in the zodiac constellation Taurus. It is the brightest star in Taurus and generally the fourteenth-brightest star in the night sky, though it varies slowly in brightness between magnitude 0.75 and 0.95.');

insert into flights
  (id, name, spaceship, broomstick, price, img, description)
values
  ('333333333', 'Arcturus', true, false, 300, '/images/stars/Arcturus.jpg', 'Arcturus, designation α Boötis (Latinized to Alpha Boötis, abbreviated Alpha Boo, α Boo), is the brightest star in the constellation of Boötes, the fourth-brightest in the night sky, and the brightest in the northern celestial hemisphere. Together with Spica and Denebola (or Regulus, depending on the source), Arcturus is part of the Spring Triangle asterism and, by extension, also of the Great Diamond along with the star Cor Caroli. When viewed from Earth, it appears to be positioned almost at the north galactic pole of the Milky Way.');

insert into flights
  (id, name, spaceship, broomstick, price, img, description)
values
  ('444444444', 'Betelgeuse', false, true, 1000, '/images/stars/Betelgeuse.jpg', 'Betelgeuse is usually the tenth-brightest star in the night sky and, after Rigel, the second-brightest in the constellation of Orion. It is a distinctly reddish semiregular variable star whose apparent magnitude, varying between +0.0 and +1.6, has the widest range displayed by any first-magnitude star.');

insert into flights
  (id, name, spaceship, broomstick, price, img, description)
values
  ('555555555', 'Rigel', true, true, 800, '/images/stars/Rigel.jpg', 'Arcturus, designation α Boötis (Latinized to Alpha Boötis, abbreviated Alpha Boo, α Boo), is the brightest star in the constellation of Boötes, the fourth-brightest in the night sky, and the brightest in the northern celestial hemisphere. Together with Spica and Denebola (or Regulus, depending on the source), Arcturus is part of the Spring Triangle asterism and, by extension, also of the Great Diamond along with the star Cor Caroli. When viewed from Earth, it appears to be positioned almost at the north galactic pole of the Milky Way.');

insert into flights
  (id, name, spaceship, broomstick, price, img, description)
values
  ('666666666', 'Sirius_B', true, false, 600, '/images/stars/Sirius_B.jpg', 'Sirius is the brightest star in the night sky. Its name is derived from the Greek word Σείριος Seirios "glowing" or "scorching". With a visual apparent magnitude of −1.46, Sirius is almost twice as bright as Canopus, the next brightest star.');

insert into flights
  (id, name, spaceship, broomstick, price, img, description)
values
  ('777777777', 'Venus', true, true, 500, '/images/stars/Venus.jpg', 'Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the second-brightest natural object in the night sky after the Moon, Venus can cast shadows and can be, on rare occasion, visible to the naked eye in broad daylight.');

create table accounts
(
	id text primary key not null,
	username text unique not null,
	password text not null,
	isAdmin boolean default false
);




