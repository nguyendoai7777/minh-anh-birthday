export function $<T = HTMLDivElement>(selector: string) {return document.querySelector(selector) as T; }

export function $$<T = HTMLDivElement>(selector: string) {return document.querySelectorAll(selector) as unknown as T[]; }
