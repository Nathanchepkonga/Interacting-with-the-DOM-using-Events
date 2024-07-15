document.addEventListener('DOMContentLoaded', function() {
    // Timer incrementation
    let timerValue = 0;
    const timerElement = document.getElementById('timer');

    setInterval(function() {
        timerValue++;
        timerElement.textContent = timerValue;
    }, 1000);

    // Counter increment and decrement
    let counterValue = 0;
    const counterElement = document.getElementById('counter');
    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');

    plusButton.addEventListener('click', function() {
        counterValue++;
        counterElement.textContent = counterValue;
    });

    minusButton.addEventListener('click', function() {
        counterValue--;
        counterElement.textContent = counterValue;
    });

    // "Like" button functionality
    const likeButton = document.getElementById('like');
    const likesList = document.getElementById('likes');
    const likeCounts = {};

    likeButton.addEventListener('click', function() {
        if (!likeCounts[counterValue]) {
            likeCounts[counterValue] = 1;
        } else {
            likeCounts[counterValue]++;
        }

        const listItem = document.createElement('li');
        listItem.textContent = `${counterValue} has been liked ${likeCounts[counterValue]} times`;
        likesList.appendChild(listItem);
    });

    // Pause and resume functionality
    const pauseButton = document.getElementById('pause');
    const resumeButton = document.getElementById('resume');
    const buttons = document.querySelectorAll('button:not(#pause):not(#resume)');

    pauseButton.addEventListener('click', function() {
        clearInterval(timerInterval);
        buttons.forEach(button => {
            button.disabled = true;
        });
        pauseButton.textContent = 'Resume';
    });

    resumeButton.addEventListener('click', function() {
        timerInterval = setInterval(function() {
            timerValue++;
            timerElement.textContent = timerValue;
        }, 1000);

        buttons.forEach(button => {
            button.disabled = false;
        });
        pauseButton.textContent = 'Pause';
    });

    // Comments functionality
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentsList = document.getElementById('comments');

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const commentText = commentInput.value.trim();

        if (commentText !== '') {
            const commentItem = document.createElement('li');
            commentItem.textContent = commentText;
            commentsList.appendChild(commentItem);
            commentInput.value = '';
        }
    });
});
