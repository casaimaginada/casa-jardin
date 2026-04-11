import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname
  return (
    <article class="popover-hint">
      <h1>🌱 Esta semilla todavía está germinando</h1>
      <p>El contenido que buscás es parte del jardín de Casa Imaginada, pero todavía no tiene su página. Volvé pronto o explorá desde el inicio.</p>
      <a href="/casa-jardin/">Volver al jardín</a>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
