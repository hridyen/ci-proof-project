# 🚀 ci-proof-project

### Branch-Aware CI/CD Pipeline Proof of Concept

---

## 🔹 Overview
This repository is an **R&D Proof-of-Concept (PoC)** designed to validate core CI/CD functionalities and automated testing workflows. It demonstrates a minimum viable CI proof milestone by integrating **Jenkins**, **Node.js**, and **Jest** in an isolated sandbox environment.

> [!NOTE]
> This is not a production system. It is a controlled environment for CI/testing research and demonstration of traceability from ticket to execution evidence.

---

## 🎯 Objectives
- ✅ **Validate a working CI job definition.**
- ✅ **Implement a committed automated test path.**
- ✅ **Generate passing test run artifacts** (`pass-junit.xml`).
- ✅ **Generate failing test run artifacts** (`fail-junit.xml`) to prove failure detection.
- ✅ **Ensure traceability** through ticket-to-PR mapping and exact file inventory.

---

## ⚙️ Tech Stack
- **Runtime**: [Node.js](https://nodejs.org/)
- **Test Framework**: [Jest](https://jestjs.io/)
- **Reporting**: [jest-junit](https://www.npmjs.com/package/jest-junit) (Generates Jenkins-compatible XML reports)
- **CI/CD Orchestration**: [Jenkins](https://www.jenkins.io/)
- **Automation**: Jenkins Pipeline (Groovy-based `Jenkinsfile`)

---

## 🏗️ Architecture & Workflow
The project follows a standard micro-service structure with an automated pipeline triggered upon code changes.

1.  **Developer** pushes code to a branch.
2.  **Jenkins** detects the change and triggers the build.
3.  **Pipeline** stages execute:
    -   **Install**: Fetch dependencies via `npm install`.
    -   **Build/List**: Audit project structure and test files.
    -   **Test (Pass)**: Execute validated logic.
    -   **Test (Fail)**: Execute intentional failure suite to test CI resilience.
    -   **Publish**: Archive reports and display test results in Jenkins UI.

---

## 📂 Project Structure
```text
ci-proof-project/
│
├── app/                # Source code under test (logic)
│   └── math.js
│
├── tests/              # Automated test suites
│   ├── math.pass.test.js
│   └── math.fail.test.js
│
├── reports/            # Generated test artifacts (JUnit XML)
│   └── .gitkeep
│
├── screenshots/        # Evidence of CI execution
├── package.json        # Project metadata and scripts
├── Jenkinsfile         # CI pipeline definition
├── README.md           # Project documentation
├── .gitignore          # Ignored files (node_modules, etc.)
└── package-lock.json   # Dependency lockfile
```

---

## 📦 CI/CD Pipeline Stages
The `Jenkinsfile` defines the following robust stages:

| Stage | Description |
| :--- | :--- |
| **Install Dependencies** | Executes `npm install` to setup the environment. |
| **List Project Files** | Audits the file system structure for traceability. |
| **List Test Files** | Explicitly lists the test suite inventory. |
| **Run Passing Suite** | Executes `math.pass.test.js` and generates `pass-junit.xml`. |
| **Run Failing Suite** | Executes `math.fail.test.js` (intentional failure) and generates `fail-junit.xml`. |
| **Publish Results** | Aggregates XML reports and archives artifacts for review. |

---

## 🛠️ Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+)
- [npm](https://www.npmjs.com/)
- [Jenkins](https://www.jenkins.io/) (with Pipeline and JUnit plugins)

### Local Development
1.  **Clone the repository**:
    ```bash
    git clone https://github.com/hridyen/ci-proof-project.git
    cd ci-proof-project
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run passing tests**:
    ```bash
    npm run test:pass
    ```
4.  **Run failing tests** (will return a non-zero exit code):
    ```bash
    npm run test:fail
    ```

---

## 📸 Screenshots & Output Evidence

### 1. Pipeline Execution Timeline
![Pipeline Timeline](screenshots/pipeline%20timeline.png)
*Visual breakdown of all pipeline stages and their execution status.*

### 2. Test Results (JUnit Reports)
| Passing Results | Failing Results |
| :--- | :--- |
| ![Pass JUnit](screenshots/pass%20junit.png) | ![Fail JUnit](screenshots/fail%20junit.png) |
| *Evidence of successful test execution.* | *Evidence of failure detection proof.* |

### 3. Console Output & Build Details
````carousel
![Console Output 1](screenshots/console%20output.png)
<!-- slide -->
![Console Output 2](screenshots/console%20output2.png)
<!-- slide -->
![Console Output 3](screenshots/console%20output3.png)
<!-- slide -->
![5th Build Output](screenshots/5th%20build%20putput.png)
````

---

## 🚀 Future Improvements
- [ ] Integration with Docker for containerized test execution.
- [ ] Slack/Email notifications for pipeline failures.
- [ ] Integration with SonarQube for static code analysis.

## 📌 Learnings
- Implementing controlled failure handling in Jenkins (`|| true`).
- Configuring `jest-junit` for dynamic report naming.
- Establishing traceability between code changes and archived CI artifacts.

## 🧠 Conclusion
The **ci-proof-project** successfully validates a complete CI/CD loop including automated testing and failure reporting. It meets all minimum proof milestones for R&D validation and provides a solid foundation for more complex automation tasks.

---
🎯 *Link your changes to a ticket! All PRs should follow the ticket naming convention.*