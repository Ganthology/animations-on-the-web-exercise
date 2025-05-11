import "./styles.css"

export default function TransitionsYellowBall() {
  return (
    <div className="flex flex-col items-center gap-8 py-8 bg-zinc-50 min-h-screen">
      <h1 className="text-xl font-medium">My solution</h1>
      <div className="box" />

      <h1 className="text-xl font-medium">
        Solution 1 (won't flicker when hover)
      </h1>
      <div className="box-1">
        <div className="box-inner" />
      </div>
    </div>
  )
}
