"use client"
export default function ThemeTest() {
  return (
    <button
      onClick={() =>
        document.documentElement.classList.toggle("dark")
      }
      className="p-4 border"
    >
      Toggle Theme
    </button>
  )
}
