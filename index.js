function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logWhisper(string) {
  console.log.restore()
  return string.toLowerCase()
}
