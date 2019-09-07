import {writable} from 'svelte/store';

const meetups = writable([
  {
    id: 'm1',
    title: 'Coding Meetup',
    subtitle: 'Coding... oh what fun',
    description: 'Come hang out with some really popular coders',
    imageUrl:
      'https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_1280.jpg',
    address: '27th Nerd Road, 32523 New Youk',
    email: 'code@test.com',
    isFavorite: false,
  },
  {
    id: 'm2',
    title: 'Swim Together',
    subtitle: "Let's go for some swimming",
    description: 'We will simply swim some rounds!',
    imageUrl:
      'https://cdn.pixabay.com/photo/2016/09/18/14/21/swimmer-1678307_1280.jpg',
    address: '27th Nerd Road, 32523 New Youk',
    email: 'swim@test.com',
    isFavorite: false,
  },
]);

const customMeetupsStore = {
  subscribe: meetups.subscribe,
  addMeetup: meetupData => {
    const newMeetup = {
      ...meetupData,
      id: Math.random().toString(),
      isFavorite: false,
    };
    meetups.update(items => {
      return [newMeetup, ...items];
    });
  },
  updateMeetup: (id, meetupData) => {
    meetups.update(items => {
      const meetupIndex = items.findIndex(i => i.id === id);
      const updatedMeetup = {...items[meetupIndex], ...meetupData};
      const updatedMeetups = [...items];
      updatedMeetups[meetupIndex] = updatedMeetup;
      return updatedMeetups;
    })
  },
  toggleFavorite: id => {
    meetups.update(items => {
      const updatedMeetup = {...items.find(m => m.id === id)};
      updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
      const meetupIndex = items.findIndex(m => m.id === id);
      const updatedMeetups = [...items];
      updatedMeetups[meetupIndex] = updatedMeetup;
      return updatedMeetups;
    });
  },
};

export default customMeetupsStore;
