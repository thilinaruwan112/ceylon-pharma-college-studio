import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { Button } from "./ui/button";

const events = [
  {
    date: "2024-08-15",
    title: "Annual Research Symposium",
    description: "Present your research and learn from leading experts in the field.",
  },
  {
    date: "2024-09-01",
    title: "Workshop on Clinical Pharmacy",
    description: "A hands-on workshop covering the latest trends in clinical pharmacy.",
  },
  {
    date: "2024-09-25",
    title: "World Pharmacist Day",
    description: "Join us for a day of celebration, networking, and guest lectures.",
  },
];

export default function EventCalendar() {
  return (
    <section id="events" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Upcoming Events</h2>
          <p className="mt-2 max-w-2xl mx-auto text-muted-foreground font-body">
            Stay updated with our calendar of events, workshops, and seminars.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.title} className="flex flex-col bg-background hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-md">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="font-headline text-lg">{event.title}</CardTitle>
                  <CardDescription className="font-body">{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="font-body text-sm text-muted-foreground">{event.description}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button variant="outline" size="sm">Learn More</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
