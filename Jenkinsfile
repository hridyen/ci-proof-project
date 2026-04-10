pipeline {
    agent {
        label 'ubuntu-agent'
    }

    environment {
        CI = 'true'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies...'
                sh 'npm install'
            }
        }

        stage('List Project Files') {
            steps {
                echo 'Listing project structure...'
                sh 'find . -maxdepth 3 -type f | sort'
            }
        }

        stage('List Test Files') {
            steps {
                echo 'Listing exact test files...'
                sh 'find tests -type f | sort'
            }
        }

        stage('Run Passing Test Suite') {
            steps {
                echo 'Running passing test suite...'
                sh '''
                    mkdir -p reports
                    rm -f reports/pass-junit.xml
                    JEST_JUNIT_OUTPUT_NAME=pass-junit.xml npm run test:pass
                '''
            }
        }

        stage('Run Failing Test Suite') {
            steps {
                echo 'Running intentional failing test suite for CI proof...'
                sh '''
                    mkdir -p reports
                    rm -f reports/fail-junit.xml
                    JEST_JUNIT_OUTPUT_NAME=fail-junit.xml npm run test:fail || true
                '''
            }
        }

        stage('Publish Test Results') {
            steps {
                echo 'Publishing test results...'
                sh 'ls -l reports/ || true'
                junit 'reports/*.xml'
                archiveArtifacts artifacts: 'reports/*.xml', allowEmptyArchive: false
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed.'
        }
        success {
            echo 'Pipeline finished successfully.'
        }
        unstable {
            echo 'Pipeline finished with unstable status.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}