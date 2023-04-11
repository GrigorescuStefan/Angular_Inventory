import { NgIfContext } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/models/item';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit{

  error?: string;
  itemList!: Item[];
  items : string[] = [
    "Maia" ,"Maia" ,"Maia" , "Maia", "Maia", "Maia"
]
  constructor(public dialog: MatDialog, public itemService: ItemService) { }

  getItems(): void {
    this.itemService.getItems().subscribe((list: Item[]) => {
      this.itemList = list;
      
    }, (err) => {
      this.error = err.error;
    })
  }

  async openDialog(){
    const dialogRef = this.dialog.open(FormComponent, {
      width: '250px',
      data: {items: this.items},
    });


    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    })
  }

  ngOnInit(): void {

  }

}
