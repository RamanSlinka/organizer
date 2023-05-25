import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Task} from "../../models/task.model";
import {DataHandlerService} from "../../services/data-handler.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksComponent implements OnInit {
  public tasks: Task[] | undefined;

  constructor(private _dataHandler: DataHandlerService) {
  }

  ngOnInit() {
    this.tasks = this._dataHandler.getTasks()
  }
}
