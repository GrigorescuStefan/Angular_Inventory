import { NgIfContext } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent{
  items : string[] = [
    "Maia" ,"Maia" ,"Maia" , "Maia", "Maia", "Maia"
]

  ngOnInit(): void {

  }

}
