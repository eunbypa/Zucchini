import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import ScrollToTop from "./constants/ScrollToTop";
import Footer from "./components/Footer/Footer";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const Layout = styled.div`
  min-width: 90rem;
  font-family: "IBM Plex Sans KR", sans-serif;
`;

function Root() {
  const location = useLocation();

  const exclude = ["/conference", "/signup/agreement"];
  return (
    <Layout>
      <ReactQueryDevtools initialIsOpen={false} />
      <ScrollToTop />
      {exclude.includes(location.pathname) ? null : <Header />}
      <Outlet />
      <Footer />
    </Layout>
  );
}

export default Root;