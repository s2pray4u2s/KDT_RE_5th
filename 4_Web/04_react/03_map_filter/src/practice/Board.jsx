import { useState } from "react";

function Board() {
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [post, setPost] = useState([]);
    const [searchType, setSearchType] = useState("author");
    const [searchWord, setSearchWord] = useState("");

    const addPost = () => {
      const newPost = post.concat({
        id: post.length + 1,
        author: author,
        title: title
      });
      setPost(newPost);
      setAuthor("");
      setTitle("");
    }

    const filteredPosts = post.filter((item) => {
      if (searchWord === "") return true;
      if (searchType === "author") {
        return item.author.includes(searchWord);
      } else {
        return item.title.includes(searchWord);
      }
    });

    return (
        <>
          <div style = {{padding: "20px"}}>
            <div style = {{
              border: "2px solid #333", 
              padding: "20px", 
              marginBottom: "20px", 
              backgroundColor: "#f9f9f9",
              width: "50%",
              textAlign: "center",
              margin: "0 auto",
              boxSizing: "border-box"}}>

            <label>Author: </label>

            <input 
            type = "text" 
            placeholder = "Author" 
            value = {author} 
            onChange = {(e) => setAuthor(e.target.value)} 
            style = {{ marginRight: '20px' }}/>

            <label>Title: </label>

            <input 
            type = "text" 
            placeholder = "title" 
            value = {title}
            onChange = {(e) => setTitle(e.target.value)} 
            style = {{ width: '300px', marginRight: '10px' }}/>

            <button onClick={addPost}>ADD!!</button>
          </div>

          <div style = {{width: "50%", margin: "20px auto", border: "1px solid #ccc",  padding: "20px", boxSizing: "border-box"}}>

            <div style = {{
              width: "100%",
              margin: "20px auto",
              paddingTop: "15px",
              paddingBottom: "15px",
              border: "1px solid #ccc",
              backgroundColor: "#f9f9f9",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>

              <select 
                value = {searchType} 
                onChange = {(e) => setSearchType(e.target.value)} 
                style = {{marginRight: "10px", padding: "5px"}}>
                  <option value="author">Author</option>
                  <option value="title">Title</option>
              </select>

              <input 
                type = "text"
                placeholder = "search"
                value = {searchWord}
                onChange = {(e) => setSearchWord(e.target.value)}
                style = {{width: "300px", marginRight: "10px", padding: "5px"}}/>

              <button>Search!!</button>

            </div>         

            <table style = {{width: "100%", borderCollapse: "collapse"}}>

              <thead>
                <tr style = {{backgroundColor: "#f0f0f0"}}>
                  <th style = {{border: "1px solid #ccc", padding: "10px", width: "33.3%"}}>Number</th>
                  <th style = {{border: "1px solid #ccc", padding: "10px", width: "33.3%"}}>Title</th>
                  <th style = {{border: "1px solid #ccc", padding: "10px", width: "33.3%"}}>Author</th>
                </tr>
              </thead>

              <tbody>
                {filteredPosts.map((item) => {
                  return (
                    <tr key = {item.id}>
                      <td style = {{border: "1px solid #ccc", padding: "10px", textAlign: "center"}}>{item.id}</td>
                      <td style = {{border: "1px solid #ccc", padding: "10px", textAlign: "center"}}>{item.title}</td>
                      <td style = {{border: "1px solid #ccc", padding: "10px", textAlign: "center"}}>{item.author}</td>
                    </tr>);
                })}
              </tbody>
            </table>
          </div>
        </div>
        </>
    );
}

export default Board;