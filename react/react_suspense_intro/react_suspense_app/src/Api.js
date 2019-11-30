import axios from 'axios';

const fetchUser = () => {
  console.log('Fetching User...');
  return axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(err => console.log(err))
}

const fetchPosts = () => {
  console.log('Fetching Posts...');
  return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.data)
    .catch(err => console.log(err))
}