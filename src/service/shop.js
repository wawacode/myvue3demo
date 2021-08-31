import { get } from './base'
export function getCarouselList() {
  return get('http://localhost:8080/mock/index.json')
}
