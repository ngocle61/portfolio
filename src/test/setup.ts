import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

const noop = () => undefined;

const createMediaQueryList = (query: string) =>
  ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: noop,
    removeEventListener: noop,
    addListener: noop,
    removeListener: noop,
    dispatchEvent: () => false,
  }) as unknown as MediaQueryList;

class ResizeObserverStub {
  observe = noop;
  unobserve = noop;
  disconnect = noop;
}

class IntersectionObserverStub {
  readonly root = null;
  readonly rootMargin = '';
  readonly thresholds = [];
  observe = noop;
  unobserve = noop;
  disconnect = noop;
  takeRecords = () => [];
}

window.matchMedia = createMediaQueryList;
globalThis.ResizeObserver ??= ResizeObserverStub;
globalThis.IntersectionObserver ??=
  IntersectionObserverStub as unknown as typeof IntersectionObserver;
Element.prototype.scrollIntoView = noop;
Element.prototype.hasPointerCapture = () => false;
Element.prototype.setPointerCapture = noop;
Element.prototype.releasePointerCapture = noop;

afterEach(() => {
  cleanup();
  localStorage.clear();
});
