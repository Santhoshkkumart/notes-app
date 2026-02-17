import { Trash2, PenSquareIcon } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../lib/axios";

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.stopPropagation();
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((n) => n._id !== id));
      toast.success("Note deleted");
    } catch {
      toast.error("Failed to delete note");
    }
  };

  return (
    <article className="glass-panel group flex h-full flex-col p-5 transition duration-200 hover:-translate-y-0.5 hover:border-emerald-300/30">
      <div className="mb-3 flex items-start justify-between gap-4">
        <h2 className="line-clamp-1 text-lg font-semibold text-zinc-100">{note.title}</h2>
        <button
          onClick={(e) => handleDelete(e, note._id)}
          className="rounded-lg border border-red-400/30 p-1.5 text-red-300 transition hover:bg-red-500/15"
          aria-label="Delete note"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>

      <Link to={`/note/${note._id}`} className="flex-1">
        <p className="line-clamp-4 text-sm leading-6 text-zinc-300">{note.content}</p>
      </Link>

      <div className="mt-5 flex items-center justify-between border-t border-emerald-300/10 pt-3 text-xs text-zinc-400">
        <span>{new Date(note.createdAt).toLocaleDateString()}</span>
        <span className="inline-flex items-center gap-1 text-emerald-300">
          <PenSquareIcon className="size-3.5" />
          Edit
        </span>
      </div>
    </article>
  );
};

export default NoteCard;
