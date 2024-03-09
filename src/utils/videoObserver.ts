import { ExtendedHTMLVideoElement } from '@/types/video'

export const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const { isIntersecting, target } = entry
      ;(target as ExtendedHTMLVideoElement)._handleIntersect(isIntersecting)
    })
  },
  {
    // Si no se le pasa nada seria el documento en general, html.
    root: document.querySelector('#observer'),
    rootMargin: '0px',
    threshold: 0.9
  }
)

