## Usage

**Include Radial Theme JS and CSS as follows**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="radialTheme.css" />
    <script src="radialTheme.js" defer></script>
  </head>
  <body>
    <div>Webpage Content</div>
    <button id="test-toggle">Toggle Theme</button>
  </body>
</html>
```

**Initialize the Theme Toggler using either:**

1. _One of the Predefined Positions:_

```javascript
initTheme(ButtonPositions.TOP);
initTheme(ButtonPositions.RIGHT);
initTheme(ButtonPositions.BOTTOM);
initTheme(ButtonPositions.LEFT);
initTheme(ButtonPositions.TOPLEFT);
initTheme(ButtonPositions.TOPRIGHT);
initTheme(ButtonPositions.BOTTOMLEFT);
initTheme(ButtonPositions.BOTTOMRIGHT);
```

2. _Any Existing Button in the Document:_

```javascript
const testToggle = document.getElementById("test-toggle");
initTheme(testToggle);
```

---

## Demo

**Find a Working Demo [Here](https://arogueotaku.github.io/CircularThemeToggler)**
