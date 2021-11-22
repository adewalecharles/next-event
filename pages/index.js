import Head from 'next/head';
import EventList from '../components/events/event-list';
import NewsletterRegistration from '../components/input/newsletter-registration';
import { getFeaturedEvents } from '../helpers/api-util';
function HomePage(props) {
    return (
        <div>
            <Head>
                <title>Nextjs Events</title>
                <meta name="description" content="Find alot of great event that alloows you to evolve" />
            </Head>
            <NewsletterRegistration />
            <EventList items={props.events}/>
        </div>
    );
}

export default HomePage;

export async function getStaticProps() {
     const featuredEvents = await getFeaturedEvents();
    return {
        props: {
            events: featuredEvents
        },
        revalidate: 1000,
    }
}