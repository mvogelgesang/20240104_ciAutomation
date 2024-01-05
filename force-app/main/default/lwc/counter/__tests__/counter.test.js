import { createElement } from "lwc";
import Counter from "c/counter";

describe("c-counter", () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  // Helper function to wait until the microtask queue is empty. This is needed for promise
  // timing when calling imperative Apex.
  async function flushPromises() {
    return Promise.resolve();
  }

  it("Default component renders as expected", async () => {
    // Arrange
    const element = createElement("c-counter", {
      is: Counter
    });

    // Act
    document.body.appendChild(element);

    // Assert
    let counter = element.shadowRoot.querySelector(".count").innerHTML;
    expect(counter).toBe("0");
  });

  it("Component renders as expected when custom startingCount value passed", async () => {
    // Arrange
    const element = createElement("c-counter", {
      is: Counter
    });
    Object.assign(element, { startingCount: 4 });
    // Act
    document.body.appendChild(element);

    // Assert
    let counter = element.shadowRoot.querySelector(".count").innerHTML;
    expect(counter).toBe("4");
  });

  it("Plus button increments by one", async () => {
    // Arrange
    const element = createElement("c-counter", {
      is: Counter
    });

    // Act
    document.body.appendChild(element);
    const button = element.shadowRoot.querySelectorAll("lightning-button-icon");
    button[1].click();
    await flushPromises();
    // Assert
    let counter = element.shadowRoot.querySelector(".count").innerHTML;
    expect(counter).toBe("1");
  });

  it("Minus button increments by one", async () => {
    // Arrange
    const element = createElement("c-counter", {
      is: Counter
    });

    // Act
    document.body.appendChild(element);
    const button = element.shadowRoot.querySelectorAll("lightning-button-icon");
    button[0].click();
    await flushPromises();
    // Assert
    let counter = element.shadowRoot.querySelector(".count").innerHTML;
    expect(counter).toBe("-1");
  });
});
