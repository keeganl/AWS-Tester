module.exports = {
  apps: [{
    name   : "app1",
    script : "./app.js"
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-208-148-107.compute-1.amazonaws.com',
      key: '~/.ssh/test_server_key.pem',
      ref: 'origin/master',
      repo: 'git@github.com:keeganl/AWS-Tester.git',
      path: '/home/ubuntu/AWS-Tester',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
