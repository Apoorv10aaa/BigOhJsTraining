function manageCompany(jsonObject, operation, departmentName, employee) {
  const departments = jsonObject.company.departments;
  for (let dept of departments) {
    if (dept.name === departmentName) {
      if (operation === "add") {
        dept.employees.push(employee);
        break;
      } else if (operation == "remove") {
        const employees = dept.employees;
        for (let emp of employees) {
          if (emp.id === employee.id) {
            delete emp;
            break;
          }
        }
      }
      break;
    }
  }
}

const obj = {
  company: {
    departments: [
      {
        name: "Engineering",
        employees: [
          { id: 1, name: "Alice", role: "Engineer" },

          { id: 2, name: "Bob", role: "Senior Engineer" },
        ],
      },

      {
        name: "HR",

        employees: [{ id: 3, name: "Carol", role: "HR Manager" }],
      },
    ],
  },
};
const newEmp = { id: 3, name: "Alice", role: "HR" };
manageCompany(obj, "add", "HR", newEmp);
