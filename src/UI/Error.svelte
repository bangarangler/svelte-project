<script>
  import Modal from '../UI/Modal.svelte';

  export let message;
</script>

<Modal title="An error occurred!" on:cancel>
  <p>{message}</p>
</Modal>
