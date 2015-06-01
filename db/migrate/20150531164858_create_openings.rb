class CreateOpenings < ActiveRecord::Migration
  def change
    create_table :openings do |t|
      t.datetime  :start_time,  null: false
      t.datetime  :end_time,    null: false
      t.string    :location
      t.float     :latitude
      t.float     :longitude
      t.integer   :business_id, null: false
    end
    
    add_index :openings, :start_time
    add_index :openings, :end_time
    add_index :openings, :business_id
  end
end
