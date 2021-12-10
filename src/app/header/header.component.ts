import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  missionName: string = "Mars 2030";
  rocketName: string = "Plasma Max";
  editingMission: boolean = false;
  editingRocketName: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  updateMission(updatedName: string) {
    this.missionName = updatedName;
    this.editingMission = false;
  }
  updateRocketName(updatedName: string) {
    if(updatedName !== "") {
      this.rocketName = updatedName;
    } else {
      this.rocketName = "Plasma Max";
    }
    
    this.editingRocketName = false;
  }
}
