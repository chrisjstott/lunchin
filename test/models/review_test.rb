# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  rating      :integer          not null
#  body        :string           not null
#  author_id   :integer          not null
#  business_id :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
