# == Schema Information
#
# Table name: businesses
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  owner_id   :integer
#  created_at :datetime
#  updated_at :datetime
#  photo_url  :string
#  location   :string
#  latitude   :float
#  longitude  :float
#

class Business < ActiveRecord::Base

validates :name, presence: true

belongs_to :owner, class_name: "User"
has_many :reviews
has_many :openings

end
