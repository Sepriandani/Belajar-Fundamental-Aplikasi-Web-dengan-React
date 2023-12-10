import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ArchivesPage from "../pages/ArchivesPage";
import Navigation from "./Navigation";
import DetailPageWrapper from "../pages/DetailPage";
import HomePageWrapper from "../pages/HomePage";
import AddNotePage from "../pages/AddNotePage";

function NoteApp() {
    return(
        <div className="app-container">
            <header>
                <h1><Link to="/">Aplikasi Catatan</Link></h1>
                <Navigation />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<HomePageWrapper />} />
                    <Route path="/notes/:id" element={<DetailPageWrapper />} />
                    <Route path="/notes/new" element={<AddNotePage />} />
                    <Route path="/archives" element={<ArchivesPage />} />
                </Routes>
            </main>
        </div>
    );
}

export default NoteApp;