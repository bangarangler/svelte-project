<script>
  import Header from './UI/Header.svelte';
  import MeetupGrid from './Meetups/MeetupGrid.svelte';
  import TextInput from './UI/TextInput.svelte';
  import Button from './UI/Button.svelte';
  import EditMeetup from './Meetups/EditMeetup.svelte';

  let meetups = [
    {
      id: 'm1',
      title: 'Coding Meetup',
      subtitle: 'Coding... oh what fun',
      description: 'Come hang out with some really popular coders',
      imageUrl: 'https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_1280.jpg',
      address: '27th Nerd Road, 32523 New Youk',
      contactEmail: 'code@test.com',
      isFavorite: false
    },
    {
      id: 'm2',
      title: 'Swim Together',
      subtitle: 'Let\'s go for some swimming',
      description: 'We will simply swim some rounds!',
      imageUrl: 'https://cdn.pixabay.com/photo/2016/09/18/14/21/swimmer-1678307_1280.jpg',
      address: '27th Nerd Road, 32523 New Youk',
      contactEmail: 'swim@test.com',
      isFavorite: false
    },
  ]

  let editMode;

  function addMeetup(event) {
    const newMeetup = {
      id: Math.random(),
      title: event.detail.title,
      subtitle: event.detail.subtitle,
      description: event.detail.description,
      address: event.detail.address,
      imageUrl: event.detail.imageUrl,
      email: event.detail.email
    }
    meetups = [newMeetup, ...meetups]
    editMode = null;
  }

  function toggleFavorite(event) {
    const id = event.detail;
    const updatedMeetup = {...meetups.find(m => m.id === id) }
    updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
    const meetupIndex = meetups.findIndex(m => m.id === id);
    const updatedMeetups = [...meetups]
    updatedMeetups[meetupIndex] = updatedMeetup;
    meetups = updatedMeetups;
  }
</script>

<style>
  main {
    margin-top: 5rem;
  }

  .meetup-controls {
    margin: 1rem;
  }
</style>

<Header />

<main>
  <div class="meetup-controls">
    <Button on:click={() => editMode = 'add'}>New Meetup</Button>
  </div>
  {#if editMode === 'add'}
    <EditMeetup on:save={addMeetup} />
  {/if}
  <MeetupGrid
    {meetups}
    on:togglefavorite={toggleFavorite}
    />
</main>

