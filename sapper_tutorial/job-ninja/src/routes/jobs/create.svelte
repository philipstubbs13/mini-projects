<script>
  let title;
  let salary;
  let details;

  const handleSubmit = () => {
    console.log(title, salary, details);
  };
</script>

<style>
  h2 {
    text-align: center;
  }
  form {
    max-width: 360px;
    margin: 40px auto;
    text-align: center;
  }
  input,
  textarea {
    display: block;
    width: 100%;
    padding: 10px;
    font-family: arial;
    margin: 10px auto;
    border: 1px solid #eee;
    border-radius: 8px;
  }
</style>

<h2>Add a New Job</h2>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" placeholder="job title" bind:value={title} required />
  <input type="number" placeholder="salary" bind:value={salary} required />
  <textarea placeholder="job details" bind:value={details} required />
  <button class="btn">Add new job</button>
</form>
