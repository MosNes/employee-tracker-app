INSERT INTO department (name)
VALUES
    ('Roofing'),
    ('Siding'),
    ('Commercial'),
    ('IT'),
    ('ReRoof'),
    ('Marketing'),
    ('HR'),
    ('Accounting'),
    ('Operations');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Field Supervisor - Roofing', 40000, 1),
    ('Field Supervisor - Siding', 40000, 2),
    ('Production Roofing Manager', 50000, 1),
    ('Production Siding Manager', 50000, 2),
    ('Scheduler', 35000, 1),
    ('Siding Admin Asst', 35000, 2),
    ('Warehouse Associate', 30000, 1),
    ('Warehouse Manager', 45000, 1),
    ('Estimator', 40000, 3),
    ('Commercial Manager', 60000, 3),
    ('Helpdesk Analyst', 50000, 4),
    ('Sales Consultant', 40000, 5),
    ('ReRoof Sales Manager', 50000, 5),
    ('Marketing Manager', 58000, 6),
    ('Payroll Admin', 45000, 7),
    ('HR Director', 80000, 7),
    ('Accountant', 45000, 8),
    ('Controller', 90000, 8),
    ('Operations Manager', 100000, 9);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Brannigan', 'Flesmer', 19, null),
    ('Bob', 'Dugnutt', 18, null),
    ('Durgo', 'Mudflap', 17, 2),
    ('Huckabee', 'Squidoo', 17, 2),
    ('Marf', 'Bucket', 16, null),
    ('Scudwick', 'Chompshire', 15, 5),
    ('Wesley', 'Biggums', 14, 1),
    ('Boaty', 'Dankbottom', 13, 1),
    ('Malto', 'Phlegm', 12, 8),
    ('Slappy', 'Twigscoop', 12, 8),
    ('Baltimore', 'Slimjim', 11, 2),
    ('Flak', 'Spindle', 10, 1),
    ('Rando', 'Bean', 9, 12),
    ('Ludo', 'Blart', 9, 12),
    ('Narlo', 'Blart', 8, 1),
    ('Smiley', 'Klimbo', 7, 15),
    ('Mogey', 'Skunk', 7, 15),
    ('Skraggs', 'McGee', 4, 1),
    ('Scooty', 'Jalepeno', 6, 18),
    ('Varn', 'Goosepunk', 6, 18),
    ('Jubal', 'Bleepkek', 3, 1),
    ('Hamtong', 'Gozer', 5, 21),
    ('Mafaniel', 'Rubberts', 5, 21),
    ('Junedog', 'Florp', 1, 21),
    ('Boot', 'Nibbles', 1, 21),
    ('Gizmo', 'Chunk', 2, 18),
    ('Oppenheimer', 'Sockmann', 2, 18);
    