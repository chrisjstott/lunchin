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

class Review < ActiveRecord::Base

  validates :rating, :body, :author_id, :business_id, presence: true

  belongs_to :author, class_name: 'User'
  belongs_to :business

  
end
