# Pokémon Card Project - README
🚀 Project Overview
Welcome to the Pokémon Card Project! This web application displays dynamic Pokémon cards featuring the first 100 Pokémon. It allows users to filter Pokémon by type, view their stats (HP, attack, defense), and explore their beautiful artwork. The project is built with HTML, CSS, and JavaScript, focusing on DOM manipulation, data filtering, and responsive design.

🖼️ Features
Pokémon Cards: Displays cards with Pokémon name, image, ID, types, HP, attack, and defense stats.
Filter System: Filter Pokémon by their types (Fire, Water, Grass, etc.) using buttons.
Responsive Design: Works smoothly on both desktop and mobile devices.
Dynamic Rendering: Cards are generated dynamically from a dataset using JavaScript.
📦 Project Structure
bash
Copy
Edit
pokemon-card-project/
├── index.html              # Main HTML structure
├── styles.css              # CSS for layout and design
├── script.js               # JavaScript for functionality
└── pokemonData_correct_types.js  # Dataset of the first 100 Pokémon with accurate types
⚡ Getting Started
Clone the Repository:

bash
Copy
Edit
git clone https://github.com/your-username/pokemon-card-project.git
Open the Project: Simply open index.html in your favorite browser. No build tools required!

📊 Technologies Used
HTML: For structuring the Pokémon cards and filter buttons.
CSS: For styling the cards and making the design responsive.
JavaScript: For dynamic rendering, filtering, and interactivity.
🎮 How to Use
View All Pokémon:
By default, all 100 Pokémon are displayed.

Filter by Type:
Click on the type buttons (e.g., Fire, Water, Grass) to filter Pokémon based on their elemental types.

Clear Filter:
Click the "All" button to reset the filter and display all Pokémon again.

🗂️ Dataset Information
The dataset (pokemonData_correct_types.js) contains the following fields for each Pokémon:

javascript
Copy
Edit
{
    id: 1,
    name: "Bulbasaur",
    types: ["Grass", "Poison"],
    hp: 45,
    attack: 49,
    defense: 49,
    image: "https://img.pokemondb.net/artwork/large/bulbasaur.jpg"
}
id: National Pokédex ID
name: Pokémon’s name
types: Pokémon’s elemental type(s)
hp, attack, defense: Base stats
image: Artwork URL
🐛 Troubleshooting & Debugging
If Pokémon cards aren’t displaying:

Check the console (F12 → Console tab) for errors.
Ensure the dataset file (pokemonData_correct_types.js) is correctly linked in index.html.
Verify the type filter matches the dataset (e.g., "Fire" instead of "fire").
💡 Future Enhancements
Search Bar: Search Pokémon by name.
Sorting: Sort Pokémon by stats (HP, attack, defense).
Hover Effects: Display more detailed stats on hover.
Dark Mode: Add a toggle for dark mode styling.
🤝 Contributing
Fork the repository
Create a new branch: git checkout -b feature-name
Commit changes: git commit -m "Add feature"
Push to the branch: git push origin feature-name
Open a pull request
⚡ Acknowledgments
Pokémon Database for artwork and data references.
Pokémon franchise for the nostalgia and inspiration.
Built with love and a sprinkle of JavaScript magic. ✨
📜 License
This project is for educational purposes. Pokémon images and data belong to The Pokémon Company.
