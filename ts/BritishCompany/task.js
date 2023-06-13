var CompanyLocationArray = /** @class */ (function () {
    function CompanyLocationArray() {
        this.people = [];
    }
    CompanyLocationArray.prototype.addPerson = function (person) {
        this.people.push(person);
    };
    CompanyLocationArray.prototype.getPerson = function (index) {
        return this.people[index];
    };
    CompanyLocationArray.prototype.getCount = function () {
        return this.people.length;
    };
    return CompanyLocationArray;
}());
var CompanyLocationLocalStorage = /** @class */ (function () {
    function CompanyLocationLocalStorage(storageKey) {
        this.storageKey = storageKey;
        var existingData = localStorage.getItem(this.storageKey);
        this.people = existingData ? JSON.parse(existingData) : [];
    }
    CompanyLocationLocalStorage.prototype.addPerson = function (person) {
        this.people.push(person);
        this.saveToLocalStorage();
    };
    CompanyLocationLocalStorage.prototype.getPerson = function (index) {
        return this.people[index];
    };
    CompanyLocationLocalStorage.prototype.getCount = function () {
        return this.people.length;
    };
    CompanyLocationLocalStorage.prototype.saveToLocalStorage = function () {
        localStorage.setItem(this.storageKey, JSON.stringify(this.people));
    };
    return CompanyLocationLocalStorage;
}());
var Employee = /** @class */ (function () {
    function Employee(name, currentProject) {
        this.name = name;
        this.currentProject = currentProject;
    }
    Employee.prototype.getCurrentProject = function () {
        return this.currentProject;
    };
    Employee.prototype.getName = function () {
        return this.name;
    };
    return Employee;
}());
var Company = /** @class */ (function () {
    function Company(location) {
        this.location = location;
    }
    Company.prototype.addEmployee = function (employee) {
        this.location.addPerson(employee);
    };
    Company.prototype.getProjectList = function () {
        var count = this.location.getCount();
        var projects = [];
        for (var i = 0; i < count; i++) {
            var person = this.location.getPerson(i);
            if (person) {
                projects.push(person.getCurrentProject());
            }
        }
        return projects;
    };
    Company.prototype.getNameList = function () {
        var count = this.location.getCount();
        var names = [];
        for (var i = 0; i < count; i++) {
            var person = this.location.getPerson(i);
            if (person) {
                names.push(person.getName());
            }
        }
        return names;
    };
    return Company;
}());
var company1 = new Company(new CompanyLocationArray());
var company2 = new Company(new CompanyLocationLocalStorage("company2"));
var employee1 = new Employee("Employee1", "Project A");
var employee2 = new Employee("Employee2", "Project B");
var employee3 = new Employee("Employee3", "Project C");
var employee4 = new Employee("Employee4", "Project A");
company1.addEmployee(employee1);
company1.addEmployee(employee2);
company2.addEmployee(employee3);
company2.addEmployee(employee4);
console.log("Company Project List:", company1.getProjectList());
console.log("Company Name List:", company1.getNameList());
