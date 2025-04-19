let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Doan Chi Tan");
console.log(23);

let firstName = "Tan";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let chi_tan = "CT";
let $function = 27;

let person = "CTan";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Coder";

let job1 = "programmer";
let job2 = "coder";

console.log(myFirstJob);
console.log(myCurrentJob);
console.log(job1);
console.log(job2);
console.log(chi_tan);
console.log($function);
console.log("Num of PI = " + PI);

let iLoveVietnam = true;
if (iLoveVietnam === true) {
  console.log("I love Vietnam");
} else {
  console.log("I don't love Vietnam");
}
console.log(typeof iLoveVietnam);
console.log(typeof myFirstJob);
console.log(typeof population);
console.log(typeof country);
console.log(typeof js);
console.log(typeof PI);
console.log(typeof $function);
console.log(typeof chi_tan);

iLoveVietnam = "YES";
console.log(iLoveVietnam);

let year;
console.log(year);
console.log(typeof year);

year = 2025;
console.log(year);
console.log(typeof year);
year = "2025";
console.log(year);
console.log(typeof year);
console.log(typeof null);

//let, const, var
let age = 30;
age = 32;
console.log(age);

const birthYear = 1991;

var job = "programmer";
job = "coder";
console.log(job);

// basic operators
const dayBirth = 16;
const monthBirth = 8;
const yearBirth = 2001;
const realBirthYear = dayBirth + "/" + monthBirth + "/" + yearBirth;
const myFirstName = "Doan";
const myLastName = "Chi Tan";
const myFullName = myFirstName + " " + myLastName;
console.log(
  "Hey, my name is " + myFullName + " and I was born on " + realBirthYear
);
let x = 10 + 5; // 15
x += 10; // 25
x /= 5; // 5
x *= 20; // 100
x++;
console.log(x);

let y, z;
y = z = 25 - 10 - 9; // y = 6, z = 6
console.log(y, z);

const myAge = 24;
const yourAge = 30;
const averageAge = (myAge + yourAge) / 2;
console.log(averageAge);

const realHo = "Doan";
const realTen = "Chi Tan";
const realHoTen = realHo + " " + realTen; // Ho va ten
const realNamSinh = 2001;
const realNamHienTai = 2025;
const realTuoi = realNamHienTai - realNamSinh; // Tuoi hien tai
const realBirthPlace = "Vinh Long"; // Noi sinh

const realCurrentPlace = "HCM"; // Noi o hien tai
const realInformation =
  "Xin chao cac ban, minh la " +
  realHoTen +
  ", sinh nam " +
  realNamSinh +
  ", hien tai " +
  realTuoi +
  " tuoi, sinh ra o " +
  realBirthPlace +
  ", hien dang o " +
  realCurrentPlace;
const realInformationUpdate = `Hello everyone, my name is ${realHoTen}, I was born in ${realNamSinh}, I am ${realTuoi} years old, I was born in ${realBirthPlace}, and I am currently living in ${realCurrentPlace}`;
console.log(realInformation); // log ra thong tin using normial string
console.log(realInformationUpdate); // log ra thong tin using template string

console.log(
  "Day la \n\
cach \n\
thong thuong"
); // day la cach thong thuong de in ra string

console.log(
  `This is
a different
way to
write a string`
); // day la cach toi uu de in ra string

const tuoicuaAiDo = 17;
const duTuoi = tuoicuaAiDo >= 18;
if (duTuoi === true) {
  console.log("Ban da du tuoi la xe");
} else {
  console.log("Ban chua du tuoi la xe");
}

let century;
if (realNamSinh <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
