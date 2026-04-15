# Abhyas (अभ्यास) 🚀
### **The AI-Native Learning Management System (LMS)**

> *“Practice is the hardest part of learning, and training is the essence of transformation.”*

Abhyas is a production-grade, AI-powered learning platform built for the 2026 technical landscape. Moving beyond traditional "wrapper" applications, Abhyas implements a resilient, **TDD-backed RAG (Retrieval-Augmented Generation) pipeline** that prioritizes factuality, pedagogical integrity, and system reliability.

---

## 🏗️ System Design & Architecture
Abhyas is built using **Clean Architecture (Hexagonal)** principles. This ensures the core learning logic remains decoupled from the rapidly evolving AI landscape and infrastructure.



* **Core Domain:** Pure TypeScript entities (`Quiz`, `Course`, `Student`) that represent the business logic without external dependencies.
* **AI Orchestration Layer:** Specialized integration using **LangChain** and **Zod** to transform probabilistic LLM outputs into deterministic, validated system data.
* **The Guardrail Layer:** Implementation of the **"LLM-as-a-Judge"** pattern, which validates AI-generated content against source material to eliminate hallucinations before they reach the student.

---

## 🛠️ The 2026 Tech Stack
* **Monorepo:** [Turborepo](https://turbo.build/) for high-performance build caching and seamless package management.
* **Frontend:** [Next.js 15](https://nextjs.org/) with **TanStack Query (React Query)** for intelligent state management and asynchronous AI polling.
* **Backend:** Distributed Node.js/TypeScript microservices.
* **AI/ML:** OpenAI/Claude APIs orchestrated via **LangChain**; **Pinecone** and `pgvector` for vector embeddings and semantic search.
* **Quality Assurance:** **Jest** (Unit/Integration) and **Cypress** (E2E) targeting **90% code coverage** through Test-Driven Development (TDD).

---

## 📈 Development Roadmap & Progress

### ✅ Phase 0: Infrastructure (Completed)
- [x] Monorepo initialization with **Turborepo**.
- [x] GitHub Authentication & CI/CD "plumbing" via PAT.
- [x] Internal package architecture (`@abhyas/ai-engine`).

### 🚧 Phase 1: The "Brain-Body" Link (Current Sprint)
- [ ] **Workspace Integration:** Link `@abhyas/ai-engine` to the `web` app.
- [ ] **Data Resilience:** Implement Zod "Coercion" logic for messy LLM outputs.
- [ ] **The "Clean UI" Bridge:** Build a React Query hook to fetch and validate AI-generated quizzes.

### 🏹 Phase 2: RAG & Knowledge Base (Upcoming)
- [ ] PDF Ingestion pipeline using LangChain.
- [ ] Vector database setup (Pinecone/pgvector) for "talking to your notes."
- [ ] Semantic chunking logic to prevent token overflow.

### ⚖️ Phase 3: The Evaluator (Final)
- [ ] "LLM-as-a-Judge" feedback loop to stop hallucinations.
- [ ] Deployment to Vercel/AWS with production-grade monitoring.


## 🛡️ Engineering Excellence
To maintain a high bar for code quality, this project enforces:
1.  **Strict Type Safety:** Comprehensive TypeScript coverage across the full stack.
2.  **Validation First:** Every AI response is validated through a Zod schema before processing.
3.  **Automated Gates:** CI/CD pipelines prevent deployment if test coverage drops or linting fails.

---

## 👨‍💻 Author
**Hemanth Poluru** *Technical Lead & AI Systems Engineer*