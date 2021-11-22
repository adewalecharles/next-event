import { useRouter } from "next/router";
import Head from 'next/head';
import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/events-search";
import { getAllEvents } from "../../helpers/api-util";

function AllEventsPage(props) {
    
    const events = props.events;
    const router = useRouter();

    function findEventsHandler(year, month) {
        const fullpath = `/events/${year}/${month}`;
        router.push(fullpath);
    }
    return (
        
        <Fragment>
            <Head>
                <title>All Events</title>
                <meta name="description" content="Find alot of great event that alloows you to evolve" />
            </Head>
            <EventSearch onSearch={findEventsHandler}/>
            <EventList items={events}/>
        </Fragment>
    );
}
export async function getStaticProps() {
     const allEvents = await getAllEvents();
    return {
        props: {
            events: allEvents
        },
        revalidate: 60,
    }
}

export default AllEventsPage;