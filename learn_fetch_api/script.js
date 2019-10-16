fetch("https://reqres.in/api/users/", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'User 1'
  })
})
  .then(res => {
    if (res.ok) {
      console.log('SUCCESS')
      return res.json()
    } else {
      console.log('Not Successful')
    }
    res.json()
  })
  .then(data => console.log(data))