import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  languages = [
    { name: 'English', value: 'en', flag: 'assets/images/en.png' },
    { name: 'Français', value: 'fr', flag: 'assets/images/fr.jpg' },
    { name: 'عربي', value: 'ar', flag: 'assets/images/Tn.jpg' }
  ];
  selectedLanguage = 'English';
  selectedFlag = 'assets/images/en.png';
  switchLanguage(value: string) {
    const selectedLanguage = this.languages.find(language => language.value === value);
    if (selectedLanguage) {
      this.selectedLanguage = selectedLanguage.name;
      this.selectedFlag = selectedLanguage.flag;
      // Add your translation switch logic here
    }
  }
}
