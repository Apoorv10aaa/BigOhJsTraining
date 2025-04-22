const employeesData = {
  employees: [
    { employee_id: "E001", name: "John Doe", role: "Developer" },
    { employee_id: "E002", name: "Jane Smith", role: "Designer" },
    { employee_id: "E003", name: "Emily Davis", role: "Project Manager" },
  ],
};

const projectsData = {
  projects: [
    {
      project_id: "P001",
      name: "Project Alpha",
      hours: [
        { employee_id: "E001", hours_worked: 120 },
        { employee_id: "E002", hours_worked: 80 },
      ],
      rating: 4.5,
    },
    {
      project_id: "P002",
      name: "Project Beta",
      hours: [
        { employee_id: "E001", hours_worked: 150 },
        { employee_id: "E003", hours_worked: 200 },
      ],
      rating: 4.7,
    },
    {
      project_id: "P003",
      name: "Project Gamma",
      hours: [
        { employee_id: "E002", hours_worked: 50 },
        { employee_id: "E003", hours_worked: 60 },
      ],
      rating: 4.0,
    },
  ],
};
const report = [];

for (let i = 0; i < employeesData.employees.length; i++) {
  const employee = employeesData.employees[i];
  let totalHours = 0;
  let totalRating = 0;
  let projectCount = 0;
  const employeeProjects = [];

  for (let j = 0; j < projectsData.projects.length; j++) {
    const project = projectsData.projects[j];

    for (let k = 0; k < project.hours.length; k++) {
      const entry = project.hours[k];

      if (entry.employee_id === employee.employee_id) {
        totalHours += entry.hours_worked;
        totalRating += project.rating;
        projectCount++;

        employeeProjects.push({
          project_id: project.project_id,
          name: project.name,
          hours_worked: entry.hours_worked,
          rating: project.rating,
        });
        break;
      }
    }
  }
  report.push({
    employee_id: employee.employee_id,
    name: employee.name,

    role: employee.role,
    total_hours_worked: totalHours,
    average_project_rating:
      projectCount > 0
        ? parseFloat((totalRating / projectCount).toFixed(2))
        : 0,
    projects: employeeProjects,
  });
}
console.log(report);
