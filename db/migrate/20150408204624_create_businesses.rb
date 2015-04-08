class CreateBusinesses < ActiveRecord::Migration
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.integer :owner_id

      t.timestamps
    end

    add_index :businesses, [:name, :owner_id]
  end
end
