json.(@business, :id, :name, :owner_id, :location)
json.average_rating ((@average_rating.to_f * 2).round) / 2.0
json.reviews @business.reviews, :rating, :body, :author
json.openings @business.openings, :start_time, :end_time, :location