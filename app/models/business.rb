# == Schema Information
#
# Table name: businesses
#
#  id         :integer          not null, primary key
#  name       :string(255)      not null
#  owner_id   :integer
#  created_at :datetime
#  updated_at :datetime
#

class Business < ActiveRecord::Base

validates :name, presence: true

belongs_to :owner, class_name: "User"

end
