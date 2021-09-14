export const LOAD = 'APP_LOAD_DATA';
export const LOAD_SUCCESS = 'APP_LOAD_DATA_SUCCESS';
export const LOAD_FAILED = 'APP_LOAD_DATA_FAILED';

export const load = ({minHeight, maxHeight}) => ({
    type: LOAD,
    minHeight,
    maxHeight
  })
