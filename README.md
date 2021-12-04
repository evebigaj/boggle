# About

If you want to play the wordgame [Boggle](https://en.wikipedia.org/wiki/Boggle) online, you have two options: a mobile game by Zynga, which will turn you into an addicted zombie, or the web game Serpentine, which will bombard you with sounds every time you do something award-worthy, like "type a four-letter word." So I built a minimalist version of the game. No sounds. No badges. Not even a "submit" button. It *does* have bright colors, but, well... I like bright colors.

See (and play) it [here](https://minimalist-boggle.netlify.app/). 

So how does it work? I give you a 4x4 grid of letters. You enter a word you see in the grid, like so:


![image](https://user-images.githubusercontent.com/89229822/144686709-c9345cdb-1753-4876-9396-42176190447c.png)

If all goes well, it shows up on the sidebar and increases your score. All *should* go well, if the word is in fact on the board, at least 3 letters long, and in the Merriam-Webster collegiate dictionary. Oh, and if you hadn't already entered it before. 

<img src="https://user-images.githubusercontent.com/89229822/144685956-742dcea7-9b44-459b-aad7-71a1f745a9b1.jpg" alt="drawing" width="400"/>


## Technologies

Given the way the board is built up of tile components, and the way that, e.g., the entered word needs to be passed on to the found word list and the score counter, React was an obvious choice. To check whether found words are in the dictionary, I used the [Merriam-Webster API](https://dictionaryapi.com/products/api-collegiate-dictionary). 

## Limitations
* This is definitely not a phone app. I didn't even bother with responsive design because the gameplay on a phone would suck anyway.
* The Merriam-Webster dictionary is quite permissible. In particular, some of the three-letter words it accepts might actually be acronyms. 
* Without a label or "submit" button, the input box is a bit low on affordances. I opted for minimalism, but I may add an unobtrusive label.
* Conversely, the "reset" button might not be worth it. It's just a page refresh in disguise. 
* Not all error messages are passed on to the user.

## Possible Future Features
* "Rotate" feature
* Timer
* Hints, or listing all words at timeout
* Use the letters from original board game, instead of random subsets of the alphabet
* "About" page with rules
* Make it multiplayer
