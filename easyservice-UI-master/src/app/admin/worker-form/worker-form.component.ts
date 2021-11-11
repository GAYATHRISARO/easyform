import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Worker } from 'src/app/model/worker';
import { WorkerService } from 'src/app/services/worker.service';

@Component({
  selector: 'app-worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.css'],
})
export class WorkerFormComponent implements OnInit {
  workers: Worker;
  constructor(private _route: Router, private _workerService: WorkerService) {}

  ngOnInit(): void {}

  onAddWorker = (workerForm: NgForm) => {
    console.log(workerForm.value);
    this._workerService.addWorker(workerForm.value).subscribe(
      (data: Worker) => {
        console.log(data);
      },
      (error) => console.log(error),
      () => console.log('completed')
    );
  };
}
