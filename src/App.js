import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Pages/AboutMe/AboutMe';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Gallery from './Pages/Gallery/Gallery';
import Navbar from './Pages/Navbar/Navbar';
import NotFound from './Pages/NotFound/NotFound';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Services from './Pages/Services/Services';
import Signup from './Pages/Signup/Signup';
import ScrollToTop from './Pages/ScrollToTop/ScrollToTop';
import CourseVideo1 from './Pages/CourseVideos/CourseVideo1';
import CourseVideo2 from './Pages/CourseVideos/CourseVideo2';
import CourseVideo3 from './Pages/CourseVideos/CourseVideo3';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>

      <Navbar></Navbar>

      <ScrollToTop>

        <Routes>

          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/Services' element={<Services></Services>}></Route>
          <Route path='/lighting-for-your-shoot' element={
            <RequireAuth>
              <CourseVideo1></CourseVideo1>
            </RequireAuth>
          }></Route>
          <Route path='/how-to-edit-your-photos' element={
            <RequireAuth>
              <CourseVideo2></CourseVideo2>
            </RequireAuth>
          }></Route>
          <Route path='/professional-gears-you-need' element={
            <RequireAuth>
              <CourseVideo3></CourseVideo3>
            </RequireAuth>}></Route>
          <Route path='/my-works' element={<Gallery></Gallery>}></Route>
          <Route path='/about-me' element={<AboutMe></AboutMe>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>

        </Routes>

      </ScrollToTop>

      <ToastContainer></ToastContainer>

      <Footer></Footer>

    </div>
  );
}

export default App;
