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

require 'test_helper'

class OpeningTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
