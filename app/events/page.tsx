import { EventForm } from "./EventsForm";
import React from "react";

const EventsPage = () => {
  return (
    <main className="px-2 py-6 md:container flex items-center justify-center scroll-mt-32">
      <div className="max-w-2xl grow">
        <EventForm />
      </div>
    </main>
  );
};

export default EventsPage;
