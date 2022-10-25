import axios from "axios";
import React from "react";
import HTMLRenderer from "react-html-renderer";

const baseURL =
  "https://www.googleapis.com/blogger/v3/blogs/1491397990658765883/posts?key=AIzaSyAzu62vFjimdTkVH4bsO0X8SCXq2lKkHkQ&clientid=200223325331-dber15e4juaus1uajuote4p0o0vfqv6a.apps.googleusercontent.com&clientsecret=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";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data.items);
    });
  }, []);

  if (!post) return null;
  // console.log(post);
  return (
    <div>
      {post.map((item) => {
        console.log(item);
        return (
          <div>
            Tittle:
            <a href={item.url} key={item.id}>
              <h1>{item.title}</h1>
            </a>
            <h5>{item.labels}</h5>
            <HTMLRenderer
              html={item.content}
              components={
                {
                  // h1: props => <Heading color="red" {...props} />,
                  // h2: Subheading,
                  // a: Link,
                }
              }
            />
            <p></p>
          </div>
        );
      })}
    </div>
  );
}
