import "./styles.css"

const LENGTH = 3

export default function TransformsStackedCard() {
  return (
    <section className="grid h-screen w-screen place-items-center bg-gray-50">
      {/* my solution */}
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-xl font-medium">My solution</h1>
        <div className="wrapper">
          {new Array(LENGTH).fill(0).map((_, i) => (
            <div
              className="card-with-transform"
              style={{
                // @ts-ignore
                "--translate-y": LENGTH - 1 - i,
                // @ts-ignore
                "--scale": `${1 - (LENGTH - 1 - i) * 0.05}`,
              }}
              key={i}
            ></div>
          ))}
        </div>
      </div>
      {/* solution 1 */}
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-xl font-medium">Solution 1</h1>
        <div className="wrapper">
          {new Array(LENGTH).fill(0).map((_, i) => (
            <div className="card-solution-1" key={`${i}-solution-1`}></div>
          ))}
        </div>
      </div>

      {/* solution 2 */}
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-xl font-medium">Solution 2</h1>
        <div className="wrapper">
          {new Array(LENGTH).fill(0).map((_, i) => (
            <div
              className="card-solution-2"
              key={`${i}-solution-2`}
              style={{
                // @ts-ignore
                "--index": LENGTH - 1 - i,
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  )
}
