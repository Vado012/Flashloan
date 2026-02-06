import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomeWrap from "./homeComponents/HomeWrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutWrap from "./aboutComponents/AboutWrap";
import ContactWrap from "./contactComponents/ContactWrap";
import ServicesWrap from "./servicesComponents/ServicesWrap";
import LoginWrap from "./loginComponents/LoginWrap";
import RegisterWrap from "./registerComponents/RegisterWrap";
import PageWrap from "./pagesComponent/PageWrap";
import BlogWrap from "./blogComponents/BlogWrap";
import DashboardWrap from "./DashboardComponent/DashboardWrap";

/* Temporary Pages (create real components later) */
const Services = () => <h1 className="p-10 text-3xl">Our Services</h1>;
const Page = () => <h1 className="p-10 text-3xl">Our pages</h1>;
const blog = () => <h1 className="p-10 text-3xl">Our Blog</h1>;
const Contact = () => <h1 className="p-10 text-3xl">Contact Us</h1>;
const Login = () => <h1 className="p-10 text-3xl">Login Page</h1>;
const Apply = () => <h1 className="p-10 text-3xl">Loan Application</h1>;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeWrap />} />
        <Route path="/aboutUs" element={<AboutWrap/>} />
        <Route path="/services" element={<ServicesWrap/>} />
        <Route path="/pages" element={<PageWrap/>} />
        <Route path="/blog" element={<BlogWrap/>} />
        <Route path="/contact" element={<ContactWrap/>} />
        <Route path="/login" element={<LoginWrap/>} />
        <Route path="/apply" element={<RegisterWrap/>} />
        <Route path="/dashboard" element={<DashboardWrap/>} />
        <Route path="*" element={<h1 className="p-10 text-3xl">404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
