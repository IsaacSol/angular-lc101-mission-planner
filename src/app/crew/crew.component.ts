import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  memberBeingEdited: object = null;

  invalid = false

  constructor() { }

  ngOnInit() {
  }

  add(memberName: string, isFirst: boolean) {
    for (let member of this.crew){
      if( member.name.toLowerCase() === memberName.trim().toLocaleLowerCase()){
        this.invalid = true
        return false
      }
    }
    this.crew.push({name: memberName, firstMission: isFirst});
    this.invalid = false
    return true
  }

  remove(member: object) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  edit(member: object) {
    let index = this.crew.indexOf(member);
    this.memberBeingEdited = member;
 }

 save(name: string, member: object) {
  for (let member of this.crew){
    if( member.name.toLowerCase() === name.trim().toLocaleLowerCase()){
      this.remove(member)
    }
  }
  member['name'] = name;
  this.memberBeingEdited = null;
  }

}
