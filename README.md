# Lunchin'

[Heroku link][heroku]

[heroku]:http://lunchin.herokuapp.com

## Minimum Viable Product
Lunchin' is a Yelp clone optimized for food trucks.

Users can
- [ ] See what food trucks are near them
- [ ] Search
- [ ] Create accounts
- [ ] Log in
- [ ] Give ratings/reviews
- [ ] Read reviews

Business Owners can
- [ ] Update their location
- [ ] Post their schedule


## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Users/Auth (~1 day)

### Phase 2: Businesses (~2 days)
Add API routes to serve business listing data as JSON.
Create Backbone models/collections/views.
Add seed Business data.
Users should be able to see listings whether signed in or not.

### Phase 3: Search (~1 days)
Add a search bar.
Search creates Backbone collections of matching business listings.
Create backbone views for listings on the search results page

### Phase 4: Reviews (~2 days)
Create a form for adding a review.
Add API routes to serve review data as JSON
Create view models/collections/views.
Add review data to business listing JSON.
Trying to write a review redirects to sign-in form if not signed-in

### Phase 5: Openings (~2 days)
Users with business accounts can create openings
Make form for creating an opening
Make a page to show openings for a business
Add openings to business show page

### Bonus Features (TBD)
- [ ] Search by time/day (See what will be around tomorrow at lunch)
- [ ] Search filters
- [ ] Users upload photos
- [ ] "Like/Funny/Useful" reviews
