class AddTimestampsToOpeningsAndRemoveOpeningInfoFromBusinesses < ActiveRecord::Migration
  def change
    add_column(:openings, :created_at, :datetime)
    add_column(:openings, :updated_at, :datetime)
    
    remove_column(:businesses, :location)
    remove_column(:businesses, :latitude)
    remove_column(:businesses, :longitude)
  end
end
