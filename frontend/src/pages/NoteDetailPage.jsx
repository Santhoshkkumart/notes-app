import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";

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
      } catch {
        toast.error("Failed to fetch note");
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
    } catch {
      toast.error("Failed to delete note");
    }
  };

  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Title and content are required");
      return;
    }

    setSaving(true);
    try {
      await api.put(`/notes/${id}`, note);
      toast.success("Note updated");
      navigate("/");
    } catch {
      toast.error("Failed to update note");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoaderIcon className="size-10 animate-spin text-emerald-300" />
      </div>
    );
  }

  if (!note) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-zinc-400">Note not found or deleted.</p>
      </div>
    );
  }

  return (
    <main className="app-container py-10">
      <div className="mx-auto max-w-2xl">
        <Link to="/" className="ghost-btn mb-6">
          <ArrowLeftIcon className="size-4" />
          Back to Notes
        </Link>

        <section className="glass-panel p-6 md:p-8">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-100">Edit Note</h1>
          <p className="mt-1 text-sm text-zinc-400">Update your note and keep things current.</p>

          <div className="mt-6 space-y-4">
            <div>
              <label className="mb-2 block text-sm text-zinc-300">Title</label>
              <input
                type="text"
                placeholder="Note title"
                className="soft-input"
                value={note.title}
                onChange={(e) => setNote({ ...note, title: e.target.value })}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-300">Content</label>
              <textarea
                placeholder="Write content..."
                className="soft-input min-h-40 resize-y"
                value={note.content}
                onChange={(e) => setNote({ ...note, content: e.target.value })}
              />
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button onClick={handleSave} disabled={saving} className="primary-btn">
                {saving ? "Saving..." : "Save Changes"}
              </button>
              <button onClick={handleDelete} className="ghost-btn border-red-300/20 text-red-300 hover:bg-red-500/10">
                <Trash2Icon className="size-4" />
                Delete Note
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default NoteDetailPage;
