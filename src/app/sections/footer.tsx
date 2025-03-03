import Link from "next/link"

export const Footer = () => {
  return (
    <div className="flex bottom-0 mt-20 text-xs w-full justify-between font-mono border-t-2 border-gray-200 px-10 py-5">
      <span>Teng Besabe</span>
      <div className="flex gap-8">
        <Link
          href="https://www.linkedin.com/in/teng-besabe"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/tengbesabe22"
        >
          GitHub
        </Link>
      </div>
    </div>
  )
}