import { Link } from "react-router-dom";
import { ReactComponent as LogoBlog } from "../assets/logo-blog.svg";

export default function HeaderBlog() {
  return (
    <div className="header-blog">
      <Link to="/blog" className="header-link">
        <span>VOLVER</span>
      </Link>
      <LogoBlog className="logo-blog" />
    </div>
  );
}
