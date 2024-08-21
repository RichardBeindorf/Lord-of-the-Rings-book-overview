import { Component } from "@angular/core";

@Component({
	selector: "app-main-layout",
	template: `
    <router-outlet></router-outlet>
  `,
	styleUrls: ["./home.styles.css"],
})
export class MainLayoutComponent {}
