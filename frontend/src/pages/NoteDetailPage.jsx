import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";
import Navbar from "../components/Navbar";


const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("Error in fetching note", error);
        toast.error("Failed to fetch the note");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted");
      navigate("/");
    } catch (error) {
      console.log("Error deleting the note:", error);
      toast.error("Failed to delete note");
    }
  };

  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Please add a title or content");
      return;
    }

    setSaving(true);

    try {
      await api.put(`/notes/${id}`, note);
      toast.success("Note updated successfully");
      navigate("/");
    } catch (error) {
      console.log("Error saving the note:", error);
      toast.error("Failed to update note");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }

  if (!note) {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <p className="text-error">Note not found or deleted</p>
    </div>
  );
}


 return (
  <div className="min-h-screen bg-black flex items-start justify-start px-6 py-8">
    <div className="w-full max-w-md">
      {/* Back */}
      <Link
        to="/"
        className="flex items-center gap-2 text-green-400 hover:text-green-300 mb-6"
      >
        <ArrowLeftIcon className="h-5 w-5" />
        Back to Notes
      </Link>

      {/* Heading */}
      <h1 className="text-2xl font-semibold text-green-400 mb-6">
        Edit Note
      </h1>

      {/* Card */}
      <div className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm text-gray-400 mb-1">
            Title
          </label>
          <input
            type="text"
            placeholder="Note Title"
            className="w-full rounded-md bg-gray-900 border border-gray-600 text-gray-200 placeholder-gray-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={note.title}
            onChange={(e) =>
              setNote({ ...note, title: e.target.value })
            }
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm text-gray-400 mb-1">
            Content
          </label>
          <textarea
            placeholder="Add Content"
            className="w-full h-32 rounded-md bg-gray-900 border border-gray-600 text-gray-200 placeholder-gray-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            value={note.content}
            onChange={(e) =>
              setNote({ ...note, content: e.target.value })
            }
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-4">
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-4 py-2 rounded-md border border-gray-500 text-gray-200 hover:bg-gray-800 disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>

          <button
            onClick={handleDelete}
            className="px-4 py-2 rounded-md border border-red-500 text-red-400 hover:bg-red-900/30"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
);
};
export default NoteDetailPage;