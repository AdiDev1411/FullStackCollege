const repCount = document.getElementById('repCount');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

let count = 0;

// Fetch count from server
async function fetchCount() {
    try {
        const res = await fetch('/api/count');
        const data = await res.json();
        if (typeof data.count === 'number') {
            count = data.count;
            repCount.textContent = count;
        }
    } catch (e) {
        repCount.textContent = 'Err';
    }
}

// Update count on server
async function updateCount(newCount) {
    try {
        await fetch('/api/count', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ count: newCount })
        });
    } catch (e) { }
}

incrementBtn.addEventListener('click', async () => {
    count++;
    repCount.textContent = count;
    await updateCount(count);
});

decrementBtn.addEventListener('click', async () => {
    if (count > 0) count--;
    repCount.textContent = count;
    await updateCount(count);
});

resetBtn.addEventListener('click', async () => {
    count = 0;
    repCount.textContent = count;
    await updateCount(count);
});

// Initial load
fetchCount();
