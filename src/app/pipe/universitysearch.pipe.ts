import { Pipe, PipeTransform } from '@angular/core';
import { University } from '../University';

@Pipe({
  name: 'universitysearch'
})
export class UniversitysearchPipe implements PipeTransform {

  transform(university : University[],searchName:String): University[] {

    if(!university || !searchName){
      return university;
    }
    return university.filter(uni => 
      uni.universityName.toLocaleLowerCase().includes(searchName.toLocaleLowerCase()) ||
      uni.country.toLocaleLowerCase().includes(searchName.toLocaleLowerCase()) ||
      uni.state.toLocaleLowerCase().includes(searchName.toLocaleLowerCase()) ||
      uni.instituteCode.toString().includes(searchName.toLocaleLowerCase()) ||
      uni.minimumCgpa.toString().includes(searchName.toLocaleLowerCase()) ||
      uni.minimumGreScore.toString().includes(searchName.toLocaleLowerCase()) ||
      uni.minimumIeltsScore.toString().includes(searchName.toLocaleLowerCase()) 
      );  
  }


}
