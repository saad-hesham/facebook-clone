import Navbar from "./components/Navbar Components/Navbar";
import BodyPrent from "./components/Body Components/BodyPrent"
import FormAddingBost from "./components/Body Components/FormAddingBost";
import { useSelector } from "react-redux";
import FormEditPost from "./components/FormEditPost";
import Register from "./pages/Register";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Login from "./pages/Login";
import Chat from "./chatComponents/Chat";
function App() {

  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };
  const postState = useSelector((state)=>state.openAddpost)
  const editState = useSelector((state)=>state.editState)
  const chatState = useSelector((state)=>state.chatState)

  return (
   

    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <ProtectedRoute>
              <Navbar />
            <BodyPrent/>

            {postState ? <div><FormAddingBost/>  <div className="black-screen"></div></div> :null}
            {editState ? <div><FormEditPost/>  <div className="black-screen"></div></div> :null}
            {chatState ? <Chat/> :null}

            
            </ProtectedRoute>
          }
        />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>

  )
}

export default App;
