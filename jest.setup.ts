import '@testing-library/jest-dom'

// Mock do ResizeObserver para componentes Radix UI
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
