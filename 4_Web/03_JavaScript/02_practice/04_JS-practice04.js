const form = document.querySelector("form");
const useridInput = document.querySelector("#userid");
const commentInput = document.querySelector("#comment");
const commentList = document.querySelector("#comment-list");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // 새로고침 방지
    addComment();
})

function addComment() {
    const userid = useridInput.value.trim();
    const comment = commentInput.value.trim();

    if (!userid || !comment) return; // 빈값 방지

    // 댓글 요소 만들기
    const commentItem = document.createElement("li");
    commentItem.innerHTML = `<strong>${userid}</strong>: ${comment}`;

    // 리스트에 추가
    commentList.appendChild(commentItem);

    // 입력 초기화
    useridInput.value = "";
    commentInput.value = "";
}