import React, { useRef, useState } from "react";

function App() {
  const baseURL = "https://func-aks-log-query.azurewebsites.net/api/akslogquery";

  const post_hostname = useRef(null);
  const post_namespace = useRef(null);

  const [postResult, setPostResult] = useState(null);

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  }
  
  async function postData() {
    const postData = {
      hostname: post_hostname.current.value,
      namespace: post_namespace.current.value,
    };

    try {
      const res = await fetch(`${baseURL}`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "x-functions-key": "MS05dXZs0mNErKREIZ7vJDQ2FTpefsGZMoKZHo7FaDDiAzFuJPw9Yw==",
        },
        body: JSON.stringify(postData),
      });

      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }
      
/**
*     const contentType = res.headers.get("Content-Type");
*     if (!contentType || !contentType.includes('application/json')) {
*       const message = `Oops, we haven't got JSON!: ${contentType}`;
*       throw new Error(message);
*     }
*/

      const data = await res.json();

      const result = {
        status: res.status + "-" + res.statusText,
        headers: {
          "Content-Type": res.headers.get("Content-Type"),
          "Content-Length": res.headers.get("Content-Length"),
        },
        data: data,
      };

      setPostResult(fortmatResponse(result));
    } catch (err) {
      setPostResult(err.message);
    }
  }
  
  const clearPostOutput = () => {
    setPostResult(null);
  }
  
  return (
    <div className="card">
      <div className="card-header">AKS Container Service Log Query</div>
      <div className="card-body">
        <div className="form-group">
          <input type="text" className="form-control" ref={post_hostname} placeholder="Host Name" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" ref={post_namespace} placeholder="NameSpace" />
        </div>
        <button className="btn btn-sm btn-primary" onClick={postData}>Post Data</button>
        <button className="btn btn-sm btn-warning ml-2" onClick={clearPostOutput}>Clear</button>

        { postResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{postResult}</pre></div> }
      </div>
    </div>
  );
}

export default App;
