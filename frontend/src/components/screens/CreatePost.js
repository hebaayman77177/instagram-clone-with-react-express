import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import M from "materialize-css";
import Classes from "./CreatePost.module.css";
function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState("");
  const [url, setUrl] = useState("");
  const history = useHistory();

  useEffect(() => {
    let imgData={
      title,
      body:content,
      photo:url
    }
    if (url) {
      fetch("/api/v1/posts", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify(imgData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "error") {
            console.log("error:", data);
            M.toast({ html: data.message, classes: "#e53935 red darken-1" });
          } else {
            console.log("Success:", data);
            M.toast({ html: "Success", classes: "#388e3c green darken-2" });
            history.push("/");
          }
        })
        .catch((err) => console.log(err));
    }
  }, [url]);

  const postDetails = () => {
    const data = new FormData();
    data.append("file", img);
    data.append("upload_preset", "insta-clone");
    data.append("cloud_name", "ditl0q8zv");
    fetch("https://api.cloudinary.com/v1_1/ditl0q8zv/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => console.log(err));

    let imgData = {
      title: title,
      body: content,
      photo: url,
    };
  };

  return (
    <div className={Classes.create_post_card}>
      <div className="card card_eqv input-field">
        <h3>Instagram</h3>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="file-field input-field">
          <div className="btn #01579b light-blue darken-4">
            <span>File</span>
            <input
              type="file"
              onChange={(e) => {
                setImg(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
            />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <a
          className="waves-effect waves-light btn #01579b light-blue darken-4"
          onClick={postDetails}
        >
          Publish
        </a>
      </div>
    </div>
  );
}

export default CreatePost;
