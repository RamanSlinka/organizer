import { Injectable } from '@angular/core';
import {Category} from "../models/category.model";
import {TestData} from "../data/test-data";
import {Task} from "../models/task.model";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  public taskSubject = new BehaviorSubject <Task[]>(TestData.tasks)
  public categoriesSubject = new BehaviorSubject <Category[]>(TestData.categories)

  constructor() {this.fillTasks() }

 // public getCategories (): Category[] {
 //    return  TestData.categories;
 //  }

  public fillTasks(): void {
    this.taskSubject.next(TestData.tasks)

  }
  public fillTasksByCategory(category: Category): void {
    const tasks = TestData.tasks.filter(task => task.category === category)
    console.log(tasks)
    this.taskSubject.next(tasks)
  }

}
