import { Component } from "@angular/core";

@Component({
	selector: "app-towers",
	template: `
    <main>
      <a><span>All Volumes</span></a>

      <section>
        <h1>The Lord of the Rings <br> Fanpage</h1>
        <p>The Two Towers is the second volume of J. R. R. Tolkien's epic adventure The Lord of the Rings. It is followed by The Return of the King.</p>
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
        <img src="assets/TwoT.jpg"/>
      </section>

      <a routerLink="return" routerLinkActive="active"><span>Next Volume <br> The Return of the King</span></a>
      <a routerLink="fellowship" routerLinkActive="active"><span>Previous Volume <br> The Fellowship of the Ring</span></a>
    </main>
  `,
	styleUrls: ["./details.styles.css"],
})
export class Towers {
	title = "The Two Towers";
}
