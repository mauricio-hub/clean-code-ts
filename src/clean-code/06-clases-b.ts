(() => {


  type Gender = "M" | "F";

  interface PersonProps {
    name: string
    gender:Gender
    birthdate: Date
  }

  class Person {

    public name: string;
    public gender:Gender;
    public birthdate: Date;
    
    constructor({name,gender,birthdate}:PersonProps) {
      this.name = name;
      this.gender = gender
      this.birthdate = birthdate
    }
  }

  interface UserProps  {
    birthdate: Date;
    email: string;
    gender:Gender;
    role: string;
    name: string;
    lastAccess: Date;

  }

  class User extends Person {
    public email: string;
    public role: string;
    public lastAccess: Date;
    
    constructor({email,role,lastAccess,name,gender,birthdate}:UserProps) {
      super({name,gender,birthdate})
      this.email = email;
      this.role = role;
      this.lastAccess = lastAccess;
     
    }

    checkCreditals(): boolean {
      return true;
    }
  }


  interface UserSettingsProps  {
    workingDirectory: string;
    lastOpenFolder: string;
    email: string;
    role: string;
    name: string
    gender:Gender,
    birthdate: Date;

  }


 
  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;
  

    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      name,
      gender,
      birthdate}:UserSettingsProps) {
      super({email,role,lastAccess:new Date(),name,birthdate,gender});
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
      

    }
  }



  const userSettings = new UserSettings({
      workingDirectory: "/",
      lastOpenFolder: "/home",
      email: "test@email.com",
      role: "admin",
      name:"test user",
      birthdate: new Date('1990-01-01'),
      gender: "M",
    })

    console.log(userSettings);
  
    
})();
