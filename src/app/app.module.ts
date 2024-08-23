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
import { SvgComponent } from "./details/svg.component";
import { ArrowLeft } from "../assets/svg.arrow-component-left";
import { ArrowRight } from "../assets/svg.arrow-component-right";

@NgModule({
	declarations: [
		AppComponent,
		DetailsLayoutComponent,
		Home,
		Fellow,
		Return,
		Towers,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		RouterModule,
		SvgComponent,
		ArrowLeft,
		ArrowRight,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
