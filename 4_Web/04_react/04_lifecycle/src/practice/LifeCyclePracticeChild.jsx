function LifeCyclePracticeChild({ post }) {
    return ( 
        <div className = "LifeCyclePracticeChild">
            <div>
                <span className = "id">No. {post.id}</span>
                <span className = "title">- {post.title}</span>
            </div>
            <p className = "body">{post.body.slice(0, 120)}...</p>
        </div>
     );
}

export default LifeCyclePracticeChild;