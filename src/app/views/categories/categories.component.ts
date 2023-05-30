import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../services/data-handler.service";
import {Category} from "../../models/category.model";
import {Subject} from "rxjs";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent implements OnInit {
  public categories: Category[] | undefined;
  public selectedCategory  : Category | null = null;

  constructor(private _dataHandler: DataHandlerService) {
  }

  ngOnInit() {
     this._dataHandler.categoriesSubject.subscribe(categories => this.categories = categories)
  }

public showTaskByCategory(category: Category) {
    this.selectedCategory = category;
    this._dataHandler.fillTasksByCategory(category)
  }
}
