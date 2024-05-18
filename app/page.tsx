import { TableOfContent } from "@/components/table-of-content"

export default function Home() {
  return (
    <main className="h-screen w-screen bg-gray-50 p-12">
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-semibold">Homework</h1>
        <p className="font-medium">
          {"For "}
          <a
            href="https://animations.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="italic underline hover:bg-gray-900 hover:text-gray-50"
          >
            Animations on the web
          </a>
          {" by "}
          <a
            href="https://github.com/Ganthology/animations-on-the-web-exercise"
            target="_blank"
            rel="noopener noreferrer"
            className="italic underline hover:bg-gray-900 hover:text-gray-50"
          >
            @Ganthology
          </a>
        </p>
        <TableOfContent />
      </div>
    </main>
  )
}
