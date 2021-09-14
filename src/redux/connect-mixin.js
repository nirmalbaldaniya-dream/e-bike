export const connect = (store) => (baseElement) => class extends baseElement {

  connectedCallback() {
    if (super.connectedCallback) {
      super.connectedCallback();
    }
    this._storeUnsubscribe = store.subscribe(() => this.stateChanged(store.getState()));
    this.stateChanged(store.getState());
  }

  disconnectedCallback() {
    // eslint-disable-next-line no-unused-expressions
    this._storeUnsubscribe && this._storeUnsubscribe();
    if (super.disconnectedCallback) {
      super.disconnectedCallback();
    }
  }

  /**
   * The `stateChanged(state)` method will be called when the state is updated.
   */
  stateChanged(state) { }
};