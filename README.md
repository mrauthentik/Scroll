# Scroll
# react-screen-scroll

A simple React hook to scroll to a specific position on the page.

## 🚀 Installation
```sh
npm install react-scroll-to-hook
```
## 🛠️ Usage

```sh
import useScrollTo from "react-scroll-to-hook";

function MyComponent() {
  const scrollTo = useScrollTo();

  return (
    <button onClick={() => scrollTo(500)}>Scroll to 500px</button>
  );
}
```

## 🔧 API
## useScrollTo()

```sh
const scrollTo = useScrollTo();
scrollTo(500, { behavior: "smooth" });

```

## 📌 Todo
Add <ScrollToButton /> component
Improve accessibility

## 📢 Contributions
Feel free to open an issue or PR on GitHub!