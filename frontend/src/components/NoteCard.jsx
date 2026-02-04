import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { PenSquareIcon } from "lucide-react";
import toast from "react-hot-toast";
import api from "../lib/axios";

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.stopPropagation();

    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((n) => n._id !== id));
      toast.success("Deleted Successfully");
      console.log("Deleting ID:", id);
    } catch (error) {
      console.log("Error in Deleting Notes");
      toast.error("Failed to delete notes");
    }

  };

  return (
    <div
      className="relative bg-black
  rounded-xl
  border border-green-500/30
  border-t-4 border-t-green-500
  shadow-md hover:shadow-[0_0_20px_#22c55e40]
  transition-all duration-200"
    >
      {/* Header: Title + Delete */}
      <div className="flex justify-between items-start p-4 pb-2">

        {/* Title */}
        <h2 className="text-lg font-semibold tracking-tight line-clamp-1 text-green-400">
          {note.title}
        </h2>

        {/* Delete button */}
        <button
          onClick={(e) => {
            handleDelete(e, note._id);
          }}
          className="text-red-500 hover:text-red-400 transition"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      {/* Content */}
      <Link to={`/note/${note._id}`}>
        <p
          className="px-4 pb-4 text-sm text-zinc-400
      line-clamp-3"
        >
          {note.content}
        </p>
      </Link>

      {/* Footer */}
      <p className="flex items-center justify-end gap-2 text-xs text-green-500 px-4 py-2">
        Date: {new Date(note.createdAt).toLocaleDateString()}
        <PenSquareIcon className="size-4 cursor-pointer hover:text-green-400" />
      </p>
    </div>

  );
};

export default NoteCard;
