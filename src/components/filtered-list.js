import { html } from 'lit-element';
import {repeat} from 'lit-html/directives/repeat.js';
import { ConnectedBaseComponent } from './connected-base-component.js';

// eslint-disable-next-line import/extensions
import * as app from '../redux/app';

export class FilteredList extends ConnectedBaseComponent {
  static get properties() {
    return {
      list: { type: Array }
    }
  }

  render() {
    return html`
      <div class="flex flex-row flex-wrap">
      ${repeat(this.list, (item) => item.id, (item) => html`
          <div class="p-4 m-2 shadow-md bg-white rounded w-64">
            ${item.name}
          </div>
        `
      )}
      </div>
    `;
  }

  stateChanged(state) {
    this.list = app.selectors.filteredList(state);
  }
}

customElements.define('filtered-list', FilteredList);
