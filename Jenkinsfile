pipeline {
    agent any

    environment {
        IMAGE_NAME = "dchandana1/devops-project"
        IMAGE_TAG = "v1"
    }

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/damisettichandana-creator/devops-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:$IMAGE_TAG .'
            }
        }

        stage('Login to Docker Hub') {
            steps {
                sh 'echo $DOCKERHUB_PASSWORD | docker login -u dchandana1 --password-stdin'
            }
        }

        stage('Push Image') {
            steps {
                sh 'docker push $IMAGE_NAME:$IMAGE_TAG'
            }
        }
    }
}