# == Schema Information
#
# Table name: businesses
#
#  id         :integer          not null, primary key
#  name       :string(255)      not null
#  owner_id   :integer
#  created_at :datetime
#  updated_at :datetime
#  photo_url  :string(255)
#  location   :string(255)
#

require 'test_helper'

class BusinessTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
