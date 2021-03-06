import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'dashboard-app',
  templateUrl: './dashboard_5.component.html',
})
export class Dashboard5Component implements AfterViewInit {
    constructor(private elementRef: ElementRef) { }

    ngAfterViewInit(): void {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "./assets/js/scripts/dashboard_5_demo.js";
        this.elementRef.nativeElement.appendChild(s);
    }

}
