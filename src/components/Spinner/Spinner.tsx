export default function Spinner() {
  return (
    <div className="border-slate-600 before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-pink-500/50 before:hover:bg-pink-500/75 before:scale-50 before:hover:scale-75 relative inline-block">
      <div className="solid">
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>

        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
      </div>
    </div>
  );
}
