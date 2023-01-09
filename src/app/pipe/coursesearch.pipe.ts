import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../Course';

@Pipe({
  name: 'coursesearch'
})
export class CoursesearchPipe implements PipeTransform {

  transform(course : Course[],searchName:String): Course[] {

    if(!course || !searchName){
      return course;
    }
    return course.filter(co => 
      co.courseName.toLocaleLowerCase().includes(searchName.toLocaleLowerCase()) ||
      co.degreeType.toLocaleLowerCase().includes(searchName.toLocaleLowerCase()) ||
      co.courseCode.toString().includes(searchName.toLocaleLowerCase()) ||
      co.courseDuration.toLocaleLowerCase().includes(searchName.toLocaleLowerCase()) 
      );  
  }

}
