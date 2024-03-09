export interface ExtendedHTMLVideoElement extends HTMLVideoElement {
  _handleIntersect: (isIntersecting: boolean) => void
}

