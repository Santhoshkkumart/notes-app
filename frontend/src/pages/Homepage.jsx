import Navbar from "../components/Navbar.jsx"
import RateLimitedUI from "../components/RateLimitedUI.jsx";
import { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard.jsx";
import toast from "react-hot-toast";
import api from "../lib/axios.js";
import EmptyState from "../components/EmptyState.jsx";


const Homepage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        console.log(res.data);
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.log("error fetching notes");
        console.log(error);
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load notes");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchNotes();
  }, []);
  ;

  return (
    <div className="home">
      <Navbar />
      <div className="p-6 mt-4">
        <div>
          {isRateLimited && <RateLimitedUI />}

          {loading && !isRateLimited && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse opacity-50">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-32 bg-gray-200 rounded-xl"
                />
              ))}
            </div>
          )}
          {!loading && !isRateLimited && (
            notes.length === 0 ? (
              <EmptyState />) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {notes.map((note) => (
                  <NoteCard
                    key={note._id}
                    note={note}
                    setNotes={setNotes}
                  />
                ))}
              </div>
            )
          )}

        </div>
      </div>
    </div>
  );
}
export default Homepage
