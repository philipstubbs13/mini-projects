# Web Components Crash Course

* <https://www.youtube.com/watch?v=PCWaFLy3VUo>
* Set of web platform APIs that sllow us to create custom, reusable, and encapsulated html tags to use in web pages and web apps.
* Web components do not require any special 3rd party librares or frameworks but can certainly be used with them.
* 3 main building blocks
  * custom elements
  * Shadow DOM
  * HTML templates
* Custom elements
  * create custom html tags
  * create custom class
  * lifecycle methods available.
  * custom elements lifecycle methods
    * constructor()
    * connectedCallback()
    * disconnectedCallback()
    * attributeChangedCallback(attributeName, oldValue, newValue)
* Shadow DOM
  * Used for self-contained components
  * Encapsulates styles and markup.
  * Create with element.attachShadow({ mode: open })
  * Creates a "shadowRoot" that we can reference and interact with.
* HTML templates
  * Define the encapsulated markup of our web component.
  * Template tag stores markup on page.
  * Include both HTML and CSS in templates.
  * Use slots to add custom text.
