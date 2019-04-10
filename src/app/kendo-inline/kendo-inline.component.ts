import { Component, OnInit, OnDestroy, ViewChild, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { KendoServiceService } from './kendo-service.service';
import { GridComponent } from '@progress/kendo-angular-grid';
import { Router } from '@angular/router';

const createFormGroup = (dataItem: { Discontinued: any; ProductID: any; ProductName: any; UnitPrice: any; UnitsInStock: any; }) => new FormGroup({
  'Discontinued': new FormControl(dataItem.Discontinued),
  'ProductID': new FormControl(dataItem.ProductID),
  'ProductName': new FormControl(dataItem.ProductName, Validators.required),
  'UnitPrice': new FormControl(dataItem.UnitPrice),
  'UnitsInStock': new FormControl(dataItem.UnitsInStock, Validators.compose([Validators.required, Validators.pattern('^[0-9]{1,3}')]))
});

@Component({
  selector: 'app-kendo-inline',
  templateUrl: './kendo-inline.component.html',
  styleUrls: ['./kendo-inline.component.css']
})

export class KendoInlineComponent implements OnInit {
  public getProductLists: any[];
  public editedRow: number;
  public isNew: boolean;
  public counter: number;
  public cancelClick: boolean;
  @ViewChild(GridComponent) public grid: GridComponent;
  public formGroup: FormGroup;

  constructor(private productService: KendoServiceService, private router: Router) { }

  public ngOnInit() {
    this.getProductLists = this.productService.productDatas();
    this.counter = 0;
  }

  //edit row
  public cellClickHandler(event: { dataItem: { Discontinued: any; ProductID: any; ProductName: any; UnitPrice: any; UnitsInStock: any; }; rowIndex: number; }) {
    this.formGroup = createFormGroup(event.dataItem);
    this.grid.editRow(event.rowIndex, this.formGroup);
    this.editedRow = event.rowIndex;
    this.cancelClick = true;
    this.isNew = false;
  }
  //add row
  public addHandler(event: { rowIndex: any; }, form: string) {
    if (form == 'form') {
      this.router.navigate(['EmployeeComp'])
      return;
    }
    this.formGroup = createFormGroup({
      'Discontinued': false,
      'ProductID': "",
      'ProductName': "",
      'UnitPrice': 0,
      'UnitsInStock': ""
    })
    this.isNew = this.cancelClick = true;
    this.grid.addRow(this.formGroup);

  }
  //close row
  public cancelHandler() {
    this.grid.closeRow(this.editedRow);
    this.editedRow = undefined;
    this.cancelClick = false;
  }

  //save function
  public saveHandler() {
    if (this.isNew) {
      let product = this.formGroup.value;
      product.ProductID = this.counter++;
      this.getProductLists.splice(0, 0, product);
    } else {
      let product = this.formGroup.value;
      Object.assign(
        this.getProductLists.find(({ ProductID }) => ProductID === product.ProductID),
        product
      );
    }
    this.cancelHandler();
  }
}
