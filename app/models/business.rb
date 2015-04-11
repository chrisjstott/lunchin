# == Schema Information
#
# Table name: businesses
#
#  id         :integer          not null, primary key
#  name       :string(255)      not null
#  owner_id   :integer
#  created_at :datetime
#  updated_at :datetime
#  photo_url  :string(255)
#  location   :string(255)
#  latitude   :float
#  longitude  :float
#

class Business < ActiveRecord::Base

validates :name, :location, presence: true

belongs_to :owner, class_name: "User"

geocoded_by :location
after_validation :geocode

end
