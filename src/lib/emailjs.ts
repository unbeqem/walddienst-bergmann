import emailjs from "@emailjs/browser";

const PUBLIC_KEY = "DsY4SEtYL7NZf5PE3";
const SERVICE_ID = "service_es64e0s";
const TEMPLATE_ID = "template_gm6sqs8";

let initialized = false;

function ensureInit() {
  if (!initialized) {
    emailjs.init(PUBLIC_KEY);
    initialized = true;
  }
}

export type ContactPayload = {
  name: string;
  recipient: string;
  message: string;
  phone: string;
};

export async function sendContactMessage(payload: ContactPayload) {
  ensureInit();
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, payload);
}

export type ApplicationPayload = {
  name: string;
  recipient: string;
  phone: string;
  position: string;
  message: string;
};

export async function sendApplicationMessage(payload: ApplicationPayload) {
  ensureInit();
  // Reuses the existing contact template (no separate application template
  // configured in EmailJS yet) - the position is prefixed into the message
  // body so it's clearly identifiable as a Kurzbewerbung on arrival.
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, {
    name: payload.name,
    recipient: payload.recipient,
    phone: payload.phone,
    message: `[Kurzbewerbung – ${payload.position}]\n\n${payload.message}`,
  });
}
