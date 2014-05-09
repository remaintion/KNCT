class Post < ActiveRecord::Base
	belongs_to :user
	 self.per_page = 1
	mount_uploader :photo, PhotoUploader
	acts_as_votable
end
