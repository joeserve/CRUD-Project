import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private apiServer = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient,private firestore: AngularFirestore) 
  { 

  }

  create(object : any, endpointPrefix: string): Observable<any> {
    return of(this.firestore.collection(endpointPrefix).add(object))
    
  }  
  getById(id: string, endpointPrefix: string): Observable<any> {
    return this.firestore.collection(endpointPrefix).doc(id).valueChanges()

  }

  getAll(endpointPrefix: string): Observable<any[]> {
    return this.firestore.collection(endpointPrefix).snapshotChanges();

  }

  update(id: string, object : any,endpointPrefix: string){
    this.firestore.doc(endpointPrefix + id).update(object);
  }

  delete(id: string , endpointPrefix : string){
      this.firestore.doc(endpointPrefix + id).delete();
  }

  
}