import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react"
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

    setLoading(true)
    try {
      await api.post("/notes", {
        title,
        content
      })
      toast.success("Note Created Successfully");
      navigate("/");
    } catch (error) {
      console.log("Error making notes");
      toast.error("Error Creating Notes");
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max -w-2xl mx-auto">
          <Link to={"/"} className=" btn btn-ghost !text-green-400 mb-6">
            <ArrowLeftIcon className="size-5" />
            Back to Notes
          </Link>
          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title !text-green-400 text-2xl mb-4">Create New Note</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-control !text-gray-400 mb-4">
                  <label className="label-text">Title</label>
                  <input type="text"
                    placeholder="Note Title"
                    className="input input-bordered w-64"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <label className="label-text">Content</label>
                  <input type="text"
                    placeholder="Add Content"
                    className="input input-bordered w-64"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                  <div className="card-actions py-2">
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                      {loading ? "Creating..." : "Create Note"}
                    </button>
                  </div>
                </div>
              </form>
            </div>


          </div>
        </div>
      </div>
    </div>


  );
};

export default CreatePage;
