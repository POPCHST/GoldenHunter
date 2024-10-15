import axios from "axios";

export const msToSec: number = 1000;
export const secToMin: number = 60;
export const msToMin: number = msToSec * secToMin;
// export const uuidv4 = v4;
export const emcVersion = 'emc-smt' ;
export const emcLastModify = '6/2024';

export const appApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5 * msToSec,
  // signal: appApiAbortController.signal
})