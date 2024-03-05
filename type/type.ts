export type returnObject = {
    "error":boolean,
    "amount":number,
    "jokes":Joke[]
}

export type Joke = {
    category: string;
    type: "single" | "twopart"; // Assuming the type can be either 'single' or 'twopart'
    setup: string;
    delivery?: string; // Optional since it might not be present for 'single' type jokes
    flags: {
      nsfw: boolean;
      religious: boolean;
      political: boolean;
      racist: boolean;
      sexist: boolean;
      explicit: boolean;
    };
    id: number;
    safe: boolean;
    lang: string;
};