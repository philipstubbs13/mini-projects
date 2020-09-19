<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch("/data.json");
    const todos = await res.json();

    return { todos };
  }
</script>

<script>
  export let todos;
  console.log(todos);
</script>

<style>

</style>

<h1>All Current Jobs</h1>
