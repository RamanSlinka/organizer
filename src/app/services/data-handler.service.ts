import { Injectable } from '@angular/core';
import {Category} from "../models/category.model";
import {TestData} from "../data/test-data";
import {Task} from "../models/task.model";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() { }

 public getCategories (): Category[] {
    return  TestData.categories;
  }

  public getTasks(): Task[] {
    return TestData.tasks
  }

}
