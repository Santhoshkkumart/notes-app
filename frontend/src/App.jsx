import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";

const App = () => {
  return (
    <div className="app-shell relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background:radial-gradient(circle_at_15%_10%,#1f5136_0%,transparent_35%),radial-gradient(circle_at_85%_0%,#173f2b_0%,transparent_30%)]" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
