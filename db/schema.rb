# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150603004526) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "businesses", force: :cascade do |t|
    t.string   "name",       null: false
    t.integer  "owner_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "photo_url"
  end

  add_index "businesses", ["name"], name: "index_businesses_on_name", using: :btree
  add_index "businesses", ["owner_id"], name: "index_businesses_on_owner_id", using: :btree

  create_table "openings", force: :cascade do |t|
    t.datetime "start_time",  null: false
    t.datetime "end_time",    null: false
    t.string   "location"
    t.float    "latitude"
    t.float    "longitude"
    t.integer  "business_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "openings", ["business_id"], name: "index_openings_on_business_id", using: :btree
  add_index "openings", ["end_time"], name: "index_openings_on_end_time", using: :btree
  add_index "openings", ["start_time"], name: "index_openings_on_start_time", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.integer  "rating",      null: false
    t.string   "body",        null: false
    t.integer  "author_id",   null: false
    t.integer  "business_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "reviews", ["author_id"], name: "index_reviews_on_author_id", using: :btree
  add_index "reviews", ["business_id", "author_id"], name: "index_reviews_on_business_id_and_author_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "first_name",      null: false
    t.string   "last_name",       null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "location",        null: false
    t.string   "photo_url"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree

end
