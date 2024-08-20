import { Component } from "@angular/core";

@Component({
	selector: "return",
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
        <img src="../../assets/Fellow.jpg"/>
    </section>

    <a><span>Next Vokume <br> The Two Towers</span></a>
  </main>
    `,
	styleUrls: ["./details.styles.css"],
})
export class Return {
	title = "The Return of the King";
}
