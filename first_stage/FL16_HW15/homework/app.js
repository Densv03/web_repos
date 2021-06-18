const root = document.getElementById('root');
let tweet_add = document.querySelector('.addTweet'),
    el = document.getElementById('modifyItem'),
    header = document.getElementById('modifyItemHeader');

function print_storage() {
    let ul = document.getElementById('list');
    ul.textContent = '';
    for (let i = 1; i <= localStorage.length; ++i) {
        let temp_li = document.createElement('li');
        temp_li.textContent = localStorage.getItem(i);
        ul.appendChild(temp_li);
    }
}
el.classList.remove('hidden');
location.hash = '';
tweet_add.addEventListener('click', () => {
    document.querySelector('.addTweet').classList.add('hidden');
    location.hash = 'add';
    header.classList.add('hidden');
    document.querySelector('#list').classList.add('hidden');
    let cancel_btn = document.getElementById('cancelModification'),
        save_btn = document.getElementById('saveModifiedItem'),
        inp = document.getElementById('modifyItemInput'),
        temp = '';
    inp.addEventListener('input', event => {
        cancel_btn.addEventListener('click', () => {
            event.target.value = '';
            location.hash = '';
            header.classList.remove('hidden');
            document.querySelector('.addTweet').classList.remove('hidden');
            document.querySelector('#list').classList.remove('hidden');
            print_storage()
        });
        temp = event.target.value;
    });
    save_btn.addEventListener('click', () => {
        localStorage.setItem(parseInt(localStorage.length + 1).toString(), temp);
        console.log(localStorage);
        location.hash = '';
        header.classList.remove('hidden');
        document.querySelector('#list').classList.remove('hidden');
        document.querySelector('.addTweet').classList.remove('hidden');
        print_storage();
    });
});