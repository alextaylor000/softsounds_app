class Song < ActiveRecord::Base

  has_many :favorites, dependent: :destroy
  has_many :user_favorites, through: :favorites, source: :user
end
