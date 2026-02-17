import { Link } from "react-router-dom";
import { NotebookPen, PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-emerald-300/10 bg-zinc-950/60 backdrop-blur-xl">
      <div className="app-container py-4">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="inline-flex items-center gap-2">
            <span className="rounded-lg border border-emerald-300/20 bg-emerald-400/10 p-2 text-emerald-300">
              <NotebookPen className="size-5" />
            </span>
            <div>
              <h1 className="text-xl font-semibold tracking-tight text-zinc-100">ThinkBoard</h1>
              <p className="text-xs text-zinc-400">Capture ideas clearly</p>
            </div>
          </Link>

          <Link to="/create" className="primary-btn">
            <PlusIcon className="size-4" />
            <span>New Note</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
