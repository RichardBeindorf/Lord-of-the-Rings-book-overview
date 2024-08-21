import { Component } from "@angular/core";

@Component({
	selector: "app-home",
	template: `<main>
    <h1>The Lord of the Rings</h1>
    <p class="intro">The Lord of the Rings is an epic high-fantasy novel by English author and scholar
    J. R. R. Tolkien. Set in Middle-earth, intended to be Earth at some time in the distant past, the story began as a sequel to Tolkien's 1937 children's book The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling books ever written, with over 150 million copies sold.</p>
  
    <section>
      <h2>All Volumes</h2>
      <picture>
      <div>
        <a routerLink="/details/fellowship" routerLinkActive="active"><img src="assets/Fellow.jpg"  height="140" width="90"/></a>
        <p class="book-title"><span>The Fellowship of the Ring</span></p>
      </div>

      <div>
        <a routerLink="/details/towers" routerLinkActive="active"><img src="assets/TwoT.jpg" height="140" width="90"/></a>
        <p class="book-title"><span>The Two Towers</span></p>
      </div>

      <div>
        <a routerLink="/details/return" routerLinkActive="active"><img src="assets/RotK.jpg"  height="140" width="90"/></a>
        <p class="book-title"><span>The Return of the King</span></p>
      </div>
      </picture>

    </section>
  </main>`,
	styleUrls: ["./home.styles.css"],
})
export class Home {
	title = "Homepage";
}
