pipeline {
  agent {
    docker { image 'latest'}
  }
  stages {
    stage('Test') {
      steps {
        sh 'node --version'
      }
    }
  }
}