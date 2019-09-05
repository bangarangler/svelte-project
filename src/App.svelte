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
</style>

<Header />

<main>
  <Button caption="New Meetup"  on:click={() => editMode = 'add'}/>
  {#if editMode === 'add'}
    <EditMeetup />
  {/if}
  <MeetupGrid
    {meetups}
    on:togglefavorite={toggleFavorite}
    />
</main>

