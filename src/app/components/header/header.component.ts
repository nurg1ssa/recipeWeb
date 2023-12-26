import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  collapsed = true;

  constructor(private dataStorageService: DataStorageService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes()
  }
}
