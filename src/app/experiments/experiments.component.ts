import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  equipment = [
    "Mars soil sample",
    "Plant growth in habitat",
    "Human bone density"
  ];

  invalid = false

  memberBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
  }

  add(item: string) {
    if (this.equipment.includes(item)) {
      this.invalid = true
      return false
    }
    this.equipment.push(item);
    this.invalid = false
    return true
  }

  remove(item: string) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }

  edit(item: object) {
    let index = this.equipment.indexOf(item);
    this.memberBeingEdited = item;
  }

  save(oldName: string, name: string) {
    if( this.equipment.includes(name)){
      this.remove(name)
    }
    let index = this.equipment.indexOf(oldName)
    this.equipment[index] = name;
    this.memberBeingEdited = null;
    }
}
