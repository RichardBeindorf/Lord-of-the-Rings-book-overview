import { Component } from "@angular/core";

@Component({
	selector: "app-return",
	template: `
  <main>
    <a><span>All Vokumes</span></a>

    <section>
        <h1>The Lord of the Rings <br> Fanpage</h1>
        <p>The Return of the King is the thrid and last volume of J. R. R. Tolkiens epic advanture The Lord of the Ring.</p>
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
        <img src="assets/RotK.jpg"/>
    </section>

    <a routerLink="return" routerLinkActive="active"><span>Next Volume <br> The Return of the King</span></a>
    <a routerLink="fellowship" routerLinkActive="active"><span>Previous Volume <br> The Fellowship of the Ring</span></a>
  </main>
    `,
	styleUrls: ["./details.styles.css"],
})
export class Return {
	title = "The Return of the King";
}
