import { LightningElement, api } from "lwc";

export default class Counter extends LightningElement {
  @api startingCount = 0;
  count;

  connectedCallback() {
    this.count = this.startingCount;
  }

  addOne() {
    this.count++;
    this.checkCount();
  }
  minusOne() {
    this.count--;
    this.checkCount();
  }

  checkCount() {
    let span = this.template.querySelector(".count");
    if (this.count < 0) {
      span.classList.add("negative");
    } else {
      span.classList.remove("negative");
    }
  }
}
