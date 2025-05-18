
const editCat = (cat, breeds) => `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../content/styles/site.css">
    <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet">
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
    </header>
    <main>

     
        <form action="cats/edit-cat/${cat.id}" method="POST" class="cat-form">
            <h2>Edit Cat</h2>
            <label for="name">Cat name</label>
            <input type="text" id="name" name="name" value="${cat.name}">
            <label for="description">Description</label>
            <textarea id="description" name="description">${cat.description}</textarea>
            <label for="imageUrl">Image URL</label>
            <input name="imageUrl" type="text" id="imageUrl" value="${cat.imageUrl}">
            
            <label for="group">Breed</label>

            <select name="breed" id="group">
            ${breeds.map(br => `
                <option value="${br.breed}" ${br.breed === cat.breed ? 'selected' : ""}>
                ${br.breed}
                </option>`).join("\n")
            }
            </select>
             <input type="hidden" name="id" value="${cat.id}">
            <button>Edit Cat</button>
        </form>
    </main>
</body>

</html>`


export default editCat;