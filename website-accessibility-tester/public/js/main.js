const issuesOutput = document.querySelector('#issues')

// Fetch accessibility issues
const testAccessibility = async (e) => {
  e.preventDefault()

  const url = document.querySelector('#url').nodeValue
  
  if (url === '') {
    alert('Please add a url')
  } else {
    setLoading()

    const response = await fetch(`/api/test?url=${url}`)

    if (response.status !== 200) {
      setLoading(false)
      alert('Something went wrong')
    } else {
      const { issues } = await response.json()
      addIssuesToDOM(issues)
      setLoading(false)
    }
  }
}

// Add issues to DOM
const addIssuesToDOM = (issues) => {
  
  issuesOutput.innerHTML = ''

  if (issues.length === 0) {
    issuesOutput.innerHTML = warningMessage
  } else {
    console.log(issues)
    issues.forEach((issue) => {
      const output = `
        <div class="card mb-5">
          <div class="card-body">
            <h4>${issue.message}</h4>
            <p class="bg-light p-3 my-3">
              ${escapeHTML(issue.context)}
            </p>
            <p class="bg-secondary text-light p-2">
              CODE: ${issue.code}
            </p>
          </div>
        </div>
      `

      issuesOutput.innerHTML += output
    })
  }
}

// Set loading state
const setLoading = (isLoading = true) => {
  const loader = document.querySelector('.loader')
  if (isLoading) {
    loader.style.display = 'block'
  } else {
    loader.style.display = 'none'
  }
} 

// Escape HTML
function escapeHTML(html) {
  return html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

  document.querySelector('#form').addEventListener('submit', testAccessibility)