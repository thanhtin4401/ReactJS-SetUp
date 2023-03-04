// import React from 'react'
// import { BrowserRouter, Routes,Route } from 'react-router-dom'

// function Routers() {
//   return (

//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Homelayout />}>
//           <Route path="/" element={<HomePage />}></Route>
//         </Route>
//         <Route path="/" element={<Mainlayout />}>
//           <Route path="/Profile-Person" element={<ProfilePage />}></Route>
//         </Route>
//         <Route
//           path="/Manager"
//           element={
//             <RequestPageAdmin>
//               <ManagerLayout />
//             </RequestPageAdmin>
//           }
//         >

//           <Route path="/Manager/User" element={<ListUserPage />} />
//         </Route>

//         <Route
//           path="/"
//           element={
//             <RequestPage>
//               <Authlayout />
//             </RequestPage>
//           }
//         >
//           <Route path="/Login" element={<Login />}></Route>
//           <Route path="/Register" element={<Register />}></Route>
//         </Route>

//         <Route path="/Manager" element={<ManagerLayout />}></Route>
//         <Route path="/*" element={<NoteFoundPage />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default Routers
