    var question = document.getElementById("question")
    var cor = document.getElementById("cor")
    var wrong = document.getElementById("wrong")
    var start = document.getElementById("start")
    var home = document.getElementById("goHome")

    const showQuestion = () => {
        question.style.display="flex";
        start.style.display="none";
    }
    const showCor = () => {
        question.style.display="none";
        cor.style.display="flex";
    }
    const showWrong = () => {
        question.style.display="none";
        wrong.style.display="flex";
    }
    const retry = () => {
        question.style.display="flex";
        wrong.style.display="none";
    }
    const goHome = () => {
        cor.style.display="none";
        start.style.display="flex";
    }
