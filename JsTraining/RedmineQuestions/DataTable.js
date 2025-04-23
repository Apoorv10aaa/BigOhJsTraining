function manageCompany(jsonObject, operation, departmentName, employee) {
  const departments = jsonObject.company.departments;

  for (let dept of departments) {
    if (dept.name === departmentName) {
      if (operation === "add") {
        dept.employees.push(employee);
        break;
      } else if (operation == "remove") {
        dept.employees = dept.employees.filter((obj) => obj.id != employee.id);
      } else if (operation == "update") {
        dept.employees = dept.employees.filter((obj) => obj.id != employee.id);
        dept.employees.push(employee);
      }
      break;
    }
  }
  console.log(jsonObject.company.departments[1].employees);
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
let newEmp = { id: 4, name: "Alice", role: "HR" };
manageCompany(obj, "add", "HR", newEmp);
newEmp = { id: 4, name: "HHH", role: "HR" };
manageCompany(obj, "update", "HR", newEmp);
