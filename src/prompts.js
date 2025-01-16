import inquirer from 'inquirer'

const mainMenuPrompt = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Exit'
            ],
        },
        {
            type: 'input',
            name: 'department_name',
            message: 'Enter the name of the department',
            when: (answers) => answers.action === 'Add a department'
        },
        {
            type: 'input',
            name: 'role_name',
            message: 'Enter the name of the role',
            when: (answers) => answers.action === 'Add a role'
        },
        {
            type: 'input',
            name: 'role_department',
            message: 'Enter the department id for this role',
            when: (answers) => answers.action === 'Add a role'
        },
        {
            type: 'input',
            name: 'role_salary',
            message: 'Enter the salary for this role',
            when: (answers) => answers.action === 'Add a role'
        },
        {
            type: 'input',
            name: 'employee_firstname',
            message: 'Enter the first name of the employee',
            when: (answers) => answers.action === 'Add an employee'
        },
        {
            type: 'input',
            name: 'employee_lastname',
            message: 'Enter the last name of the employee',
            when: (answers) => answers.action === 'Add an employee'
        },
        {
            type: 'input',
            name: 'employee_role_id',
            message: 'Enter the role id for this employee',
            when: (answers) => answers.action === 'Add an employee'
        },
        {
            type: 'input',
            name: 'employee_manager_id',
            message: 'Enter the employee id for manager of this employee',
            when: (answers) => answers.action === 'Add an employee'
        },
        {
            type: 'input',
            name: 'employee_update_emp_id',
            message: 'Enter the employee id for which you want to update the role',
            when: (answers) => answers.action === 'Update an employee role'
        },
        {
            type: 'input',
            name: 'employee_update_role_id',
            message: 'Enter the new role id for this employee',
            when: (answers) => answers.action === 'Update an employee role'
        },
    ]);
};

//module.exports = { mainMenuPrompt };
export default mainMenuPrompt;
