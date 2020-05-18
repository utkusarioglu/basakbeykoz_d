fetch("/wp-json/wp/v2/posts")
    .then((data) => data.json())
    .then((json) => {
        document.body.innerHTML = JSON.stringify(json)
    });