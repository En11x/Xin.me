export const useWindow = () => {
  return typeof process === 'undefined' ? window : undefined
}
