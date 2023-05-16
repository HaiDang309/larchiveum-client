import dynamic from "next/dynamic";

const Rooms = dynamic(() => import("./Rooms"));
const RoomForm = dynamic(() => import("./RoomForm"));

export { Rooms, RoomForm };
