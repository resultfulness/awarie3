<script>
  import CircularProgress from "@smui/circular-progress";
</script>

<div class="loader">
  <CircularProgress indeterminate style="height: 64px; width: 64px;" />
</div>

<style>
  .loader {
    position: fixed;
    inset: 0;
    display: grid;
    place-items: center;
  }
</style>
