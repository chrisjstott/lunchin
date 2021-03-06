# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  location        :string           not null
#  photo_url       :string
#  created_at      :datetime
#  updated_at      :datetime
#

class User < ActiveRecord::Base

  after_initialize :ensure_session_token

  validates :first_name, :last_name, :location, :password_digest, presence: true
  validates :email, :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :zip_code, length: { is: 5, allow_nil: true, message: "is invalid" }

  has_many :businesses, foreign_key: :owner_id
  has_many :reviews, foreign_key: :author_id

  attr_reader :password, :zip_code

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def zip_code=(zip_code)
    @zip_code = zip_code
    self.location = zip_code.to_region
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
