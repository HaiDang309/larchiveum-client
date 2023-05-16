import dynamic from "next/dynamic";

const DocumentManagement = dynamic(() => import("./Management"));

export { DocumentManagement };
