-- Clear existing data to avoid duplication
TRUNCATE employee, role, department RESTART IDENTITY CASCADE;

-- Seed data for the `department` table
INSERT INTO department (name)
VALUES
    ('Engineering'),
    ('Finance'),
    ('Human Resources'),
    ('Marketing');

-- Seed data for the `role` table
INSERT INTO role (title, salary, department_id)
VALUES
    ('Software Engineer', 80000, 1),
    ('Senior Software Engineer', 100000, 1),
    ('Accountant', 60000, 2),
    ('HR Manager', 75000, 3),
    ('Marketing Specialist', 65000, 4);

-- Seed data for the `employee` table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, NULL), -- John has no manager
    ('Jane', 'Smith', 2, 1), -- Jane reports to John
    ('Emily', 'Johnson', 3, NULL), -- Emily has no manager
    ('Michael', 'Brown', 4, NULL), -- Michael has no manager
    ('Sarah', 'Davis', 5, NULL); -- Sarah has no manager
