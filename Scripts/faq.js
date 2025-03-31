document.addEventListener("DOMContentLoaded", function () {
  fetch("XML/Ronaldo-FAQ.xml")
    .then(response => response.text())
    .then(data => {
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(data, "text/xml");
      let faqs = xmlDoc.getElementsByTagName("faq");
      let faqContainer = document.getElementById("faq-container");

      for (let faq of faqs) {
        let questionText = faq.getElementsByTagName("question")[0].textContent;
        let answerHTML = faq.getElementsByTagName("answer")[0].innerHTML;

        let faqDiv = document.createElement("div");
        faqDiv.classList.add("faq");

        let questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.textContent = questionText;

        let answerDiv = document.createElement("div");
        answerDiv.classList.add("answer");
        answerDiv.innerHTML = answerHTML;

        faqDiv.appendChild(questionDiv);
        faqDiv.appendChild(answerDiv);
        faqContainer.appendChild(faqDiv);

        questionDiv.addEventListener("click", function () {
          if (answerDiv.classList.contains("active")) {
            answerDiv.classList.remove("active");
          } else {
            document.querySelectorAll(".answer").forEach(ans => ans.classList.remove("active"));
            answerDiv.classList.add("active");
          }
        });
      }
    })
    .catch(error => console.error("Error loading FAQ XML:", error));
});
