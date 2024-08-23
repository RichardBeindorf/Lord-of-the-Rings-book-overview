import { Component } from "@angular/core";
import { SvgComponent } from "./svg.component";
import { ArrowLeft } from "src/assets/svg.arrow-component-left";

@Component({
	selector: "app-fellowship",
	template: `
  <main class="main">
    <div class="down">
    <app-svg></app-svg>
    <a routerLink="/" routerLinkActive="active"><span  class="italcs">All Volumes</span></a>
    </div>
    <section>
        <h1>The Fellowship of the Ring</h1>
        <p>The Fellowship of the Ring is the first volume of J. R. R. Tolkiens epic advanture The Lord of the Ring. It is followed by The Two Towers and The Return of the King.</p>
    </section>

    <section class="BookDetails one" role="Cover picture and chapter book episode overview">
        <div class="chapter-container">
        <div class="chapters">
          <p>Book I</p>
          <h3>The Ring Sets Out</h3>
        </div>
        <div class="chapters">
          <p>Book II</p>
          <h3>The Ring Goes South</h3>
        </div>
        </div>
        <img src="assets/Fellow.jpg" height="140" width="90"/>
    </section>

    <div class="button-container">
        <div class="button next">
          <a routerLink="/details/towers" routerLinkActive="active">
            <span class="italcs">Next Volume</span> <br> <span>The Two Towers</span>
          </a>
          <new-arrow></new-arrow>
        </div>
        <div class="button previous">
          <app-arrow-left></app-arrow-left>
          <a routerLink="/details/fellowship" routerLinkActive="active">
            <br><span class="italcs">Previous Volume</span> <br> <span>The Fellowship of the Ring</span>
          </a>
        </div>
    </div>
  </main>
    `,
	styleUrls: ["./details.styles.css"],
})
export class Fellow {
	title = "The Fellowship";
}
