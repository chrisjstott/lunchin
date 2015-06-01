json.array! @openings do |opening|
  json.id opening.id
  json.start_time opening.start_time
  json.end_time opening.end_time
  json.location opening.location
  json.latitude opening.latitude
  json.longitude opening.longitude
  json.distance opening.distance.round(1)
  json.business do
    json.id opening.business.id
    json.name opening.business.name
    json.photo_url opening.business.photo_url
    json.average_rating ((opening.business.reviews.average(:rating).to_f * 2).round) / 2.0
  end
end