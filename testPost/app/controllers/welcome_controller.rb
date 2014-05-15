class WelcomeController < ApplicationController
  def index
  	 @posts = Post.all
  end

  def like 
  	@id = params[:id]
  	@post = Post.find(params[:id])
  	@post.liked_by current_user
  	@score = @post.votes_for.size
  	redirect_to(:back)

  end

    def dislike 
  	@id = params[:id]
  	@post = Post.find(params[:id])
  	@post.unliked_by current_user
  	@score = @post.votes_for.size
  	redirect_to(:back)

  end

  def photo
    @posts = Post.paginate(:page => params[:page])
    @users = User.all

    if current_user
      @signin = true
      @voted = current_user.find_voted_items
    else
      @signin = false
    end
  end
end
