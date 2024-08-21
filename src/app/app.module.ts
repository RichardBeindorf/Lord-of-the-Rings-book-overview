import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DetailsLayoutComponent } from "./details/details-layout.component";
import { RouterModule } from "@angular/router";
import { Home } from "./main/home";
import { Fellow } from "./details/fellowship";
import { Return } from "./details/return";
import { Towers } from "./details/towers";

@NgModule({
	declarations: [
		AppComponent,
		DetailsLayoutComponent,
		Home,
		Fellow,
		Return,
		Towers,
	],
	imports: [BrowserModule, AppRoutingModule, RouterModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
