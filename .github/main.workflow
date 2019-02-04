workflow "Build" {
  on = "push"
  resolves = [
    "test",
    "docker://node:lts",
  ]
}

action "install" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  runs = "npm install"
}

action "test" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  needs = ["install"]
  runs = "npm run test"
}

action "docker-test" {
  uses = "docker://node:lts"
  runs = "npm install"
}

action "docker://node:lts" {
  uses = "docker://node:lts"
  needs = ["docker-test"]
  runs = "npm run test"
}
