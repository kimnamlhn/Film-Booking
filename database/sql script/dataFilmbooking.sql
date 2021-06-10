USE mydb;
/* data user */
insert into users values(NULL,'admin@gmail.com','123456',015899985356,0);
insert into users values(NULL,'tvtinh@gmail.com','$2y$10$JRAxIxXqzh9tMxyhKuser',01369985356,1);
insert into users values(NULL,'nhao@gmail.com','$2y$10$9gQ28K.ilrIoj66bu8aAXOqPz1OUz5Ov',0136415356,1);
insert into users values(NULL,'tvchinh@gmail.com','$2y$10$9gQ28K.ilrIoj66bu8aAXOqPz1OUz5Ov',0136255356,1);
insert into users values(NULL,'nvvui@gmail.com','$2y$10$JRAxIxXqzh9tMxyhK.oW0eOnY0',01369582356,1);
insert into users values(NULL,'ntanh@gmail.com','$2y$10$9gQ28K',01369985356,1);
insert into users values(NULL,'nvluong@gmail.com','$2y$10$JRAxIxXu',0136285356,1);
insert into users values(NULL,'hthe@gmail.com','$2y$10$9gQ28K.i',01369985356,1);
insert into users values(NULL,'tvnam@gmail.com','$2y$10$JRAxIxXqzh9tMxyhK.oWeh8sZDW1NwHku',0165985356,1);
insert into users values(NULL,'tpvan@gmail.com','$2y$10$9gQ28K.ilrIoj66bcjXCbbYEi7bKq0q',01368565356,1);
insert into users values(NULL,'lhuynh@gmail.com','$2y$10$JRAxIxXqzdeh8sZDW1NwHku',01358685356,1);
insert into users values(NULL,'admin@gmail.com','123456',015899985356,0);


/* data film */
insert into film values(NULL,'Yêu em từ cái nhìn đầu tiên','2021-5-21','Poster');
insert into film values(NULL,'Xác sống','2021-06-10','Poster');
insert into film values(NULL,'Cung toả tâm ngọc','2021-06-10','Poster');
insert into film values(NULL,'Sống như những đoá hoa','2021-05-10','Poster');
insert into film values(NULL,'Định mệnh anh yêu em','2021-5-22','Poster');
insert into film values(NULL,'Tiên kiếm 1','2021-5-27','Poster');
insert into film values(NULL,'Đấu la đại lục','2021-5-22','Poster');
insert into film values(NULL,'Nhớ em người yêu cũ','2021-5-22','Poster');

/* data cineplex - cum rap */
insert into cineplex values(NULL,'Cineplex Nam Le','Poster Q1 TP HCM');
insert into cineplex values(NULL,'Cineplex Cuong Le','Poster Q3 TP HCM');
insert into cineplex values(NULL,'Cineplex Danh Hoang','Poster Q5 TP HCM');
insert into cineplex values(NULL,'Cineplex Van Dai','Poster Q2 TP HCM');
insert into cineplex values(NULL,'Cineplex Van Anh','Poster Q3 TP HCM');
insert into cineplex values(NULL,'Cineplex Van Luyen','Poster Q7 TP HCM');
insert into cineplex values(NULL,'Cineplex The Hien','Poster Q4 TP HCM');
insert into cineplex values(NULL,'Cineplex Le Linh','Poster Q1 TP HCM');


/* data cinema - rap */
insert into cinema values(NULL,'Cinema Nam Le',1, '2D', 10, 10);
insert into cinema values(NULL,'Cinema Cuong Le',2,'3D', 15, 10);
insert into cinema values(NULL,'Cinema Danh Hoang',1,'2D', 15, 10);
insert into cinema values(NULL,'Cinema Van Dai',3,'4D', 10, 10);
insert into cinema values(NULL,'Cinema Van Anh',4,'2D', 15, 10);
insert into cinema values(NULL,'Cinema Van Luyen',5,'3D', 10, 10);
insert into cinema values(NULL,'Cinema The Hien',1,'2D', 15, 10);
insert into cinema values(NULL,'Cinema Le Linh',2,'2D', 10, 10);

/* data showtime suat chieu */
insert into showtime values(1,2,'08:30', '10:30',50000);
insert into showtime values(1,1,'08:30', '10:30',50000);
insert into showtime values(1,4,'08:30', '10:30',50000);
insert into showtime values(1,3,'08:30', '10:30',50000);
insert into showtime values(2,2,'08:30', '10:30',50000);
insert into showtime values(2,3,'08:30', '10:30',50000);
insert into showtime values(3,1,'08:30', '10:30',50000);
insert into showtime values(2,4,'08:30', '10:30',50000);
insert into showtime values(4,1,'08:30', '10:30',50000);
insert into showtime values(5,1,'08:30', '10:30',50000);

/* data booking - dat cho*/
insert into booking values(NULL,1,1,'2021-5-21',50000);
insert into booking values(NULL,1,3,'2021-06-10',50000);
insert into booking values(NULL,1,2,'2021-06-10',50000);
insert into booking values(NULL,2,2,'2021-05-10',50000);
insert into booking values(NULL,2,1,'2021-5-22',50000);
insert into booking values(NULL,3,2,'2021-5-27',50000);
insert into booking values(NULL,1,3,'2021-5-22',50000);
insert into booking values(NULL,3,2,'2021-5-22',50000);


/* data ticket - ve */
insert into ticket values(NULL,1, 'A1', 1, 3,50000);
insert into ticket values(NULL,2,'A2', 2, 3,50000);
insert into ticket values(NULL,1,'B1', 4, 7,50000);
insert into ticket values(NULL,3,'B2', 4, 1,50000);
insert into ticket values(NULL,4,'C1', 7, 10,50000);
insert into ticket values(NULL,5,'C3', 10, 10,50000);
insert into ticket values(NULL,1,'D1', 2, 10,50000);
insert into ticket values(NULL,2,'D2', 4, 10,50000);
