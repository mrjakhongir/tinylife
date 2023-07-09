import React from "react";
import {
  Link,
  useLoaderData,
  Form,
  redirect,
  useNavigation,
} from "react-router-dom";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  localStorage.setItem("loggedin", true);
  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/host";
  return redirect(pathname);
}

function Login() {
  const message = useLoaderData();
  const navigation = useNavigation();
  return (
    <div className="login-wrapper">
      {message && <h3 className="login-error">{message}</h3>}
      <h2 className="login-title">Sign in to your account</h2>
      <Form className="login-form" method="post" replace>
        <input
          type="text"
          placeholder="your email here"
          name="email"
          className="login-input"
        />
        <input
          type="text"
          placeholder="your password here"
          name="password"
          className="login-input"
        />
        <button
          disabled={navigation.state === "submitting"}
          className="btn login-btn"
        >
          {navigation.state === "idle" ? "Log in" : "Logging in"}
        </button>
      </Form>
      <h5 className="login-subtitle">
        Don't have an account?{" "}
        <Link className="sign-up-link">Create one now</Link>
      </h5>
    </div>
  );
}

export default Login;
