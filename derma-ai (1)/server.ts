import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON parsing and static assets
  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", service: "SkinScannerAI-Server" });
  });

  // Mock API for Doctors (in a real app, this might come from a managed medical DB)
  app.get("/api/doctors", (req, res) => {
    res.json([
      { id: 'doc1', name: 'Dr. Elena Rossi', specialty: 'Clinical Dermatology' },
      { id: 'doc2', name: 'Dr. Marcus Wright', specialty: 'Surgical Dermatology' }
    ]);
  });

  // Integration with Vite
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 SkinScannerAI Server high on http://localhost:${PORT}`);
  });
}

startServer();
