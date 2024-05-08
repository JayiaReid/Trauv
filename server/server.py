from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, origins='*')

@app.route("/api/categories", methods=['GET'])
def categories():
    WineImg = 'C:/Users/jayia/OneDrive/Documents/Programming/FullStack Development/Trauv/client/src/images/Wine.jpg'
    CocktailsImg = 'C:/Users/jayia/OneDrive/Documents/Programming/FullStack Development/Trauv/client/src/images/cocktails.jpg'
    AppetizerImg = 'C:/Users/jayia/OneDrive/Documents/Programming/FullStack Development/Trauv/client/src/images/Appetizer.jpeg'
    
    return jsonify(
        {
            "categories": [
                {"name": "Wine", "imgurl": WineImg},
                {"name": "Cocktail", "imgurl": CocktailsImg},
                {"name": "Appetizer", "imgurl":AppetizerImg},
            ]
        }
    )
    

@app.route("/api/items", methods=['GET'])
def items():
    return jsonify(
        {
            "Items": [
                {"name": "Chapel Hill Shirax", "category":"Wine", "price": "75", "description": "Refined"},
                {"name": "Malibee", "category":"Wine", "price": "56", "description": "Sumptuous"},
                {"name": "Luxe Cuvee ", "category":"Wine", "price": "109", "description": "Lavishly Sweet"},
                {"name": "Vania Cru Ale", "category":"Wine", "price": " 89", "description": "Distinctive"},
                {"name": "Vin des Rois", "category":"Wine", "price": "157", "description": "Aristocratic"},
                {"name": "Ger Mirage", "category":"Cocktail", "price": " 15", "description": "Simple"},
                {"name": "O'Pul Sour", "category":"Cocktail", "price": " 34", "description": "Harmonic"},
                {"name": "Nebulouse", "category":"Cocktail", "price": " 21", "description": "Nuanced"},
                {"name": "Elix'Ryale", "category":"Cocktail", "price": " 67", "description": "Subtle"},
                {"name": "Kir Cassi", "category":"Cocktail", "price": " 43", "description": "Sophisticated"},
                {"name": "Noshes a la Mode", "category":"Appetizer", "price": " 25", "description": "Regal"},
                {"name": "C'est Savoureux", "category":"Appetizer", "price": " 23", "description": "Alluring"},
                {"name": "Cielo Exquis", "category":"Appetizer", "price": " 19", "description": "Flavourful"},
                {"name": "Quisine Etoilee", "category":"Appetizer", "price": " 30", "description": "Exotic"},
                {"name": "Delicat Ensemble", "category":"Appetizer", "price": " 45", "description": "Palatable"}
            ]   
        }
    )
    
if __name__ == "__main__":
    app.run(debug=True, port=8080)