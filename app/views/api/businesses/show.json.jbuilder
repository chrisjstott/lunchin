json.(@business, :id, :name, :photo_url)
json.average_rating ((@average_rating.to_f * 2).round) / 2.0
json.reviews @business.reviews, :rating, :body, :author
json.upcoming_openings @business.openings.where('end_time > ?', Time.now), :start_time, :end_time, :location