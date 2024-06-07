pipeline {
    agent any

    stages {
        stage('Clonar el Repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/jorearmando15/MICRO-SERVICIO-IUDIGITAL-API'
            }
        }
        stage('Construir imagen de Docker') {
            steps {
                script {
                    withCredentials([
                        string(credentialsId: 'MONGODB_URI_LOCAL', variable: 'MONGODB_URI_LOCAL')
                    ]) {
                        // Ajusta la ruta del Dockerfile según la ubicación proporcionada
                        docker.build("proyectos-micro:v${env.BUILD_ID}", "--build-arg MONGODB_URI_LOCAL=${MONGODB_URI_LOCAL} -f balanceador/Dockerfile .")
                    }
                }
            }
        }
        stage('Desplegar contenedores Docker') {
            steps {
                script {
                    withCredentials([
                        string(credentialsId: 'MONGODB_URI_LOCAL', variable: 'MONGODB_URI_LOCAL')
                    ]) {
                        sh 'docker-compose down' // Asegura bajar contenedores anteriores si los hay
                        sh 'docker-compose up -d'
                    }
                }
            }
        }
    }

    post {
        always {
            emailext (
                subject: "Status del build: ${currentBuild.currentResult}",
                body: "Se ha completado el build. Puede detallar en: ${env.BUILD_URL}",
                to: "jorgerodriguezorozco15@gmail.com",
                from: "jorge.rodriguezao@est.iudigital.edu.co"
            )
        }
    }
}
