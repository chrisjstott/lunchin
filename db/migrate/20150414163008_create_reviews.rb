class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :rating,      null: false
      t.string  :body,        null: false
      t.integer :author_id,   null: false
      t.integer :business_id, null: false

      t.timestamps
    end

    add_index :reviews, :author_id
    add_index :reviews, [:business_id, :author_id]
  end
end
