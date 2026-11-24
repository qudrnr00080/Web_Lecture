const shelltext = [
    "언젠가는.",
    "가만히 있어.",
    "그것도 안 돼.",
    "그럼.",
    "안 돼.",
    "글쎄, 잘 모르겠는데."
];

const pullBtn = document.getElementById('pull');
const resultBox = document.getElementById('shellresult');
const questionInput = document.querySelector('input[type="text"]');

pullBtn.addEventListener('click', function(e) {
    e.preventDefault();

    if (questionInput.value.trim() === "") {
        return resultBox.value = "다시 한 번 물어봐.";
    }

    const random = Math.floor(Math.random() * shelltext.length);
    resultBox.value = shelltext[random];
    questionInput.value = "";
});