document.addEventListener("DOMContentLoaded", function () {
    const giftNavSelect = document.getElementById("giftNavSelect");

    giftNavSelect.addEventListener("change", function () {
        const targetId = this.value;
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // スムーズスクロール
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const faqQuestions = document.querySelectorAll(".gift-collection__faq__row__question");

    faqQuestions.forEach((question) => {
        question.addEventListener("click", function () {
            const answer = this.nextElementSibling;

            // 開閉をトグル
            answer.classList.toggle("open");
        });
    });
});

