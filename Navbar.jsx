import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Sajidur Rahman
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/forhad.nafis22">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="www.linkedin.com/in/sajidurrahman1">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://www.instagram.com/sajidur_rahmanbd">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://github.com/Sajidurrahman1">
            <img src="/dgithub.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
