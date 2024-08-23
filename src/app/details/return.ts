import { Component } from "@angular/core";

@Component({
	selector: "app-return",
	template: `
  <main class="main">
    <div class="down">
    <app-svg></app-svg>
    <a routerLink="/" routerLinkActive="active"><span  class="italcs">All Volumes</span></a>
    </div>
    <section>
        <h1>The Return of the King</h1>
        <p>The Return of the King is the thrid and last volume of J. R. R. Tolkiens epic advanture The Lord of the Ring.</p>
    </section>

    <section class="BookDetails three" role="Cover picture and chapter book episode overview">
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
        <img src="assets/RotK.jpg" height="140" width="90"/>
    </section>

    <div class="button-container">
        <div class="button next">
      <a routerLink="/details/fellowship" routerLinkActive="active">
        <span class="italcs">Next Volume</span> <br> <span>The Fellowship of the Ring</span>
      </a>
      <new-arrow></new-arrow>
    </div>
    <div class="button previous">
      <app-arrow-left></app-arrow-left>
      <a routerLink="/details/towers" routerLinkActive="active">
        <br><span class="italcs">Previous Volume</span> <br> <span>The Two Towers</span>
      </a>
    </div>
    </div>
  </main>
    `,
	styleUrls: ["./details.styles.css"],
})
export class Return {
	title = "The Return of the King";
}
