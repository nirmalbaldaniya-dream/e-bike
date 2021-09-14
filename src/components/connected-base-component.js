import { LitElement } from 'lit-element';
import { connect } from '../redux/connect-mixin.js';
import { store } from '../redux/store.js';

export class ConnectedBaseComponent extends connect(store)(LitElement) {
  createRenderRoot() {
    return this;
  }
}

customElements.define('connected-base-component', ConnectedBaseComponent);
