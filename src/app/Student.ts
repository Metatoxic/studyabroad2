import { EmailValidator } from "@angular/forms";
import { Enroll } from "./Enroll";
import { University } from "./University";

export class Student{
    
    firstName!: String;
    lastName!: String;
    emailId!: String;
    password!: String;
    age!: Number;
    gender!:Gender ;
    cgpa!: Number;
    degree!: Degree;
    aadhaarNo !: Number;
    passportNo!: String;
    greScore!: Number;
    ieltsScore!: Number;
    specialization!: String;
    universities!:University[];
    enrolls!:Enroll[];
   


}
export enum Gender{
    MALE,
    FEMALE
}

export enum Degree{
    BTECH,
    BE,
    BSC
}