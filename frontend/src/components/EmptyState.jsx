import { PlusCircle, StickyNote } from "lucide-react";
import { Link } from "react-router-dom";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">

      <div className="mb-4 rounded-full bg-green-500/10 p-6">
        <StickyNote size={48} className="text-green-500" />
      </div>

      <h2 className="text-2xl font-semibold text-green-400">
        Create your first note
      </h2>

      <p className="mt-2 text-gray-400 max-w-sm">
        You don’t have any notes yet. Start writing your thoughts.
      </p>

      <Link
        to="/create"
        className="mt-6 flex items-center gap-2 rounded-lg
        bg-green-500 px-5 py-2 text-black font-medium
        hover:bg-green-400 transition"
      >
        <PlusCircle size={20} />
        New Note
      </Link>
    </div>
  );
};

export default EmptyState;
