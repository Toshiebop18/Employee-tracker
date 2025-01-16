//const { mainMenuPrompt } = require('./prompts');
//const { getDepartments } = require('./queries');
import inquirer from 'inquirer';
import mainMenuPrompt from './prompts.js'
import getDepartments, { getEmployees, addDepartment, getSingleRole, addRole, addEmployee, updateEmployeeRole } from './queries.js'
import { getRoles } from './queries.js';

const main = async () => {
    let exit = false;

    while (!exit) {
        const { action, department_name, role_department, role_name, role_salary, employee_firstname, 
            employee_lastname, employee_manager_id, employee_role_id, employee_update_emp_id, employee_update_role_id } = await mainMenuPrompt();

        switch (action) {
            case 'View all departments':
                const departments = await getDepartments();
                console.table(departments);
                break;
            case 'View all roles':
                const roles = await getRoles();
                console.table(roles)
                break;
            case 'View all employees':
                const emps = await getEmployees();
                console.table(emps)
                break;
            case 'Add a department':
                ///console.log(department_name)
                //getDepartmentDetails()
                const deps = await addDepartment(department_name);
                console.log('Department added successfully')
                break;
            case 'Add a role':
                try {
                    const roleCount = await addRole(role_name, role_department, role_salary)
                    console.log('role added successfully')
                } catch (e) {
                    console.error('one of the values you provided is invalid. Try again!')
                }
                finally {
                    break;
                }
            case 'Add an employee':
                try {
                    const emps = await addEmployee(employee_firstname, employee_lastname, employee_role_id, employee_manager_id)
                    console.log('employee added successfully')
                } catch (e) {
                    console.error('one of the values you provided is invalid. Try again!')
                }
                finally {
                    break;
                }
            case 'Update an employee role':
                try {
                    const emps = await updateEmployeeRole(employee_update_emp_id, employee_update_role_id)
                    console.log('employee role updated successfully')
                } catch (e) {
                    console.error('one of the values you provided is invalid. Try again!')
                }
                finally {
                    break;
                }
            case 'Exit':
                //exit = true;
                console.log('Goodbye!');
                process.exit()
            default:
                console.log('Invalid command!');
        }
    }
};

main();
