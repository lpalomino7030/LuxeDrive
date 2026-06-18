import { Component, Input } from '@angular/core';
import { OptionSideBar } from './option-side-bar/option-side-bar';

@Component({
  selector: 'app-sidebar',
  imports: [OptionSideBar],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

}
