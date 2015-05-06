json.array! @businesses do |business|
  json.id business.id
  json.name business.name
  json.photo_url business.photo_url
  json.location business.location
  json.latitude business.latitude
  json.longitude business.longitude
  json.distance business.distance.round(1)
  json.average_rating ((business.reviews.average(:rating).to_f * 2).round) / 2.0
end
