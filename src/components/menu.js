import { LitElement, html, css } from 'lit-element'

export default class MenuComponent extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          box-sizing: border-box;
        }
        .nav {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
        }
        #main > ul {
          display: grid;
          grid-template-columns: auto auto;
          grid-auto-rows: 110px;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        #main > ul > li {
          border: 1px solid #ccc;
          margin: var(--menu-list-item-margin);
          padding: 10px;
        }
        li.text a {
          color: #fff;
          text-decoration: none;

          font-size: 1.5em;
          word-wrap: break-word;
          word-break: break-all;

          margin: 0px;
          display: block;
          width: 100%;
          height: 100%;
        }
        li.text:nth-child(7n + 1) {
          background-color: #4397de;
        }
        li.text:nth-child(7n + 2) {
          background-color: #33b8d0;
        }
        li.text:nth-child(7n + 3) {
          background-color: #4ab75f;
        }
        li.text:nth-child(7n + 4) {
          background-color: #93796f;
        }
        li.text:nth-child(7n + 5) {
          background-color: #f1ac42;
        }
        li.text:nth-child(7n + 6) {
          background-color: #ea6361;
        }
        li.text:nth-child(7n + 7) {
          background-color: #7386c3;
        }

        @media (min-width: 600px) {
          #main > ul {
            grid-template-columns: auto auto auto;
            grid-auto-rows: 120px;
          }
        }
        @media (min-width: 1200px) {
          #main > ul {
            grid-template-columns: auto auto auto auto;
            grid-auto-rows: 130px;
          }
        }
        @media (min-width: 1800px) {
          #main > ul {
            grid-template-columns: auto auto auto auto auto;
            grid-auto-rows: 140px;
          }
        }
        @media (min-width: 2400px) {
          #main > ul {
            grid-template-columns: auto auto auto auto auto auto;
            grid-auto-rows: 150px;
          }
        }
      `
    ]
  }

  static get properties() {
    return {
      menuId: String,
      menus: Array,
      _subMenus: Array,
      routingTypes: Object
    }
  }

  constructor() {
    super()

    this.menus = []
    this._subMenus = []
  }

  render() {
    return html`
      <page-toolbar></page-toolbar>

      <ul class="nav">
        ${this.menus.map(
          (menu, idx) => html`
            <li><a href=${`/${menu.routing || 'base-menu-main'}/${idx}`}>${menu.name}</a></li>
          `
        )}
      </ul>

      <section id="main">
        <ul>
          ${(this.menus[this.menuId || 0] || this.menus[0]).children.map(
            subMenu =>
              html`
                <li
                  class="${subMenu.class} text"
                  style="grid-row: span ${subMenu.routing_type.toUpperCase() === 'STATIC' ? 1 : 2}"
                >
                  ${subMenu.routing_type.toUpperCase() === 'STATIC'
                    ? html`
                        <a href="${subMenu.routing}">${subMenu.name}</a>
                      `
                    : html`
                        ${subMenu.id_field
                          ? html`
                              <a href="${this.routingTypes[subMenu.routing_type]}/${subMenu[subMenu.id_field]}"
                                >${subMenu.name}</a
                              >
                            `
                          : html`
                              <a href="${this.routingTypes[subMenu.routing_type]}">${subMenu.name}</a>
                            `}
                      `}
                </li>
              `
          )}
        </ul>
      </section>
    `
  }
}

window.customElements.define('menu-component', MenuComponent)
