import { Component, OnInit } from '@angular/core';
import { Theme } from '../theme';
import { THEMES } from '../demo-themes'; // demo-questions-2 for Starting screen.

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {

  selectedTheme: Theme;
  onSelect(theme: Theme): void {
    this.selectedTheme = theme;
  }
  themes = THEMES;

  constructor() {
  }

  ngOnInit() {
  }

}
