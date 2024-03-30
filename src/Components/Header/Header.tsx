export default function Header() {
  return (
    <>
      <header className="flex flex-row justify-between w-full text-green-400 font-mono p-18">
        <p className="flex flex-row text-5xl">⍝</p>
        <div className="flex flex-row text-xl justify-between gap-6">
          <a href="#" className="m-auto">
            DEEDS
          </a>
          <a href="#" className="m-auto">
            [REDACTED]
          </a>
        </div>
      </header>
    </>
  );
}
