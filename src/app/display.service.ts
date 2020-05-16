import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  
  constructor(private http:HttpClient) { }
  public displayTheatres(moviename) {
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.http.get<Theatre[]>("http://localhost:5438/movie/display_theatres/"+moviename);
  }

  public  displayMovies(){
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.http.get<Movie[]>("http://localhost:5440/movie/display_movies");
} 
public  displayShows(theatrename){
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
return this.http.get<shows[]>("http://localhost:5439/movie/display_shows/"+theatrename);
} 
}
 export class Movie{
  private movieId:string ;
	private  moviename:string ;
  private genre:string ;
  private  director:string ;
  constructor(movie_Id:string , movie_Name:string ,genre:string ,director:string ){
    this.movieId;
    this.moviename;
    this.genre;
    this.director;
  }}
  export class Theatre{
    private theatre_id:number;
    private city_name:string;
    private theatre_name:string;
    private  moviename:string;
    constructor( theatre_id:number,
      city_name:string,
     theatre_name:string,
      moviename:string){
        this.theatre_id;
        this.city_name;
        this.theatre_name;
        this.moviename;
      }
  }

export class shows {
  private sno:number;
	private timings:string ;
	private show:String ;
  private theatre_name:String ;
  constructor(sno:number,
    timings:string ,
     show:String ,
     theatre_name:String ){

  }

}
  
  
    
