class AddPhotoUrlAndLocationToBusinesses < ActiveRecord::Migration
  def change
    add_column :businesses, :photo_url, :string
    add_column :businesses, :location, :string
  end
end
