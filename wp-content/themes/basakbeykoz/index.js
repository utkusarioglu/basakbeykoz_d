fetch("/wp-json/wp/v2/pages/3")
    .then((data) => data.json())
    .then((json) => {
        document.body.innerHTML = json.content.rendered
        console.log(json);
    });