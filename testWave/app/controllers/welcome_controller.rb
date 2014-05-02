class WelcomeController < ApplicationController
  def show
  	@photo = PostAttachment.all
  	@posts = Post.all
  end
end
