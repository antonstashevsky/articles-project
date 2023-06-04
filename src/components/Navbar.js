import { Container, Button, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setNews } from "../store/articlesSlice";
import Search from "./Search";

function Navbar() {
  const { newsType } = useSelector((state) => state.articles);
  const dispatch = useDispatch();
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className=""></Nav>
        <Search />
        <Button onClick={() => dispatch(setNews())} className="button">
          {newsType === "personal" ? "Trending News" : "Personal News"}
        </Button>
      </Container>
    </NavbarBs>
  );
}

export default Navbar;
