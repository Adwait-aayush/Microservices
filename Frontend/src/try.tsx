import { useEffect, useState } from "react";


export default function Try() {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  
  let age: number = 12;

  useEffect(() => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const reqoptions = {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ username: name, userpass: password }),
    };
    fetch(`http://localhost:6969/Login`, reqoptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }, []);

  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
  };

  return (
    <>
      <form onSubmit={handlesubmit}>
        <h1>Hello!!</h1>
        <p>{age}</p>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
