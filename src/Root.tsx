import { Outlet } from "react-router-dom";
import Layout from "./layout/Layout";

type Props = {};

const Root = ({}: Props) => {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

export default Root;
