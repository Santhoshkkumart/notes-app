import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar.jsx";
import RateLimitedUI from "../components/RateLimitedUI.jsx";
import NoteCard from "../components/NoteCard.jsx";
import api from "../lib/axios.js";
import EmptyState from "../components/EmptyState.jsx";

const Homepage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load notes");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div>
      <Navbar />
      <main className="app-container py-10">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 md:text-3xl">Your Notes</h2>
          <p className="mt-1 text-sm text-zinc-400">
            A clear space to create, revisit, and edit your ideas.
          </p>
        </div>

        {isRateLimited && <RateLimitedUI />}

        {loading && !isRateLimited && (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="glass-panel h-44 animate-pulse" />
            ))}
          </div>
        )}

        {!loading && !isRateLimited && (
          <>
            {notes.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {notes.map((note) => (
                  <NoteCard key={note._id} note={note} setNotes={setNotes} />
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default Homepage;
