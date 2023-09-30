import Community from "../../components/community"
export const metadata = {
  title: "Community - FossTube",
  description: "Open & Decentralized",
};

// TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
   <><Community/></>
  );
}
