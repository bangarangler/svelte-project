<script>
  import Header from './UI/Header.svelte';
  import MeetupGrid from './Meetups/MeetupGrid.svelte';
  import TextInput from './UI/TextInput.svelte';
  import Button from './UI/Button.svelte';

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

  form {
    width: 30rem;
    max-width: 90%;
    margin: auto;
  }
</style>

<Header />

<main>
  <form on:submit|preventDefault={addMeetup}>
    <TextInput
      id="title"
      label="Title"
      value={title}
      on:input={event => title = event.target.value}
      />
    <TextInput
      id="subtitle"
      label="Subtitle"
      value={subtitle}
      on:input={event => subtitle = event.target.value}
      />
    <TextInput
      id="address"
      label="Address"
      value={address}
      on:input={event => address = event.target.value}
      />
    <TextInput
      id="imageUrl"
      label="Image URL"
      value={imageUrl}
      on:input={event => imageUrl = event.target.value}
      />
    <TextInput
      id="email"
      label="E-Mail"
      value={email}
      type="email"
      on:input={event => email = event.target.value}
      />
    <TextInput
      id="description"
      label="Description"
      value={description}
      controlType="textarea"
      on:input={event => description = event.target.value}
      />
      <Button type="submit" caption="Save" />
  </form>
  <MeetupGrid
    {meetups}
    />
</main>

