<script context="module">
  export async function preload(page, session) {
    const { id } = page.params;

    const res = await this.fetch(`jobs/${id}.json`);
    const job = await res.json();

    return { job };
  }
</script>

<script>
  export let job;
</script>

<div class="job">
  <h2>{job.title}</h2>
  <p>Salary of ${job.salary}</p>
  <p>{job.details}</p>
</div>
