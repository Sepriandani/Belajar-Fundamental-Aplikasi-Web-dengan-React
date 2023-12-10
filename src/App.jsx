import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ArchivesPage from "./pages/ArchivesPage";
import Navigation from "./components/Navigation";
import DetailPageWrapper from "./pages/DetailPage";
import HomePageWrapper from "./pages/HomePage";
import AddNotePageWrapper from "./pages/AddNotePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>
          <Link to="/">Aplikasi Catatan</Link>
        </h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePageWrapper />} />
          <Route path="/notes/:id" element={<DetailPageWrapper />} />
          <Route path="/notes/new" element={<AddNotePageWrapper />} />
          <Route path="/archives" element={<ArchivesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
