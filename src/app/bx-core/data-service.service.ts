import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  apiUrl = 'https://jsonplaceholder.typicode.com/comments'; // Replace this with your API endpoint

  constructor(private http: HttpClient) { }

  // Fetches data from the API within a specified range
    // Fetches data from the API within a specified range
    getData(start: number, end: number): Observable<any[]> {
      const url = `${this.apiUrl}?_start=${start}&_end=${end}`; // Use _start and _end for pagination
      return this.http.get<any[]>(url);
    }
    chunkSize = 20; // Number of items to load per chunk
    totalItems = 1000; // Total number of items in the dataset

  
  // Simulated API call to fetch data for a given range
  fetchData(start: number, end: number): Observable<any[]> {
    // Simulating API call delay
    return of(new Array(end - start).fill(null).map((_, index) => {
      return { id: start + index + 1, name: `Item ${start + index + 1}` };
    }));
  }

  // // Fetches a chunk of data
  // fetchChunk(start: number, end: number): Observable<any[]> {
  //   return this.fetchData(start, end);
  // }

  // // Fetches initial chunk of data
  // fetchInitialChunk(): Observable<any[]> {
  //   return this.fetchData(0, this.chunkSize);
  // }

  // // Check if there's more data to load
  // hasMoreData(currentCount: number): boolean {
  //   return currentCount < this.totalItems;
  // }

}
