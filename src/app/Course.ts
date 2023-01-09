export class Course{
    courseCode !:Number;
    courseName!:String;
    seatsAvailable!:Number
    courseDuration!:CourseYear;
    degreeType!:DegreeType;

}

export enum CourseYear{
    ONE='ONE',TWO='TWO',THREE='THREE'
}

export enum DegreeType{
    PGD='PGD',MASTERS='MASTERS',MSC='MSC'
}