import { Component, OnInit } from '@angular/core';
import { DisplayService, Movie, Theatre, shows } from '../display.service';

@Component({
  selector: 'app-display-movies',
  templateUrl: './display-movies.component.html',
  styleUrls: ['./display-movies.component.css']
})
export class DisplayMoviesComponent implements OnInit {

  constructor(private displayservice: DisplayService) { }
  result:Movie[];
  result1:Theatre[];
  result3:shows[];
  moviename:string;
  theatrename:string;
  ngOnInit(): void {
  }

displayMovies():void{
  console.log(this.result);
  this.displayservice.displayMovies().subscribe(
    data=>{this.result=data})
}

displayTheatres(moviename):void{
  console.log(this.result1);
  this.displayservice.displayTheatres(moviename).subscribe(
    data=>{this.result1=data})
}

displayShows(theatrename):void{
  console.log(this.result3);
  this.displayservice.displayShows(theatrename).subscribe(
    data=>{this.result3=data})
}

}
