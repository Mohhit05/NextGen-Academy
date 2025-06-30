import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontendLayout from "./layouts/FrontendLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import TermsOfService from "./pages/TermsOfService";
import Admissions from "./pages/Admissions";
import Academics from "./pages/Academics";
import Alumni from "./pages/Alumni";
import CampusFacilities from "./pages/CampusFacilities";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import FacultyStaff from "./pages/FacultyStaff";
import News from "./pages/News";
import NewsDetails from "./pages/NewsDetails";
import NoPage from "./pages/NoPage";
import StudentsLife from "./pages/StudentsLife";
import SignIn from "./pages/SignIn"; 
import ForgetPassword from "./pages/ForgetPassword";
import ChangePassword from "./pages/ChangePassword";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontendLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="academics" element={<Academics />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="alumni" element={<Alumni />} />
          <Route path="campus-facilities" element={<CampusFacilities />} />
          <Route path="events" element={<Events />} />
          <Route path="event-details" element={<EventDetails />} />
          <Route path="faculty-staff" element={<FacultyStaff />} />
          <Route path="news" element={<News />} />
          <Route path="news-details" element={<NewsDetails />} />
          <Route path="students-life" element={<StudentsLife />} />

          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<TermsOfService />} />

          <Route path="*" element={<NoPage />} />

          
        </Route>
        <Route path="/signin" element={<SignIn />} /> 
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />


      </Routes>
    </BrowserRouter>
  );
}
