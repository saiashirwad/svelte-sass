<script>
  export let name
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>

<style lang="scss">
  p {
    background-color: $purple;
    color: $white;
    padding: 1em;
  }
</style>
