export const WA_NUMBER = '919179569006';
export const WA_BASE = `https://wa.me/${WA_NUMBER}`;

export const HERO_WA_MSG = encodeURIComponent(
    "Hello! I'm interested in your premium database services. Could you please tell me more about the available lead categories and pricing?"
);

export const SERVICES_WA_MSG = (service: string) =>
    `${WA_BASE}?text=${encodeURIComponent(`Hello! I'm interested in your *${service}* service. Could you please share more details and pricing?`)}`;

export const CUSTOM_DATA_WA_MSG = encodeURIComponent(
    "Hello! I need a custom database. Can you help me source it?"
);

export const ALL_CATEGORIES_WA_MSG = encodeURIComponent(
    "Hello! I'd like to see all available database categories and pricing."
);
