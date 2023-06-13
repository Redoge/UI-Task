interface ILocation {
    addPerson(person: Employee): void;
    getPerson(index: number): Employee | undefined;
    getCount(): number;
  }
  
  class CompanyLocationArray implements ILocation {
    private people: Employee[];
  
    constructor() {
      this.people = [];
    }
  
    addPerson(person: Employee): void {
      this.people.push(person);
    }
  
    getPerson(index: number): Employee | undefined {
      return this.people[index];
    }
  
    getCount(): number {
      return this.people.length;
    }
  }
  
  class CompanyLocationLocalStorage implements ILocation {
    private storageKey: string;
    private people: Employee[];
  
    constructor(storageKey: string) {
      this.storageKey = storageKey;
      const existingData = localStorage.getItem(this.storageKey);
      this.people = existingData ? JSON.parse(existingData) : [];
    }
  
    addPerson(person: Employee): void {
      this.people.push(person);
      this.saveToLocalStorage();
    }
  
    getPerson(index: number): Employee | undefined {
      return this.people[index];
    }
  
    getCount(): number {
      return this.people.length;
    }
  
    private saveToLocalStorage(): void {
      localStorage.setItem(this.storageKey, JSON.stringify(this.people));
    }
  }
  
  class Employee {
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
    private location: ILocation;
  
    constructor(location: ILocation) {
      this.location = location;
    }
  
    addEmployee(employee: Employee): void {
      this.location.addPerson(employee);
    }
  
    getProjectList(): string[] {
      const count = this.location.getCount();
      const projects: string[] = [];
      for (let i = 0; i < count; i++) {
        const person = this.location.getPerson(i);
        if (person) {
          projects.push(person.getCurrentProject());
        }
      }
      return projects;
    }
  
    getNameList(): string[] {
      const count = this.location.getCount();
      const names: string[] = [];
      for (let i = 0; i < count; i++) {
        const person = this.location.getPerson(i);
        if (person) {
          names.push(person.getName());
        }
      }
      return names;
    }
  }
  
  const company1 = new Company(new CompanyLocationArray());
  const company2 = new Company(new CompanyLocationLocalStorage("company2"));
  
  const employee1 = new Employee("Employee1", "Project A");
  const employee2 = new Employee("Employee2", "Project B");
  const employee3 = new Employee("Employee3", "Project C");
  const employee4 = new Employee("Employee4", "Project A");
  
  company1.addEmployee(employee1);
  company1.addEmployee(employee2);
  
  company2.addEmployee(employee3);
  company2.addEmployee(employee4);
  
  console.log("Company Project List:", company1.getProjectList());
  console.log("Company Name List:", company1.getNameList());
  

  