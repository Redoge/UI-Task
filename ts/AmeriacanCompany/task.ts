interface IEmployee {
    getCurrentProject(): string;
    getName(): string;
  }
  
  class Frontend implements IEmployee {
    private currentProject: string;
    private name: string;
  
    constructor(name: string, currentProject: string) {
      this.name = name;
      this.currentProject = currentProject;
    }
  
    getCurrentProject(): string {
      return this.currentProject;
    }
  
    getName(): string {
      return this.name;
    }
  }
  
  class Backend implements IEmployee {
    private currentProject: string;
    private name: string;
  
    constructor(name: string, currentProject: string) {
      this.name = name;
      this.currentProject = currentProject;
    }
  
    getCurrentProject(): string {
      return this.currentProject;
    }
  
    getName(): string {
      return this.name;
    }
  }
  
  class Company {
    private employees: IEmployee[];
  
    constructor() {
      this.employees = [];
    }
  
    add(employee: IEmployee): void {
      this.employees.push(employee);
    }
  
    getProjectList(): string[] {
      return this.employees.map((employee) => employee.getCurrentProject());
    }
  
    getNameList(): string[] {
      return this.employees.map((employee) => employee.getName());
    }
  }
  
  const company = new Company();
  
  const employee1 = new Frontend("Employee1", "Project A");
  const employee2 = new Frontend("Employee2", "Project B");
  const employee3 = new Backend("Employee3", "Project C");
  
  company.add(employee1);
  company.add(employee2);
  company.add(employee3);
  
  console.log("Project List:", company.getProjectList());
  console.log("Name List:", company.getNameList());
  