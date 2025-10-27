import "./App.css";
import { useLanguage } from "@/hooks";
import { Footer } from "@/components";
import { Spinner } from "@/mini-components";
import ArtistPage from "@/pages/Artist";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    const { languageStrings, loading } = useLanguage();

    if (loading) {
        return (
            <div className="app" style={{ justifyContent: "center" }}>
                <Spinner />
            </div>
        );
    }

    if (!languageStrings?.navbar || !languageStrings?.footer) {
        return <div>Error: missing translations</div>;
    }

    return (
        <BrowserRouter>
            <div className="app">
                <main className="main-content">
                    <Routes>
                        <Route path="/artist" element={<ArtistPage />} />
                    </Routes>
                </main>

                <Footer
                    generalTitles={languageStrings.general_titles}
                    footerData={languageStrings.footer}
                />
            </div>
        </BrowserRouter>
    );
}

export default App;
