
export async function getAllEvents() {
    const response = await fetch('https://test-71e73.firebaseio.com/events.json');
    const data = await response.json();

    const events = [];

    for (const key in data) {
        events.push({
            id: key,
            title: data[key].title,
            description: data[key].description,
            location: data[key].location,
            image: data[key].image,
            isFeatured: data[key].isFeatured,
            date: data[key].date,
            //to avoid writting all this we cal so just use spread operato to copy all data like this
            // ...data[key]
       })
    }

    return events;
}

export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
    const allEvents = await getAllEvents();
  const { year, month } = dateFilter;

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}