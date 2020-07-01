import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-intel-browser',
  templateUrl: './intel-browser.component.html',
  styleUrls: ['./intel-browser.component.css']
})
export class IntelBrowserComponent implements OnInit {
  source: SafeResourceUrl = null;
  
  options = [
    {name: 'Official site', url: 'https://www.starwars.com/'},
    {name: 'Fandom', url: 'https://starwars.fandom.com'}
  ];

  selectSource(value: string) {
    this.source = value ? this.sanitizer.bypassSecurityTrustResourceUrl(value) : null;
  }

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
