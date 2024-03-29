import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-clientuser-navbar',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './clientuser-navbar.component.html',
  styleUrl: './clientuser-navbar.component.css'
})
export class ClientuserNavbarComponent {
  sidebarActive:boolean = false;
  isSelected: boolean = false;
  hidenavlist: boolean = true;
  hidenavknowledge: boolean = false;
  hidenavknowledge1:boolean=false;
  hidenavknowledge2:boolean=false;
  hidenavknowledge3:boolean=false;
  hidenavknowledge4:boolean=false;
  hidenavknowledge5:boolean=false;
  hidenavknowledge6:boolean=false;
  hidenavticket: boolean = false;
  hidenavtraining: boolean = false;
  hidenavhelp: boolean = false;
  hidenavprospects: boolean = false;
  hidenavMaster:boolean=false;
  hidenavConfig:boolean=false;
  hidenavReport:boolean=false;
  isClicked: boolean = false;
  isDropdownOpen: boolean = false;
  userName: string = 'John Doe(Finance)'; 
   isMenuOpen: boolean = false;
  
  toggleSelection() {
    this.isSelected = !this.isSelected;
  }


  hidenav() {
    this.hidenavlist = !this.hidenavlist;
    this.isSelected = !this.isSelected;
   
  }
  hidenavknowl() {
    this.hidenavknowledge = !this.hidenavknowledge;
    this.isSelected = !this.isSelected;
  }
  hidenavknowl1() {
    this.hidenavknowledge1 = !this.hidenavknowledge1;
    this.isSelected = !this.isSelected;
  }

  hidenavknowl2() {
    this.hidenavknowledge2 = !this.hidenavknowledge2;
    this.isSelected = !this.isSelected;
  }
  hidenavknowl3() {
    this.hidenavknowledge3 = !this.hidenavknowledge3;
    this.isSelected = !this.isSelected;
  }
  hidenavknowl4() {
    this.hidenavknowledge4 = !this.hidenavknowledge4;
    this.isSelected = !this.isSelected;
  }
  hidenavknowl5() {
    this.hidenavknowledge5 = !this.hidenavknowledge5;
    this.isSelected = !this.isSelected;
  }
  hidenavknowl6() {
    this.hidenavknowledge6 = !this.hidenavknowledge6;
    this.isSelected = !this.isSelected;
  }

  hidenavticketl() {
    this.hidenavticket = !this.hidenavticket;
    this.isSelected = !this.isSelected;
  }
  hidenavtrainingl() {
    this.hidenavtraining = !this.hidenavtraining;
    this.isSelected = !this.isSelected;
  }
  hidenavhel() {
    this.hidenavhelp = !this.hidenavhelp;
    this.isSelected = !this.isSelected;
  }
  hidenavprospect() {
    this.hidenavprospects = !this.hidenavprospects;
    this.isSelected = !this.isSelected;
  }
  hidenavmaster(){
    this.hidenavMaster = !this.hidenavMaster;
    this.isSelected = !this.isSelected;
  }
  hidenavconfig(){
    this.hidenavConfig = !this.hidenavConfig;
    this.isSelected = !this.isSelected;
  }
  hidenavreport(){
    this.hidenavReport = !this.hidenavReport;
    this.isSelected = !this.isSelected;
  }
  
  toggleRotation() {
    this.isClicked = !this.isClicked;
  }
  toggle() {
    this.isClicked = !this.isClicked;
  }
  togglerotation() {
    this.isClicked = !this.isClicked;
  }
  ToggleRotation() {
    this.isClicked = !this.isClicked;
  }
  togglehelp() {
    this.isClicked = !this.isClicked;
  }
  toggleprospects() {
    this.isClicked = !this.isClicked;
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; 
  }
}






