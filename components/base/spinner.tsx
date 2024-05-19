import { clsx } from "clsx"

const bars = Array(12).fill(0)

interface SpinnerProps {
  color: string
  size?: number
}

export function Spinner({ color, size = 20 }: SpinnerProps) {
  // This will not work
  // const spinnerSize = `[--spinner-size:${size}px]` as const
  // const spinnerColor = `[--spinner-color:${color}]` as const

  return (
    <div
      className={`size-[--spinner-size]`}
      style={{
        // @ts-ignore
        ["--spinner-size"]: `${size}px`,
        ["--spinner-color"]: color,
      }}
    >
      <div className="relative left-1/2 top-1/2 size-[--spinner-size]">
        {bars.map((_, i) => (
          <div
            className={clsx(
              "absolute left-[-10%] top-[-3.9%] h-[8%] w-[24%]",
              "animate-[spinner-spin_1.2s_linear_infinite] rounded-md bg-[--spinner-color]",
              "[&:nth-child(1)]:animation-delay-[-1.2s] [&:nth-child(1)]:[transform:rotate(0.0001deg)_translate(146%)]",
              "[&:nth-child(2)]:animation-delay-[-1.1s] [&:nth-child(2)]:[transform:rotate(30deg)_translate(146%)]",
              "[&:nth-child(3)]:animation-delay-[-1s] [&:nth-child(3)]:[transform:rotate(60deg)_translate(146%)]",
              "[&:nth-child(4)]:animation-delay-[-0.9s] [&:nth-child(4)]:[transform:rotate(90deg)_translate(146%)]",
              "[&:nth-child(5)]:animation-delay-[-0.8s] [&:nth-child(5)]:[transform:rotate(120deg)_translate(146%)]",
              "[&:nth-child(6)]:animation-delay-[-0.7s] [&:nth-child(6)]:[transform:rotate(150deg)_translate(146%)]",
              "[&:nth-child(7)]:animation-delay-[-0.6s] [&:nth-child(7)]:[transform:rotate(180deg)_translate(146%)]",
              "[&:nth-child(8)]:animation-delay-[-0.5s] [&:nth-child(8)]:[transform:rotate(210deg)_translate(146%)]",
              "[&:nth-child(9)]:animation-delay-[-0.4s] [&:nth-child(9)]:[transform:rotate(240deg)_translate(146%)]",
              "[&:nth-child(10)]:animation-delay-[-0.3s] [&:nth-child(10)]:[transform:rotate(270deg)_translate(146%)]",
              "[&:nth-child(11)]:animation-delay-[-0.2s] [&:nth-child(11)]:[transform:rotate(300deg)_translate(146%)]",
              "[&:nth-child(12)]:animation-delay-[-0.1s] [&:nth-child(12)]:[transform:rotate(330deg)_translate(146%)]"
            )}
            key={`spinner-bar-${i}`}
          />
        ))}
      </div>
    </div>
  )
}
