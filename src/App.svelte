<script>
  import Header from './UI/Header.svelte';
  import MeetupGrid from './Meetups/MeetupGrid.svelte';

  const meetups = [
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
</script>

<style>
  main {
    margin-top: 5rem;
  }
</style>

<Header />

<main>
  <MeetupGrid
    {meetups}
    />
</main>

