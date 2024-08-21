import { Component } from "@angular/core";

@Component({
	selector: "app-towers",
	template: `
  <main class="main">
    <div class="down">
    <a routerLink="/" routerLinkActive="active"><span  class="italcs">All Volumes</span></a>
    </div>

      <section>
        <h1>The Two Towers</h1>
        <p>The Two Towers is the second volume of J. R. R. Tolkien's epic adventure The Lord of the Rings. It is followed by The Return of the King.</p>
      </section>

    <section class="BookDetails two" role="Cover picture and chapter book episode overview">
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
        <img src="assets/TwoT.jpg" height="140" width="90"/>
      </section>

      <div class="button-container">
      <div class="button next">
      <a routerLink="/details/return" routerLinkActive="active">
        <span class="italcs">Next Volume</span> <br> <span>The Return of the King</span>
      </a>
    </div>
    <div class="button previous">
      <a routerLink="/details/fellowship" routerLinkActive="active">
        <br><span class="italcs">Previous Volume</span> <br> <span>The Fellowship of the Ring</span>
      </a>
    </div>
      </div>
    </main>
  `,
	styleUrls: ["./details.styles.css"],
})
export class Towers {
	title = "The Two Towers";
}
