<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch("/jobs.json");
    const jobs = await res.json();

    return { jobs };
  }
</script>

<script>
  export let jobs;
</script>

<style>

</style>

<h2>All Current Jobs</h2>
<ul>
  {#each jobs as job}
    <li>
      <a href="/">{job.title}</a>
    </li>
  {/each}
</ul>
