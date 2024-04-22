import { Options } from "./options";
import { Instance, FlatpickrFn } from "./instance";

declare global {
  interface HTMLElement {
    datepr: (config?: Options) => Instance;
    _datepr?: Instance;
  }

  interface NodeList {
    datepr: (config?: Options) => Instance | Instance[];
  }

  interface HTMLCollection {
    datepr: (config?: Options) => Instance | Instance[];
  }

  interface Window {
    datepr: FlatpickrFn;
  }

  interface Date {
    fp_incr: (n: number) => Date;
  }
}
