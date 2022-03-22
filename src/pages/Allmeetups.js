import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
//'https://web.facebook.com/photo/?fbid=3042377112679252&set=a.1519851544931824',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
      //'https://web.facebook.com/photo.php?fbid=3010078339314100&set=t.100007209792024&type=3',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];


function AllMeetupsPage() {
    return(
        <section>
            <h1>AllMeetups Page</h1>
         <MeetupList meetups={DUMMY_DATA} />

        </section>  
        
    );
}



export default AllMeetupsPage;