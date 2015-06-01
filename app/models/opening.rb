# == Schema Information
#
# Table name: openings
#
#  id          :integer          not null, primary key
#  start_time  :datetime         not null
#  end_time    :datetime         not null
#  location    :string
#  latitude    :float
#  longitude   :float
#  business_id :integer          not null
#

class Opening < ActiveRecord::Base
  validates :start_time, :end_time, :location, :business_id, presence: true
  validate :end_time_is_after_start_time
  
  belongs_to :business
  
  geocoded_by :location
  after_validation :geocode
  
  def end_time_is_after_start_time
    if end_time < start_time
      errors.add(:end_time, "must be after start time")
    end
  end
  
end
