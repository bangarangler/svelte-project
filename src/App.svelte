<script>
  import Header from './UI/Header.svelte';

  const meetups = [
    {
      id: 'm1',
      title: 'Coding Meetup',
      subtitle: 'Coding... oh what fun',
      description: 'Come hang out with some really popular coders',
      imageUrl:
      'https://pixabay.com/photos/workplace-team-business-meeting-1245776/',
      address: '27th Nerd Road, 32523 New Youk',
      contactEmail: 'code@test.com'
    },
    {
      id: 'm2',
      title: 'Swim Together',
      subtitle: 'Let\'s go for some swimming',
      description: 'We will simply swim some rounds!',
      imageUrl: 'https://pixabay.com/photos/swimmer-sport-swim-water-crawl-1678307/',
      address: '27th Nerd Road, 32523 New Youk',
      contactEmail: 'swim@test.com'
    },
  ]
</script>

<Header />

