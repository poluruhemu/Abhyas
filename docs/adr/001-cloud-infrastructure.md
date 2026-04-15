# ADR 1: Cloud Infrastructure Selection

## Status
Accepted

## Context
The Abhyas LMS requires scalable hosting for the web frontend and a cost-effective solution for storing student-uploaded study materials (PDFs). We need a solution that is industry-standard and demonstrates professional architectural patterns.

## Decision
We will use a **Hybrid Cloud** approach:
1. **Frontend/API:** Vercel (Next.js native optimization).
2. **File Storage:** AWS S3 (Industry standard for object storage).
3. **CI/CD:** GitHub Actions (Automated testing and quality gates).

## Rationale
- **Vercel** provides the best developer experience and performance for Next.js.
- **AWS S3** is the most widely used storage service. Using it demonstrates proficiency with AWS IAM, SDKs, and Bucket Policies—highly valued skills in the job market.
- **Cost:** We will stay within the AWS Free Tier (5GB storage) to ensure zero operational cost during the MVP phase.

## Consequences
- Requires management of AWS Credentials.
- Requires implementation of "Signed URLs" for secure file access (a professional security pattern).