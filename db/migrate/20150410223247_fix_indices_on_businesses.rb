class FixIndicesOnBusinesses < ActiveRecord::Migration
  def change
    remove_index :businesses, [:name, :owner_id]
    add_index :businesses, :name
    add_index :businesses, :owner_id
  end
end
