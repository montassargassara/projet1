import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeaveRequestService } from '../../_services/leave-request.service';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrl: './leave-request.component.scss'
})
export class LeaveRequestComponent {
  leaveForm: FormGroup;

  constructor(private fb: FormBuilder,
    private leaveRequestService: LeaveRequestService) {
    this.leaveForm = this.fb.group({
      name: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      reason: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.leaveForm.valid) {
      this.leaveRequestService.submitLeaveRequest(this.leaveForm.value).subscribe(
        response => {
          console.log('Leave request submitted successfully', response);
          // Handle success response
        },
        error => {
          console.error('Error submitting leave request', error);
          // Handle error response
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}