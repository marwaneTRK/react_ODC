import React from "react";
import { Layout } from "./Layout";
import { Button } from "./Button";

const LoginPage = () => {
  return (
    <Layout>
      <form
        action=""
        method=""
        className="flex justify-center flex-col gap-4 items-center"
      >
        <input
          type="text"
          placeholder="Enter Your Mail"
          className="border-2 border-primary-200 w-fit"
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          className="border-2 border-primary-200 w-fit"
        />
        <Button onClick={() => {}}>Login</Button>
      </form>
    </Layout>
  );
};

export default LoginPage;
