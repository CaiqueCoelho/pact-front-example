pipeline {
    // agent {
    //     docker {
    //         image 'node:14-alpine' // Use an appropriate Node.js Docker image
    //         args '-u root' // Optional: Run as root user if needed
    //     }
    // }
    agent any
    tools {
        nodejs 'NodeJS 23.1.0' // Name must match the one configured in Global Tool Configuration
    }
    stages {
        // stage('Checkout') {
        //     steps {
        //         // Faça checkout do seu código do repositório Git
        //         git url: 'https://github.com/seu-usuario/seu-repositorio.git', branch: 'main', credentialsId: 'sua-credencial-git'
        //     }
        // }
        stage('Verify Docker Access') {
            steps {
                sh 'docker --version'
            }
        }
        stage('Instalar Dependências') {
            steps {
                // Instala as dependências do projeto
                sh 'npm install'
            }
        }
        stage('Executar Testes do Cypress') {
            steps {
                // Executa os testes do Cypress
                sh 'npx cypress run'
            }
        }
    }
    post {
        success {
            echo 'Os testes do Cypress foram executados com sucesso.'
        }
        failure {
            echo 'Os testes do Cypress falharam. Verifique os logs para mais detalhes.'
        }
    }
}