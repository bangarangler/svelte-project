<script>
  import Header from './UI/Header.svelte';
  import MeetupGrid from './Meetups/MeetupGrid.svelte';

  let title = "";
  let subtitle = "";
  let address = "";
  let email = "";
  let description = "";
  let imageUrl = "";

  let meetups = [
    {
      id: 'm1',
      title: 'Coding Meetup',
      subtitle: 'Coding... oh what fun',
      description: 'Come hang out with some really popular coders',
      imageUrl: 'https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_1280.jpg',
      address: '27th Nerd Road, 32523 New Youk',
      contactEmail: 'code@test.com'
    },
    {
      id: 'm2',
      title: 'Swim Together',
      subtitle: 'Let\'s go for some swimming',
      description: 'We will simply swim some rounds!',
      imageUrl: 'https://cdn.pixabay.com/photo/2016/09/18/14/21/swimmer-1678307_1280.jpg',
      address: '27th Nerd Road, 32523 New Youk',
      contactEmail: 'swim@test.com'
    },
  ]

  function addMeetup() {
    const newMeetup = {
      id: Math.random(),
      title,
      subtitle,
      description,
      address,
      imageUrl,
      email
    }
    meetups = [newMeetup, ...meetups]
  }
</script>

<style>
  main {
    margin-top: 5rem;
  }
</style>

<Header />

<main>
  <form on:submit|preventDefault={addMeetup}>
    <div class="form-control">
      <label for="title">Title</label><input type="text" id="title"
                                                         bind:value={title}>
    </div>
    <div class="form-control">
      <label for="subtitle">Subtitle</label><input type="text"
                                                   id="subtitle"
                                                   bind:value={subtitle}>
    </div>
    <div class="form-control">
      <label for="address">Address</label><input type="text" id="address"
                                                             bind:value={address}>
    </div>
    <div class="form-control">
      <label for="imageUrl">Image</label><input type="text" id="imageUrl"
                                                            bind:value={imageUrl}>
    </div>
    <div class="form-control">
      <label for="email">E-Mail</label><input type="email" id="email"
                                                           bind:value={email}>
    </div>
    <div class="form-control">
      <label for="description">Description</label><textarea
             rows="3" id="description" bind:value={description} />
    </div>
    <button type="submit">Save</button>
  </form>
  <MeetupGrid
    {meetups}
    />
</main>

