import { Component } from "@angular/core";

@Component({
	selector: "app-fellowship",
	template: `
  <main>
    <a routerLink="/" routerLinkActive="active"><span class="italcs">All Volumes</span></a>
    <section>
        <h1>The Lord of the Rings <br> Fanpage</h1>
        <p>The Fellowship of the Ring is the first volume of J. R. R. Tolkiens epic advanture The Lord of the Ring. It is followed by The Two Towers and The Return of the King.</p>
    </section>

    <section role="Cover picture and chapter book episode overview">
        <div>
        <p>Book I</p>
        <h3>The Ring Sets Out</h3>
        </div>
        <div>
        <p>Book II</p>
        <h3>The Ring Goes South</h3>
        </div>
        <img src="assets/Fellow.jpg" height="140" width="90"/>
    </section>

    <div class="button">
      <a routerLink="/details/return" routerLinkActive="active">
        <span class="italcs">Next Volume</span> <br> <span>The Return of the King</span>
      </a>
    </div>
    <div class="button">
      <a routerLink="/details/fellowship" routerLinkActive="active">
        <br><span class="italcs">Previous Volume</span> <br> <span>The Fellowship of the Ring</span>
      </a>
    </div>
  </main>
    `,
	styleUrls: ["./details.styles.css"],
})
export class Fellow {
	title = "The Fellowship";
}
