import { PlusCircle, StickyNote } from "lucide-react";
import { Link } from "react-router-dom";

const EmptyState = () => {
  return (
    <div className="glass-panel mx-auto flex min-h-[320px] max-w-xl flex-col items-center justify-center px-8 py-10 text-center">
      <div className="mb-5 rounded-full border border-emerald-300/20 bg-emerald-400/10 p-4">
        <StickyNote className="size-9 text-emerald-300" />
      </div>
      <h2 className="text-2xl font-semibold text-zinc-100">No notes yet</h2>
      <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-400">
        Start your board with one clean note. You can edit or delete it anytime.
      </p>
      <Link to="/create" className="primary-btn mt-6">
        <PlusCircle size={18} />
        Create your first note
      </Link>
    </div>
  );
};

export default EmptyState;
