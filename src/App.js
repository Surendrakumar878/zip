import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./Admine/AdminDashboard";
import AdminLogin from "./Admine/AdminLogin";
import Appointment from "./Admine/Appointment";
import Category from "./Admine/Category";
import BlogForm from "./Admine/BlogForm";
import EnquireForm from "./Admine/EnquireForm";
import BlogInnerPage from "./components/BlogInnerPage";
import ScrollTop from "./components/ScrollTop";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import FreeConsultancy from "./pages/FreeConsultancy";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import PortFolio from "./pages/PortFolio";
import Services from "./pages/Services";
import './App.css';
import Profile from "./Admine/Profile";
import ContactUsData from "./Admine/ContactUsData";
import Seo from './pages/Seo';
import UiandUx from "./pages/UiandUx";
import Team from "./components/Team";
import Summary from "./pages/Summary";
import PPC from "./pages/PPC";
import Content from "./pages/Content";
import Social from "./pages/Social";
import LocalSeo from "./pages/LocalSeo";



const App = () => {
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="UiandUx" element={<UiandUx />} />
          <Route path="team" element={<Team />} />

          <Route path="services" element={<Services />} />
          <Route path="seo" element={<Seo />} />
          <Route path="ppc" element={<PPC />} />
          <Route path="content" element={<Content />} />
          <Route path="port" element={<PortFolio />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:_id" element={<BlogInnerPage />} />
          <Route path="blognew/:_id" element={<BlogInnerPage />} />
          <Route path="consultancy" element={<FreeConsultancy />} />
          <Route path="summary" element={<Summary />} />
          <Route path="social" element={<Social />} />
          <Route path="localseo" element={<LocalSeo />} />
        </Route>

        <Route path="/admin/Login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />}>
          <Route path="blogform" element={<BlogForm />} />
          <Route path="enquireform" element={<EnquireForm />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="category" element={<Category />} />
          <Route path="profile" element={<Profile />} />
          <Route path="acontact" element={<ContactUsData />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
