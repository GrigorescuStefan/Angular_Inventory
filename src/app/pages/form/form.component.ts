import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/models/item';
import { Observable, map } from 'rxjs';

export interface DialogData {
  idToBeEdited: number | undefined;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  formButtonText!: string;
  isEditing: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public itemService: ItemService
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }

  saveItem(): void {
      const item: Item = {
        _id: this.data.idToBeEdited,
        name: this.form.value.name,
        description: this.form.value.description,
        quantity: this.form.value.quantity,
      };
      if (this.isEditing) {
        this.itemService.editItem(item).subscribe();
        this.dialogRef.close();
      } else {
        this.itemService.createItem(item).subscribe();
        this.dialogRef.close();
      }
  }

  ngOnInit(): void {
    this.createForm();

    if (this.data.idToBeEdited) {
      this.isEditing = true;
      this.formButtonText = 'Save';
    } else {
      this.formButtonText = 'Add';
    }
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      name: [null],
      description: [null],
      quantity: [null],
    });
  }
}
