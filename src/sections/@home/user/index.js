import dynamic from 'next/dynamic'

const UserListHead = dynamic(() => import("./UserListHead"))
const UserListToolbar = dynamic(() => import("./UserListToolbar"))

export {
    UserListHead,
    UserListToolbar
}
