Tested on iOS

Structure: 

src/components: React Components that return HTML 
src/redux: Redux slices and store
src/routes: Routes for navigation
src/styles: Common usable styles
src/utils: Common usable logic
src/views: Views that can be navigated to


Instructions: 

Add .env to connect to the api.kvikmyndir.is
#format:

USERNAME =
PASSWORD = 


Core functionality:

Cinemas screen: App opens at cinema screen, also Anywhere -> click "Cinemas" on bottom bar

Cinema detail screen: Cinemas screen -> click cinema card
    *detailed information:  Cinema detail screen -> click "Info"

Movie screen: Cinema detail screen -> click movie card
    *Plot: Movie screen -> click "Plot"
    *Genres: Movie screen -> click "Genres"
    *Showtimes: Movie screen -> click "Showtimes"

Upcoming movie screen: Anywhere -> click "Movies" on bottom bar -> click "Upcoming"
    *trailer: Upcoming movie screen -> click "Watch Trailer"


Extra functionality: 

#Clickable website link
Cinemas screen
    *Clickable website link

#Display currently showing movies
Showing Movies screen: Anywhere -> click "Movies" on bottom bar

#Filter movies and upcoming movies by genres
Movies screen 
    *Click filter icon -> select genres
Upcoming movies screen 
    *Click filter icon -> select genres

#Search movies and upcoming movies
Showing Movies screen 
    *Click search icon -> type click searchbar -> type in search
Upcoming movies screen 
    *Click search icon -> type click searchbar -> type in search

#Detailed screen for currently showing movies
Movie screen: Movies screen -> click on movies card
    *Plot: Movie screen -> click "Plot"
    *Genres: Movie screen -> click "Genres"

#Trailer for showing movies
Movie screen
    *Click "Watch Trailer"

