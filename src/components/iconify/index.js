import dynamic from "next/dynamic";

const Iconify = dynamic(() => import("./Iconify"), { ssr: false });

export default Iconify;
