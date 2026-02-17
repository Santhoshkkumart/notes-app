import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import api from "../lib/axios";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);
    try {
      await api.post("/notes", { title, content });
      toast.success("Note created");
      navigate("/");
    } catch {
      toast.error("Failed to create note");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="app-container py-10">
      <div className="mx-auto max-w-2xl">
        <Link to="/" className="ghost-btn mb-6">
          <ArrowLeftIcon className="size-4" />
          Back to Notes
        </Link>

        <section className="glass-panel p-6 md:p-8">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-100">Create a New Note</h1>
          <p className="mt-1 text-sm text-zinc-400">Write your idea once and refine it later.</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="mb-2 block text-sm text-zinc-300">Title</label>
              <input
                type="text"
                placeholder="e.g. Product launch plan"
                className="soft-input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-300">Content</label>
              <textarea
                placeholder="Write your note..."
                className="soft-input min-h-36 resize-y"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            <button type="submit" className="primary-btn w-full sm:w-auto" disabled={loading}>
              {loading ? "Creating..." : "Create Note"}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default CreatePage;
