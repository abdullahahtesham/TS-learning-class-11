type IStudentInformation = {
  name: string;
  age: number;
  cnicNo: number;
};

let generalInformation: IStudentInformation = {
  name: "Abdullah",
  cnicNo: 123456789,
  age: 18,
};
let student1: IStudentInformation = {
  name: "Ubaid",
  age: 18,
  cnicNo: 1233333333,
};
let student2: IStudentInformation = {
  name: "Wahab",
  age: 20,
  cnicNo: 1221212112,
};
type IRollNumber = string | number;
let rollNo: IRollNumber;
rollNo = "PIAIC";
rollNo = 123;
type ITeacher = {
  name: string;
  experiance: number;
};
type IStudent = {
  name: string;
  rollNo: number;
};
let sudent3 = {
  name: "string",
  rollNo: 111,
};
let teacher1 = {
  name: "Ubaid",
  eperaince: 3,
};
type intersectedType = IStudent & ITeacher;
let teacher2: intersectedType = {
  name: "okasha",
  rollNo: 12343,
  experiance: 3,
};
// little typing
type IDrink = "small" | "medium" | "large";
let drink: IDrink;
drink = "small";
drink = "large";
// drink = "mega"   //this will show error

//fresh object
//stale object
let ball = {
  //ths is fresh object
  diameter: 10,
};
let sphere = ball; //this is stale object

