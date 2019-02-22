# JS Pokemon Search Assignment

![pikachu](https://media.giphy.com/media/uLnPIWsqIz2aA/giphy.gif)

## Objectives

- DOM Manipulation
- Events and Event Handlers
- Callbacks
- Fetch


---

Hello, your assignment today is to re-create the functionality of our
[Pokemon search engine](https://learn-co-curriculum.github.io/js-pokemon-search-practice-assignment/).

p.s. Don't forget to include the ability to toggle the card image and reset the card image upon submission of a new
search.

---

## Instructions

- We're building out a search feature in our application (no backend persistence).

- A user should be able to search for a Pokemon and flip that Pokemon card to see its alternate sprite.

- The file `db.json` is your server. Start your server by doing the following in your terminal:
  - `$ npm install -g json-server`
  - `$ json-server --watch db.json`

---

### Deliverables:

1.  Implement a filter functionality for your Pokemon list.
2.  Implement a flip functionality on each Pokemon.
3.  Your search should include pokemon whose names are **not** exact matches
4.  Add a way to show users details for a particular pokemon: moves, abilities, etc.

---

### Sample Markup:

Each Pokemon card might look something like this in HTML:

```html
<div class="pokemon-card">
  <div class="pokemon-frame">
    <h1 class="center-text">charizard</h1>
    <div class="pokemon-image">
      <img data-id="7" data-action="flip" class="toggle-sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png">
    </div>
  </div>
</div>
```

Take a look at `/style.css` if you're curious about how this app is styled. Applying the classes appropriately from the snippet above should style your Pokemon cards.

---

![](https://media.giphy.com/media/HZpCCbcWc0a3u/giphy.gif)
