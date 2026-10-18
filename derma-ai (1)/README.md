# Derma AI 🩺✨
> **Professional AI-powered skin health analysis and specialist booking platform.**

Derma AI is an advanced, full-stack, bilingual (English & தமிழ்) patient gateway and diagnostic support platform. Leveraging Google's state-of-the-art **Gemini Vision AI**, the platform offers instant skin pathology classification, micro-climate weather analysis (UV alerts), localized specialist booking coordinates, and long-term diagnostic tracking—all wrapped in a highly responsive, high-contrast visual design.

---

## 📌 Table of Contents
1. [Problem Statement](#-problem-statement)
2. [Proposed Solution](#-proposed-solution)
3. [Project Objectives](#-project-objectives)
4. [Core Features](#-core-features)
5. [Aesthetic & Design Philosophy](#-aesthetic--design-philosophy)
6. [Tech Stack](#-tech-stack)
7. [System Architecture](#%EF%B8%8F-system-architecture)
8. [Installation & Local Setup](#-installation--local-setup)
9. [Bilingual localization Matrix](#-bilingual-localization-matrix)
10. [Team & Contributions](#-team--contributions)
11. [Clinical Disclaimer](#-clinical-disclaimer)

---

## 🔍 Problem Statement
Accessing quality dermatological healthcare is plagued by several systemic challenges today:
- **Severe Diagnostic Delays**: Wait times to consult certified human dermatologists regularly span weeks or months.
- **Geographical and Financial Barriers**: Remote communities lack direct specialty care, and clinical consultations are often extremely expensive.
- **Anxiety & Misinformation**: Users turning to search engines often encounter frightening, inaccurate self-diagnoses.
- **Triage Deficiencies**: A lack of smart local monitoring toolsets means preventable or manageable pathologies escalate to severe stages before being seen by professional specialists.

---

## 💡 Proposed Solution
**Derma AI** tackles these bottlenecks through a secure, client-first digital triage portal that empowers patients and augments clinical efficiency:
- **Instant AI Triage**: Employs Google's Gemini Vision models to rapidly analyze dermoscopic images, producing structured condition assessments, symptoms, and safe, science-backed home remedies.
- **Seamless Specialist Scheduling**: Integrates local provider listings with real-time slot selection and secure booking structures.
- **Durable Patient Timelines**: Persists historic scans securely to visualize and compare results over time, preserving patient history.
- **Environmental Hazard Awareness**: Calculates real-time UV Index risk maps to actively warn users of extreme skin hazards.

---

## 🎯 Project Objectives
- **Accessibility**: Provide immediate, free, supplementary diagnostic guidance to anyone with a smartphone camera.
- **Linguistic Inclusivity**: Remove medical barriers for Tamil and English-speaking ecosystems through premium multilingual context translations.
- **Enhanced Patient-Doctor Pipelines**: Reduce late-stage pathology incidents by connecting patients with nearby specialists immediately after risk detection.
- **Data Privacy & Security**: Leverage Firebase's decentralized schema configurations for patient history protection.

---

## 🌟 Core Features

### 1. 📸 Gemini Medical Computer Vision (Scan Page)
*   **Intuitive Media Intake**: Support for direct camera feeds as well as legacy file drag-and-drop.
*   **Clinical Detail Extractions**: Processes dermoscopic images through Gemini models to return:
    - Primary prediction and confidence factors.
    - Pathological diagnostic descriptions.
    - Science-backed clinical home remedies.
    - Warning indicator triggers for immediate specialist escalation.

### 2. 📅 Local Specialist Engine & Scheduling (Doctor Booking Page)
*   **Distance Triage**: Real-time evaluation of distance coordinates to retrieve certified dermatologists.
*   **Dynamic Calendar Bookings**: Interactive calendars highlighting active slots, consultation fees, and years of specialized experience.
*   **Instant Patient Confirmations**: Fully persistent appointments linked directly to the patient's record.

### 3. 📊 Structured Patient Timelines & History (History Page)
*   **Centralized Diagnostics**: Chronological record of all scans done by a patient.
*   **Comprehensive Diagnostics**: Immediate retrievals of complete pathology details, environmental variables, and diagnostic cards.

### 4. 💬 Derma Expert Multilingual AI Companion (Chatbot)
*   **NLP Deep Reasoning**: Dynamic conversational agent providing supplementary clinical advice.
*   **Strict Context Triage**: Built-in guardrails addressing symptoms, recovery guidelines, skin routines, and medical routing.

### 5. ☀️ Environmental Wellness Matrix (Dashboard)
*   **Atmospheric Tracking**: Real-time evaluation of geographic UV indexes, humidity levels, and overall air indices.
*   **Dynamic Alarm Clocks**: High-contrast widget modules allowing patients to track medication and routine timings.

---

## 🎨 Aesthetic & Design Philosophy
Derma AI is styled with a custom high-contrast **Neo-Brutalist design language** engineered with:
*   **Fluid Typography Pairing**: High-impact "Space Grotesk" display headings paired with highly legible "JetBrains Mono" status logs.
*   **Clear Visual Accents**: Generous visual negative spaces, thick border structures, crisp offset shadows, and vivid functional color coding (e.g. emerald alerts, cosmic slate backdrops) that improve overall user retention and focus.
*   **Aesthetic Motion Frameworks**: Subtle layout entry micro-transitions and loader routines managed via Framer Motion to make clinical navigation feel warm, seamless, and empathetic.

---

## 🛠️ Tech Stack

### Frontend Client
*   **Framework**: React 19 (Functional Components, Custom Context Hooks)
*   **Module Bundler**: Vite (Optimized for lightning-fast assets packing)
*   **Type Safety**: TypeScript (Strict type checks, fully modular typings)
*   **Router**: React Router DOM v7 (Optimized nested system routing)

### Styling & Motion CSS
*   **CSS Engine**: Tailwind CSS v4 (Utility-first responsive styles)
*   **Motion Library**: Framer Motion & Motion (Fluid, GPU-accelerated page transitions & interactive loaders)
*   **Icon Assets**: Lucide React (Streamlined SVG graphic library)

### Backend API & Cloud Core
*   **Server Runtime**: Express.js (Node.js engine running TSX direct compilation)
*   **AI Vision Core**: `@google/genai` (Official modern Google GenAI Client SDK)
*   **Database Cloud**: Firebase (Firestore persistent document database)
*   **Secure Authentication**: Firebase Auth (Patient login and security guardrails)
*   **Translation Engine**: `i18next` & `react-i18next` (Local-centric language mapping)

---

## 🏗️ System Architecture

```
                                  +-------------------+
                                  |    React Client   |
                                  | (Tamil & English) |
                                  +---------+---------+
                                            |
         +----------------------------------+----------------------------------+
         |                                  |                                  |
+--------v---------+               +--------v---------+               +--------v---------+
|  Firebase Auth   |               |   Express API    |               | Firestore DB     |
| (Patient Login)  |               | (Server Layer)   |               | (Scan History &  |
+------------------+               +--------+---------+               |  Appointments)   |
                                            |                         +------------------+
                                   +--------v---------+
                                   | Google Gemini API|
                                   | (Vision & NLP)   |
                                   +------------------+
```

---

## 🚀 Installation & Local Setup

### Prerequisites
Make sure you have Node.js installed on your machine (v18.0.0 or higher is recommended).

### 1. Clone the Repository & Install Dependencies
```bash
git clone https://github.com/your-username/derma-ai.git
cd derma-ai
npm install
```

### 2. Configure Environment Secrets
Create a `.env` file in the root workspace folder, copying variables from `.env.example`:
```env
# Backend AI Configuration
GEMINI_API_KEY=your_google_gemini_api_key_here

# Client Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

### 3. Run the Development Server
```bash
npm run dev
```
The server will boot locally. Open [http://localhost:3000](http://localhost:3000) inside your web browser.

### 4. Build for Production Deployment
```bash
npm run build
```

---

## 🌐 Bilingual Localization Matrix
Derma AI uses an automated context locale mapping system through `i18n` configurations:

| Section Target | English Key Context | Tamil equivalent translation |
| :--- | :--- | :--- |
| **Header Diagnostics** | "Diagnostic Scanner" | "பரிசோதனை ஸ்கேனர்" |
| **Appointments** | "Active Doctor Appointments" | "செயலில் உள்ள சந்திப்புகள்" |
| **Environmental UV** | "Surface Weather - Optimal Condition" | "மேற்பரப்பு வானிலை - சாதகமான நிலை" |
| **Expert Chatbot** | "Derma Expert - NLP Neural Analysis" | "சரும நிபுணர் AI - நரம்பியல் பகுப்பாய்வு" |
| **Appointment Details** | "Visit Fee" / "Distance" | "கட்டணம்" / "தொலைவு" |

---

## 👥 Team & Contributions

| Member Name | Core Role | Contributions | Contact/GitHub |
| :--- | :--- | :--- | :--- |
| **Your Name** | *Lead Project Architect* | Full-stack architecture, Gemini API integrations, Firestore logic | [@github_handle](https://github.com) |
| **Member 2** | *Frontend Architect* | Neo-Brutal UI layout, Framer Motion transitions, i18n Translation Matrix | [@github_handle](https://github.com) |
| **Member 3** | *Database Admin* | Firebase collection design, Auth Guards, scheduling pipelines | [@github_handle](https://github.com) |

---

## 🩺 Clinical Disclaimer
> **IMPORTANT MEDICAL DISCLAIMER**: Derma AI is designed strictly for triage, preliminary screening, and health awareness purposes. The AI-generated reports are educational guidance only and **do not** constitute formal medical diagnosis or advice. Always consult a certified dermatologist or medical provider immediately for suspicious lesions, symptoms, or urgent clinical decisions.
