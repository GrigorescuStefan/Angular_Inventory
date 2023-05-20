import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { ItemService } from '../../services/item.service';
import { Item } from 'src/models/item';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  error?: string;
  itemList!: Item[];
  constructor(public dialog: MatDialog, public itemService: ItemService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems().subscribe(
      (list: Item[]) => {
        this.itemList = list;
      },
      (err) => {
        this.error = err.error;
      }
    );
  }

  deleteItem(id: number | undefined) {
      this.itemService.deleteItem(id!).subscribe(
        () => {
          this.getItems();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getItemById(id: number): void {
    this.itemService.getItemById(id!).subscribe();
  }

  createItem(item: Item): void {
    this.itemService.createItem(item!).subscribe();
  }

  editItem(item: Item | undefined): void {
    this.itemService.editItem(item!).subscribe();
  }

  openDialog(id: number | null | undefined): void {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '300px',
      data: { idToBeEdited: id },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getItems();
      console.log('The dialog was closed');
    });
  }
}
