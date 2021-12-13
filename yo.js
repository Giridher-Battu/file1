document.getElementById('myfile')
  .addEventListener('change', getFile)

function getFile(event) {
	const input = event.target
  if ('files' in input && input.files.length > 0) {
	 FileContent(
      document.getElementById('fileno'),input.files[0])
  }
}

function FileContent(target, file) {
	readFile(file).then(content => {
  	target.value = content
  }).catch(error => console.log(error))
}

function readFile(file) {
	const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = event => resolve(event.target.result)
    reader.onerror = error => reject(error)
    reader.readAsText(file)
  })
}