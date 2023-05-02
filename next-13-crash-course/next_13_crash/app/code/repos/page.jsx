async function fetchRepos() {
    const response = await fetch('https://api.github.com/users/philipstubbs13/repos');
    const repos = await response.json();

    return repos;
}

const ReposPage = async () => {
    const repos = await fetchRepos();
    
    return (
        <div>{repos[0].name}</div>
    )
}

export default ReposPage