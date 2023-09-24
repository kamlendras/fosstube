"use client"
import Link from "next/link"

export default function Header() {
 
  return (
    
  )
}



















// import Link from "next/link"
// import { signIn, signOut, useSession } from "next-auth/react"
// import Avatar from "./avatar"
// import GitHubIcon from '@mui/icons-material/GitHub';
// import Fab from '@mui/material/Fab';
// export default function Header() {
//   const { data: session, status } = useSession()
//   const loading = status === "loading"

//   return (







// <p
// className={`nojs-show ${
//   !session && loading 
// }`}
// >
// {!session && (
//   <>
   
//     <a
//       href={`/api/auth/signin`}
//       // className={styles.buttonPrimary}
//       onClick={(e) => {
//         e.preventDefault()
//         signIn()
//       }}
//     >
// 
//     </a>
//   </>
// )}
// {session?.user && (
//   <>
//     {session.user.image && (
//       <span
//         style={{ backgroundImage: `url('${session.user.image}')` }}
//         // className={styles.avatar}
//       />
//     )}
//        <Avatar />
//     <span 
//     // className={styles.signedInText}
//     >
//       <small>Signed in as</small>
//       <br />
//       <strong>{session.user.email ?? session.user.name}</strong>
//     </span>
//     <a
//       href={`/api/auth/signout`}
//       // className={styles.button}
//       onClick={(e) => {
//         e.preventDefault()
//         signOut()
//       }}
//     >
//       Sign out
//     </a>
//   </>
// )}
// </p>

// )
// }