import * as React from "react";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import "./LoginPage.css";

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="outlined"
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
}

export default function App() {
  return (
    <CssVarsProvider>
      <main>
        <img
          className="loginlogo"
          src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png"
        />
        {/* <ModeToggle /> */}
        <Sheet
          sx={{
            width: 350,
            mx: "auto", // margin left & right
            my: 4, // margin top & botom
            py: 6, // padding top & bottom
            px: 4, // padding left & right
            display: "flex",
            position: "center",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md",
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h3" component="h1">
              <b>Sign in</b>
            </Typography>
            {/* <Typography level="body2">Sign in to continue.</Typography> */}
          </div>
          <FormControl>
            <FormLabel>Email or mobile phone number</FormLabel>
            <input
              // html input attribute
              name="email"
              type="email"
              className="passin"
              //   placeholder="xyz@email.com"
            />
          </FormControl>
          <FormControl>
            <div className="forgetpass">
              <FormLabel>Password</FormLabel>
              <Typography
                fontSize="sm"
                endDecorator={
                  <Link href="/sign-up">Forgot your password?</Link>
                }
              ></Typography>
            </div>
            <input
              // html input attribute
              name="password"
              type="password"
              //   placeholder="password"
              className="passin"
            />
          </FormControl>
          <button className="loginbutton">Sign in</button>
          <p className="privacynote">
            By continuing, you agree to Amazon's{" "}
            <Link fontSize="sm" href="/conditions">
              Conditions of Use
            </Link>{" "}
            and{" "}
            <Link fontSize="sm" href="/note">
              Privacy Notice
            </Link>
            .
          </p>
          <div className="check">
            <input type="checkbox" />
            <p className="checkbox">
            &nbsp;&nbsp;Keep me signed in.&nbsp;&nbsp;
              <Link fontSize="sm" href="/details">
                Details
              </Link>
            </p>
          </div>
          <div className="break"><hr className="line"/>
            <h5 className="newAmaz">New to Amazon?</h5><hr className="line"/>
          </div>
          <button className="accbutton">Create your Amazon account</button>
          {/* <Typography
            endDecorator={<Link href="/sign-up">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: "center" }}
          >
            Don&apos;t have an account?
          </Typography> */}
        </Sheet>
        {/* <div className="ffooter"><Link>Conditions of Use</Link><Link>Privacy Notice</Link><Link>Help</Link></div> */}
        <div className="end"><p>© 1996-2023, Amazon.com, Inc. or its affiliates</p></div>
      </main>
    </CssVarsProvider>
  );
}
