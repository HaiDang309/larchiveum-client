import dynamic from "next/dynamic";

const RoomCard = dynamic(() => import("./RoomCard"), { ssr: false });
const RoomSearch = dynamic(() => import("./RoomSearch"), { ssr: false });
const RoomSort = dynamic(() => import("./RoomSort"), { ssr: false });

export { RoomCard, RoomSearch, RoomSort };
