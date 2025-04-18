function manageCompany(jsonObject, operation, departmentName, employee) {
  if (operation === "add") {
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
}
