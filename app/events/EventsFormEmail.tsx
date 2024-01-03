import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type EventsFormEmailProps = {
  name: string;
  phoneNumber: string;
  email?: string;
  eventType: string;
  crowdSize: string;
  eventDate: string;
};

export default function EventsFormEmail({
  name,
  phoneNumber,
  email,
  eventType,
  crowdSize,
  eventDate,
}: EventsFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Event requested for {eventDate}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following request for quote
              </Heading>
              <hr />
              <Text>
                <span className="font-bold">Event Date: </span>
                {eventDate}
              </Text>

              <Text>
                <span className="font-bold">Name: </span>
                {name}
              </Text>
              <Text>
                <span className="font-bold">Phone Number: </span>
                {phoneNumber}
              </Text>
              <Text>
                <span className="font-bold">Email: </span>
                {email}
              </Text>
              <Text>
                <span className="font-bold">Event Type: </span>
                {eventType}
              </Text>
              <Text>
                <span className="font-bold">Crowd Size: </span>
                {crowdSize}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
