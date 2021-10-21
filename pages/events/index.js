import { Fragment } from "react";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";

function AllEventsPage() {
    const events = getAllEvents();
    const router = useRouter();
    function findEventsHandler(year, month) {
        const fullpath = `/events/${year}/${month}`;
        router.push(fullpath);
    }
    return (
        <Fragment>
            <EventSearch onSearch={findEventsHandler}/>
            <EventList items={events}/>
        </Fragment>
    );
}

export default AllEventsPage;