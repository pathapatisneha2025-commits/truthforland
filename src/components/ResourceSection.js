import React, { useState, useEffect } from "react";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const ResourcesPage = () => {
    const [resources, setResources] = useState([]);
    const [loading, setLoading] = useState(true);
    const [viewUrl, setViewUrl] = useState(null); // PDF URL to view

    const BACKEND_URL = "https://truthforlanddatabase.onrender.com";

    // ================= FETCH RESOURCES =================
    useEffect(() => {
        const fetchResources = async () => {
            try {
                const response = await fetch(`${BACKEND_URL}/resources/all`);
                if (!response.ok) throw new Error("Network response was not ok");
                const data = await response.json();
                setResources(data);
            } catch (error) {
                console.error("Error fetching resources:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchResources();
    }, []);

    // ================= VIEW FILE =================
    const viewFile = (url) => {
        if (!url) return alert("File URL not found");
        setViewUrl(url); // Show PDF inline
    };
    const closeView = () => setViewUrl(null);

    // ================= DOWNLOAD FILE =================
    const downloadFile = async (url, filename = "document.pdf") => {
        if (!url) return alert("File URL not found");

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Network response was not ok");

            const blob = await response.blob();
            const fileURL = window.URL.createObjectURL(blob);

            const name = filename.toLowerCase().endsWith(".pdf")
                ? filename
                : `${filename}.pdf`;

            const link = document.createElement("a");
            link.href = fileURL;
            link.download = name;
            document.body.appendChild(link);
            link.click();
            link.remove();

            window.URL.revokeObjectURL(fileURL);
        } catch (error) {
            console.error("Error downloading file:", error);
            alert("Failed to download file");
        }
    };

    if (loading) return <p style={{ padding: 40 }}>Loading resources...</p>;

    // ================= UI =================
    return (
        <div style={{ backgroundColor: "#F9F8F3", padding: "80px 5%", minHeight: "100vh", fontFamily: "'Inter', system-ui, sans-serif" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div style={{ backgroundColor: "#4B5E26", color: "#fff", padding: "6px 16px", borderRadius: 20, marginBottom: 24, display: "inline-flex", gap: 8 }}>
                    📄 Free Resources
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", marginBottom: 10 }}>
                    <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontFamily: "'Playfair Display', serif" }}>
                        Legal Resources & Documents
                    </h1>
                </div>

                <p style={{ color: "#666", margin: "10px 0 50px" }}>
                    Download free legal guides, templates, and documents.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
                    {resources.map((item) => (
                        <div key={item.id} style={{ backgroundColor: "#fff", borderRadius: 16, padding: 30, border: "1px solid #E5E7EB", display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                                <div style={{ backgroundColor: "#FFF1F1", padding: 10, borderRadius: 10 }}>📄</div>
                                <strong>{item.type}</strong>
                            </div>

                            <h3>{item.title}</h3>
                            <p>{item.description}</p>

                            <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #F3F4F6", paddingTop: 20, marginTop: "auto" }}>
                                <span>{item.size}</span>
                                <div style={{ display: "flex", gap: 10 }}>
                                    <button style={{ padding: "10px 16px", borderRadius: 6, border: "1px solid #4B5E26", cursor: "pointer", background: "#fff", color: "#4B5E26", fontWeight: 600 }} onClick={() => viewFile(item.file_url)}>
                                        👁 View
                                    </button>
                                    <button style={{ padding: "10px 16px", borderRadius: 6, border: "1px solid #4B5E26", cursor: "pointer", background: "#fff", color: "#4B5E26", fontWeight: 600 }} onClick={() => downloadFile(item.file_url, item.title)}>
                                        📥 Download
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ================= PDF Viewer Modal ================= */}
            {viewUrl && (
                <div
                    onClick={closeView}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0,0,0,0.7)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 9999,
                    }}
                >
                 <div
    onClick={(e) => e.stopPropagation()}
    style={{
        width: "80%",
        height: "80%",
        backgroundColor: "#fff",
        position: "relative",
        display: "flex",
        flexDirection: "column",
    }}
>
    {/* Close Button */}
    <button
        onClick={closeView}
        style={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 10, // Ensure it's above the Viewer
            padding: "5px 10px",
            cursor: "pointer",
            background: "#f44336",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            fontWeight: "bold",
        }}
    >
        ❌ Close
    </button>

    {/* PDF Viewer */}
    <div style={{ flex: 1, overflow: "hidden" }}>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer fileUrl={viewUrl} />
        </Worker>
    </div>
</div>

                </div>
            )}
        </div>
    );
};

export default ResourcesPage;
