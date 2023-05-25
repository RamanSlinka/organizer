import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../services/data-handler.service";
import {Category} from "../../models/category.model";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent implements OnInit {
  public categories: Category[] | undefined;

  constructor(private _dataHandler: DataHandlerService) {
  }

  ngOnInit() {
    this.categories = this._dataHandler.getCategories()
  }
}
