//write your code here to make the tests pass
class Document {
  constructor(EmployeeName) {
    this.EmployeeName = EmployeeName;
  }
}

class Employee {
  constructor(name) {
    this.name = name;
  }

  work(office) {
    for(let i = 0; i < 10; i++){
        const newDocument = new Document(this.name)
        office.documents.push(newDocument)
    }
  }
}

class Manager {
  constructor(name) {
    this.name = name;
    this.employees = [];
  }

  hireEmployee(name) {
    const newEmployee = new Employee(name)
    this.employees.push(newEmployee);
  }

  askEmployeesToWork(office) {
    for (let employee of this.employees) {
        employee.work(office);
    }
  }
}

class Cleaner {
  constructor(name) {
    this.name = name;
  }

  clean() {
    console.log("Clean");
  }
}

class Office {
  constructor() {
    this.documents = [];
    this.managers = [];
    this.cleaners = [];
  }

  hireCleaner(name) {
    const newCleaner = new Cleaner(name)
    this.cleaners.push(newCleaner);
  }
  hireManager(name) {
    const newManager = new Manager(name)
    this.managers.push(newManager);
  }
  startWorkDay() {
    for (let manager of this.managers) {
      manager.askEmployeesToWork(this);
    }

    for (let cleaner of this.cleaners) {
      cleaner.clean();
    }
  }
}
