//const pool = require('./db');
import client from "./db.js";


const getDepartments = async () => {
    //await client.connect()
    const res = await client.query('SELECT * FROM department');
    //console.log(res.rows)
    return res.rows;
};

export const getRoles = async () => {
    const res = await client.query('SELECT role.id as role_id, title, salary, name as department_name FROM role inner join department on department.id = role.department_id');
    //console.log(res.rows)
    return res.rows;   
}

export const getEmployees = async () => {
    const res = await client.query("SELECT e.id as emp_id, e.first_name, e.last_name, r.title as role, r.salary, d.name, COALESCE(CONCAT(m.first_name, ' ', m.last_name), 'No Manager') AS manager FROM employee e inner join role r on r.id = e.role_id inner\
        join department d on d.id = r.department_id left join employee m on e.manager_id = m.id order by e.id")
    return res.rows;
}

export const addDepartment = async (depName) => {
    const qq = 'INSERT INTO department (name) VALUES ($1) RETURNING *;'
    const val = [depName]
    const res = await client.query(qq, val)
    //console.log(res.rows)
    return res.rows
}

export const getSingleRole = async (roleName) => {
    const qq = 'select * from role where title = $1;'
    const val = [roleName]
    const res = await client.query(qq, val)
    //console.log(res.rowCount)
    return res.rowCount
}

export const addRole = async (role_title, role_department, role_salary) => {
    const query = `
            INSERT INTO role (title, salary, department_id)
            VALUES (
                $1, -- Role Title
                $2, -- Role Salary
                $3 -- Fetch Department ID by Name
            )
            RETURNING *;
    `;

    const values = [role_title, role_salary, Number(role_department)];
    const result = await client.query(query, values);
    return result.rows
}

export const addEmployee = async (fn, ln, role_id, man_id) => {
    const qq = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)`
    const vals = [fn, ln, Number(role_id), Number(man_id)]

    const res = await client.query(qq, vals)
    return res.rows
}

export const updateEmployeeRole = async (emp_id, role_id) => {
    const qq = "UPDATE employee SET role_id = $1 WHERE id = $2RETURNING *;"  
    const vals = [role_id, emp_id]
    const res = await client.query(qq, vals)
    return res.rows
}

//module.exports = { getDepartments };

export default getDepartments;