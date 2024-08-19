import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	template: `
  <main>
    <a><span>All Vokumes</span></a>

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
        <img src="../../assets/Fellow.jpg"/>
    </section>

    <a><span>Next Vokume <br> The Two Towers</span></a>
  </main>
    `,
	styleUrls: ["./app.component.css"],
})
export class AppComponent {
	title = "The Fellowship";
}
