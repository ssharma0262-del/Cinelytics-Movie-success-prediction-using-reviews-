# Cinelytix — Movie Success Prediction Using Reviews

HTML + CSS + JavaScript project.

## Updated behavior
- Website opens on a complete movie library, not on one pre-selected movie.
- Movies are grouped language-wise and then genre-wise.
- Search works across movie title, language and genre.
- Selecting a movie opens its poster and metadata, then the review form, review cards, sentiment counts, charts, success prediction and explainability together on the same analysis page.
- Sentiment is always shown as an exact count such as `27 / 36 (75%)`.
- A posted review is classified and immediately updates the dashboard.
- Movies with placeholder posters were removed from the catalog.
- Kannada posters for Kantara and K.G.F: Chapter 2 use official Hombale Films poster assets; 777 Charlie uses the Paramvah Studios poster asset.

## Run
Open `index.html` with Live Server in VS Code.
Internet is required for remote poster assets.

## Important
This is a frontend ML prototype. The prediction is simulated in JavaScript from review sentiment, rating and review volume; it is not a trained production ML model.


## Dataset behavior in this version
- Each movie has a different analyzed-review sample size; Positive + Neutral + Negative always equals Analyzed Reviews.
- Movies carry a separate commercial/overall verdict label: Successful, Average, or Unsuccessful.
- The verdict is a ground-truth/reference label based on documented public performance where available; the displayed Success Probability is the project's model-style score and is not presented as a box-office fact.
- Public ratings/vote counts and analyzed written-review sentiment are kept separate.
- The landing page shows a full poster shelf for every language before any movie is selected.
- Poster loading first uses direct movie-poster assets, then attempts a film-page poster-art fallback; actor/actress portrait filenames are rejected by the resolver.

## PBL concept integration
- ES: user interaction, requirements-oriented workflow, review-based decision support and explainability.
- ASTMA: review/rating data collection, preprocessing, sentiment classification, descriptive analysis, visualization and feature-based prediction.
- ITPM: project identification and scope, planning, market/demand consideration, resource/cost planning, risk/monitoring, testing, closure and maintenance.
- The Concepts section in the UI maps these concepts to the actual Cinelytix workflow.


## UI Enhancements
- Dynamic movie/language/genre totals on the landing page.
- Successful/Average/Unsuccessful quick filters.
- Clear distinction between public ratings/votes and analyzed written reviews.
- Project highlights section for presentation/viva.
- Search also recognizes outcome labels.
- Existing ES + ASTMA + ITPM concept integration is preserved.
