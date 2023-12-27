import pocketBase from "pocketbase";

const pb = new pocketBase(import.meta.env.VITE_PB_URL);

export default pb;