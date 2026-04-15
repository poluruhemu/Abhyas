# Abhyas
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

## 📈 Development Roadmap
- [ ] **Phase 1: Ingestion Engine (Current)**
    - [ ] TDD-backed PDF processing and semantic chunking.
    - [ ] Vector embedding pipeline with Pinecone.
- [ ] **Phase 2: RAG Tutor & Interaction**
    - [ ] Context-aware chat interface for course materials.
    - [ ] Real-time streaming responses using React Query.
- [ ] **Phase 3: The Evaluator (Stability)**
    - [ ] Automated Quiz generation with **Zod Coercion/Transformation**.
    - [ ] "LLM-as-a-Judge" factual verification loop.
- [ ] **Phase 4: Production Scalability**
    - [ ] CI/CD via GitHub Actions.
    - [ ] Cost and latency monitoring for LLM usage.

---

## 🛡️ Engineering Excellence
To maintain a high bar for code quality, this project enforces:
1.  **Strict Type Safety:** Comprehensive TypeScript coverage across the full stack.
2.  **Validation First:** Every AI response is validated through a Zod schema before processing.
3.  **Automated Gates:** CI/CD pipelines prevent deployment if test coverage drops or linting fails.

---

## 👨‍💻 Author
**Hemanth Poluru** *Technical Lead & AI Systems Engineer*
