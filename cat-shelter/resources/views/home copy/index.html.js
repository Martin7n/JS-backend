

export const indexContent = (cats) => `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet">
    <link rel="stylesheet" href="../../content/styles/site.css">
    <link rel="shortcut icon" href="https://img.icons8.com/ios-filled/50/000000/cat-footprint.png" type="image/png">
    <title>Cat Shelter</title>
</head>

<body>
    <header>
        <nav>
            <ul class="navigation">
                <li><a href="/">Home Page</a></li>
                <li><a href="/cats/add-breed">Add Breed</a></li>
                <li><a href="/cats/add-cat">Add Cat</a></li>
            </ul>
        </nav>
        <h1>Cat Shelter</h1>
        <form action="/search">
            <input type="text">
            <button type="button">Search</button>
        </form>
    </header>

    <main>

            
        <section class="cats">
                <section class="cats">
            <ul>
                ${cats.map(cat => `
                    <li>
                        <img src="${cat.imageUrl}" alt="${cat.name}">
                        <h3>${cat.name}</h3>
                        <p><span>Breed: </span>${cat.breed}</p>
                        <p><span>Description: </span>${cat.description}</p>
                        <ul class="buttons">
                            <li class="btn edit"><a href="edit/${cat.id}">Change Info</a></li>
                            <br>
                            <li class="btn delete"><a href="delete/${cat.id}">New Home</a></li>
                        </ul>
                    </li>
                `).join('\n')}
            </ul>
        </section>
        </section>
    </main>

</body>

</html>`;