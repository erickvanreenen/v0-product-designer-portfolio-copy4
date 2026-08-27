import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-ink-deep">
      <div className="max-w-5xl mx-auto px-6 py-10 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/erick-logo.svg" width={16} height={16} alt="" style={{ filter: "brightness(0) saturate(100%) invert(42%) sepia(74%) saturate(1200%) hue-rotate(346deg) brightness(98%) contrast(97%)" }} />
            <p className="text-sm text-paper/55">
              &copy; {new Date().getFullYear()} Erick van Reenen
            </p>
          </div>

          <div className="flex items-center gap-8">
            <Link
              href="mailto:erickvanreenen@gmail.com"
              className="text-sm text-paper/55 hover:text-ember-lift transition-colors duration-200 py-2.5 -my-2.5"
            >
              Email
            </Link>
            <Link
              href="https://www.linkedin.com/in/erick-van-reenen-b549061a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-paper/55 hover:text-ember-lift transition-colors duration-200 py-2.5 -my-2.5"
            >
              LinkedIn
            </Link>
            <Link
              href="/projects"
              className="text-sm text-paper/55 hover:text-paper transition-colors duration-200 py-2.5 -my-2.5"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="text-sm text-paper/55 hover:text-paper transition-colors duration-200 py-2.5 -my-2.5"
            >
              About
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
