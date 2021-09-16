import { html } from 'lit-element';
import { ConnectedBaseComponent } from './connected-base-component.js';
import './app-header.js';
import './my-filters.js';
import './filtered-list.js';

export class MyApp extends ConnectedBaseComponent {
  static get properties() {
    return {};
  }

  render() {
    return html`
      <app-header></app-header>
      <div class="flex flex-row flex-grow">
        <my-filters class="w-4/12 max-w-sm p-4 shadow"></my-filters>
        <filtered-list class="w-4/6 p-4"></filtered-list>
      </div>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('my-app', MyApp);
