# Clase: Flexbox y Diseño Responsivo

## 🧩 Introducción

### ¿Qué es *Mobile First*?
Es una estrategia de diseño web donde primero se crean las versiones para pantallas pequeñas (como teléfonos) y luego se adaptan a dispositivos más grandes. Esto asegura una mejor experiencia de usuario en móviles, que hoy representan la mayoría del tráfico web.

### ¿Qué es *Diseño Responsivo*?
El diseño responsivo adapta el contenido y la estructura de un sitio web al tamaño del dispositivo (móvil, tablet o escritorio) usando **CSS flexible**, **media queries**, e imágenes y tablas ajustables.

---

## 📸 Responsividad básica con imágenes

Para hacer una imagen adaptable a cualquier tamaño de pantalla:

```html
<style>
  img {
    max-width: 100%; /* la imagen nunca será más ancha que su contenedor */
    height: auto; /* mantiene la proporción original */
    display: block; /* elimina espacios en línea */
  }
</style>

<img src="imagen.jpg" alt="Ejemplo responsivo">
```

---

## 📋 Responsividad básica con tablas

Para evitar que las tablas se desborden en pantallas pequeñas:

```html
<style>
  .tabla-responsiva {
    width: 100%; /* la tabla ocupa todo el ancho del contenedor */
    border-collapse: collapse; /* une los bordes */
    display: block; /* permite el desplazamiento horizontal */
    overflow-x: auto; /* agrega scroll si es necesario */
  }
  table, th, td {
    border: 1px solid #ccc; /* borde básico */
  }
</style>

<div class="tabla-responsiva">
  <table>
    <tr><th>Nombre</th><th>Edad</th></tr>
    <tr><td>Roberto</td><td>30</td></tr>
  </table>
</div>
```

---

## ⚙️ Meta Tag Viewport

Para que el navegador interprete correctamente los tamaños en dispositivos móviles, se debe incluir en el `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

- **width=device-width:** ajusta el ancho del sitio al del dispositivo.
- **initial-scale=1.0:** establece el nivel de zoom inicial.

---

## 💡 Introducción a Flexbox

**Flexbox** es un modelo de diseño en CSS que permite distribuir elementos en un contenedor, alinearlos y controlar su espacio fácilmente.

### Propiedades principales del contenedor
```css
.container {
  display: flex; /* activa el modo flex */
  flex-direction: row; /* dirección principal: fila */
  gap: 10px; /* espacio entre los elementos */
  justify-content: space-around; /* distribuye el espacio horizontal */
  align-items: center; /* alinea verticalmente */
}
```

### Ejemplo práctico con *mobile first*

```html
<style>
  .contenedor {
    display: flex;
    flex-direction: column; /* por defecto, en columna para móviles */
    gap: 10px; /* espacio entre los ítems */
  }

  .caja {
    flex: 1; /* cada caja ocupa el mismo espacio disponible */
    padding: 20px;
    color: white;
  }

  .caja1 { background: #007bff; }
  .caja2 { background: #28a745; }
  .caja3 { background: #dc3545; }

  /* A partir de 768px en adelante (tablets/desktops) */
  @media (min-width: 768px) {
    .contenedor {
      flex-direction: row; /* se alinean en fila */
    }
  }
</style>

<div class="contenedor">
  <div class="caja caja1">Caja 1</div>
  <div class="caja caja2">Caja 2</div>
  <div class="caja caja3">Caja 3</div>
</div>
```

**Explicación:**
- En pantallas pequeñas (por defecto): las cajas se apilan.
- Desde 768px: se muestran en fila horizontal.

---

## 🧩 Explicando `flex: 1 1 45%` y `flex-wrap`

### 🔹 `flex: 1 1 45%`
Esta propiedad es un **atajo (shorthand)** que combina tres valores:

```css
flex: <grow> <shrink> <basis>;
```

- **flex-grow: 1** → permite que el elemento crezca para ocupar el espacio disponible.
- **flex-shrink: 1** → permite que el elemento se reduzca si el contenedor es más pequeño.
- **flex-basis: 45%** → establece el tamaño base del elemento (por ejemplo, el 45% del ancho del contenedor).

Con esto, cada caja ocupará aproximadamente el 45% del contenedor, dejando espacio entre ellas.

### 🔹 `flex-wrap`
Permite que los elementos se "salten de línea" si no hay suficiente espacio horizontal. Sin él, todos los ítems intentarían ajustarse en una sola línea.

```css
flex-wrap: wrap; /* los elementos bajan a la siguiente línea si es necesario */
```

---

## 🧱 Media Queries y Breakpoints (Bootstrap)

Los *breakpoints* son puntos de quiebre donde el diseño cambia según el ancho de pantalla.

| Tamaño | Breakpoint (min-width) | Dispositivo |
|---------|-----------------------|--------------|
| sm | 576px | Móviles grandes |
| md | 768px | Tablets |
| lg | 992px | Laptops |
| xl | 1200px | Desktops grandes |

### Ejemplo de media queries simples

```css
.cajas {
  display: flex; /* activa flexbox */
  flex-direction: column; /* por defecto: apiladas */
}

@media (min-width: 576px) {
  .cajas {
    flex-direction: row; /* cambia a fila */
    flex-wrap: wrap; /* permite salto de línea si no caben */
  }
  .cajas div{
    flex:1 1 48%;
  }
}

@media (min-width: 768px) {
  .cajas div {
    flex: 1 1 45%; /* crecen, reducen, y ocupan ~45% */
  }
}

@media (min-width: 992px) {
  .cajas div {
    flex: 1 1 22%; /* ocupan ~1/4 del ancho */
  }
}
```

```html
<div class="cajas">
  <div style="background:#007bff; height:100px"></div>
  <div style="background:#28a745; height:100px"></div>
  <div style="background:#ffc107; height:100px"></div>
  <div style="background:#dc3545; height:100px"></div>
</div>
```

**Explicación del comportamiento:**
- **Móviles:** se apilan en una columna.
- **Tablets:** se muestran dos por fila (gracias a `flex: 1 1 45%`).
- **Laptops:** se muestran cuatro por fila (usando `flex: 1 1 22%`).
- **`flex-wrap`** asegura que los elementos bajen si no cabe todo en una sola línea.

---

## ✅ Conclusión
Con **Mobile First**, **Flexbox** y **Media Queries**, puedes crear sitios que se adapten fluidamente a cualquier pantalla. Estas herramientas garantizan legibilidad, usabilidad y estética en todas las resoluciones.

