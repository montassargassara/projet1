import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestService {
  private apiUrl = 'http://localhost:8080/api/leave-requests'; // Adjust to your API URL

  constructor(private http: HttpClient) {}

  submitLeaveRequest(leaveRequest: any): Observable<any> {
    return this.http.post(this.apiUrl, leaveRequest);
  }
}
