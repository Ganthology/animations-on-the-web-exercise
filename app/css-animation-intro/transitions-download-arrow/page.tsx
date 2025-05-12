import "./styles.css"

function DownloadArrow() {
  return (
    <button aria-label="Download PDF" className="download-button">
      {ArrowDown}
      {ArrowDown}
    </button>
  )
}

export default function Screen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-100 space-y-4">
      <h1 className="text-2xl font-bold">Hover the button!</h1>
      <DownloadArrow />
    </div>
  )
}

const ArrowDown = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.25 14L12 20.25L5.75 14M12 19.5V3.75"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
