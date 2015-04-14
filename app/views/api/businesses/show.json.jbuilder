json.(@business, :id, :name, :owner_id, :location)

json.reviews @business.reviews, :rating, :body, :author_id
