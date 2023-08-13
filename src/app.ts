class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;

  constructor() {
    // We are getting access to the HTML elements
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    // import the content of "project-input" element and render to the dom
    const importedHTMLContent = document.importNode(
      this.templateElement.content, // content exist on the HTMLTemplateElement
      true
    );
    this.element = importedHTMLContent.firstElementChild as HTMLFormElement;

    // Call the attach function when the object is created
    this.attach();
  }

  // function that render the content
  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const projectInput = new ProjectInput();
