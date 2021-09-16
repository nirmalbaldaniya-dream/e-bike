/* eslint-disable class-methods-use-this */
import { html } from 'lit-element';
import { BaseComponent } from './base-component.js';
import '@material/mwc-slider/slider-range.js';
import { store } from '../redux/store.js';
import * as app from '../redux/app/index.js';

export class MyFilters extends BaseComponent {
  static get properties() {
    return {
      _minHeight: { type: Number },

      _maxHeight: { type: Number },
    };
  }

  constructor() {
    super();
    this._minHeight = 160;
    this._maxHeight = 180;
  }

  connectedCallback() {
    super.connectedCallback();
    this.__updateFilters({
      minHeight: this._minHeight,
      maxHeight: this._maxHeight,
    });
  }

  render() {
    return html`
      <style>
        mwc-slider-range {
          margin-left: -16px;
        }
      </style>
      <div class="text-2xl">Filters</div>
      <div class="text-lg mt-8">Height</div>
      <mwc-slider-range
        @input=${this.__onInput}
        discrete
        withTickMarks
        step="10"
        min="100"
        max="300"
        valueStart="${this._minHeight}"
        valueEnd="${this._maxHeight}"
      >
      </mwc-slider-range>
    `;
  }

  __onInput(e) {
    const { detail } = e;
    if (detail.thumb === 1) {
      this._minHeight = detail.value;
    } else {
      this._maxHeight = detail.value;
    }
    this.__updateFilters({
      minHeight: this._minHeight,
      maxHeight: this._maxHeight,
    });
  }

  __updateFilters({ minHeight, maxHeight }) {
    store.dispatch(app.actions.load({ minHeight, maxHeight }));
  }
}

customElements.define('my-filters', MyFilters);
